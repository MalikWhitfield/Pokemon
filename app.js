let red = {
  name: 'Red',
  health: 300,
  spirit: ['fighting', 'faint'],
  hitCount: 0,
}

let mewtwo = {
  name: 'Mewtwo',
  health: 300,
  spirit: ['fighting', 'faint'],
  hitCount: 0,
}

let attacks = [{
  name: 'Razor Leaf',
  value: 20
}, {
  name: 'Hydro Pump',
  value: 25,
}, {
  name: 'Flamethrower',
  value: 30,
}]

let fightBack = {
  value: [10, 15, 20, 25, 30]
}

function attack(index) {
  mewtwo.health -= attacks[index].value;
  red.hitCount += 1;
  red.health -= Math.floor()
  console.log(mewtwo.health)
  update()
}

function modify(index) {
  attacks[index].value -= 10
}

function recover(num) {

}

function getRandom(min, max) {
  return Math.random() * (30 - 10)
}


function returnAttack(index) {
  red.health -= fightBack[index].value
}

function moveCount() { }

function update() {
  document.getElementById("redProgress").innerHTML = `
      <div class="progress-bar pbColor" role="progressbar" style="width:${(mewtwo.health / 300) * 100}%"></div>
  `
}

update()