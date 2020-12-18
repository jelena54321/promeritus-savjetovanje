$(document).ready(pageLoaded);

linker = {
    "index.html": "home",
    "about_us.html": "about-us",
    "vision_and_mission.html": "vision-and-mission",
    "services.html": "services",
    "contact.html": "contact"
}

function pageLoaded() {
    showHeader();

    let script = document.createElement("script");
    script.id = "strings"
    script.src = `../src/strings/strings.${getCurrentLanguage()}.js`;
    script.addEventListener("load", loadStrings);
    document.head.appendChild(script);
}

function getCurrentLanguage() {
    if (window.location.href.indexOf('?') == -1) {
        return "hr";
    } else {
        return "en";
    }
}

function loadStrings() {
    document.getElementById("home-menu-item").innerText += strings.home;
    document.getElementById("about-us-menu-item").innerText += strings.about_us;
    document.getElementById("vision-and-mission-menu-item").innerText += strings.vision_and_mission;
    document.getElementById("services-menu-item").innerText += strings.services;
    document.getElementById("contact-menu-item").innerText += strings.contact;

    let language = getCurrentLanguage();
    document.getElementById("selected-language").innerText += language.toUpperCase();
    document.getElementById("unselected-language").innerText += (language == "hr" ? "en" : "hr").toUpperCase();
}

function showHeader() {
    document.getElementById('header').innerHTML +=
    `
    <div class="header-content">

            <div class="logo-container">
                <img width="180px" src="../src/images/logo.png" alt="logo">
            </div>

            ${getPageMenu()}

            <div class="language-menu">
                <button id="selected-language" class="language-menu-button" type="button"></button>
                <div class="language-menu-content">
                  <a id="unselected-language" href="javascript:changeLanguage();"></a>
                </div>
            </div>
        
    </div>
    `
}

function getPageMenu() {
    let currentPageURL = window.location.href;
    let startIndex = currentPageURL.lastIndexOf("/") + 1;
    let endIndex = currentPageURL.indexOf("?");
    let currentPage = endIndex == -1 ? 
        currentPageURL.substring(startIndex) : 
        currentPageURL.substring(startIndex, endIndex);

    let html = "<div class='page-menu'>"
    for (let file in linker) {
        html += 
        `
        <button 
            id='${linker[file]}-menu-item' 
            class=${currentPage == file ? 'selected-menu-item' : 'unselected-menu-item'}
            onclick='redirectTo("${file}");'
            type='button'>
        </button>
        `
    }
    html += "</div>"

    return html;
}

function changeLanguage() {
    let url = window.location.href;
    if (getCurrentLanguage() == "hr") {
        url += "?lang=en";
    } else {
        url = url.substring(0, url.indexOf('?'));
    }

    window.location.href = url;
}

function redirectTo(file) {
    let baseURL = `../${linker[file]}/${file}`;
    window.location.href = getCurrentLanguage() == "en" ? baseURL + "?lang=en" : baseURL;
}