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
  playerSelection = playerSelection.toLowerCase()

  if ( availableWinningCombo(playerSelection, computerSelection)) {
    return "You Win!" + " "
  } else if ( playerSelection === computerSelection) {
    return "TIE!" + " "
  } else {
    return "You Lose..." + " " 
  }
}

function resultCommentaryPart(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()

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

function playARound( playerSelection = validateInput( prompt('Enter: rock, paper, or scissors') ) ) {
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

rockButton     = document.createElement('button')
paperButton    = document.createElement('button')
scissorsButton = document.createElement('button')

playerScoreDiv = document.createElement('div')
computerScoreDiv = document.createElement('div')
scoresDiv = document.createElement('div')

rockButton.textContent = "Rock"
paperButton.textContent = "Paper"
scissorsButton.textContent = "Scissors"
playerScoreDiv.textContent = 'Player: 0'
computerScoreDiv.textContent = 'Computer: 0'

let roundCount = 0

function buttonCallback(event) {
  roundCount++ 

  let playerSelection = event.target.textContent

  let roundResultMessage = playARound(playerSelection)

  let playerScoreContent = playerScoreDiv.textContent 
  let computerScoreContent = computerScoreDiv.textContent 
  let playerScore = Number(  playerScoreContent.match(/\d+/g)[0] )
  let computerScore = Number(  computerScoreContent.match(/\d+/g)[0] )

  alert( roundResultMessage )

  if ( roundResultMessage.startsWith('You Win') ) {
    playerScoreDiv.textContent = playerScoreContent.slice(0, -1) + ++playerScore 
  } else if ( roundResultMessage.startsWith('You Lose') ) {
    computerScoreDiv.textContent = computerScoreContent.slice(0, -1) + ++computerScore
  }
  
  if ( roundCount === 5) {
    document.body.removeEventListener('click', buttonCallback)

    if ( playerScore > computerScore ) {
      alert('Player Wins!')
    } else if ( computerScore > playerScore) {
      alert('Computers shall rule this planet')
    } else {
      alert('It\'s a tie between humanity and machines!')
    }
  }
}

document.body.addEventListener('click', buttonCallback)

document.body.appendChild(rockButton)
document.body.appendChild(paperButton)
document.body.appendChild(scissorsButton)
scoresDiv.appendChild(playerScoreDiv)
scoresDiv.appendChild(computerScoreDiv)
document.body.appendChild(scoresDiv)
