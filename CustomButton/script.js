function applyButton(){
    let bg_inp = document.getElementById("bgColorInput").value;
    let fontColor_inp = document.getElementById("fontColorInput").value;
    let fontSize_inp = document.getElementById("fontSizeInput").value;
    let fontWeight_inp = document.getElementById("fontWeightInput").value;
    let pd_inp = document.getElementById("paddingInput").value;
    let brdr_inp = document.getElementById("borderRadiusInput").value;
    let custom_btn = document.getElementById("customButton");
    //console.log(bg_inp);
    //console.log(fontColor_inp);
    custom_btn.style.backgroundColor = bg_inp;
    custom_btn.style.color = fontColor_inp;
    custom_btn.style.fontSize = fontSize_inp;
    custom_btn.style.fontWeight = fontWeight_inp;
    custom_btn.style.padding = pd_inp;
    custom_btn.style.borderRadius = brdr_inp;
}