class AnnoncesList extends HTMLElement {
  connectedCallback() {
   console.warn('je suis inséré ! ')
  }
}
customElements.define("annonces-list", AnnoncesList)