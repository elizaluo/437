import{i as m,n as c,s as g,x as d,t as h}from"./toggle-switch-BMpZmBsE.js";/* empty css              */var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(r,t,a,i)=>{for(var e=i>1?void 0:i?b(t,a):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(e=(i?s(t,a,e):s(e))||e);return i&&e&&v(t,a,e),e};let n=class extends g{constructor(){super(...arguments),this.name="",this.image="",this.supermarket=""}render(){return d`
        <div class="card">
            <span class="ingredientImage">
                <slot name="ingredientImage">
            </span>
            <h3>
                <slot name="ingredientName">Ingredient Name</slot>
            </h3>
            <slot name="supermarket">Supermarket</slot>            
        </div>
    `}};n.styles=m`
    // :host {
    //     display: block;
    //     height: 100%;
    //     width: auto;
    //     border: 1px solid black;
    //     border-radius: 8px;
    //     padding: 20px;
    // }
  `;l([c({type:String})],n.prototype,"name",2);l([c({type:String})],n.prototype,"image",2);l([c({type:String})],n.prototype,"supermarket",2);n=l([h("shopping-card")],n);var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,u=(r,t,a,i)=>{for(var e=i>1?void 0:i?x(t,a):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(e=(i?s(t,a,e):s(e))||e);return i&&e&&f(t,a,e),e};let p=class extends g{constructor(){super(...arguments),this.items=[]}sortAlphabetically(){this.items.sort((r,t)=>r.name.localeCompare(t.name)),this.requestUpdate()}renderShopping(r){return d`
      <div class="grid-item">
        <a href="sample_ingredient.html">
          <recipe-card class="shopping-card">
            <img slot="ingredientImage" src="${r.image}" />
            <div class="info">
              <h3>
                <input type="checkbox" id="ingredientY" /><span
                  slot="ingredientName"
                >
                  ${r.name}</span
                >
              </h3>
              <a href="sample_supermarket.html" class="italics">
                <svg
                  class="icon"
                  style="width: 1em; height: 1em; vertical-align: top"
                >
                  <use href="/icons/shopping.svg#icon-cart" />
                </svg>
                <slot name="supermarket">${r.supermarket}</slot>
              </a>
            </div>
          </recipe-card>
        </a>
      </div>
    `}render(){return d`
      <section>
        <div class="sort">
          <button @click="${this.sortAlphabetically}">Sort by Name</button>
        </div>
        <div class="grid-container">
          ${this.items.map(r=>this.renderShopping(r))}
        </div>
      </section>

      <section></section>
    `}};p.styles=m`
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
  `;u([c({type:Array})],p.prototype,"items",2);p=u([h("shopping-list")],p);
