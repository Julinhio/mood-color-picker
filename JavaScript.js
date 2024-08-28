const colorArr = [
    {color: "#a0e403", mood: "Happy"},
    {color: "#e210f9", mood: "Sad"},
    {color: "#f94e10", mood: "Energized"},
    {color: "#27094b", mood: "Fear"},
    {color: "#f2047f", mood: "Surprised"},
    {color: "#dc4848", mood: "Calm"},
    {color: "#38c7f6", mood: "Neutral"},
    {color: "#068af6", mood: "Relax"}
];

function getRandomIndex() {
    return Math.floor(colorArr.length * Math.random());  // get a random index
};

const body = document.querySelector("body");
const moodText = document.querySelector("#mood-name");
const moodHexCode = document.querySelector("#color-hex-code");

function updateColor() {
    const randomIndex = getRandomIndex();              // store the random index
    const randomColor = colorArr[randomIndex].color;   // get the Hex code
    const randomMood =  colorArr[randomIndex].mood;    // get the mood name

    body.style.backgroundColor = randomColor;
    moodText.innerText = randomMood;
    moodHexCode.innerText = randomColor;
};

const button = document.querySelector("#btn");
button.onclick = updateColor;