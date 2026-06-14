/**
 * Search Engine for Portfolio
 * Implements weighted scoring, match highlighting, and 'Did you mean' suggestions.
 */

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (!query) {
        document.getElementById('search-subtitle').innerText = "Enter a keyword to search across the portfolio.";
        return;
    }

    const qLower = query.toLowerCase().trim();
    const queryWords = qLower.split(/\s+/).filter(w => w.length > 2);
    
    // UI elements
    const resultsContainer = document.getElementById('search-results-container');
    const resultsGrid = document.getElementById('search-results-grid');
    const noResults = document.getElementById('no-results');
    const searchSubtitle = document.getElementById('search-subtitle');
    const searchTitle = document.getElementById('search-title');

    searchTitle.innerText = `Search results for "${query}"`;
    
    // Find all searchable items
    const items = Array.from(document.querySelectorAll('.searchable-item'));
    let scoredItems = [];
    let allKeywords = new Set();

    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        const tags = (item.getAttribute('data-tags') || "").toLowerCase();
        
        // Collect tags for "Did you mean" logic
        tags.split(' ').forEach(t => { if(t.length > 3) allKeywords.add(t); });

        let score = 0;

        // Scoring rules
        // 1. Exact phrase match in tags or title (highest)
        if (tags.includes(qLower)) score += 10;
        
        // 2. Individual word matches
        queryWords.forEach(word => {
            if (tags.includes(word)) score += 5;   // Tag match
            if (text.includes(word)) score += 1;   // Content match
        });

        if (score > 0) {
            scoredItems.push({ item, score });
        } else {
            item.style.display = 'none';
            // Also hide the parent if it's a specific container
            checkParentVisibility(item);
        }
    });

    // 3. Sort by score descending
    scoredItems.sort((a, b) => b.score - a.score);

    // 4. Display & Post-process
    if (scoredItems.length > 0) {
        noResults.style.display = 'none';
        searchSubtitle.innerText = `Found ${scoredItems.length} matching items across experiences, education, and projects.`;
        
        scoredItems.forEach((entry, index) => {
            const item = entry.item;
            item.style.display = 'block'; // Show matched item
            
            // Add staggered animation delay
            item.style.animationDelay = `${(index % 5) * 0.1}s`;
            
            // Highlight matches
            highlightMatches(item, queryWords.length > 0 ? queryWords : [qLower]);
            
            // Ensure parent container is visible
            if (item.parentElement) item.parentElement.style.display = '';
        });
    } else {
        showNoResults(qLower, Array.from(allKeywords));
    }

    /**
     * Highlights search terms in text nodes only, preserving HTML structure.
     */
    function highlightMatches(root, words) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        let node;
        const nodesToReplace = [];

        while (node = walker.nextNode()) {
            if (node.parentElement.tagName === 'SCRIPT' || 
                node.parentElement.tagName === 'STYLE' ||
                node.parentElement.classList.contains('highlight-match')) continue;
            
            const content = node.nodeValue;
            if (words.some(w => content.toLowerCase().includes(w))) {
                nodesToReplace.push(node);
            }
        }

        nodesToReplace.forEach(textNode => {
            let html = textNode.nodeValue;
            words.forEach(word => {
                const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                html = html.replace(regex, '<span class="highlight-match">$1</span>');
            });

            const span = document.createElement('span');
            span.innerHTML = html;
            textNode.parentNode.replaceChild(span, textNode);
        });
    }

    /**
     * Suggests a correct keyword using Levenshtein distance
     */
    function showNoResults(query, keywords) {
        resultsContainer.style.display = 'none';
        resultsGrid.style.display = 'none';
        noResults.style.display = 'block';
        
        // Simple typo correction suggestion
        let bestMatch = null;
        let minDistance = 3; // Max tolerance for typos

        keywords.forEach(kw => {
            const dist = levenshteinDistance(query, kw);
            if (dist < minDistance) {
                minDistance = dist;
                bestMatch = kw;
            }
        });

        if (bestMatch) {
            const suggestionMsg = document.createElement('p');
            suggestionMsg.innerHTML = `Did you mean: <a href="search.html?q=${bestMatch}" style="color: var(--accent); font-weight: bold; text-decoration: underline;">${bestMatch}</a>?`;
            suggestionMsg.style.marginTop = "1rem";
            noResults.appendChild(suggestionMsg);
        }
    }

    function checkParentVisibility(item) {
        // Logic to hide empty timeline sections if needed
    }

    function levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
                else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
        return matrix[b.length][a.length];
    }
});
