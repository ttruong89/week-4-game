
		var playerScore = 0;
 		var wins = 0;
 		var losses = 0;
 		var computerScore = 0;
 		var pink = 0;
 		var orange = 0;
 		var purple = 0;
 		var blue = 0;





// Restart game function.
 	function gameReset(){
 		playerScore = 0;
 		wins = 0;
 		 losses = 0;
 		 computerScore = Math.floor((Math.random() * 102) + 19);
 		 pink = Math.ceil(Math.random() * 12);
 		orange = Math.ceil(Math.random() * 12);
 		purple = Math.ceil(Math.random() * 12);
 		 blue = Math.ceil(Math.random() * 12);
 	};	

 // Gameplay function.
 	function game(){
 		if (playerScore == computerScore) {
 			wins++;
 			$("#Message").html("You win!");
 			scoreUpdate();
 			gameReset();
 		} else if (playerScore > computerScore) {
 			losses++;
 			$("#Message").html("You lose!");
 			scoreUpdate();
 			gameReset();
 		} else {
 			scoreUpdate();
 		}
 	};

 	function event() {
 		$("#total").append(computerScore);
 		
 		$("#score").append(playerScore);

 		$("#pink").click(function(){
 			playerScore = playerScore + pink;
 			game();
 		})

 		$("#orange").click(function(){
 			playerScore = playerScore + orange;
 			game();
 		})

 		$("#purple").click(function(){
 			playerScore = playerScore + purple;
 			game();
 		})

 		$("#blue").click(function(){
 			playerScore = playerScore + blue;
 			game();
 		});

 	}

 	

 // Updates user's score and wins/loss section.
 	function scoreUpdate() {
 		$("#score").empty();
 		$("#score").append(playerScore);

 		$("#Wins").empty();
 		$("#Wins").append(wins);

 		$("#Losses").empty();
 		$("#Losses").append(losses);
 	};

 
$(document).ready(function() {

 // Reset function.
 	gameReset();
 	event();

 });
