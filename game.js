// console.log($("h1"));
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var level = 0;
var log = "wrong";



function audioPlay(params) {
    console.log(params);
    switch (params) {
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;

        default:
            break;
    }
}




function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    audioPlay(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    var choseColourButton = "#" + randomChosenColour;
    $(choseColourButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#level-title").text("Level " + ++level)
}


function handler(params) {
    // console.log(params);
    userClickedPattern.push(params);
    console.log(userClickedPattern);
    // var userChosenColour = 
}

function animatePress(parms) {
    document.querySelector("#" + parms).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("#" + parms).classList.remove("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    console.log(currentLevel + "level");
    if (gamePattern[currentLevel - 1] === userClickedPattern[currentLevel - 1]) {
        return log = "success";
    } else {
        return log = "wrong";
    }
}


function startGame() {
    $(document).on("keypress", function (e) {
        // console.log(e.key);
        // if (e.key == "a") {
        nextSequence();
        flag = 1;


        // }
        // console.log(choseColourButton);


    });
}

var flag = 0;
$(document).on("keypress", function (e) {
    // console.log(e.key);
    if (e.key == "a" && flag === 0) {
        nextSequence();
        flag = 1;
    }
});
// console.log(choseColourButton);



// var choseColourButton = "#" + randomChosenColour;
// // console.log(choseColourButton);

// $(choseColourButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// audioPlay(randomChosenColour);

// console.log(randomChosenColour);

// audioPlay(choseColourButton);let 
let l = 0
$(".btn").on("click", function () {

    // audioPlay($(".btn").attr("id"));


    // console.log($(this).attr("id"));
    audioPlay($(this).attr("id"));
    animatePress($(this).attr("id"))
    console.log(level);
    if (flag == 1) {
        l++;
        handler($(this).attr("id"));
        console.log(l);
        console.log(result);
        if (l == level) {
            console.log(l);
            var result = checkAnswer(level);
            console.log(result);
            if (result === "success") {
                setTimeout(nextSequence(), 500);
                userClickedPattern = [];
                l = 0;
            } else {
                $("#level-title").text("Press Any key to restart");
                $("body").addClass("game-over");
                setTimeout(function () {
                    $("body").removeClass("game-over");
                }, 100);

                var audio = new Audio("sounds/wrong.mp3");
                audio.play();
                gamePattern = [];
                userClickedPattern = [];
                l = 0;
                level = 0;
                flag = 2;
                startGame();
            }
        }
    } else if (flag == 2) {
        $("#level-title").text("Press Any key to restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100);
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
    }
    // console.log(l);






});

