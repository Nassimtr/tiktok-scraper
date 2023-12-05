
function scrapeTikTokURLs() {
    const urls = [];
    // Sélectionne tous les éléments 'a' (liens) dont l'attribut 'href' commence par "https://www.tiktok.com/@".
    const videos = document.querySelectorAll('a[href^="https://www.tiktok.com/@"]');
    // Parcourt chaque élément trouvé dans la liste 'videos'
    videos.forEach(video => {
        // Récupère la valeur de l'attribut 'href'
        const url = video.getAttribute('href');
        // Vérifie si l'URL est non nulle et qu'elle n'est pas déjà présente dans le tableau 'urls'
        if (url && !urls.includes(url)) {
            // Si ces conditions sont remplies, ajoute l'URL au tableau 'urls'
            urls.push(url);
        }
    });
    //retourne le tableau 'urls' contenant toutes les URLs uniques trouvées
    return urls;
}
// Appelle la fonction scrapeTikTokURLs pour exécuter le scraping.
scrapeTikTokURLs();
