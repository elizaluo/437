import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile.ts";
import { serverPath } from "./rest.ts";

@customElement("view-profile")
export class ViewProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  _fetchData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      });
  }

  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  render() {
    const { userid, name } = this.profile || {};
    return html`
      <section>
        <h1>${name}'s Account</h1>
        <dl>
          <dt><h2>Name</h2></dt>
          <dd><h3>${name}</h3></dd>
          <dt><h2>Username</h2></dt>
          <dd><h3>${userid}</h3></dd>
        </dl>
      </section>
    `;
  }

  static styles = css`
    section {
      margin: 2em;
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
  `;
}

@customElement("edit-profile")
export class EditProfileElement extends ViewProfileElement {
  render() {
    const { userid, name } = this.profile || {};

    return html`
      <section>
        <h2>Edit Profile</h2>
        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="userid">Username</label>
            <input name="userid" .value=${userid} disabled />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input name="name" .value=${name} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    `;
  }

  static styles = css`
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
  `;

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries()).map(([k, v]) =>
      v === "" ? [k] : [k, v]
    );
    const json = Object.fromEntries(entries);
    console.log(json);

    this._putData(json);
  }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      })
      .catch((err) => console.log("Failed to PUT form data", err));
  }
}
