import {loadAnnonces} from '../api.js';

// Récupérer le tag contenant la liste des annonces
const annoncesList = document.querySelector('.annonces');

const displayAnnonces = async()=>{
    // Vider le HTML
    annoncesList.innerHTML = '';

    // Récupérer les annonces
    const annonces = await loadAnnonces();
    //récupérer le titre de la section
    const titre = document.querySelector('#section-annonces >h4');
    titre.textContent = `Dernières annonces (${annonces.length})`;

    //afficher les annonces 
    annonces.forEach((annonce) => {
        // Créer l'élément
        const annonceItem = document.createElement('annonce-cover');
    
        // Mettre les attributs
        annonceItem.setAttribute('image_url', annonce.image_url)
        annonceItem.setAttribute('title', annonce.title)
        annonceItem.setAttribute('price', annonce.price)
        annonceItem.setAttribute('description', annonce.description)
        annonceItem.setAttribute('href', `#artists-${annonce.id}`)

    
        // Insérer dans la liste
        annoncesList.append(annonceItem);
      })
    
}
export {displayAnnonces};