import{i as g,n as c,s as m,x as p,t as h}from"./toggle-switch-BMpZmBsE.js";/* empty css              */var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l=(r,t,a,i)=>{for(var e=i>1?void 0:i?u(t,a):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(e=(i?o(t,a,e):o(e))||e);return i&&e&&b(t,a,e),e};let s=class extends m{constructor(){super(...arguments),this.name="",this.image="",this.date=""}render(){return p`
        <div class="card">
            <span class="ingredientImage">
                <slot name="ingredientImage">
            </span>
            <h3>
                <slot name="ingredientName">Ingredient Name</slot>
            </h3>
            <slot name="date">Expiration Date</slot>
        </div>
    `}};s.styles=g`
    // :host {
    //     display: block;
    //     height: 100%;
    //     width: auto;
    //     border: 1px solid black;
    //     border-radius: 8px;
    //     padding: 20px;
    // }
    `;l([c({type:String})],s.prototype,"name",2);l([c({type:String})],s.prototype,"image",2);l([c({type:String})],s.prototype,"date",2);s=l([h("ingredient-card")],s);var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=(r,t,a,i)=>{for(var e=i>1?void 0:i?f(t,a):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(e=(i?o(t,a,e):o(e))||e);return i&&e&&x(t,a,e),e};let d=class extends m{constructor(){super(...arguments),this.items=[]}sortAlphabetically(){this.items.sort((r,t)=>r.name.localeCompare(t.name)),this.requestUpdate()}renderIngredient(r){return p`
      <div class="grid-item">
        <a href="sample_ingredient.html">
          <recipe-card class="ingredient-card">
            <img slot="ingredientImage" src="${r.image}" />
            <div class="info">
              <h3><span slot="ingredientName">${r.name}</span></h3>
              <span slot="date">Best by ${r.date}</span>
            </div>
          </recipe-card>
        </a>
      </div>
    `}render(){return p`
      <section>
        <div class="sort">
          <button @click="${this.sortAlphabetically}">Sort by Name</button>
        </div>
        <div class="grid-container">
          ${this.items.map(r=>this.renderIngredient(r))}
        </div>
      </section>

      <section></section>
    `}};d.styles=g`
    a {
      color: var(--accent-color);
    }

    a:link,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
    }

    .ingredient-card {
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
  `;v([c({type:Array})],d.prototype,"items",2);d=v([h("ingredient-list")],d);
