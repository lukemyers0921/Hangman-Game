
    var animals = [ 
        {name:"owl",image:"../images/animals/owl.png",difficulty: 1},
        {name:"pig",image: "../images/animals/pig.png",difficulty: 1},
        {name:"dog",image: "../images/animals/dog.png",difficulty: 1},
        {name:"cat",image: "../images/animals/cat.png",difficulty: 1},
        {name:"cow",image: "../images/animals/cow.png",difficulty: 1},
        {name:"fox",image: "../images/animals/fox.png",difficulty: 1},
        {name:"duck",image: "../images/animals/duck.png",difficulty: 2},
        {name:"bear",image: "../images/animals/bear.png",difficulty: 2},
        {name:"lion",image: "../images/animals/lion.png",difficulty: 2},
        {name:"bird",image: "../images/animals/bird.png",difficulty: 2},
        {name:"sheep",image: "../images/animals/sheep.png",difficulty: 2},
        {name:"horse",image: "../images/animals/horse.png",difficulty: 2},
        {name:"snake",image: "../images/animals/snake.png",difficulty: 2},
        {name:"rabbit",image: "../images/animals/rabbit.png",difficulty: 3},
        {name:"raccoon",image: "../images/animals/raccoon.png",difficulty: 3},
        {name:"chicken",image: "../images/animals/chicken.png",difficulty: 3},
        {name:"giraffe",image: "../images/animals/giraffe.png",difficulty: 3},
        {name:"elephant",image: "../images/animals/elephant.png",difficulty: 4},
        {name:"reindeer",image: "../images/animals/reindeer.png",difficulty: 4},
        {name:"hedgehog",image: "../images/animals/hedgehog.png",difficulty: 4},
        {name:"alligator",image: "../images/animals/alligator.png",difficulty: 4},
        {name:"hippopotamus",image: "../images/animals/hippo.png",difficulty: 5},
        ];

        // current animal, makeUnderscore, compareLetters adds to makeUnderscore or gussedLetters
    
    var counter = 0;
    var currentAnimal = animals[counter].name;
    var currentImage = animals[counter].image;
    var currentDifficulty = animals[counter].difficulty;
    var underscore = [];
    var guessesLeft = 7;
    var guessedLetters = [];
    
    function underscoreMaker() {
        for(i = 0; i < currentAnimal.length; i++) {
         underscore.push('_')
        }
    }
    function nextAnimal(){
        var underscore = [];
        var guessedLetters = [];
        var counter = counter + 1; 
        var guessesLeft = 7;
    }
    function isGuessCorrect(a) {
        if(guessedLetters.indexOf(a) >= 0) {
        }
        else if(currentAnimal.indexOf(a) !== -1) {
            compareLetters(currentAnimal,a);
        } 
        else if(currentAnimal.indexOf(a) < 0){
            guessesLeft = guessesLeft -1;
        }
            guessedLetters.push(a);
        
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
            var hangman = "../images/hangman/one.png"
        }
        if(guessesLeft == 6){
            var hangman = "../images/hangman/two.png"
        }
        if(guessesLeft == 5){
            var hangman = "../images/hangman/three.png"
        }
        if(guessesLeft == 4){
            var hangman = "../images/hangman/four.png"
        }
        if(guessesLeft == 3){
            var hangman = "../images/hangman/five.png"
        }
        if(guessesLeft == 2){
            var hangman = "../images/hangman/six.png"
        }
        if(guessesLeft == 1){
            var hangman = "../images/hangman/seven.png"
        }
        if(guessesLeft == 0){
            var hangman = "../images/hangman/Defeat.png"
        }
    }
    underscoreMaker();
    document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.which).toLowerCase();
    isGuessCorrect(letter);
    console.log(underscore.toString());
    console.log(guessedLetters.toString());
    console.log(guessesLeft);
    }
