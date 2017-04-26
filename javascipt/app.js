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
    "come","made","may","part"];

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let alphabetNode = document.querySelector("div#alphabet")
  alphabetNode.textContent = alphabet.join(" ");

  var word = '';
  var result = '';
  var letter = '';
  var checkedResult ='';
  var attempts ='10';

//gameplay elements


  function chooseWord () {
    var randomWord = wordsCom[Math.floor(Math.random() * wordsCom.length)];
     return randomWord;

  };

  word = chooseWord();

  function blanksFromAnswer (word) {
    var results = result;
    for ( i = 0; i < word.length; i++){
      results = results + "_";
    }
    return results;
  }
result = blanksFromAnswer(word);
console.log(result, word)

function updatePlyerconsole(){
  let test = document.getElementById("one");
  console.log(test.value);
  test.textContent=result;
}

  function updateResult(checkedResult){
  var newResult = checkedResult;
  result = newResult;
  return newResult;
  };


  function verifyInput(letter) {
    if (typeof input !== 'string' || input.length != 1) {
      console.log("not a valid entry!");
      return false;
    }
    return true;
  }


//Attempting selcetions
  document.querySelector('.attempt').innerHTML = 'YOU HAVE ' + attempts + ' ATTEMPTS LEFT!';

  function guessedLetter(){
    if (word.includes(letter)){
      document.querySelector('.attempt').innerHTML = 'YOU HAVE ' + attempts + ' ATTEMPTS LEFT!';
      return true;
    }
    else{
      document.querySelector('.attempt').innerHTML = 'YOU HAVE ' + attempts + ' ATTEMPTS LEFT!';
      return false;
    }
  }

  function setAttempts(){
    if (guessedLetter()===true){
      var attempt=attempts;
      return attempt;
    }
    else{
    var attempt=attempts;
    attempt--;
    return attempt;
    }
  }

  function showAttempts(setAttempts){
    var newAttempt=setAttempts;
    attempts = newAttempt;
    return newAttempt;
  }

  //Win or lose functions
  function win(){
    if (result.includes('_')){
      return false
    }
    else{
      console.log('You Won!');
    }
  }

  function lives(){
    if(attempts<=0){
      console.log("You lose!");
    }
  }



  //gameplay function
  function checkLetter (letter, word, result) {
    let arr = result.split("");
    let i = -1;
    do {
      // i++;
      i = word.indexOf(letter, ++i);
      arr[i] = letter;
    } while (i != -1)
    let joinArr = arr.join("");
    checkedResult = joinArr;
    return joinArr;
  }


console.log(checkedResult);

  let vari = document.querySelector('input#vari');
  let btn = document.querySelector("button#accept"); btn.addEventListener('click', function(){
    letter = vari.value;
    console.log(letter);
    checkedResult = checkLetter(letter,word,result);
    updateResult(checkedResult);
    blanksFromAnswer(result);
    updatePlyerconsole();
    guessedLetter();
    setAttempts();
    showAttempts(setAttempts());
    win();
    lives();
    console.log("current result", result);
    console.log("current word", word);


    return letter;
  });
updatePlyerconsole();



}
window.onload = onLoad;
