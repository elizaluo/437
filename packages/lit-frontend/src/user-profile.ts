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
        <div class="profile-header">
          ${this._renderAvatar()}
          <h1>${name}'s Account</h1>
        </div>
        <dl>
          <dt><h2>Name</h2></dt>
          <dd><h3>${name}</h3></dd>
          <dt><h2>Username</h2></dt>
          <dd><h3>${userid}</h3></dd>
        </dl>
      </section>
    `;
  }

  _renderAvatar() {
    const { name, userid, avatar, color } = (this.profile || {}) as Profile;
    const avatarImg = avatar
      ? html`<img id="avatarImg" src="${avatar}" />`
      : (userid || name || " ").slice(0, 1);
    const colorStyle = color ? `--avatar-backgroundColor: ${color}` : "";

    return html` <div class="avatar" style=${colorStyle}>${avatarImg}</div>`;
  }

  static styles = css`
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
          <!-- <div class="form-group">
            <label for="avatar">Avatar</label>
            <input
              type="file"
              name="avatar"
              @change=${this._handleAvatarSelected}
            /> -->
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

  _handleAvatarSelected(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const selectedFile = (target.files as FileList)[0];
    const reader: Promise<string> = new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result as string);
      fr.onerror = (err) => reject(err);
      fr.readAsDataURL(selectedFile);
    });

    reader.then((result: string) => {
      this.profile = {
        ...(this.profile as Profile),
        avatar: result,
      };
    });
  }

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const avatar = this.profile?.avatar;
    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    let entries = Array.from(formdata.entries()).map(([k, v]) =>
      v === "" ? [k] : [k, v]
    );

    if (avatar) entries.push(["avatar", avatar]);

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
