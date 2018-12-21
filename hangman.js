var animals = ["cat","dog","fish","cow","horse","sheep","monkey","kangaroo","baboon","tiger"];
var countries = ["Algeria","Mexico","Bolivia", "Spain", "Mongolia","Pakistan", "India", "Argentina","Uzbekistan", "China"];
var fruits = ["pear","guava","pineapple","strawberry","papaya","banana","apple","starfruit", "lychee","tomato"];
var states = ["Nebraska","Idaho", "Delaware", "Wyoming","Utah","Oregon","Nevada","Arkansas", "Kentucky","Iowa"];
var candy = ["Hershey","Starburst","Crunch","Twix","Twizzlers","Snickers","Pez","Dots","York","Skittles"];
var classes = ["Math", "History","English","Biology","Spanish","French","Economics","Anthropology","Chemistry","Physics"];
var images = ["images/h6.png","images/h5.png","images/h7.png","images/h4.png","images/h3.png","images/h2.png",
    "images/h1.png","images/man.png"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var word = "";
var lives = 6;
var guessLetters = [];
var spaces = "";
var wrong = "";
function startGame() {
    document.getElementById("images").src
    var cat = checkCat();
        if(cat==true){
            checkLetter();
        }
}
function chooseWord() {
    var category = document.getElementById("category").value;
    var num = parseInt(category);
    var ran= "";
        if (num == 1) {
            ran = animals;
        }
        if (num == 2) {
            ran = countries;
        }
        if (num == 3) {
            ran = fruits;
        }
        if (num == 4) {
            ran = states;
        }
        if (num == 5) {
            ran = candy;
        }
        if (num == 6) {
            ran = classes;
        }
        var value = ran[Math.floor(Math.random() * ran.length)];
        var value2 = value.toLowerCase();
        return value2;
}
function underscore(word) {
    var answer = "";
    for(var i = 0; i <word.length; i++){
        answer += "_"
    }
    return answer;

}
function hangman() {
    word = chooseWord();
    spaces = underscore(word);
    document.getElementById("word").innerHTML=spaces;
    document.getElementById("left").innerHTML="Guesses Left: " + lives;
}
function checkCat(){
    var cat = document.getElementById("category").value;
    var cat2 = parseInt(cat);
        if(cat2==0) {
            document.getElementById("error").innerHTML = "Error: Please select category";
            return false;
        }else{
            return true;
        }
}
function checkLetter(){
    var letter = document.getElementById("guess").value;
    var validateGuess = validate(alphabet,letter);
    var used = contains(guessLetters,letter);
    if(lives>=1) {
        if (validateGuess == true && used==false) {
            var include = contains(word, letter);
            if (include == true) {
                document.getElementById("images").src=images[lives];
                var answer2 = "";
                for (var i = 0; i < word.length; i++) {
                    if (letter.indexOf(word[i]) != -1) {
                        answer2 += word[i];
                    } else {
                        answer2 += spaces[i];

                    }
                }
                spaces = answer2;
            }
        }
    }
            guessLetters += letter;
            document.getElementById("word").innerHTML = spaces;
                if(answer2==word) {
                    document.getElementById("guess1").style.display="none";
                    document.getElementById("won").innerHTML = "You Won!";
                    document.getElementById("images").src=images[7];
                    createButton();
}
                if(include==false){
                    wrong += letter;
                    lives = lives - 1;
                    document.getElementById("images").src=images[lives];
            if (lives != 0) {
                document.getElementById("left").innerHTML = "Guesses Left: " + lives;
                document.getElementById("letters").innerHTML = "Incorrect Guesses: " + wrong;
            }if(lives==0){
                document.getElementById("guess1").style.display="none";
                document.getElementById("left").innerHTML = "Guesses Left: " + lives;
                document.getElementById("lost").innerHTML = "You Lost";
                createButton();
            }
        }
    document.getElementById("guess").value="";
}

//assigns amount of guesses given
function guesses(){
    var length = word.length;
    var half = length/2;
        if(length%2==0){
            document.getElementById("left").innerHTML= half;
        }else{
            document.getElementById("left").innerHTML=Math.round(half);
        }
        return half;
}
function validate(word1,word2) {
    for (var i=0; i<word1.length; i++){
        if (word2==word1[i]){
            return true;
        }

        } return false;
}
function contains(x,y) {
    if(x.includes(y)){
        return true;
    }else {
        return false;
    }
}

function endGame() {
    document.getElementById("button").innerHTML="";
    wrong = "";
    lives=6;
    spaces = "";
    guessLetters="";
    document.getElementById("guess1").style.display="block";
    document.getElementById("left").innerHTML = "Guesses Left: " + lives;
    document.getElementById("word").innerHTML = spaces;
    document.getElementById("won").innerHTML="";
    document.getElementById("lost").innerHTML="";
    document.getElementById("category").value=0;
    document.getElementById("letters").innerHTML="";
    document.getElementById("images").src=images[lives];
}
function createButton() {
    var btn;
    var div = document.getElementById("button");
    btn = document.createElement("button");
    btn.setAttribute("onclick","endGame()");
    btn.innerHTML = "Restart";
    div.appendChild(btn);
}
