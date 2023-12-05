// Ajoute un écouteur d'événement au bouton avec l'ID 'startScraping'. Cet événement se déclenche lorsque l'utilisateur clique sur le bouton.
document.getElementById('startScraping').addEventListener('click', function() {
    // Interroge l'onglet actif dans la fenêtre courante du navigateur.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Récupère le premier onglet dans le tableau des onglets retournés, ce qui devrait être l'onglet actuellement actif.
        var currentTab = tabs[0];
        // Exécute le script de contenu 'contentScript.js' dans l'onglet actif.
        chrome.tabs.executeScript(currentTab.id, {file: 'contentScript.js'}, function(results) {
            // Vérifie s'il y a une erreur lors de l'exécution du script et affiche une alerte avec le message d'erreur si c'est le cas.
            if (chrome.runtime.lastError) {
                alert(chrome.runtime.lastError.message);
                return;
            }
            // Si le script a été exécuté avec succès, récupère le résultat, qui devrait être un tableau d'URLs.
            const urls = results[0];
            // Vérifie si le tableau d'URLs n'est pas vide.
            if (urls && urls.length) {
                // Rejoint chaque URL dans le tableau avec un saut de ligne et définit la valeur de l'élément textarea avec l'ID 'urls' à cette chaîne.
                document.getElementById('urls').value = urls.join('\n');
            }
        });
    });
});

// Ajoute un écouteur d'événement au bouton avec l'ID 'copy'. Cet événement se déclenche lorsque l'utilisateur clique sur le bouton.
document.getElementById('copy').addEventListener('click', function() {
    // Récupère l'élément textarea avec l'ID 'urls'.
    const textarea = document.getElementById('urls');
    // Sélectionne le texte à l'intérieur de l'élément textarea.
    textarea.select();
    // Exécute la commande de copie, qui copie le texte sélectionné dans le presse-papiers.
    document.execCommand('copy');
});
