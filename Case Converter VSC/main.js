document.getElementById("upper-case").addEventListener("click", function() {
    document.getElementById("textarea").value = document.getElementById("textarea").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    document.getElementById("textarea").value = document.getElementById("textarea").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    let text = document.getElementById("textarea").value.toString().toLowerCase();
    let newText;
    newText = text.charAt(0).toUpperCase() + text.substring(1);
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " ") {
            newText = newText.substring(0, i + 1) + text.charAt(i + 1).toUpperCase() + newText.substring(i + 2);
        }
    }
    document.getElementById("textarea").value = newText;
});

document.getElementById("sentence-case").addEventListener("click", function() {
    let text = document.getElementById("textarea").value.toString().toLowerCase();
    let newText;
    newText = text.charAt(0).toUpperCase() + text.substring(1);
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == "." || text.charAt(i) == "?" || text.charAt(i) == "!"  && i != text.length - 1) {
            newText = newText.substring(0, i + 2) + text.charAt(i + 2).toUpperCase() + newText.substring(i + 3);
        }
    }
    document.getElementById("textarea").value = newText;
});

document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("textarea").value;
    download("text.txt", text);
});    

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

