let atakPlayer;
let atakEnemy;
let lifePlayer = 5;
let lifeEnemy = 5;
let selectionPetPlayer;
let enemy;
let framePuchamon;
let frameAttacks;
let attacks = [];

const cardContainer = document.getElementById("card-container");

let select = document.getElementById("select-pet");

let inputWatari;
let inputFaru;
let inputVanty;
let inputTaiko;
let inputRutzy;

const attacksContainer = document.getElementById("attacks-container");

let buttonWater;
let buttonEarth;
let buttonFire;
let buttonWind;
let buttonLight;

let sectionCombat = document.getElementById("section-combat");
let sectionReset = document.getElementById("section-reset");
let sectionSelectPet = document.getElementById("section-pet");
let imgPetEnemy = document.getElementById("img-pet-enemy");

let spanPetPlayer = document.getElementById("pet-of-player");
let imgPet = document.getElementById("img-pet");

let sectionMensajes = document.getElementById("section-message");

/*En esta secciรณn se agregan y modifican a los puchamones, toca manualmente por ahora */
let puchamones = [];

class Puchamon {
  constructor(name, img, life) {
    this.name = name;
    this.img = img;
    this.life = life;
    this.atacks = [];
  }
}

let watari = new Puchamon("Watari ๐", "/Puchamon/img/watari.png", 5);
let faru = new Puchamon("Faru ๐ฅ", "/Puchamon/img/faru.png", 5);
let vanty = new Puchamon("Vanty ๐", "/Puchamon/img/vanty.png", 5);
let taiko = new Puchamon("Taiko ๐ป", "/Puchamon/img/taiko.png", 5);
let rutzy = new Puchamon("Rutzy โก", "/Puchamon/img/rutzy.png", 5);

/* Por este lado se agregan los ataques personalizados de cada puchamon */
watari.atacks.push(
  { name: "๐", id: "water" },
  { name: "๐", id: "water" },
  { name: "๐", id: "water" },
  { name: "๐", id: "wind" },
  { name: "โก", id: "light" }
);

faru.atacks.push(
  { name: "๐ฅ", id: "fire" },
  { name: "๐ฅ", id: "fire" },
  { name: "๐ฅ", id: "fire" },
  { name: "๐ป", id: "earth" },
  { name: "โก", id: "light" }
);

vanty.atacks.push(
  { name: "๐", id: "wind" },
  { name: "๐", id: "wind" },
  { name: "๐", id: "wind" },
  { name: "๐ป", id: "earth" },
  { name: "๐", id: "water" }
);

rutzy.atacks.push(
  { name: "โก", id: "light" },
  { name: "โก", id: "light" },
  { name: "โก", id: "light" },
  { name: "๐ฅ", id: "fire" },
  { name: "๐", id: "water" }
);

taiko.atacks.push(
  { name: "๐ป", id: "earth" },
  { name: "๐ป", id: "earth" },
  { name: "๐ป", id: "earth" },
  { name: "๐", id: "wind" },
  { name: "๐ฅ", id: "fire" }
);

puchamones.push(watari, faru, vanty, taiko, rutzy);

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  select.addEventListener("click", selectPet);

  /* Se hace uso de algo llamado templates literarios, para poder fusionar el JS con el HTML, se hace con comillas invertidas y las variables se agregan con ${varible}*/
  puchamones.forEach((puchamon) => {
    framePuchamon = `<input type="radio" name="avatar" id="${puchamon.name}" />
    <label class="charter" for="${puchamon.name}">
        <p>${puchamon.name}</p>
        <img src="${puchamon.img}" alt="">
    </label>`;
    cardContainer.innerHTML += framePuchamon;

    inputWatari = document.getElementById("Watari ๐");
    inputFaru = document.getElementById("Faru ๐ฅ");
    inputVanty = document.getElementById("Vanty ๐");
    inputTaiko = document.getElementById("Taiko ๐ป");
    inputRutzy = document.getElementById("Rutzy โก");
  });

  sectionCombat.style.display = "none";
  sectionReset.style.display = "none";
}

function selectPetEnemy() {
  enemy = aleatory(0, puchamones.length - 1);
  imgPetEnemy.src = puchamones[enemy].img;
  sectionCombat.style.display = "flex";
  sectionSelectPet.style.display = "none";
}

/* Se logrรณ reducir el cรณdigo para X cantidad de puchamones */
function selectPet() {
  var radios = document.getElementsByName("avatar");
  let countPicks = true;
  try {
    for (var radio of radios) {
      if (radio.checked) {
        spanPetPlayer.innerHTML = radio.id; //Agregar el nombre del puchamon seleccionado al span
        selectionPetPlayer = radio.id; // Guardarlo en la variable selectionPetPlayer
        puchamones.forEach((puchamon) => {
          //recorrer en busca de la imagen del puchamon
          if (puchamon.name == radio.id) {
            imgPet.src = puchamon.img; //asignar la imagen del puchamon
          }
        });
        selectPetEnemy(); //seleccionar el puchamon del enemigo
        countPicks = false; //confirmar que se haya seleccionado un puchamon
      }
    }
  } catch (error) {
    console.log(
      "Mira lo que pasรณ por el careverga del usuario [ " +
        error +
        " ] no eres el usuario, verdad? ๐"
    );
  }
  if (countPicks) alert("Debes seleccionar un puchamon ๐");
  extractAttacks(selectionPetPlayer);
}

