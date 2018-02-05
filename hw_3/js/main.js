window.addEventListener("load", function(event) {
    var collection = document.querySelectorAll(".cont");


    collection.forEach(function (value) {
        value.style.width = "400px";
        value.style.height = "400px";

    console.log(value.children);

        var i = 0;
        if (value.children[i].width < Number.parseInt(value.style.width));
            value.children[i].style.marginLeft = ((Number.parseInt(value.style.width) - value.children[i].width) / 2) + 'px';
        if (value.children[i].height < Number.parseInt(value.style.height));
            value.children[i].style.marginTop = ((Number.parseInt(value.style.height) - value.children[i].height) / 2) + 'px';
    });
});

