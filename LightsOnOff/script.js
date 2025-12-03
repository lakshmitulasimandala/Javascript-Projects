function switchOff(){
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("bulbImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}
 
function switchOn(){
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("bulbImage").src = 
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("offSwitch").style.backgroundColor = "#e0111fff";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}