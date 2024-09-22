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
  }

  static get styles() {
    return css`

h1 {
  font-size: 2em;
  margin: 0;
  padding: 0;
}

h3,h4,h5,h6 {
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

button:hover, a:hover {
  opacity: 0.7;
}
h4{
  color: Pink;
  font-size: 25px;
}
 @media screen and (min-width: 500px) and (max-width: 800px) 
 {
            .details-button 
   {
                display: none; 
  }
}
@media screen and (max-width: 500px) {.card {transform: scale(0.9);
  }
h1 {
  font-size: 2em;
  margin: 0;
  padding: 0;
}

h3,h4,h5,h6 {
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
          <p>${this.content}</p>
          <p><button @click=${this.handleDetails}>Details</button></p>
        </div>
      </div>
    `;
  }
  //render() {
  //return html`
  //<div class="card">
  //<img
  // id="card-image"
  //src="https://www.usnews.com/object/image/0000018c-0f2d-d469-af9f-ffbf53e60000/8f29b20a49ad4eac8f70a0aa5f512289Get_Ready_With_Me_34928.jpg?update-time=1701061354000&size=responsive640"
  //alt="Avatar"
  //  style="width:75%"
  // />
  //  <div class="container">
  //      <h4><b id="card-title">${this.title}</b></h4>
  //    <p>Watch me do my makeup for class!!</p>

  //     <a href="http://hax.psu.edu"></a>
  //     <p><button>Details</button></p>
  //  </div>
  //  </div>
  // `;

  static get properties() {
    return {
      title: { type: String },
      content: { type: String },
      image: { type: String },
      backgroundColor: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
