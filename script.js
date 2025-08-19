// script.js
import { pUpdater } from "./db.js";

const cells = document.querySelectorAll(".board .cell");
const bells = document.querySelectorAll(".bingo-container .bell"); // ok if none exist
let numList = [];
let cutNumList = [];
const board = document.querySelector(".board");

board.addEventListener("click", playSound);

function playSound(e) {
  if (e.target.classList.contains("cell")) {
    document.getElementById("pick-sound").play();
  }
}

function fillNumbers() {
  numList = [];
  for (let i = 0; i < 25; i++) {
    const randNum = Math.floor(Math.random() * 25) + 1;
    if (!numList.includes(randNum)) {
      numList.push(randNum);
      cells[i].textContent = randNum;
    } else {
      i--; // retry this index
    }
  }
}

// initial fill
fillNumbers();

// click on cell to toggle cut mark and sync list
cells.forEach((cell) =>
  cell.addEventListener("click", function () {
    const audio = document.getElementById("pick-sound");
    audio.play();

    this.classList.toggle("invert");
    const num = this.textContent.trim();

    const existing = this.querySelector("#cut");
    if (!existing) {
      const cut = document.createElement("img");
      cut.id = "cut";
      cut.alt = "no cut";
      cut.src = "cut.svg";
      this.appendChild(cut);
      // append the number
      cutNumList.push(num);
    } else {
      existing.remove();
      // remove if exists
      const idx = cutNumList.indexOf(num);
      if (idx !== -1) cutNumList.splice(idx, 1);
    }
    pUpdater(cutNumList);
  })
);

// bells optional
bells.forEach((bell) =>
  bell.addEventListener("click", function () {
    this.classList.toggle("check");
  })
);

// reset button
document.getElementById("btn").onclick = () => {
  cells.forEach((cell) => cell.classList.remove("invert"));
  bells.forEach((bell) => bell.classList.remove("check"));
  fillNumbers();
  cutNumList = [];
  pUpdater(cutNumList);
};fillNumbers();

cells.forEach(cell =>
    cell.addEventListener("click", function () {
        let audio = document.getElementById("pick-sound");
        audio.play();

        this.classList.toggle("invert");
        let num = this.textContent.trim(); // ✅ safer than childNodes[0].textConent

        if (!this.querySelector("#cut")) {
            let cut = document.createElement("img");
            cut.id = "cut";
            cut.alt = "no cut";
            cut.src = "cut.svg";
            this.appendChild(cut);

            cutNumList.push(num);
        } else {
            this.querySelector("#cut").remove();

            let idx = cutNumList.indexOf(num);
            if (idx !== -1) cutNumList.splice(idx, 1); // ✅ prevent accidental removal
        }

        pUpdater(cutNumList);
    })
);

bells.forEach(bell =>
    bell.addEventListener("click", function () {
        this.classList.toggle("check");
    })
);

document.getElementById("btn").onclick = () => {
    cells.forEach(cell => {
        cell.classList.remove("invert");
        let cut = cell.querySelector("#cut");
        if (cut) cut.remove(); // ✅ reset cuts on refresh
    });
    bells.forEach(bell => {
        bell.classList.remove("check");
    });
    cutNumList = []; // ✅ reset cut list on refresh
    fillNumbers();
};

function audioPlay() {
    let audio = document.getElementById("click-sound");
    audio.play();
                 }            .innerText = er.message ||
            numList;
    }
};

fillNumbers();



cells.forEach(cell =>
    cell.addEventListener("click",
        function () {
            let audio = document.getElementById("pick-sound");
            audio.play();
            this.classList.toggle("invert");
            let num = this.childNodes[0].textConent;
            if (!this.querySelector("#cut")) {
                let cut = document.createElement("img");
                cut.id = "cut"
                cut.alt = "no cut"
                cut.src = "cut.svg";
                cell.appendChild(cut);
                // append the number 
                cutNumList.push(num);
            } else {
                this.querySelector("#cut").remove();
                // remove if exists
                cutNumList.splice(cutNumList.indexOf(num), 1)
            }
            pUpdater(cutNumList)
        }
    ));

bells.forEach(bell =>
    bell.addEventListener("click",
        function () {
            this.classList.toggle("check")
        }
));


document.getElementById("btn")
    .onclick = () => {
        cells.forEach(cell => {
            cell.classList.remove("invert");
        });
        bells.forEach(bell => {
            bell.classList.remove("check");
        });
        fillNumbers();
    }

function audioPlay() {
    let audio = document.getElementById("click-sound");
    audio.play();

}
