const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// Images 

const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent["images"]["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["images"]["cta-img"];

const accentImg = document.querySelector("#middle-img");
accentImg.src = siteContent["images"]["accent-img"];

// Footer Link 

const footer = document.querySelector("footer a");
footer.textContent = siteContent.footer.copyright;
footer.classList.add('bold');

// Contact
const contact = document.querySelector("section.contact");
contact.children[0].textContent = siteContent.contact["contact-h4"];
contact.children[1].textContent = siteContent.contact.address;
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;

// // my first attempt - this works but is messy
// const contactTitle = document.querySelector(".contact h4");
// const contactAddress = document.querySelector(".contact p");
// const contactPhone = contactAddress.nextElementSibling;
// const contactEmail = contactPhone.nextElementSibling;
// contactTitle.textContent = siteContent["contact"]["contact-h4"]
// contactPhone.textContent = siteContent["contact"]["phone"]
// contactAddress.textContent = siteContent["contact"]["address"]
// contactEmail.textContent = siteContent["contact"]["email"]

// Top Content 

const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

// Bottom Content

const bottomContent = document.querySelector(".bottom-content");
const h4sBottom = bottomContent.querySelectorAll('h4');
h4sBottom[0].textContent = siteContent["main-content"]["services-h4"];
h4sBottom[1].textContent = siteContent["main-content"]["product-h4"];
h4sBottom[2].textContent = siteContent["main-content"]["vision-h4"];
const paragBottom = bottomContent.querySelectorAll('p');
paragBottom[0].textContent = siteContent["main-content"]["services-content"]
paragBottom[1].textContent = siteContent["main-content"]["product-content"]
paragBottom[2].textContent = siteContent["main-content"]["vision-content"]

// // my attempt - works but is messy 
// const mainNum1 = document.querySelector('h4')
// const mainNum2 = mainNum1.nextElementSibling;

// mainNum1.textContent = siteContent["main-content"]["features-h4"]
// mainNum2.textContent = siteContent["main-content"]["features-content"]

// const allH4 = document.querySelectorAll('h4')
// const allParag = document.querySelectorAll('.text-content p')

// allH4[1].textContent = siteContent["main-content"]["about-h4"]
// allParag[1].textContent = siteContent["main-content"]["about-content"]
// allH4[2].textContent = siteContent["main-content"]["services-h4"]
// allParag[2].textContent = siteContent["main-content"]["services-content"]
// allH4[3].textContent = siteContent["main-content"]["product-h4"]
// allParag[3].textContent = siteContent["main-content"]["product-content"]
// allH4[4].textContent = siteContent["main-content"]["vision-h4"]
// allParag[4].textContent = siteContent["main-content"]["vision-content"]

// CTA 
const titleCta = document.querySelector("h1")
const button = document.querySelector("button")
titleCta.textContent = siteContent["cta"]["h1"]
button.textContent = siteContent["cta"]["button"]

// NAV Links 

// I am commenting out my original work in order to write 'DRY' code
// const navI1 = document.querySelector("nav a");
// const navI2 = navI1.nextElementSibling;
// const navI3 = navI2.nextElementSibling;
// const navI4 = navI3.nextElementSibling;
// const navI5 = navI4.nextElementSibling;
// const navI6 = navI5.nextElementSibling;
// navI1.textContent = siteContent["nav"]["nav-item-1"]
// navI2.textContent = siteContent["nav"]["nav-item-2"]
// navI3.textContent = siteContent["nav"]["nav-item-3"]
// navI4.textContent = siteContent["nav"]["nav-item-4"]
// navI5.textContent = siteContent["nav"]["nav-item-5"]
// navI6.textContent = siteContent["nav"]["nav-item-6"]

const allNav = document.querySelectorAll('nav a');
const navLinkTexts = Object.values(siteContent.nav);
// allNav.forEach(element => element.className = 'italic');
allNav.forEach((link, idx) => {
  link.textContent = navLinkTexts[idx]
  link.classList.add('italic')
}); 

