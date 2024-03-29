import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ToggleSwitchElement } from "./toggle-switch";
import { PresetButtonsElement } from "./preset-buttons";

@customElement("user-panel")
export class UserPanelElement extends LitElement {
  @property()
  avatar: string = "";

  render() {
    return html`
      <ul>
        <li class="header">
          <img src=${this.avatar} />

          <h1>
            <a href="/app/profile/index.html"><slot name="name">Your Name</slot></a>
          </h1>
        </li>

        <li>
          <toggle-switch @change=${this._toggleLightMode}>
            Light Mode
          </toggle-switch>
        </li>
        <!-- <li>
          <preset-buttons
            name="font-size"
            .options=${[12, 14, 16, 20, 24]}
            value="16"
            @change=${this._selectFontSize}>
            Font Size
          </preset-buttons>
        </li> -->
        <slot></slot>
        <li><span slot="settings">Settings</span></li>
        <li>
          <slot name="logout">Sign Out</slot>
        </li>
      </ul>
    `;
  }

  static styles = css`
    * {
      margin: 0;
      box-sizing: border-box;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-page);
      color: var(--color-text);
      border: 1px solid var(--color-accent);
      border-radius: var(--size-corner-medium);
      padding: var(--size-spacing-small);
      width: 12em;
      box-shadow: var(--shadow-dropdown);
    }
    li {
      white-space: nowrap;
      border-color: var(--color-accent);
      border-width: var(--line-weight-superfine);
      text-align: left;
      padding: 0.5em;
    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: end;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
    img {
      display: inline;
      height: var(--size-icon-large);
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: right;
    }
    .header h1 a {
      text-decoration: none;
      color: inherit;
    }
  `;

  _toggleLightMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("light-mode");
    else body.classList.remove("light-mode");
  }

  _selectFontSize(ev: InputEvent) {
    const target = ev.target as PresetButtonsElement;
    const body = document.body;

    console.log("Selecting Font Size", ev);

    if (target) {
      const fontSize = target.value
        ? target.value.toString() + "px"
        : "initial";
      body.style.fontSize = fontSize;
    }
  }
}
