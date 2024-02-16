import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile";
import { serverPath } from "./rest.ts";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
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
      <h2>Account Information</h2>
      <div class="account-details">
        <div class="account-field">
          <label for="name">Name:</label>
          <input type="text" id="name" value=${name} disabled />
        </div>
        <div class="account-field">
          <label for="user-id">User ID:</label>
          <input type="text" id="user-id" value=${userid} disabled />
        </div>
      </div>
      <button>Edit Account</button>
    `;
  }

  static styles = css`
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
}
