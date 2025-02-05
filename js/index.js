// slå dig løs her... 
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
    const serviceImg = document.createElement("img");
    serviceImg.setAttribute("src", service.illustration);
    html_services.appendChild(serviceImg);

    const h2 = document.createElement("h2");
    h2.textContent = service.headline;
    html_services.appendChild(h2);

    const text = document.createElement("p");
    text.textContent = service.text;
    html_services.appendChild(text);

    const linktext = document.createElement("p");
    linktext.textContent = service.linktext;
    html_services.appendChild(linktext);

}
)

let html_facilities = document.querySelector(".facilities");
const facilitiesDiv = document.createElement("div");
facilitiesDiv.classList.add("divFacilities");
facilitiesDiv.innerHTML = "<h2>"+facilities.headline+"</h2>";
facilities.options.forEach(h => {

    facilitiesDiv.innerHTML +=
        "<img src=" + h.icon + ">" +
        "<h2>" + h.headline + "</h2>" +
        "<p>" + h.text + "</p>" +
        "<a href= >Show me more</a>" ;

    html_facilities.appendChild(facilitiesDiv);
}
)


let html_sites = document.querySelector(".sites");
const sitesDiv = document.createElement("div");
sitesDiv.classList.add("divSites");
sitesDiv.innerHTML = "<h2>"+sites.headline+"</h2>" +
"<p>"+sites.text+"</p>" +
"<button><img srs="+sites.btnicon+">Start</button>";
sites.places.forEach(h => {
    
    sitesDiv.innerHTML +=
        "<img src=" + h.img + ">" +
        "<h2>" + h.name + "</h2>" +
        "<p>" + h.city + "</p>" +
        "<a href= >Show me more</a>" ;

        html_sites.appendChild(sitesDiv);
}
)



let html_advantages = document.querySelector(".advantages");
const advantagesDiv = document.createElement("div");
advantagesDiv.classList.add("divAdvantages");
advantagesDiv.innerHTML = "<h2>Our Advantages</h2>";
advantages.forEach(h => {
    
    advantagesDiv.innerHTML +=
        "<img src=" + h.icon + ">" +
        "<h2>" + h.headline + "</h2>" +
        "<p>" + h.text + "</p>";

        html_advantages.appendChild(advantagesDiv);
}
)
