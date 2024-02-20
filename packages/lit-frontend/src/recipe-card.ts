import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("recipe-card")
class RecipeCard extends LitElement {
    @property({ type: String})
    name: string = "";
    
    @property({ type: String})
    recipePicPath: string = "";
    
    @property({ type: String})
    mealType: string = "";

    
    render() {
        return html`
        <div class="card">
            <span class="recipeImage">
                <slot name="recipeImage">
            </span>
            <h3>
                <slot name="recipeName">Recipe Name</slot>
            </h3>
            <slot name="mealType">Meal Type</slot>
        </div>
    `;
}

static styles = css`
    :host {
        display: block;
        height: 100%;
        width: auto;
        border: 1px solid #f0f0f0;
        border-radius: 8px;
        padding: 20px;
    }

    label {
        cursor: pointer;
    }
    `;

}