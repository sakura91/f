var ul = document.querySelector(".container");

ul.addEventListener("click", function (e) {

    if ("li" === e.target.localName) {
        if (e.target.classList.contains("enabled")) {
            setDefoult();
        } else {
            disabledAllLi();
            e.target.classList.toggle("enabled");
            e.target.classList.toggle("disabled");
        }
    }
});

function disabledAllLi() {
    var arr = [].slice.call(ul.children);

    arr.forEach(function (element) {
        if (!element.classList.contains("disabled")) {
            element.classList.add("disabled");
        }
        if (element.classList.contains("enabled")) {
            element.classList.remove("enabled");
        }
    });
}

function setDefoult() {
    var arr = [].slice.call(ul.children);

    arr.forEach(function (element) {
        if (element.classList.contains("disabled")) {
            element.classList.remove("disabled");
        }

        if (element.classList.contains("enabled")) {
            element.classList.remove("enabled");
        }
    });
}

