let red = {
  name: 'Red',
  health: 200,
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

let hits = 0

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
    },
  ]

function attack(index) {
  mewtwo.health -= attacks[index].value;
  red.hitCount++;
  red.health -= 10 + Math.floor((Math.random() * ((30 - 10) + 1)));
  console.log(mewtwo.health);
  console.log(red.health);
  update();
  youWin()
}

function modify(index) {
  attacks[index].value -= modifiers[index].value
  update()
}

function recover(num) {
  mewtwo.health += 100
  console.log(mewtwo.health)
  update()
}

// function getRandom(min, max) {
//   return Math.random() * (30 - 10)
// }

function playAgain() {
  mewtwo.health = 250
  red.health = 200
  red.hitCount = 0
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
  <div class="progress-bar pbColor" role="progressbar" style="width:${(red.health / 200) * 100}%></div>
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
    document.write('You Win!')
} if (red.health <= 0)
  document.write('You Lose!')

update()
youWin()
