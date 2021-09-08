var rules = document.getElementById('rules')

rules.addEventListener('click', (event) => {
  alert("REGLES DU JEU:\n\nLes joueurs vont pouvoir lancer le dé plusieurs fois durant leur tour de jeu. A chaque lancer, si le résultat du dé est compris entre 2 et 6, il est ajouté au score courant. Si le dé affiche un score égal à 1, le score courant est perdu et c'est au tour du joueur suivant.\n\nAprès chaque lancer réussi, le joueur a le choix entre deux actions :\n\n☻ Relancer le dé afin d'augmenter son score ( bouton 'Lancer' )\n☻ Sauvegarder le score de la manche en l'ajoutant à son score total. ( bouton 'Valider' )\n\nLe joueur arrivant en premier à un total de 100 gagne la partie !")
} )