window.onload = function() {
    var runBtn = document.getElementById("run-btn");
    runBtn.onclick = function() {
        var input = document.getElementById("textarea");
        var output = document.getElementById("output");
        output.innerHTML = input.value;
    }
}