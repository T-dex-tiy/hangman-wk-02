# First f***ing function

Created first function to random word ons page. Issues with getting items to page. Testing on [Python](http://pythontutor.com/visualize.html#code=var%20wordsCom%20%3D%20%5B%0A%20%20%22the%22,%22of%22,%22and%22,%22a%22,%22to%22,%22in%22,%22is%22,%22you%22,%22that%22,%22it%22,%22he%22,%0A%20%20%22was%22,%22for%22,%22on%22,%22are%22,%22as%22,%22with%22,%22his%22,%22they%22,%22I%22,%22at%22,%22be%22,%0A%20%20%22this%22,%22have%22,%22from%22,%22or%22,%22one%22,%22had%22,%22by%22,%22word%22,%22but%22,%22not%22,%0A%20%20%22what%22,%22all%22,%22were%22,%22we%22,%22when%22,%22your%22,%22can%22,%22said%22,%22there%22,%0A%20%20%22use%22,%22an%22,%22each%22,%22which%22,%22she%22,%22do%22,%22how%22,%22their%22,%22if%22,%22will%22,%0A%20%20%22up%22,%22other%22,%22about%22,%22out%22,%22many%22,%22then%22,%22them%22,%22these%22,%22so%22,%0A%20%20%22some%22,%22her%22,%22would%22,%22make%22,%22like%22,%22him%22,%22into%22,%22time%22,%22has%22,%0A%20%20%22look%22,%22two%22,%22more%22,%22write%22,%22go%22,%22see%22,%22number%22,%22no%22,%22way%22,%0A%20%20%22could%22,%22people%22,%22my%22,%22than%22,%22first%22,%22water%22,%22been%22,%22call%22,%0A%20%20%22who%22,%22oil%22,%22its%22,%22now%22,%22find%22,%22long%22,%22down%22,%22day%22,%22did%22,%22get%22,%0A%20%20%22come%22,%22made%22,%22may%22,%22part%22%0A%5D%3B%0A%0Afunction%20chooseWord%20%28%29%20%7B%0A%20%20var%20randomWord%20%3D%20wordsCom%5BMath.floor%28Math.random%28%29%20*%20wordsCom.length%29%5D%3B%0A%20%20%20return%20randomWord%3B%0A%7D%3B%0A%0A%0Alet%20word%3DchooseWord%28%29%3B%0Aconsole.log%28word%29%0A%0A%0A&cumulative=false&curInstr=6&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)Capitalization of "by" in get element caused issues for showing word. After syntax correction. Word appeared on page. O

After getting that to run needed to change words into blanks. Needed to change words into blanks. Added to previous code with console.log [Python tutor](http://pythontutor.com/visualize.html#code=var%20wordsCom%20%3D%20%5B%0A%20%20%22the%22,%22of%22,%22and%22,%22a%22,%22to%22,%22in%22,%22is%22,%22you%22,%22that%22,%22it%22,%22he%22,%0A%20%20%22was%22,%22for%22,%22on%22,%22are%22,%22as%22,%22with%22,%22his%22,%22they%22,%22I%22,%22at%22,%22be%22,%0A%20%20%22this%22,%22have%22,%22from%22,%22or%22,%22one%22,%22had%22,%22by%22,%22word%22,%22but%22,%22not%22,%0A%20%20%22what%22,%22all%22,%22were%22,%22we%22,%22when%22,%22your%22,%22can%22,%22said%22,%22there%22,%0A%20%20%22use%22,%22an%22,%22each%22,%22which%22,%22she%22,%22do%22,%22how%22,%22their%22,%22if%22,%22will%22,%0A%20%20%22up%22,%22other%22,%22about%22,%22out%22,%22many%22,%22then%22,%22them%22,%22these%22,%22so%22,%0A%20%20%22some%22,%22her%22,%22would%22,%22make%22,%22like%22,%22him%22,%22into%22,%22time%22,%22has%22,%0A%20%20%22look%22,%22two%22,%22more%22,%22write%22,%22go%22,%22see%22,%22number%22,%22no%22,%22way%22,%0A%20%20%22could%22,%22people%22,%22my%22,%22than%22,%22first%22,%22water%22,%22been%22,%22call%22,%0A%20%20%22who%22,%22oil%22,%22its%22,%22now%22,%22find%22,%22long%22,%22down%22,%22day%22,%22did%22,%22get%22,%0A%20%20%22come%22,%22made%22,%22may%22,%22part%22%0A%5D%3B%0A%0Afunction%20chooseWord%20%28%29%20%7B%0A%20%20var%20randomWord%20%3D%20wordsCom%5BMath.floor%28Math.random%28%29%20*%20wordsCom.length%29%5D%3B%0A%20%20%20return%20randomWord%3B%0A%7D%3B%0A%0A%0Alet%20word%3DchooseWord%28%29%3B%0A%20function%20blanksFromAnswer%20%28%20word%20%29%20%7B%0A%0A%20%20%20%20var%20result%20%3D%20%22%22%3B%0A%20%20%20%20for%20%28%20var%20i%20%3D%200%3B%20i%20%3C%20word.length%3B%20i%2B%2B%29%7B%0A%20%20%20%20result%3D%20result%20%2B%20%22_%20%22%3B%0A%7D%0A%20%20%20%20%20console.log%20%28result%29%3B%0A%7D%0AblanksFromAnswer%20%28%22weeee%22%29%0A%0A//console.log%20%28result%29%0A&cumulative=false&curInstr=26&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)


Stuck on conecting the letter guessing to the game.
I have added a input and text box just to get something on the page.

Struggled with grabbing the data from the input field on to the app to change the DOM. After playing with eventlister and query selector Managed to get code to work.


Added Alpahbet visual to HTML thru Javascript with // let alphabetNode = document.querySelector("div#alphabet")
alphabetNode.textContent = alphabet.join(" ");

[Python tutor](http://pythontutor.com/javascript.html#code=%0Afunction%20alterAt%20%28%20n,%20c,%20word%29%20%7B%0A%20%20%20%20return%20word.substr%280,n%29%20%2B%20c%20%2B%20word.substr%281%2Bn,word.length%29%3B%0A%0A%20%7D%0Afunction%20guessLetter%28%20letter,%20shown,%20answer%20%29%20%7B%0A%20%20%20%20var%20checkIndex%20%3D%200%3B%0A%0A%20%20%20%20checkIndex%20%3D%20answer.indexOf%28letter%29%3B%0A%20%20%20%20while%20%28%20checkIndex%20%3E%3D%200%20%29%20%7B%0A%20%20%20%20%20%20%20%20shown%20%3D%20alterAt%28%20checkIndex,%20letter,%20shown%20%29%3B%0A%20%20%20%20%20%20%20%20checkIndex%20%3D%20answer.indexOf%28letter,%20checkIndex%20%2B%201%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20shown%3B%0A%7D%0A%0AalterAt%284,%20guessLetter,%20'joining'%29%0AguessLetter%20%28%22n%22,%20%22_%22,%20%22n%22%29&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D) Got the correct varibles to print
  --------------

  Weeks of no work and came back and added needed functions to push data into array and display array. Tied those items into the attempts that are left in the players guesses. Should add an attempted letter box, but with the time frame on this being WAY OVER DUE figured I would get this up and finshed before I just straight up frogot about it.

## Would like to add ##
-clear/reset button
-way of clearing input box after each guess
-removal of letter from array(this one I think I could do with 20 more lines of code and with how bloated this one feels I will figure out how to remove them another way. .splice maybe?)

-General optimization of the code would be great to look back and see what I have done since I started.

______________________
----------------------

That is all for the notes of this project while a student/sponge at the Iron Yard 4/26/2017
