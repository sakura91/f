var ul = document.querySelector(".container");
ul.addEventListener("click", function (e) {

    if ("li" === e.target.localName) {
        if (e.target.classList.contains("active")) {
            e.target.classList.toggle("active");
            e.target.classList.toggle("disabled");
        } else {
            e.target.classList.toggle("active");
            e.target.classList.toggle("disabled");
        }
    }
});

function disabledAllLi() {
    var arr = [].slice.call(ul.children);

    arr.forEach(function (element) {

        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }

        if (!element.classList.contains("disabled")) {
            element.classList.add("disabled");
        }
    });
}

disabledAllLi();
