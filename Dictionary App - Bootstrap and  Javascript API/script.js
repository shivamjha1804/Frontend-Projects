const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const resultSection = document.getElementById("resultSection");
const soundButton = document.getElementById("soundButton");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    let inputBox = document.getElementById("inputBox").value;

    let sectionOne = document.getElementById("sectionOne");
    let sectionTwo = document.getElementById("sectionTwo");
    let sectionThree = document.getElementById("sectionThree");

    fetch(`${url}${inputBox}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            sectionOne.innerHTML = `
            <div id="resultSection" class="col-4 text-start mx-4">
                <h3>
                    ${inputBox}
                </h3>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <button onclick="playSound()" class="custom-button-two me-3">
                    <img src="./image/volume-high-solid.svg" alt="">
                </button>
            </div>
            `;

            sectionTwo.innerHTML = `
                <div class="col text-start d-flex fw-lighter mx-4 mt-3">
                    <p class="pe-2">
                        ${data[0].meanings[0].partOfSpeech}
                    </p>
                    <p>
                        /${data[0].phonetic}/
                    </p>
                </div>
            `;

            sectionThree.innerHTML = `
                <div class="col-10 text-start mx-4 mb-3">
                    <p class="fw-medium">
                        ${data[0].meanings[0].definitions[0].definition}
                    </p>

                    <p class="custom-text mt-4 ps-3 fw-medium fst-italic">
                        ${data[0].meanings[0].definitions[0].example || ""}
                    </p>
                </div>
            `;

            soundButton.setAttribute("src", `${data[0].phonetics[0].audio}`);
        })
        .catch((error) => {
           resultSection.innerHTML = `<h1>Couldn't Find The Word</h1>`;
        });
});

function playSound(){
    soundButton.play();
};