function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
	switch (getRandomInt(0, 3)) {
		case 0:
			return "rock";
		case 1:
			return "scissors";
		case 2:
			return "paper";
	}
}

function playRound(playerChoice, computerChoice) {
	let player = playerChoice.toLowerCase();
	let cpu = computerChoice;

	if (player === cpu) {
		return "Es un empate";
	} else if (player == "rock" && cpu == "scissors") {
		return "Player win, rock beat scissor";
	} else if (player == "scissors" && cpu == "paper") {
		return "Player win, scissors beat paper";
	} else if (player == "paper" && cpu == "rock") {
		return "Player win, paper beat rock";
	} else if (cpu == "rock" && player == "scissors") {
		return "cpu win, rock beat scissors";
	} else if (cpu == "scissors" && player == "paper") {
		return "cpu win, scissors beat paper";
	} else if (cpu == "paper" && player == "rock") {
		return "cpu win, paper beat rock";
	}
}

function validate() {
	
	while (true) {
        a = prompt("Rock, Paper, or Scissors?").toLocaleLowerCase();
		if (a === "rock" || a === "paper" || a === "scissors") {
			return a;
		} else {
			alert(
				"invalid option, write only one of the following options: rock, paper or scissors"
			);
            continue;
		}
	}
}

function playGame(tryNum = 5) {
	let player = 0;
	let cpu = 0;
	let empate = 0;
	for (var i = 0; i < tryNum; i++) {
		let winner = playRound(validate(), getComputerChoice());
		console.log(winner);
		if (winner.slice(0, 3) == "Pla") {
			player += 1;
		} else if (winner.slice(0, 3) == "cpu") {
			cpu += 1;
		} else {
			empate += 1;
		}
	}
	if (player > cpu) {
		console.log("player wins!");
	} else if (cpu > player) {
		console.log("cpu wins!");
	} else {
		console.log("is a tie!");
	}
	console.log("Player: " + player + " cpu: " + cpu + " tie: " + empate);
}

// const play = "rock";
// const cpu = getComputerChoice();
// console.log(play);
// console.log(cpu);
// console.log(playRound(play, cpu));
playGame();
