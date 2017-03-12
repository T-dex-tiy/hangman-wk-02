function onLoad(){

var wordsCom = [
  "the","and","you","that",
  "was","for","are","with","his","they",
  "this","have","from","one","had","word","but","not",
  "what","all","were","when","your","can","said","there",
  "use","each","which","she","how","their","will","other","about","many","then","them","these",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","see","number","way",
  "could","people","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



// var letter =2;
// var letters =1;
function chooseWord () {
  var randomWord = wordsCom[Math.floor(Math.random() * wordsCom.length)];
   return randomWord;
};


let word=chooseWord();


 function blanksFromAnswer ( word ) {

    var result = "";
    for ( i = 0; i < word.length; i++){
    result= result + "_ ";
}
    return result;
}

let test = document.getElementById("one");
 test.textContent= blanksFromAnswer(word);

 function alterAt ( n, choice, word) {
    return word.substr(0,n) + choice + word.substr(1+n,word.length);

 }
 function guessLetter( letter, shown, answer ) {
    var checkIndex = 0;

    checkIndex = answer.indexOf(letter);
    while ( checkIndex >= 0 ) {
        shown = alterAt( checkIndex, letter, shown );
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}

 let boxInput = document.querySelector ('input');
 letter = boxInput.value;
 // console.log(letter)

 function insertVar(){
   console.log('', letter);
 }
   var btn = document.querySelector ('button');
  //
  //   function insertVar(){
  //     var choice =
  //     document.getElementById("vari") = choice
  // }
  btn.addEventListener('click', insertVar);
//  var n ="word".indexOf(c)

// var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// test.textContent = alterAt(n,c,word);




}
window.onload = onLoad;
