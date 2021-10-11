let points = 0;
let turns = 0;


function StartGame() {
    let randomNumberHits = Math.floor(Math.random() * 25);
    
    $.ajax({
        url: "https://pixabay.com/api/?key=23745914-b481be82f21d60cee3a75f588&image_type=photo&pretty=true&page=" + randomNumberHits,
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
             //Crée une variable qui me sort un nombre aléatoire
             let randomNumber = Math.floor(Math.random() * data.hits.length);

            $(".game").text("");
            $(".game").append("<img src=" + data.hits[randomNumber].webformatURL + ">");
            $(".game").append("<input type='text' class='gameEuuuuuh' id='gameEuuuuuh' name='gameEuuuuuh'>");
            

            let tags = data.hits[randomNumber].tags;
            tags = tags.split(", ");

            console.log(tags);
            

            $(".gameEuuuuuh").change(function () {

                if (tags.includes($(this).val())) {
                    turns++;
                    points++;
                    console.log(points);
                } else {
                    turns++;
                    console.log(points);
                }

                if(turns >= 10){
                    EndGame();
                } else {
                    StartGame();
                }

            });

        }

    });
}

function EndGame() {
    $(".game").text("");
    $(".game").append("<h1>Game Over</h1>");
    $(".game").append("<h2>Your score is " + points + "/10" + "</h2>");
    $(".game").append("<button class='gameButton' id='gameButton'>Restart</button>");
    
    $("#gameButton").click(function () {
        points = 0;
        turns = 0;
        StartGame();
    });
}