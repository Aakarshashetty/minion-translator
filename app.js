console.log("Hii!");
var btnTranslator = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector(".output");

btnTranslator.addEventListener("click", function buttonClicked(){
    console.log("Button Clickled!");
    // var input = console.log("input",txtInput.value);
    output.innerText = "Hii "+txtInput.value;
});