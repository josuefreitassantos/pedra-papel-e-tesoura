var iaScore = 0
var playerScore = 0
function play(pChoice){
  var iaChoice = Math.floor(Math.random()*3) + 1
  var winner
  if( (iaChoice == 1 && pChoice == 3) || 
      (iaChoice == 2 && pChoice == 1) ||
      (iaChoice == 3 && pChoice == 2) ){
    winner = "IA"
    iaScore++
  }else if(iaChoice == pChoice){
    winner = "NOBODY"
  }else{
    winner = "PLAYER"
    playerScore++
  }
  var out = document.getElementById("out")
  out.innerHTML = winner + " WINS!!!"

  var sc = document.getElementById("score")
  sc.innerHTML = "PLAYER:"+playerScore+" X "+iaScore+":IA"
}



