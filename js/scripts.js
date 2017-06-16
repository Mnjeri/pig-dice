function playerA(randomA){
  this.randomA=randomA;
}
function playerB(randomB){
  this.randomB=randomB;
}
// //prototypes
// playerA.prototype.scoreA=function(){
//   return this.randomA;
// }
// playerB.prototype.scoreB=function(){
//   return this.randomB;
// }
//playerA
$(document).ready(function(){
  
  var newPlayerA=new playerA(playerOne);
  var playerOne=0;
  var newPlayerB=new playerB(playerTwo);
  var playerTwo=0;
  $("form#One").submit(function(event){
    event.preventDefault();
    var randomNumberA=Math.floor(Math.random() * 6) + 1;
    if(randomNumberA===1){
      alert("sorry, you have rolled 1");
      $("button#buttonA").prop('disabled',true);
      $("button#buttonB").prop('disabled',false);
      
    }
    else{
        playerOne+=randomNumberA;
      }
    console.log(playerA);
      //$("p#1").text(playerOne);
     
  });
  $("form#Two").submit(function(event){
    event.preventDefault();
    var randomNumberB=Math.floor(Math.random() * 6) + 1;
    if(randomNumberB===1){
      alert("sorry, you have rolled 1");
      $("button#buttonB").prop('disabled',true);
      $("button#buttonA").prop('disabled',false);
      
    }
    else{
      playerTwo+=randomNumberB;
    }
console.log(playerB);

//$("p#2").text(playerTwo);
    
    
  });
});



