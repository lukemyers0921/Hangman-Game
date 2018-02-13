
    var animals = [ 
        {name:"owl",image:"assets/images/animals/owl.png",difficulty: 1},
        {name:"pig",image: "assets/images/animals/pig.png",difficulty: 1},
        {name:"dog",image: "assets/images/animals/dog.png",difficulty: 1},
        {name:"cat",image: "assets/images/animals/cat.png",difficulty: 1},
        {name:"cow",image: "assets/images/animals/cow.png",difficulty: 1},
        {name:"fox",image: "assets/images/animals/fox.png",difficulty: 1},
        {name:"duck",image: "assets/images/animals/duck.png",difficulty: 2},
        {name:"bear",image: "assets/images/animals/bear.png",difficulty: 2},
        {name:"lion",image: "assets/images/animals/lion.png",difficulty: 2},
        {name:"sheep",image: "assets/images/animals/sheep.png",difficulty: 2},
        {name:"horse",image: "assets/images/animals/horse.png",difficulty: 2},
        {name:"snake",image: "assets/images/animals/snake.png",difficulty: 2},
        {name:"rabbit",image: "assets/images/animals/rabbit.png",difficulty: 3},
        {name:"raccoon",image: "assets/images/animals/raccoon.png",difficulty: 3},
        {name:"chicken",image: "assets/images/animals/chicken.png",difficulty: 3},
        {name:"giraffe",image: "assets/images/animals/giraffe.png",difficulty: 3},
        {name:"elephant",image: "assets/images/animals/elephant.png",difficulty: 4},
        {name:"reindeer",image: "assets/images/animals/reindeer.png",difficulty: 4},
        {name:"hedgehog",image: "assets/images/animals/hedgehog.png",difficulty: 4},
        {name:"alligator",image: "assets/images/animals/alligator.png",difficulty: 4},
        {name:"hippopotamus",image: "assets/images/animals/hippo.png",difficulty: 5},
        {name:"",image: "assets/images/animals/winner2.png",difficulty: 5},
        {name:"codebreaks",image: "assets/images/animals/hippo.png",difficulty: 5},
        ];

        // current animal, makeUnderscore, compareLetters adds to makeUnderscore or gussedLetters
    
    var counter = 0;
    var currentAnimal = animals[counter].name;
    var currentDifficulty = animals[counter].difficulty;
    var underscore = [];
    var guessesLeft = 7;
    var guessedLetters = [];
    var wins = 0;
    var loses = 0;
    var progress = counter + 1;
    var picture = counter - 1;

    function isCorrect() {
        if(underscore.join("") == currentAnimal) {
            wins++;
            nextAnimal(); 
        }
        else if(guessesLeft < 0) {
            loses++;
            nextAnimal();
        } else {

        }

    }
    function underscoreMaker() {
        for(i = 0; i < currentAnimal.length; i++) {
         underscore.push('_')
        }
    }
    function alphabetReset(){
        var x = document.getElementsByClassName("alphabet");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.color = "black";
}
    }
    function nextAnimal(){
        
        guessedLetters = [];
        counter++;
        progress++;
        picture++;
        currentAnimal = animals[counter].name;
        underscore = [];
        underscoreMaker();
        guessesLeft = 7;
        document.getElementById("lastAnimalGrab").src = animals[picture].image;
        alphabetReset();

    }
    function isGuessCorrect(a) {
        if(guessedLetters.indexOf(a) >= 0) {
        }
        else if(currentAnimal.indexOf(a) !== -1) {
            compareLetters(currentAnimal,a);
            guessedLetters.push(a);
            document.getElementById(a).style.color = "red";
        } 
        else if(currentAnimal.indexOf(a) < 0){
            guessesLeft = guessesLeft -1;
            guessedLetters.push(a);
            document.getElementById(a).style.color = "red";
        }
            
        
    }
    function compareLetters(x,y){
        for(i = 0;i < x.length;i++){
            if(y == x[i]) {
             underscore[i] = x[i];
            }
        }
}
    function hangman() {
        if(guessesLeft == 7){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/one.png";
        }
        if(guessesLeft == 6){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/two.png";
        }
        if(guessesLeft == 5){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/three.png";
        }
        if(guessesLeft == 4){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/four.png";
        }
        if(guessesLeft == 3){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/five.png";
        }
        if(guessesLeft == 2){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/six.png";
        }
        if(guessesLeft == 1){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/seven.png";
        }
        if(guessesLeft == 0){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/eigth.png";
        }
        if(counter > 20){
            document.getElementById("hangmanGrab").src = "assets/images/hangman/winner.png";
        }
    }

    function updateHTML(){
        document.getElementById("underscoreH").innerHTML = underscore.join("");
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("loses").innerHTML = loses;
        document.getElementById("progress").innerHTML = progress + "/" + animals.length;
    }

    function sequence(a){
        isGuessCorrect(a);
        isCorrect();
        hangman();
        updateHTML();
    }
    window.onload = function what(){
        document.getElementById('guessesLeft').innerHTML = '7';
        document.getElementById('wins').innerHTML = '0';
        document.getElementById('loses').innerHTML = '0';
        document.getElementById('progress').innerHTML = '1/22';
        document.getElementById("hangmanGrab").src = "assets/images/hangman/one.png";
        document.getElementById("lastAnimalGrab").src = "assets/images/animals/first.png";
        };
    underscoreMaker();
    document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.which).toLowerCase();
    isGuessCorrect(letter);
    isCorrect();
    hangman();
    updateHTML();
    }
