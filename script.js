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
  return ( ( isRock(playerSelection)     && isScissors(computerSelection) ) 
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

function playRound(playerSelection, computerSelection) {
  let lowercasedPlayerSelection = playerSelection.toLowerCase()

  return resultPart(lowercasedPlayerSelection, computerSelection)
       + resultCommentaryPart(lowercasedPlayerSelection, computerSelection)
}

let computerSelection = getComputerChoice() 

console.log( playRound('rock', computerSelection) )
