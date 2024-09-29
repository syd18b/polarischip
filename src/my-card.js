import { LitElement, html, css } from "lit";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "My card";
    this.content = "Default Content";
    this.image = "";
    this.backgroundColor = "#fff";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      h1 {
        font-size: 2em;
        margin: 0;
        padding: 0;
      }

      h3,
      h4,
      h5,
      h6 {
        margin: 8px 0;
      }

      #card-list {
        display: flex;
      }

      .fancy {
        background-color: orange;
        color: cyan;
        border: 10px solid green;
        margin: 100px;
      }

      .card-image {
        width: 200px;
        height: 100%;
      }

      .card-text {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0 0 0 8px;
        height: 300px;
        overflow: auto;
      }

      ul {
        margin: 0;
        padding: 0 32px;
      }

      ul li {
        padding: 8px 16px;
        list-style: square;
      }

      ul li:hover {
        list-style: "🤯";
        font-weight: bold;
        cursor: help;
      }

      a {
        text-decoration: none;
      }

      .links li:focus-within,
      .links li:hover {
        list-style: "🃏";
        background-color: purple;
        color: blue;
      }
      .links li a:focus,
      .links li:hover a {
        color: green;
        text-decoration: underline;
        cursor: move;
        outline: none;
      }

      ul li:nth-child(odd) {
        background-color: #eeeeee;
      }

      ul li:nth-child(even) {
        background-color: #dddddd;
      }

      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: 16;
        text-align: center;
      }

      .title {
        color: grey;
        font-size: 18px;
      }
      .card-title {
        position: sticky;
        top: 0;
        background-color: #eeeeee;
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }
      button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: pink;
        background-color: #803;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
      }

      a {
        text-decoration: none;
        font-size: 22px;
        color: black;
      }

      button:hover,
      a:hover {
        opacity: 0.7;
      }
      h4 {
        color: Pink;
        font-size: 25px;
      }
      @media screen and (min-width: 500px) and (max-width: 800px) {
        .details-button {
          display: none;
        }
      }
      @media screen and (max-width: 500px) {
        .card {
          transform: scale(0.9);
        }
      }
      h1 {
        font-size: 2em;
        margin: 0;
        padding: 0;
      }

      h3,
      h4,
      h5,
      h6 {
        margin: 8px 0;
      }

      #card-list {
        display: flex;
      }

      .fancy {
        background-color: orange;
        color: cyan;
        border: 10px solid green;
        margin: 100px;
      }

      ul {
        margin: 0;
        padding: 0 32px;
      }

      ul li {
        padding: 8px 16px;
        list-style: square;
      }

      ul li:hover {
        list-style: "🤯";
        font-weight: bold;
        cursor: help;
      }

      a {
        text-decoration: none;
      }

      .links li:focus-within,
      .links li:hover {
        list-style: "🃏";
        background-color: purple;
        color: blue;
      }
      .links li a:focus,
      .links li:hover a {
        color: green;
        text-decoration: underline;
        cursor: move;
        outline: none;
      }

      ul li:nth-child(odd) {
        background-color: #eeeeee;
      }

      ul li:nth-child(even) {
        background-color: #dddddd;
      }

      .card:hover,
      .card:focus-within {
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }
    `;
  }

  render() {
    return html`
      <div class="card" style="background-color: ${this.backgroundColor}">
        <img src=${this.image} alt="Avatar" />
        <div class="container">
          <h4><b>${this.title}</b></h4>
          <slot></slot>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}"> 
             <summary>Description</summary>
             <div>
             <p>${this.content}</p>
             </div>
            </details>
    
   

          <p><button @click=${this.handleDetails}>Details</button></p>

        </div>
        </details>
      </div>
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      content: { type: String },
      image: { type: String },
      backgroundColor: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
