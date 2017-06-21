function PlayersA(points){
    this.points = points;
}
PlayersA.prototype.calculateScores = function(randomValue){
    while (randomValue > 0){
       $('#nameOne').prop('disabled', true);
    if (randomValue === 1){
        alert("You have burnt");
        $('#Button').prop('disabled', true);
        $('#Button1').prop('disabled', false);
        //scores.push(this.points);
        break;
        
    }else{
        return this.points += randomValue;
        }
    }
};

PlayersA.prototype.holdCards = function(){
     $('#Button').prop('disabled', true);
     $('#Button1').prop('disabled', false);
     alert("You have hold your cards at "+ this.points);
};
PlayersA.prototype.winner = function(){
   if(this.points >= 100){
        alert("You have won");
        $('#Button').prop('disabled', true);
        $('#Button1').prop('disabled', true);
        
    } 
};
function PlayersB(points){
    this.points = points;
}
PlayersB.prototype.calculateScores = function(randomValue){
    while(randomValue > 0){
         $('#nameTwo').prop('disabled', true);
        if (randomValue ===1){
            alert("You have Burnt");
            $('#Button').prop('disabled', false);
            $('#Button1').prop('disabled', true);
            break;
        }else{
            return this.points += randomValue;
        }
    }
};
PlayersB.prototype.holdCards = function(){
     $('#Button').prop('disabled', false);
     $('#Button1').prop('disabled', true);
     alert("You have hold your cards at "+ this.points);
};
PlayersB.prototype.winner = function(){
   if(this.points >= 100){
        alert("You have won");
        $('#Button').prop('disabled', true);
        $('#Button1').prop('disabled', true);
        
    } 
};

//User Interface
$(document).ready(function(){
    //An object for player1
    var result  = new PlayersA(0);
    //An object of player2
    var result1  = new PlayersB(0);
    $('form#playerOne').submit(function(event){
        event.preventDefault();
        var randomm = Math.floor(Math.random() * 6) + 1;
        var name1 = $('input#name1').val();
        
        
        
        $('#name11').text("Name: " + name1);
        $('#numbers1').text(result.points);
        
        result.calculateScores(randomm);
        result.winner();
        
        });
    $('form#playerTwo').submit(function(event){
        event.preventDefault();
        var random2 = Math.floor(Math.random() * 6) + 1;
        var name2 = $('input#name2').val();
        
         
        $('#name12').text("Name: " + name2);
        $('#numbers2').text(result1.points);
        
        result1.calculateScores(random2);
         result1.winner();
        });
    $('form#hold').submit(function(event){
        event.preventDefault();
        
        result.holdCards();
        });
    $('form#hold1').submit(function(event){
        event.preventDefault();
        
        result1.holdCards();
        });
    });