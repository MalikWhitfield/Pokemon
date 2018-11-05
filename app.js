let red = {
  name: 'Red',
  health: 225,
  spirit: ['fighting', 'faint'],
  hitCount: 0,
}

let mewtwo = {
  name: 'Mewtwo',
  health: 250,
  spirit: ['fighting', 'faint'],
  hitCount: 0,
}

let attacks = [{
  name: 'Razor Leaf',
  value: 10
}, {
  name: 'Hydro Pump',
  value: 20,
}, {
  name: 'Flamethrower',
  value: 30,
}]


let modifiers =
  [
    {
      name: 'Light Screen',
      value: 5,
      description: 'Decreases the power of attacks by 5'
    }, {
      name: 'Reflect',
      value: 10,
      description: 'Decreases the power of attacks by 10'
    }, {
      name: 'Recover',
      value: 100,
      description: 'Increases health by 100'
    }
  ]

function attack(index) {
  mewtwo.health -= attacks[index].value
  red.hitCount++;
  red.health -= 10 + Math.floor((Math.random() * ((30 - 10) + 1)));
  if (mewtwo.health <= 0) {
    mewtwo.health = 0
  }
  if (red.health <= 0) {
    red.health = 0
  }
  console.log(mewtwo.health);
  console.log(red.health);
  update();
  youWin()
  youLose()
}

function lightScreen(index) {
  attacks[1].value = 10
  attacks[2].value = 15
  update()
}

function reflect(index) {
  attacks[0].value = 5
  update()
}

function recover(num) {
  mewtwo.health += 100
  console.log(mewtwo.health)
  update()
}


function playAgain() {
  mewtwo.health = 250
  red.health = 225
  red.hitCount = 0
  attacks[0].value = 10
  attacks[1].value = 20
  attacks[2].value = 30
  update()
}


function update() {
  document.getElementById("mewProgress").innerHTML = `
      <div class="progress-bar pbColor" role="progressbar" style="width:${(mewtwo.health / 250) * 100}%"></div>
  `
  document.getElementById("red-hitCount").innerHTML = `
  <div id="red-hitCount" class="col-4">
      <button onclick="attack(0)" class="btn-success">Razor Leaf</button>
      <button onclick="attack(1)" class="btn-info">Hydro Pump</button>
      <button onclick="attack(2)" class="btn-danger">Flamethrower</button>
      <p> Hit Count : ${red.hitCount}</p>
  `
  document.getElementById("redProgress").innerHTML = `
  <div class="progress-bar pbColor" role="progressbar" style="width:${(red.health / 225) * 100}%"></div>
  `
  document.getElementById("mewStats").innerHTML = `
  <div>
        <p> Health : ${mewtwo.health} </p>
      </div>
  `
  document.getElementById("redStats").innerHTML = `
  <div id="redStats">
        <p> Health : ${red.health} </p>
      </div>
      `
}

function youWin() {
  if (mewtwo.health <= 0)
    alert("You win. I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.")
}
function youLose() {
  if (red.health <= 0)
    alert("You lose! Behold my powers! I am the strongest Pokémon in the world. Stronger even than Mew.")
}





update()
youLose()
youWin()