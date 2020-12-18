$(document).ready(servicesPageLoaded);

services = {
    "pharmacoeconomic-analysis": "pharmacoeconomic_analysis", 
    "medical-affairs": "medical_affairs", 
    "regulatory-affairs": "regulatory_affairs", 
    "second-medical-opinion": "second_medical_opinion"
}

function servicesPageLoaded() {
    let script = document.getElementById("strings");
    script.addEventListener("load", loadServicesStrings);
}

function loadServicesStrings() {
    document.title = strings.services_page_title;

    document.getElementById("services-title").innerText += strings.services_title;
    getServicesList();
}

function getServicesList() {
    let html = "";
    for (let service in services) {
        html +=
        `
        <div id="${service}" class="service">
            <div class="service-content">
                <img src="../src/images/${service}.png" height=80px>
                <p class="service-title">${strings[services[service]]}</p>
                <button type="button">${strings["read_more"]}</button>
            </div>
        </div>
        `;
    }

    document.getElementById("services-list").innerHTML += html;
}

function getServices() {
    let html = "";
    let i = 0;

    for (service in services) {
        let imageHTML = 
        `
        <div class="centered-image">
            <img src="../src/images/.png">
        </div>
        `;

        let titleHTML =
        `
        <div class="centered-content-container">
            <div class="centered-content"></div>
        </div>
        `;

        html +=
        `
        <div id="${service}-anchor" class="split-in-two-container">
            <div class="centered-image">
                <img src="../src/images/${service}-details.png">
            </div>
            <div class="centered-content-container">
                <div class="centered-content"></div>
            </div>
        </div>
        `;
    }
}