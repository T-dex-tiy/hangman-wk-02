function onLoad(){
 // var playerName= prompt("What should I call you");
 //  document.getElementById("start").onclick = function(){
 //    function chooseWord ()
 //    document.getElementById("player-name").innerHTML = playerName;
 //  }


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
    "come","made","may","part"];

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let alphabetNode = document.querySelector("div#alphabet")
  alphabetNode.textContent = alphabet.join(" ");

  // var letter =2;
  // var letters =1;
  function chooseWord () {
    var randomWord = wordsCom[Math.floor(Math.random() * wordsCom.length)];
    console.log(randomWord);
     return randomWord;

  };

  let word = chooseWord();

  function blanksFromAnswer (word) {
    var result = "";
    for ( i = 0; i < word.length; i++){
      result= result + "_";
    }

    return result;
  }

  let test = document.getElementById("one");
  test.textContent= blanksFromAnswer(word);
  let result = blanksFromAnswer(word);

  console.log(result);

  function verifyInput () {
    if (typeof input !== "string" || input.length != 1) {
      console.log("not a valid entry!");
      return false;
    }
    return true;
  }

  function checkLetter (letter, word, result) {
    console.log(result);
    let arr = result.split("");
    let i = -1;
    do {
      // i++;
      i = word.indexOf(letter, ++i);
      arr[i] = letter;
    } while (i != -1)
    let joinArr = arr.join("");
    console.log(joinArr);
    return joinArr;
  }

  let vari = document.querySelector('input#vari');
  let btn = document.querySelector("button#accept"); btn.addEventListener('click', function(){
    letter = vari.value;
    console.log(letter);
    verifyInput(letter);
    checkLetter(letter,word,result);
    return letter;
  });

}
window.onload = onLoad;
