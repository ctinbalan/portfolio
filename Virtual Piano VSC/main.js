document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        let key = document.querySelector("#key1");
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/A.mp3");
        sound.play();
    } else if (event.code == "KeyS") {
        let key = document.querySelector("#key2");
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/S.mp3");
        sound.play();
    } else if (event.code == "KeyD") {
        let key = document.querySelector("#key3");
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/D.mp3");
        sound.play();
    } else if (event.code == "KeyF") {
        let key = document.querySelector("#key4");
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/F.mp3");
        sound.play();
    } else if (event.code == "KeyG") {
        let key = document.querySelector("#key5");
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/G.mp3");
        sound.play();
    } else if (event.code == "KeyH") {
        let key = document.querySelector("#key6");
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/H.mp3");
        sound.play();
    } else if (event.code == "KeyJ") {
        let key = document.querySelector("#key7");
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/J.mp3");
        sound.play();
    } else if (event.code == "KeyW") {
        let key = document.querySelector("#key11");
        key.classList.add("active-black");
        setTimeout(function() { key.classList.remove("active-black"); }, 250);
        let sound = new Audio("sounds/W.mp3");
        sound.play();
    } else if (event.code == "KeyE") {
        let key = document.querySelector("#key12");
        key.classList.add("active-black");
        setTimeout(function() { key.classList.remove("active-black"); }, 250);
        let sound = new Audio("sounds/E.mp3");
        sound.play();
    } else if (event.code == "KeyT") {
        let key = document.querySelector("#key13");
        key.classList.add("active-black");
        setTimeout(function() { key.classList.remove("active-black"); }, 250);
        let sound = new Audio("sounds/T.mp3");
        sound.play();
    } else if (event.code == "KeyY") {
        let key = document.querySelector("#key14");
        key.classList.add("active-black");
        setTimeout(function() { key.classList.remove("active-black"); }, 250);
        let sound = new Audio("sounds/Y.mp3");
        sound.play();
    } else if (event.code == "KeyU") {
        let key = document.querySelector("#key15");
        key.classList.add("active-black");
        setTimeout(function() { key.classList.remove("active-black"); }, 250);
        let sound = new Audio("sounds/U.mp3");
        sound.play();
    } else {
        console.log("Press another key.");
    }
})

/* const keys = ["A","S","D","F","G","H","J","W","E","T","Y","U"];

document.addEventListener("keydown", function(event) {
    if (keys.includes(event.key.toUpperCase())) {
        let key = document.querySelector(".key" + event.key.toUpperCase()); // the class ".key..." doesn't exist in the HTML, add classes to each key for this function to work
        key.classList.add("active-white");
        setTimeout(function() { key.classList.remove("active-white"); }, 250);
        let sound = new Audio("sounds/" + event.key.toUpperCase() + ".mp3");
        sound.play();
    }
}); */
