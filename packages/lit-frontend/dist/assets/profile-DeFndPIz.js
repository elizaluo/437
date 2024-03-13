import{n as f,i as m,s as g,x as d,t as u}from"./toggle-switch-BMpZmBsE.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(t){return f({...t,state:!0,attribute:!1})}const y="http://localhost:3000/api";function v(t){return`${y}${t}`}var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,c=(t,e,a,i)=>{for(var r=i>1?void 0:i?x(e,a):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,a,r):o(r))||r);return i&&r&&_(e,a,r),r};let l=class extends g{constructor(){super(...arguments),this.path=""}_fetchData(t){fetch(v(t)).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.profile=e)})}connectedCallback(){this.path&&this._fetchData(this.path),super.connectedCallback()}attributeChangedCallback(t,e,a){t==="path"&&e!==a&&e&&this._fetchData(a),super.attributeChangedCallback(t,e,a)}render(){const{userid:t,name:e}=this.profile||{};return d`
      <section>
        <div class="profile-header">
          ${this._renderAvatar()}
          <h1>${e}'s Account</h1>
        </div>
        <dl>
          <dt><h2>Name</h2></dt>
          <dd><h3>${e}</h3></dd>
          <dt><h2>Username</h2></dt>
          <dd><h3>${t}</h3></dd>
        </dl>
      </section>
    `}_renderAvatar(){const{name:t,userid:e,avatar:a,color:i}=this.profile||{},r=a?d`<img id="avatarImg" src="${a}" />`:(e||t||" ").slice(0,1),n=i?`--avatar-backgroundColor: ${i}`:"";return d` <div class="avatar" style=${n}>${r}</div>`}};l.styles=m`
    :host {
      --avatar-backgroundColor: var(--accent-color);
      --avatar-size: 50px;
      padding: 10px;
    }
    section {
      margin: 2em;
      margin-top: 0;
    }
    h1 {
      font-size: 32px;
    }
    h2 {
      color: var(--primary-color);
      border-left: 5px solid var(--header-border-color);
      padding-left: 10px;
      font-size: 28px;
      font-weight: 600;
    }
    dl {
      border: 1px solid var(--header-border-color);
      padding: 1em;
    }
    dd {
      color: var(--accent-color);
    }
    .avatar {
      grid-column: key;
      grid-row: auto/span 2;
      justify-self: end;
      position: relative;
      width: var(--avatar-size);
      aspect-ratio: 1;
      background-color: var(--avatar-backgroundColor);
      border-radius: 50%;
      text-align: center;
      line-height: var(--avatar-size);
      font-size: calc(0.66 * var(--avatar-size));
      color: var(--color-link-inverted);
      overflow: hidden;
    }
    .profile-header {
      display: flex;
      align-items: center;
      justify-content: left;
      margin-bottom: 2em;
    }
    .profile-header h1 {
      margin-left: 20px;
    }
  `;c([f()],l.prototype,"path",2);c([b()],l.prototype,"profile",2);l=c([u("view-profile")],l);let h=class extends l{render(){const{userid:t,name:e}=this.profile||{};return d`
      <section>
        <h2>Edit Profile</h2>
        <form @submit=${this._handleSubmit}>
          <!-- <div class="form-group">
            <label for="avatar">Avatar</label>
            <input
              type="file"
              name="avatar"
              @change=${this._handleAvatarSelected}
            /> -->
          <div class="form-group">
            <label for="userid">Username</label>
            <input name="userid" .value=${t} disabled />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input name="name" .value=${e} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    `}_handleAvatarSelected(t){const a=t.target.files[0];new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=s=>n(s),o.readAsDataURL(a)}).then(r=>{this.profile={...this.profile,avatar:r}})}_handleSubmit(t){var o;t.preventDefault();const e=(o=this.profile)==null?void 0:o.avatar,a=t.target,i=new FormData(a);let r=Array.from(i.entries()).map(([s,p])=>p===""?[s]:[s,p]);e&&r.push(["avatar",e]);const n=Object.fromEntries(r);console.log(n),this._putData(n)}_putData(t){fetch(v(this.path),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.profile=e)}).catch(e=>console.log("Failed to PUT form data",e))}};h.styles=m`
    section {
      margin: 2em;
    }
    h2 {
      color: var(--primary-color);
      border-left: 5px solid var(--header-border-color);
      padding-left: 10px;
      font-size: 28px;
      font-weight: 600;
    }
    input {
      margin: 1em;
      padding: 0.5em;
    }
    button {
      margin-top: 2em;
      margin-left: 1.5em;
      padding: 0.5em;
    }
    label {
      font-size: 20px;
      padding-left: 1em;
    }
  `;h=c([u("edit-profile")],h);
