
const brianworks = [
    {
        "title" : "KaziMtaani",
        "img_src":"./assets/images/kazimtaani.png",
        "img_alt" : "KM logo",
        "external_url" : "https://github.com/briankeny/KaziMtaani",
        "description"  : "Kazi Mtaani is a mobile platform that connects blue collar job seekers with potential employers" 
    }, 
    {
        "title" : "KaziAPi",
        "img_src": "./assets/images/kaziapi.png",
        "img_alt" : "Kaziapi",
        "external_url" : "https://github.com/briankeny/Kaziapi",
        "description"  : "Python Django-rest-api for Kazi Mtaani Mobile App" 
    },
    {
        "title" : "Koterm",
        "img_src": "./assets/images/koterm.jpg",
        "img_alt" : "Koterm shell",
        "external_url" : "https://github.com/briankeny/koterm",
        "description"  : "Koterm is a subdomain enumarator and host scanner in python" 
    }
]

const brianSocials = [
     {
        "title" : "Twitter",
        "icon" : `<i className="fa fa-twitter"></i>`,
        "url" : "https://www.twitter.com/iambriankemboi"
     },
     {
        "title" : "Github",
        "icon" : `<i className="fa fa-github"></i>`,
        "url" : "https://www.github.com/briankeny"
     },
     {
        "title" : "Linked In",
        "icon" : `<i className="fa fa-linkedin"></i>`,
        "url" : "https://www.github.com/briankeny"
     },
     {
        "title" : "Whatsapp",
        "icon" : `<i className="fa fa fa-whatsapp"></i>`,
        "url" : "https://wa.me/254721524154"
     }
]

const footer  = document.querySelector('.footer-message')
footer.innerHTML =  `&copy; ${new Date().getFullYear()} Brian Keny`

const workEl = document.querySelector('.works-container');

const workHtml = brianworks.map((item, index) => `
  <div key="${index}" class="work-item">
    <img src="${item.img_src}" alt="${item.img_alt}" />
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </div>
`).join(''); 

workEl.innerHTML = workHtml;

