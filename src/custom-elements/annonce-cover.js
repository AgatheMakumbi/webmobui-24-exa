class AnnonceCover extends HTMLElement {
  static observedAttributes = ['image_url', 'title']

  render() {
    this.innerHTML = `
            <div class="annonces__element__buttons">
              <!-- le plus simple est d'utiliser .starred-button comme querySelector pour le sélectionner -->
              <button type="button" class="icon-button starred-button">
                <span class="material-icons">star_outlined</span> <!-- utiliser "star" pour la version pleine -->
              </button>
            </div>
            <a href="#">
              <img class="annonces__element__image" src="${this.getAttribute('image_url')}" />
              <div class="annonces__element__title">${this.getAttribute('title')}</div>
              <div class="annonces__element__price">${this.getAttribute('price')}-</div>
            </a>
    `
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }
}
customElements.define("annonce-cover", AnnonceCover)