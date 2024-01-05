$(document).ready(function () {
    $('.draggable').draggable({
        cursor: 'move'
    });

    $("#saveButton").click(function () {
        html2canvas(document.querySelector("#potato-body"), {
            backgroundColor: null
        }).then(canvas => {

            var picture = document.createElement("a");
            picture.download = "YourPotato.png";
            picture.href = canvas.toDataURL("image/png;base64");
            picture.click();
        });
    });

 
});