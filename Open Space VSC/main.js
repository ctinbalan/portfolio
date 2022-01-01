const correctPass = "TrustNo1";

let toEnable = document.getElementsByClassName("password-protected");

// enable input controls after the correct password is introduced, then disable password and ok inputs
document.getElementById("ok-button").addEventListener("click", function() {
    let passInput = document.getElementById("pass").value;

    if (passInput == correctPass) {
        for (let i = 0; i < toEnable.length; i++) {
            toEnable[i].removeAttribute("disabled");
        }
        document.getElementById("ok-button").setAttribute("disabled", true);
        document.getElementById("pass").setAttribute("disabled", true);
    } else {
        alert("Incorrect password.");
    }
});

// enable the "Launch!" button after all the checkboxes are checked and all the input ranges are at max value
function a() {
    let counter = 0;
    for (let i = 0; i < toEnable.length; i++) {
        if (i < 6) {
            if (toEnable[i].checked == true) {
                counter++;
            }
        } else {
            if (toEnable[i].value == "100") {
                counter++;
            }
        }
    }
    if (counter == 11) {
        document.getElementById("launch-button").removeAttribute("disabled");
    }
}

function launchRocket() {
    let rocket = document.getElementsByClassName("rocket");
    rocket[0].classList.add("launch");
}

