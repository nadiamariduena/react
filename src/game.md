# 🍦

# Rock / Paper / Scissor

<br>

#### ✋ In this section I will be testing the different ways to adapt this game

<br>

#### Beginner

```javascript
let computer = "scissors";
let player = "paper";
let reply;

if (player === computer) {
  reply = `tie game`;
} else if (player === "rock") {
  // if player has rock, and computer has paper, computer wins
  if (computer === "paper") {
    reply = `computer wins`;
  } else {
    reply = `player wins`;
  }
  //
} else if (player === "paper") {
  if (computer === "scissors") {
    reply = `computer wins`;
  } else {
    reply = `player wins`;
  }
} else {
  if (computer === "rock") {
    reply = `computer wins`;
  } else {
    reply = `player wins`;
  }
}
console.log(reply);
```

<br>
<br>

```javascript
let computer = "paper";
let player = "";
let reply;

if (player === computer) {
  reply = `tie game`;
} else if (player === "rock") {
  if (computer === "paper") {
    reply = `computer wins`;
  } else {
    reply = `player wins`;
  }
} else if (player === "paper") {
  if (computer === "scissors") {
    reply = `computer wins`;
  } else {
    reply = `player wins`;
  }
} else {
  if (computer === "rock") {
    reply = `computer wins`;
  } else {
    reply = `player wins`;
  }
}
console.log(reply);
```

#### result

```javascript
player wins
```

<br>
<br>

## Switch 🍨

#### Switch is another tool to make decisions with javascript

```javascript
switch (expression Or Value) {
```

 <br>

#### Switch check an expression or value then takes a waterfall shape (will check from up to down), to check any number of possible cases

<br>

- ✋ The Logical order of the cases is important

<br>

- If **case 1** is a match, the switch statement should stop with the **break command** and never make to the evaluation state of **case 2**

<br>

```javascript
let computer = "scissors";
let player = "paper";
//
switch (player) {
  case computer:
    console.log("Tie game");
    break;
  //
  case "rock":
    if (computer === "paper") {
      console.log("computer wins");
    } else {
      console.log("player wins");
    }
    break;
  //
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins");
    } else {
      console.log("player wins");
    }
    break;
  //
  default:
    if (computer === "rock") {
      console.log("computer wins");
    } else {
      console.log("player wins");
    }
}
```

#### result

- computer wins

> **Explanation:** On the top we have this variable: **let computer = "scissors";** and the **let player = "paper";**

- look at the **case "paper":** we know that paper can be cut, so the one who has a scissor in that spicific **case** will win, but why the **computer?**, because we are asking if(the computer) has itm not the player

<br>
<br>

---

<br>

## Combining all the knowledge below:

(0:15:16) Strings
(0:22:14) Numbers
(0:27:54) Math Methods
(0:32:57) Code Challenge
(0:40:04) If Statements
(0:46:10) Switch Statements
(0:49:39) Ternary Operators
(0:54:38) User Input

[JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours](https://youtu.be/EfAl9bwzVZk)

<br>
<br>

# THE GAME 🍨

##### we will start by defining a variable called 'playGame', because we need to ask the user if they want to play the game

<br>

- And we can do that with the **confirm** box that should pop up

<br>

```javascript
//
let playGame = confirm("shall we play rock, paper,scissors");
```

#### result

- You will see a dialog box asking you to confirm, the options are **cancel or okay**

> 🔴 Somehow I get an error in the vs console as **Unexpected use of 'confirm' no-restricted-globals**

#### solution

> Disallow specific global variables (no-restricted-globals)

- You can do it by **hovering** on the **confirm** that is causing the problem, when you hover a small window will appear, click quick fix and the click the the first option which is **Disallow specific global variables (no-restricted-globals)**

<br>

### Next step will be to check the value of the variable below

```javascript
//
let playGame;
```

<br>

#### We will check the value with a condition

- If **playGame** holds a value, a value that its not undefined or not null, then we want to play the game. You will also add a message in case the user DONT WANT to play a game

```javascript
//1  If  playGame  holds a value, a value that its not undefined or not null,
if (playGame) {
  //2  then we are going to play a game
} else {
  //3 You will also add a message in case the user DONT WANT to play a game
  alert("Ok, maybe next time");
}
```

#### Now that we are ready to play, we need to let the player make a choice

- Let the user go first, as in the last examples we let the computer go first

> let **playerChoice** = prompt("Please enter rock, paper, or rock");

<br>

```javascript
//1  If  playGame  holds a value, a value that its not undefined or not null,
if (playGame) {
  //2  let the player make a choice ✋
  let playerChoice = prompt("Please enter rock, paper, or rock");
} else {
  //3 You will also add a message in case the user DONT WANT to play a game
  alert("Ok, maybe next time");
}
```

<br>

#### Now that we have asked for the prompt, we need to handle the data we get in return

- So the first thing that we should do, is to see if we receive the data we return, IF THE USER click **cancel we will get null**, and we dont want that

<br>

```javascript
//1 , if the playerChoice hold a value,
if (playerChoice) {
  //2 than we can play
} else {
  //3 but if not, we will assume the user changed their mind, but we will only make it until here, IF THE PLAYER has a value (in step 2)
  alert("I guess you changed your mind, Maybe next time");
}
```

<br>

##### Now we need to assign that value

- **trim()** will remove white spaces from left and right, .**toLowerCase();** will convert what the user 'in this case': **playerChoice** will type in the pop up , to lowercase

```javascript
//1 , if the playerChoice hold a value,
if (playerChoice) {
  //2 assign the value
  let playerOne = playerChoice.trim().toLowerCase();
} else {
  //3 but if not, we will assume the user changed their mind, but we will only make it until here, IF THE PLAYER has a value (in step 2)
  alert("I guess you changed your mind, Maybe next time");
}
```

<br>

#### I will enumerate the steps, to get the user choice, i will ignore the cancel outcomes like this <u>I guess you changed your mind, Maybe next time</u>, because you know they will mean to stop the game

```javascript
//1 first pop up
let playGame = confirm("shall we play rock, paper,scissors");
//2
if (playGame) {
  // 3
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  //
  //4
  if (playerChoice) {
    //  5
    let playerOne = playerChoice.trim().toLowerCase();
    //6

    //
  } else {
    //
    alert("I guess you changed your mind, Maybe next time");
  }

  //
} else {
  //
  alert("Ok, maybe next time");
}
```

<br>

#### So we have our 'let playerOne' set up, now we need to know if its rock paper or scissors

<br>

- So here we will ask: <u>if the player One choose:</u> **rock or paper or scissor**, we will do something!. If those 3 statements are **true**, lets say the user writes **rock** it will be true, but if the user writes something like banana for example, it will be **false**

```javascript
// 6
if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
}
```

#### So if the player writes one of the 3 above ⤴️ , we will do something in step 7

- if there s no answer or something that is not 'one' of the 3 options, we will handle it with the else

```javascript
//1 first pop up: asking: shall we ...
let playGame = confirm("shall we play rock, paper,scissors");
//2
if (playGame) {
  // 3 second pop up: asking to enter an answer:
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  //
  //4 setting up the condition if there is an answer configuration
  if (playerChoice) {
    //  5 setting up the settings for the answer, no space and to lowercase
    let playerOne = playerChoice.trim().toLowerCase();
    //
    // 6 the options
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      // 7 so if the player writes one of the 3 options above, we will do something, if there s no answer or something that is not one of the 3, we will handle it with the else
    }
    //
  } else {
    //
    alert("I guess you changed your mind, Maybe next time");
  }

  //
} else {
  //
  alert("Ok, maybe next time");
}
```

#### So if its false, we need to handle it with an else

```javascript
// 6
if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
} else {
  // 8
  alert("you didnt enter rock, paper or scissors");
}
```

#### after adding the alert in step 8, we will have the pop up telling is we didnt add a correct choice.

<br>

### Lets continue

#### Generate a random number from 1 to 3, it will simply randomly will scann the options we are going to give to the computer in step 9

```javascript
// 7
//  its going to generate a random number from 1 to 3
let computerChoice = Math.floor(Math.random() * 3 + 1);
// 9 we will scann the 3 options below
let computer =
  computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
```

<br>

### Now the computer has made its choice, at this point we are ready to pull in the logic for <u>rock paper scissors</u>

```javascript
// 6
if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
  // 7
  //  its going to generate a random number from 1 to 3
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  // 9 we will scann the 3 options below
  let computer =
    computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
} else {
  // 8
  alert("you didnt enter rock, paper or scissors");
}
```

<br>
<br>

```javascript
//1 first pop up: asking: shall we ...
let playGame = confirm("shall we play rock, paper,scissors");
//2
if (playGame) {
  // 3 second pop up: asking to enter an answer:
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  //
  //4 setting up the condition if there is an answer configuration
  if (playerChoice) {
    //  5 setting up the settings for the answer, no space and to lowercase
    let playerOne = playerChoice.trim().toLowerCase();
    //
    // 6
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      // 7
      //  its going to generate a random number from 1 to 3
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      // 9 we will scan the 3 options below
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      //
      // STEP 10
      //
    } else {
      // 8
      alert("you didnt enter rock, paper or scissors");
    }
    //
  } else {
    //
    alert("I guess you changed your mind, Maybe next time");
  }

  //
} else {
  //
  alert("Ok, maybe next time");
}
```

<br>

#### The logic

- ✋ from here we will use the template literals because we want to use the values of ${playerOne} and ${computer} and also because we want to show in the dialog box "what the user and the computer choose", you will see it when we run the code

```javascript
let result =
  playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
    : playerOne === "paper" && computer === "scissors"
    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
    : playerOne === "scissors" && computer === "rock"
    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!!!`;
alert(result);
```

<br>
<br>

##### its going to generate a random number from 1 to 3 , with this you are going to get a random answer , when you will type something, lets say i type rock, the computer is going to choose randomly an answer from the rock, paper, scissors, test it by typing rock in each test

```javascript
//1 first pop up: asking: shall we ...
let playGame = confirm("shall we play rock, paper,scissors");
//2
if (playGame) {
  // 3 second pop up: asking to enter an answer:
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  //
  //4 setting up the condition if there is an answer configuration
  if (playerChoice) {
    //  5 setting up the settings for the answer, no space and to lowercase
    let playerOne = playerChoice.trim().toLowerCase();
    //
    // 6
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      // 7
      //  its going to generate a random number from 1 to 3
      // with this you are going to get a random answer , when you will type something, lets say i type rock, the computer is going to choose randomly an answer from the rock paper scissors
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      // 9 we will scan the 3 options below
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      //
      // STEP 10
      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!!!`;
      alert(result);
      //
    } else {
      // 8
      alert("you didnt enter rock, paper or scissors");
    }
    //
  } else {
    //
    alert("I guess you changed your mind, Maybe next time");
  }

  //
} else {
  //
  alert("Ok, maybe next time");
}
```

#### result

> I typed **rock**

```javascript
// playerOne: rock
// Computer: scissors
// playerOne wins!!!
```

<br>

### Lets add another variable, so to ask the user if he/she wants to play again

- Add the playAgain variable

- add the **location** , the location is going to redirect us to the dialog box of "playAgain" just after we finished playing, if you choose cancel, it will tell you "Ok, thanks for playing"

```javascript
//step 11
let playAgain = confirm("Play Again");
playAgain ? location.reload() : alert("Ok, thanks for playing");
```

#### the code

```javascript
//1 first pop up: asking: shall we ...
// eslint-disable-next-line no-restricted-globals
let playGame = confirm("shall we play rock, paper,scissors");
//2
if (playGame) {
  // 3 second pop up: asking to enter an answer:
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  //
  //4 setting up the condition if there is an answer configuration
  if (playerChoice) {
    //  5 setting up the settings for the answer, no space and to lowercase
    let playerOne = playerChoice.trim().toLowerCase();
    //
    // 6
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      // 7
      //  its going to generate a random number from 1 to 3
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      // 9 we will scan the 3 options below
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      //
      // STEP 10
      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!!!`;
      alert(result);
      //
      //
      //
      // eslint-disable-next-line no-restricted-globals
      let playAgain = confirm("Play Again");
      // eslint-disable-next-line no-restricted-globals
      playAgain ? location.reload() : alert("Ok, thanks for playing");
      //
    } else {
      // 8
      alert("you didnt enter rock, paper or scissors");
    }
    //
  } else {
    //
    alert("I guess you changed your mind, Maybe next time");
  }

  //
} else {
  //
  alert("Ok, maybe next time");
}
```

<br>
<br>
<br>

# RECAPITULATE 🥬

#### Welcome the user and give them the option to play or cancel the game

```javascript
// 1
// dialogue box: will ask the user "shall we play rock, paper"?
let playGame = confirm("Welcome, shall we play rock, paper,scissors?");
//2 if the user wants to play a game, means he clicked 'OK'
if (playGame) {
  //
} else {
  //3 if the user dont wants to play a game, means he clicked 'OK'
  alert("Ok, maybe next time");
}
```

<br>

#### Now that the user accepted by clicking <u>OK</u>, SHOW the user a new dialog box, in this new dialog box the user will have the possibility to write the answer and will as well also have the possibility to cancel the game

<br>

```javascript
//1 here the user will be shown the options: enter rock, paper or scissors
let playerChoice = prompt("Please enter rock, paper, or scissors");
//
//
if (playerChoice) {
  // 2 if the user chose of the 3: rock, paper or scissors
  let playerOne = playerChoice.trim().toLowerCase();

  //3 whatever the user choose, its going to be trim() and .toLowerCase() , meaning that there will be no space and that all the text will be transformed to lowercase
  //
} else {
  //4 Here the user will have the oprtunity to CANCEL again
  alert("I guess you changed your mind, Maybe next time");
}
```

<br>

#### Add the usersChoice and the computers choice

- Here you will add the **3** choices **(rock, paper, or scissors)**, the **computers choice** will be nested inside the **usersChoice**

```javascript
if (playerChoice) {
  // 1 if the user chose of the 3: rock, paper or scissors
  let playerOne = playerChoice.trim().toLowerCase();

  //
  //
  //2 players choice
  if (
    playerOne === "rock" ||
    playerOne === "paper" ||
    playerOne === "scissors"
  ) {
    //
    // 3 computer choice
    //  here below is where the magic happens
    // below: the usersChoice will be confronted to the random answer of the computer
    //  its going to generate a random number or choice from 1 to 3
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    //this below is linked to step 4
    // there we will decide who wins
    let computer =
      computerChoice === 1
        ? "rock"
        : computerChoice === 2
        ? "paper"
        : "scissors";
    //
    //4
    let result =
      playerOne === computer
        ? // if by luck when refreshing, the computer has the same answer as the user, it will be 'Tie game'
          "Tie game!"
        : // otherwise: if the user has rock and the computer has paper, the comp WINS!!
        playerOne === "rock" && computer === "paper"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
        : playerOne === "paper" && computer === "scissors"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
        : playerOne === "scissors" && computer === "rock"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
        : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!!!`;
    //
    //
    // 5
    alert(result);
    //6
    let playAgain = confirm("Play Again");
    playAgain ? location.reload() : alert("Ok, thanks for playing");
  } else {
    //
    alert("you didnt enter rock, paper or scissors");
  }
  //
  //
  //
} else {
  //  Here the user will have the opportunity to CANCEL again
  alert("I guess you changed your mind, Maybe next time");
}
```

#### the code

```javascript
// 1
let playGame = confirm("shall we play rock, paper,scissors");
// 2
if (playGame) {
  // 3
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  //4
  if (playerChoice) {
    // 5
    let playerOne = playerChoice.trim().toLowerCase();

    // 6
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      // 7
      let computerChoice = Math.floor(Math.random() * 3 + 1);

      // 8
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      //
      //9
      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!!!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!!!`;
      // 10
      alert(result);
      //
      // 11
      let playAgain = confirm("Play Again");
      playAgain ? location.reload() : alert("Ok, thanks for playing");
    } else {
      alert("you didnt enter rock, paper or scissors");
    }
  } else {
    alert("I guess you changed your mind, Maybe next time");
  }
} else {
  alert("Ok, maybe next time");
}
```
