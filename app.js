const translateInput = document.querySelector("#translate-input");
const btnTranslate = document.querySelector("#btn-translate");
const translateOutput = document.querySelector("#translate-output");

const serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function finalURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error: ", error);
}

function clickHandler() {
    let textValue = translateInput.value;

    fetch(finalURL(textValue))
    .then(response => response.json())
    .then(json => {
        let translation = json.contents.translated;
        translateOutput.innerText = translation;
    })
    .catch (errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);