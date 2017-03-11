var wordsCom = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

function chooseWord () {
  var randomWord = wordsCom[Math.floor(Math.random() * wordsCom.length)];
   return randomWord;
};


let word=chooseWord();

//let test = document.getElementById("one");
 //test.textContent= word;

 function blanksFromAnswer ( word ) {

    var result = "";
    for ( i = 0; i < word.length; i++){
    result= result + "_ ";
}
    return result;
}

let test = document.getElementById("one");
 test.textContent= blanksFromAnswer(word);
