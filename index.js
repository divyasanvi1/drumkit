var numofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numofbuttons; i++) {

    console.log("attaching event listner to",document.querySelectorAll(".drum")[i].innerHTML);
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //what to do when click detected
        console.log("button clicked");
       
        var buttonInnerHtml = this.innerHTML.trim();

      console.log("buttoninnerhtml :",buttonInnerHtml);
        switch (buttonInnerHtml) {
            case "w":
                console.log("palying audio1 file");
                var tom1 = new Audio("sounds/sound/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var audio2 = new Audio("sounds/sound/tom-2.mp3");
                audio2.play();
                break;

            case "s":
                var audio3 = new Audio("sounds/sound/tom-3.mp3");
                audio3.play();
                break;

            case "d":
                var audio4 = new Audio("sounds/sound/tom-4.mp3");
                audio4.play();
                break;

            case "j":
                var audio5 = new Audio("sounds/sound/crash.mp3");
                audio5.play();
                break;

            case "k":
                var audio6 = new Audio("sounds/sound/kick-bass.mp3");
                audio6.play();
                break;

            case "l":
                var audio7 = new Audio("sounds/sound/snare.mp3");
                audio7.play();
                break;

            default: console.log();
        }

    });
}

