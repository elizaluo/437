import{i as m,n as c,s as g,x as d,t as h}from"./toggle-switch-BMpZmBsE.js";/* empty css              */var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,n=(r,t,i,a)=>{for(var e=a>1?void 0:a?b(t,i):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(e=(a?s(t,i,e):s(e))||e);return a&&e&&v(t,i,e),e};let p=class extends g{constructor(){super(...arguments),this.name="",this.image="",this.mealType="",this.time=""}render(){return d`
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
    `}};p.styles=m`
    // :host {
    //     display: block;
    //     height: 100%;
    //     width: auto;
    //     border: 1px solid black;
    //     border-radius: 8px;
    //     padding: 20px;
    // }
    `;n([c({type:String})],p.prototype,"name",2);n([c({type:String})],p.prototype,"image",2);n([c({type:String})],p.prototype,"mealType",2);n([c({type:String})],p.prototype,"time",2);p=n([h("recipe-card")],p);var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(r,t,i,a)=>{for(var e=a>1?void 0:a?f(t,i):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(e=(a?s(t,i,e):s(e))||e);return a&&e&&y(t,i,e),e};let l=class extends g{constructor(){super(...arguments),this.items=[]}sortAlphabetically(){this.items.sort((r,t)=>r.name.localeCompare(t.name)),this.requestUpdate()}renderRecipe(r){return d`
      <div class="grid-item">
        <a href="sample_recipe.html">
          <recipe-card class="recipe-card">
            <img slot="recipeImage" src="${r.image}" />
            <span slot="recipeName">${r.name}</span>
            <span slot="mealType">${r.mealType}</span>
            <span slot="time">${r.time}</span>
          </recipe-card>
        </a>
      </div>
    `}render(){return d`
      <section>
        <div class="sort">
          <button @click="${this.sortAlphabetically}">Sort by Name</button>
        </div>
        <div class="grid-container">
          ${this.items.map(r=>this.renderRecipe(r))}
        </div>
      </section>

      <section></section>
    `}};l.styles=m`
    a {
      color: var(--accent-color);
    }

    a:link,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
    }

    .recipe-card {
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
  `;u([c({type:Array})],l.prototype,"items",2);l=u([h("item-list")],l);
