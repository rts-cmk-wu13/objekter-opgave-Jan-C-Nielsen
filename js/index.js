// slå dig løs her... 

function FacilitiesCard(facilities) {
    let template = "";
    facilities.options.forEach(h => {
        template +=
            "<div class=\"card\">" +
            "<img src=" + h.icon + ">" +
            "<h2>" + h.headline + "</h2>" +
            "<p>" + h.text + "</p>" +
            "<a href= >Show me more</a>" +
            "</div>";
    })
    return template;
}


function SitesCard(s) {
    let template = "";
    s.places.forEach(h => {

        template +=
            "<div><img src=" + h.img + ">" +
            "<h2>" + h.name + "</h2>" +
            "<p>" + h.city + "</p>" +
            "<a href= >View this site</a></div>";
    }
    )
    return template;
}

function AdvCard(s) {
    let template = "";
    advantages.forEach(h => {

        advantagesDiv.innerHTML +=
            "<div><img src=" + h.icon + ">" +
            "<h2>" + h.headline + "</h2>" +
            "<p>" + h.text + "</p><div>";
    }
    )
    return template;
}


let html_hero = document.querySelector(".hero");
const heroDiv = document.createElement("div");
heroDiv.classList.add("divHero");

heroDiv.innerHTML =
    " <img src=" + hero.image + ">" +
    "<h1>" + hero.headline + "</h1>" +
    "<p>" + hero.copy + "</p>" +
    "<button>" + " <img src=" + hero.icon + ">" + "</button>";

html_hero.appendChild(heroDiv);

let html_services = document.querySelector(".services");

//eksempel på at udskrive alle overskrifter i services i konsollen:

services.forEach(service => {
    console.log(service.headline);

    const serviceDiv = document.createElement("div");
    html_services.appendChild(serviceDiv);

    const serviceImg = document.createElement("img");
    serviceImg.setAttribute("src", service.illustration);
    serviceDiv.appendChild(serviceImg);

    const h2 = document.createElement("h2");
    h2.textContent = service.headline;
    serviceDiv.appendChild(h2);

    const text = document.createElement("p");
    text.textContent = service.text;
    serviceDiv.appendChild(text);

    const linktext = document.createElement("p");
    linktext.textContent = service.linktext;
    serviceDiv.appendChild(linktext);

}
)

let html_facilities = document.querySelector(".facilities");
const facilitiesDiv = document.createElement("div");
facilitiesDiv.classList.add("divFacilities");
html_facilities.append(facilitiesDiv);
//facilitiesDiv.innerHTML = "<h2>" + facilities.headline + "</h2>";
//facilitiesDiv.innerHTML += "<div class=\"divFacilities\">";

facilitiesDiv.innerHTML += `
<h2>${facilities.headline}</h2>
<div class="divFacilities__flex">
    ${FacilitiesCard(facilities)}
</div>
`

html_facilities.appendChild(facilitiesDiv);


let html_sites = document.querySelector(".sites");
const sitesDiv = document.createElement("div");
sitesDiv.classList.add("divSites");
sitesDiv.innerHTML = "<div><h2>" + sites.headline + "</h2>" +
    "<p>" + sites.text + "</p>" +
    "<button><img srs=" + sites.btnicon + ">Start</button></div>";
sitesDiv.innerHTML += `
        ${SitesCard(sites)}
    `
html_sites.append(sitesDiv);

let html_advantages = document.querySelector(".advantages");
const advantagesDiv = document.createElement("div");
advantagesDiv.classList.add("divAdvantages");
advantagesDiv.innerHTML = "<h2>Our Advantages</h2>";
advantagesDiv.innerHTML += `
<div>
        ${AdvCard(advantages)}
        </div>
    `
html_advantages.appendChild(advantagesDiv);

console.log(footer);
let html_footer = document.querySelector(".footer");
const footerDiv = document.createElement("div");
footerDiv.classList.add("divFooter");
footerDiv.innerHTML = "<h2>" + footer.headline + "</h2>";
footerDiv.innerHTML += "<h1>" + footer.bigtext + "</h1>";
footer.cards.forEach(h => {

    footerDiv.innerHTML += "<h2>" + h.headline + "</h2>";

    h.textlist.forEach(x => { footerDiv.innerHTML += "<p>" + x + "</p>" });

}
)

footerDiv.innerHTML += "<hr>";
footerDiv.innerHTML += "<p>" + footer.menu.sidekick + "</p>";
footer.menu.menuitems.forEach(x => {
    footerDiv.innerHTML += "<p>" + x + "</p>";
}
)
html_footer.appendChild(footerDiv);

