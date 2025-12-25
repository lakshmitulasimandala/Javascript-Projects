let userInput = document.getElementById("themeUserInput");
let bgContainer = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");

let currentTheme = "Light";

userInput.addEventListener("keydown", function(event) {
    //let isDark = false;
    //let isLight = false;

    if (event.key === "Enter") {
        let val = userInput.value;

        if (val === "Dark") {
            if (currentTheme === "Dark") {
                alert("Enter valid theme");
            } else {
                headingEl.style.color = "#ffffff";
                bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
                currentTheme = "Dark";
            }
        } else if (val === "Light") {
            if (currentTheme === "Light") {
                alert("Enter valid theme");
            } else {
                headingEl.style.color = "#014d40";
                bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
                currentTheme = "Light";
            }
        } else {
            alert("Enter valid theme");
        }
    }
});