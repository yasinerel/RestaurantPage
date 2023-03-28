// create head element and append it to the document
const head = document.createElement("head");
document.documentElement.appendChild(head);

// create title element and append it to the head
const title = document.createElement("title");
title.textContent = "W3.CSS Template";
head.appendChild(title);

// create meta elements and append them to the head
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
head.appendChild(metaCharset);

const metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1");
head.appendChild(metaViewport);

// create link elements and append them to the head
const linkW3CSS = document.createElement("link");
linkW3CSS.setAttribute("rel", "stylesheet");
linkW3CSS.setAttribute("href", "https://www.w3schools.com/w3css/4/w3.css");
head.appendChild(linkW3CSS);

const linkRaleway = document.createElement("link");
linkRaleway.setAttribute("rel", "stylesheet");
linkRaleway.setAttribute("href", "https://fonts.googleapis.com/css?family=Raleway");
head.appendChild(linkRaleway);

// create style element and append it to the head
const style = document.createElement("style");
style.textContent = `
body,h1,h5 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.bgimg {
  background-image: url('https://cdn.oliverbonacininetwork.com/uploads/sites/42/2022/04/Canoe-Interior-Evening-Vibes-5170.jpg');
  min-height: 100%;
  background-position: center;
  background-size: cover;
}`;
head.appendChild(style);

// create body element and append it to the document
const body = document.createElement("body");
document.documentElement.appendChild(body);

// create div elements and append them to the body
const contentDiv = document.createElement("div");
contentDiv.setAttribute("id", "content");
body.appendChild(contentDiv);

const bgimgDiv = document.createElement("div");
bgimgDiv.classList.add("bgimg", "w3-display-container", "w3-text-white");
body.appendChild(bgimgDiv);

const topleftDiv = document.createElement("div");
topleftDiv.classList.add("w3-display-topleft", "w3-container", "w3-xlarge");
bgimgDiv.appendChild(topleftDiv);

const bottomleftDiv = document.createElement("div");
bottomleftDiv.classList.add("w3-display-bottomleft", "w3-container");
bgimgDiv.appendChild(bottomleftDiv);

const menuModalDiv = document.createElement("div");
menuModalDiv.setAttribute("id", "menu");
menuModalDiv.classList.add("w3-modal");
body.appendChild(menuModalDiv);

const contactModalDiv = document.createElement("div");
contactModalDiv.setAttribute("id", "contact");
contactModalDiv.classList.add("w3-modal");
body.appendChild(contactModalDiv);

// create button elements and append them to the divs
const menuButton = document.createElement("button");
menuButton.setAttribute("onclick", "document.getElementById('menu').style.display='block'");
menuButton.classList.add("w3-button", "w3-black");
menuButton.textContent = "menu";
topleftDiv.appendChild(menuButton);

const contactButton = document.createElement("button");
contactButton.setAttribute("onclick", "document.getElementById('contact').style.display='block'");
contactButton.classList.add("w3-button", "w3-black");
contactButton.textContent = "contact";
topleftDiv.appendChild(contactButton);

// create p elements and append them to the divs

