const min = 1;
const max = 50;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let odpowiedz;


document.getElementById('guessBtn').onclick = function() {
    odpowiedz = Number(document.getElementById("guessInput").value);

    if (odpowiedz < answer) {
        document.getElementById("podpowiedz").textContent = "Twoja odpowiedź jest mniejszą od poprawniej odpowiedzi";
    }
    else if (odpowiedz > answer) {
        document.getElementById("podpowiedz").textContent = "Twoja odpowiedź jest większą od poprawnej odpowiedzi";
    }
    else {
        document.getElementById("podpowiedz").textContent = "Brawo! Zgadłeś!";
        dziala = false;
    }
}

