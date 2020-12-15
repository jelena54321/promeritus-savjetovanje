$(document).ready(homePageLoaded);

function homePageLoaded() {
    let script = document.createElement("script");
    script.src = `src/strings/strings.${getCurrentLanguage()}.js`;
    script.onload = loadHomeStrings;
    document.head.appendChild(script);
}

function loadHomeStrings() {
    document.title = strings.about_us_page_title;

    document.getElementById("about-us-title").innerText += strings.about_us_title;
    document.getElementById("about-us-content").innerText += strings.about_us_content;
}