import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./shopping-card";

@customElement("shopping-list")
export class ShoppingList extends LitElement {
  @property({ type: Array })
  items = [] as any[];

  sortAlphabetically() {
    this.items.sort((a, b) => a.name.localeCompare(b.name));
    this.requestUpdate();
  }

  renderShopping(item: any) {
    return html`
      <div class="grid-item">
        <a href="sample_ingredient.html">
          <recipe-card class="shopping-card">
            <img slot="ingredientImage" src="${item.image}" />
            <div class="info">
              <h3>
                <input type="checkbox" id="ingredientY" /><span
                  slot="ingredientName"
                >
                  ${item.name}</span
                >
              </h3>
              <a href="sample_supermarket.html" class="italics">
                <svg
                  class="icon"
                  style="width: 1em; height: 1em; vertical-align: top"
                >
                  <use href="/icons/shopping.svg#icon-cart" />
                </svg>
                <slot name="supermarket">${item.supermarket}</slot>
              </a>
            </div>
          </recipe-card>
        </a>
      </div>
    `;
  }

  render() {
    return html`
      <section>
        <div class="sort">
          <button @click="${this.sortAlphabetically}">Sort by Name</button>
        </div>
        <div class="grid-container">
          ${this.items.map((item) => this.renderShopping(item))}
        </div>
      </section>

      <section></section>
    `;
  }

  static styles = css`
    a {
      color: var(--accent-color);
    }

    a:link,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
    }

    .shopping-card {
      display: block;
      height: 100%;
      width: auto;
      //   border: 1px solid #f0f0f0;
      border-radius: 8px;
      padding: 20px;
      border: 3px solid var(--color-accent);
      text-align: center;
      color: var(--white-black);
      margin: 4px 2px;
      cursor: pointer;
      background-color: var(--card-background);
    }

    img {
      object-fit: cover;
      max-width: 20em;
      height: 15em;
      border-radius: 8px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 10px;
      grid-gap: 2rem;
      padding: 1rem 4rem;
      overflow: wrap;
    }

    .grid-item {
      text-align: center;
      max-width: 100%;
    }
    .grid-item > a {
      display: block;
      margin-top: 1rem;
      font-weight: 600;
      font-size: 20px;
    }
    .sort {
      display: flex;
      justify-content: flex-end;
      margin: 0em 4rem;
    }
    .sort > button {
      font-size: 1em;
      padding: 0.25em 1em;
      border: 2px solid var(--white-black);
      border-radius: 3px;
      background-color: var(--background-color);
      color: var(--white-black);
      cursor: pointer;
    }
    .sort > button:hover {
      background-color: var(--card-background);
    }
    .info {
      display: block;
      text-align: center;
    }
  `;
}
