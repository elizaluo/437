import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './recipe-card';

@customElement("item-list")
class ItemList extends LitElement {
    @property({ type: Array})
    items = [];

    sort() {
        this.items.sort((a, b) => a.name.localeCompare(b.name));
        this.requestUpdate();
    }

    renderRecipe(item) {
        return html`<a href="sample_recipe.html">
                <recipe-card class="recipe-card">
                    <img slot="recipeImage" src="${item.image}"/>
                    <span slot="recipeName">${item.name}</span> 
                    <span slot="mealType">${item.mealType}</span>
                </recipe-card>
            </a> `
    }

    render() {
        return html`
        <section>
            <button @click="${this.sort}">Sort</button>
            <div class="recipes">
            ${this.items.map((item) => this.renderRecipe(item))}
            </div>
        </section>`
    }

    static styles = css`
    .recipes{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    .recipe{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .recipe-card{
        border: 3px solid var(--color-accent);
        text-align: center;
        color: white;
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-small);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    
    }

    img {
        width: 100%;
    }

    `
}