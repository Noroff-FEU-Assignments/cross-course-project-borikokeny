const removeButton = document.querySelector(".remove-button");

for (var i = 0; i < removeButton.length; i++) {
    const button = removeButton[i];
    button.addEventListener("click", myFunction);
    function myFunction() {
        console.log("a")
    }

    }