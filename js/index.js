const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

/* Task 2*/

// Container
let contn = document.getElementsByClassName("container");
console.log(contn);

// Navigation
let nav = document.getElementsByTagName("nav");
console.log(nav);

// Anchor tags for the Nav
let anchoT = document.getElementsByTagName("a");
console.log(anchoT);

// Main Content
let mContent = document.getElementsByClassName("main-content");
console.log(mContent);

// Contact Info
let contInfor = document.getElementsByClassName("contact");
console.log(contInfor);

// CTA h1
let ctaTxt = document.getElementsByTagName("h1");

// CTA button
let ctaBtn = document.getElementsByTagName("button");

/* Task 3*/
//  Nav bar text
for (let i = 1; i < 7; i++) {
  anchoT[i - 1].innerHTML = siteContent["nav"]["nav-item-" + i];
  console.log(anchoT[i - 1]);
}

//CTA

ctaTxt[0].textContent = siteContent["cta"]["h1"];
console.log(ctaTxt);
// Button
ctaBtn[0].textContent = siteContent["cta"]["button"];
console.log(ctaBtn);

//Setting up the Main-Content
let mCont = document.querySelectorAll(".top-content .text-content ");

// Setting up the Feature Content
let fCont = mCont[0].querySelector("h4");
let fpCont = mCont[0].querySelector("p");
fCont.textContent = siteContent["main-content"]["features-h4"];
fpCont.textContent = siteContent["main-content"]["features-content"];

// Setting up the  About Content
let aCont = mCont[1].querySelector("h4");
let apCont = mCont[1].querySelector("p");
aCont.textContent = siteContent["main-content"]["about-h4"];
apCont.textContent = siteContent["main-content"]["about-content"];

//* Setting up the LowerContent for Main-Content *//
let lCont = document.querySelectorAll(".bottom-content .text-content");

let sCont = lCont[0].querySelector("h4");
let spCont = lCont[0].querySelector("p");
sCont.textContent = siteContent["main-content"]["services-h4"];
spCont.textContent = siteContent["main-content"]["services-content"];

let pCont = lCont[1].querySelector("h4");
let ppCont = lCont[1].querySelector("p");
pCont.textContent = siteContent["main-content"]["product-h4"];
ppCont.textContent = siteContent["main-content"]["product-content"];

let vCont = lCont[2].querySelector("h4");
let vpCont = lCont[2].querySelector("p");
vCont.textContent = siteContent["main-content"]["vision-h4"];
vpCont.textContent = siteContent["main-content"]["vision-content"];
