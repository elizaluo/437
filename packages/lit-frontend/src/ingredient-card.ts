import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ingredient-card")
export class IngredientCard extends LitElement {
    @property({ type: String})
    name: string = "";
    
    @property({ type: String})
    image: string = "";

    @property({ type: String})
    date: string = "";
    
    render() {
        return html`
        <div class="card">
            <span class="ingredientImage">
                <slot name="ingredientImage">
            </span>
            <h3>
                <slot name="ingredientName">Ingredient Name</slot>
            </h3>
            <slot name="date">Expiration Date</slot>
        </div>
    `;
}

static styles = css`
    // :host {
    //     display: block;
    //     height: 100%;
    //     width: auto;
    //     border: 1px solid black;
    //     border-radius: 8px;
    //     padding: 20px;
    // }
    `;

}