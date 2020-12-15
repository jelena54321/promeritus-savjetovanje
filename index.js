$(document).ready(pageLoaded);

function getCurrentLanguage() {
    if (window.location.href.indexOf('?') == -1) {
        return "hr";
    } else {
        return "en";
    }
}

function pageLoaded() {
    let script = document.createElement("script");
    script.src = "src/strings/strings." + getCurrentLanguage() + ".js";
    script.onload = loadStrings;
    document.head.appendChild(script);
}

function loadStrings() {
    document.title = strings.about_us_page_title;

    document.getElementById("home-menu-item").innerText += strings.home;
    document.getElementById("about-us-menu-item").innerText += strings.about_us;
    document.getElementById("vision-and-mission-menu-item").innerText += strings.vision_and_mission;
    document.getElementById("services-menu-item").innerText += strings.services;
    document.getElementById("contact-menu-item").innerText += strings.contact;

    let language = getCurrentLanguage();
    document.getElementById("selected-language").innerText += language.toUpperCase();
    document.getElementById("unselected-language").innerText += (language == "hr" ? "en" : "hr").toUpperCase();

    document.getElementById("about-us-title").innerText += strings.about_us_title;

    document.getElementById("about-us-content").innerText += strings.about_us_content;
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