function drawAttacks(skills) {
  /* Agregar los botones de ataques correspondientes de cada puchamon */
  try {
    skills.forEach((skill) => {
      frameAttacks = `<button class="button-element" id="${skill.name}">${skill.name}</button>`;
      attacksContainer.innerHTML += frameAttacks;
    });
    buttonWater = document.getElementById("๐");
    buttonEarth = document.getElementById("๐ป");
    buttonFire = document.getElementById("๐ฅ");
    buttonLight = document.getElementById("โก");
    buttonWind = document.getElementById("๐");

    buttonWater.addEventListener("click", attackWater);
    buttonEarth.addEventListener("click", attackEarth);
    buttonFire.addEventListener("click", attackFire);
    buttonLight.addEventListener("click", attackLight);
    buttonWind.addEventListener("click", attackWind);
  } catch (error) {
    console.log(error);
  }
}

/* Extrar los ataques del puchamon seleccionado */
function extractAttacks(idPuchamon) {
  puchamones.forEach((puchamon) => {
    if (puchamon.name == idPuchamon) {
      attacks = puchamon.atacks;
    }
  });
  drawAttacks(attacks);
}

function attackEnemy() {
  let enemyAtak = aleatory(0, puchamones.length - 1);
  if (enemyAtak == 1) {
    atakEnemy = "Water";
  } else if (enemyAtak == 2) {
    atakEnemy = "Earth";
  } else if (enemyAtak == 3) {
    atakEnemy = "Fire";
  } else if (enemyAtak == 4) {
    atakEnemy = "Wind";
  } else {
    atakEnemy = "Light";
  }
}

function attackWater() {
  atakPlayer = "Water";
  attackEnemy();
  combat();
}

function attackEarth() {
  atakPlayer = "Earth";
  attackEnemy();
  combat();
}

function attackFire() {
  atakPlayer = "Fire";
  attackEnemy();
  combat();
}

function attackWind() {
  atakPlayer = "Wind";
  attackEnemy();
  combat();
}

function attackLight() {
  atakPlayer = "Light";
  attackEnemy();
  combat();
}

function messageWinFinally(message) {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = message;
  sectionMensajes.appendChild(paragraph);

  buttonEarth.disabled = true;
  buttonWater.disabled = true;
  buttonFire.disabled = true;
  buttonLight.disabled = true;
  buttonWind.disabled = true;

  sectionReset.style.display = "block";

  buttonReset = document.getElementById("button-reset");
  buttonReset.addEventListener("click", resetGame);
}

function drawHeart(lives, player, img, selected) {
  if (lives == 5) {
    player.innerHTML = " ๐ค๐ค๐ค๐ค๐ค";
  } else if (lives == 4) {
    player.innerHTML = " ๐ค๐ค๐ค๐ค";
  } else if (lives == 3) {
    player.innerHTML = " ๐ค๐ค๐ค";
  } else if (lives == 2) {
    player.innerHTML = " ๐ค๐ค";
  } else if (lives == 1) {
    player.innerHTML = " ๐ค";
  } else {
    player.innerHTML = "";
    if (selected == 1) {
      img.src = "/Puchamon/IMG/watari-die.png";
    } else if (selected == 2) {
      img.src = "/Puchamon/IMG/faru-die.png";
    } else if (selected == 3) {
      img.src = "/Puchamon/IMG/vanty-die.png";
    } else if (selected == 4) {
      img.src = "/Puchamon/IMG/taiko-die.png";
    } else if (selected == 5) {
      img.src = "/Puchamon/IMG/rutzy-die.png";
    }
  }
}

function reviewLive() {
  if (lifePlayer == 0) {
    messageWinFinally("So sorry you have finally lost this Puchamon match");
  } else if (lifeEnemy == 0) {
    messageWinFinally("You have finally won this Puchamon match");
  }
}

function combat() {
  let plays = document.getElementById("spann");
  let span = document.createElement("p");

  if (
    atakPlayer == atakEnemy ||
    (atakPlayer == "Water" && atakEnemy == "Wind") ||
    (atakPlayer == "Water" && atakEnemy == "Light") ||
    (atakPlayer == "Fire" && atakEnemy == "Earth") ||
    (atakPlayer == "Fire" && atakEnemy == "Light") ||
    (atakPlayer == "Earth" && atakEnemy == "Wind") ||
    (atakPlayer == "Earth" && atakEnemy == "Fire") ||
    (atakPlayer == "Wind" && atakEnemy == "Water") ||
    (atakPlayer == "Wind" && atakEnemy == "Earth") ||
    (atakPlayer == "Light" && atakEnemy == "Fire") ||
    (atakPlayer == "Light" && atakEnemy == "Water")
  ) {
  } else if (
    (atakPlayer == "Earth" && atakEnemy == "Water") ||
    (atakPlayer == "Water" && atakEnemy == "Fire") ||
    (atakPlayer == "Fire" && atakEnemy == "Wind") ||
    (atakPlayer == "Wind" && atakEnemy == "Light") ||
    (atakPlayer == "Light" && atakEnemy == "Earth")
  ) {
    lifeEnemy -= 1;
    /* Cambiar imagen del puchamon enemigo */
    let flagEnemy = document.getElementById("lifes-enemy");
    drawHeart(lifeEnemy, flagEnemy, imgPetEnemy, enemy);
    console.log(enemy);
  } else {
    lifePlayer -= 1;
    /* cambiar imagen del puchamon elegido por el usuario  */
    let flagPlayer = document.getElementById("lifes-player");
    drawHeart(lifePlayer, flagPlayer, imgPet, selectionPetPlayer);
    console.log(selectionPetPlayer);
  }

  span.innerHTML = atakPlayer + " - " + atakEnemy;
  plays.appendChild(span);
  reviewLive();
}

function resetGame() {
  location.reload();
}

window.addEventListener("load", startGame);
