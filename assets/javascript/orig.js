 $(document).ready(function() {

 // General variables for gameplay
	var wins = 0;
 	var losses = 0;
 	var playerScore = 0;
 	var computerScore = Math.ceil((Math.random() * 102) + 19);

 	var pink = Math.ceil(Math.random() * 12);
 	var orange = Math.ceil(Math.random() * 12);
 	var purple = Math.ceil(Math.random() * 12);
 	var blue = Math.ceil(Math.random() * 12);
 // Gameplay function.
 	function game(){
 		if (playerScore == computerScore) {
 			wins++;
 			$("#Message").html("You win!");
 			gameReset();
 		} else if (playerScore > computerScore) {
 			losses++;
 			$("#Message").html("You lose!");
 			gameReset();
 		} else {
 			scoreUpdate();
 		}
 	};

 	$("#total").append(computerScore);
 	$("#score").append(playerScore);

 	$( document ).ready(function() {
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
 	});

 // Updates user's score and wins/loss section.
 	function scoreUpdate() {
 		$("#score").empty();
 		$("#score").append(playerScore);

 		$("#Wins").empty();
 		$("#Wins").append(wins);

 		$("#Losses").empty();
 		$("#Losses").append(losses);
 	};

 // Restart game function.
 	function gameReset(){
 		playerScore = 0;
 			
 		computerScore = Math.floor((Math.random() * 102) + 19);

 		$("#total").empty();
 		$("#total").append(computerScore);

 		pink = Math.ceil(Math.random() * 12);
 		orange = Math.ceil(Math.random() * 12);
 		purple = Math.ceil(Math.random() * 12);
 		blue = Math.ceil(Math.random() * 12);
 		scoreUpdate();
 	};	

});