function capitalize(string) {
  let firstCharacter = string.charAt(0).toUpperCase()
  let restOfString = string.slice(1)

  return firstCharacter + restOfString
}

function getRandomNumberTill(max_number) {
  return Math.floor ( Math.random() * max_number ) + 1
}

function getComputerChoice() {
  let randomNumber = getRandomNumberTill(3) 

  switch(randomNumber) {
    case 1:
      return 'rock'
      break
    case 2:
      return 'paper'
      break
    case 3:
      return 'scissors'
      break
  } 
}

function isRock(selection) {
  return selection === 'rock'
}

function isPaper(selection) {
  return selection === 'paper'
}

function isScissors(selection) {
  return selection === 'scissors'
}

function availableWinningCombo(playerSelection, computerSelection) {
  return ( ( isRock(playerSelection)      && isScissors(computerSelection) ) 
        ||( isPaper(playerSelection)      && isRock(computerSelection) )
        ||( isScissors(playerSelection)   && isPaper(computerSelection) ) )
}

function resultPart(playerSelection, computerSelection) {
  if ( availableWinningCombo(playerSelection, computerSelection)) {
    return "You Win!" + " "
  } else if ( playerSelection === computerSelection) {
    return "TIE!" + " "
  } else {
    return "You Lose..." + " " 
  }
}

function resultCommentaryPart(playerSelection, computerSelection) {
  if ( availableWinningCombo(playerSelection, computerSelection) ){
    return `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
  } else if ( playerSelection === computerSelection) {
    return ``
  } else {
    return `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
  }
}

function scoresResult(playerScore, computerScore) {
  return `Player: ${playerScore} Computer: ${computerScore}`
}

function isInvalidSelection(selection) {
  return !( ['rock', 'paper', 'scissors'].includes( selection.toLowerCase() ) )
}
  
function validateInput(selection) {
    let toBeValidatedSelection = selection

    while ( isInvalidSelection(toBeValidatedSelection) ) {
      toBeValidatedSelection = prompt(`That's not rock, paper, or scissors. Try again :)`) 
    } 

  let validatedSelection = toBeValidatedSelection
  return validatedSelection
} 

function playARound() {
  let playerSelection = validateInput( prompt('Enter: rock, paper, or scissors') ) 
  let computerSelection = getComputerChoice()
  let roundResultMessage = resultPart(playerSelection, computerSelection)
                  + resultCommentaryPart(playerSelection, computerSelection) 

  return roundResultMessage
}

function playManyRounds(number_of_rounds) {
  let playerScore   = 0
  let computerScore = 0

  for (let i = 1; i <= number_of_rounds; i++) {
    let roundResultMessage = playARound()

    if ( roundResultMessage.startsWith('You Win') ) {
      playerScore++ 
    } else if ( roundResultMessage.startsWith('You Lose') ) {
      computerScore++
    }

    alert( roundResultMessage + '\n\n' + scoresResult(playerScore, computerScore) )
  }

  if ( playerScore > computerScore ) {
    alert('Player Wins!')
  } else if ( computerScore > playerScore) {
    alert('Computers shall rule this planet')
  } else {
    alert('It\'s a tie between humanity and machines!')
  }
}

function playRPS() {
  playManyRounds(5) 
}

playRPS()
