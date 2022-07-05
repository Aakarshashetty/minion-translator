var btnTranslator = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector(".output");
var url = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURl(text){
    return url+"?"+"text= "+text;
}
function errorHandler(error){
    console.log("Error occured "+error)
}
 function buttonClicked(){
    console.log("Button Clickled!");
    var inputText = txtInput.value;
    fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
};
btnTranslator.addEventListener("click", buttonClicked)
