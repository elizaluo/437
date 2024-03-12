import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("recipe-card")
export class RecipeCard extends LitElement {
    @property({ type: String})
    name: string = "";
    
    @property({ type: String})
    image: string = "";
    
    @property({ type: String})
    mealType: string = "";

    @property({ type: String})
    time: string = "";
    
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
            - 
            <slot name="time" style="font-style: italic">Time</slot>
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