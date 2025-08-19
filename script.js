import {pUpdater} from "./db.js"

let cells = document.querySelectorAll(".board .cell");
let bells = document.querySelectorAll(".bingo-container .bell");
let numList = [];

let board = document.querySelector(".board")

board.addEventListener("click", playSound);

function playSound(e) {
    let playCondition = e.target.classList.contains("cell");
    if (playCondition) {
        document.getElementById("pick-sound").play();
    }
}

let fillNumbers = () => {

    try {
        numList = [];

        for (let i = 0; i < 25; i++) {
            let randNum = Math.floor(Math
                .random() * 25 + 1);

            if (!numList.includes(
                randNum)) {
                numList.push(randNum);
                cells[i].innerHTML = randNum;
            } else {
                i--; // retry this index
            }
        }
    } catch (er) {
        document.getElementById("p")
            .innerText = er.message ||
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
            if (!this.querySelector("#cut")) {
                let cut = document.createElement("img");
                cut.id = "cut"
                cut.alt = "no cut"
                cut.src = "cut.svg";
                cell.appendChild(cut);
            } else {
                this.querySelector("#cut").remove();
            }
            pUpdater()
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
