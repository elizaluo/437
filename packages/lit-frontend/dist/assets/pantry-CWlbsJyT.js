import{i as m,n as p,s as g,x as l,t as h}from"./toggle-switch-BMpZmBsE.js";/* empty css              */var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=(e,t,i,a)=>{for(var r=a>1?void 0:a?u(t,i):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(a?n(t,i,r):n(r))||r);return a&&r&&b(t,i,r),r};let s=class extends g{constructor(){super(...arguments),this.name="",this.image="",this.date=""}render(){return l`
        <div class="card">
            <span class="ingredientImage">
                <slot name="ingredientImage">
            </span>
            <h3>
                <slot name="ingredientName">Ingredient Name</slot>
            </h3>
            <slot name="date">Expiration Date</slot>
        </div>
    `}};s.styles=m`
    // :host {
    //     display: block;
    //     height: 100%;
    //     width: auto;
    //     border: 1px solid black;
    //     border-radius: 8px;
    //     padding: 20px;
    // }
    `;c([p({type:String})],s.prototype,"name",2);c([p({type:String})],s.prototype,"image",2);c([p({type:String})],s.prototype,"date",2);s=c([h("pantry-card")],s);var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(e,t,i,a)=>{for(var r=a>1?void 0:a?x(t,i):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(a?n(t,i,r):n(r))||r);return a&&r&&y(t,i,r),r};let d=class extends g{constructor(){super(...arguments),this.items=[]}sortAlphabetically(){this.items.sort((e,t)=>e.name.localeCompare(t.name)),this.requestUpdate()}renderPantry(e){return l`
      <div class="grid-item">
        <a href="sample_ingredient.html">
          <recipe-card class="pantry-card">
            <img slot="pantryImage" src="${e.image}" />
            <div class="info">
              <h3><span slot="pantryName">${e.name}</span></h3>
              <span slot="date">Best by ${e.date}</span>
            </div>
          </recipe-card>
        </a>
      </div>
    `}render(){return l`
      <section>
        <div class="sort">
          <button @click="${this.sortAlphabetically}">Sort by Name</button>
        </div>
        <div class="grid-container">
          ${this.items.map(e=>this.renderPantry(e))}
        </div>
      </section>

      <section></section>
    `}};d.styles=m`
    a {
      color: var(--accent-color);
    }

    a:link,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
    }

    .pantry-card {
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
  `;v([p({type:Array})],d.prototype,"items",2);d=v([h("pantry-list")],d);
