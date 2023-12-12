const project_list = `[
    {
        "title" : "Audio Visualization",
        "info"  : "This project is an audio visualizer using the P5.js framework. This was implemented by Zohaib and Rinki.",
        "image" : "/Assets/audio_playing.jpeg",
        "link"  : ["https://github.com/ZDON-Official/Audio-Visualization", "https://zdon-official.github.io/Audio-Visualization/"]
    },
    {
        "title" : "Processor Simulator",
        "info"  : "This project is a computer simulation which uses Logisim to simulate a working processor and I/O devices. This project was implemented by Zohaib and Ying.",
        "image" : "/Assets/Processor.jpeg",
        "link"  : ["https://github.com/ZDON-Official/Processor-Simulator"]
    },
    {
        "title" : "MIPS Assembler",
        "info"  : "This project converts MIPS instructions into binary to be used by a Logisim processor simulator. The project is implemented in C++.",
        "image" : "/Assets/mips_assembler.jpeg",
        "link"  : ["https://github.com/ZDON-Official/MIPS-Assembler"]
    },
    {
        "title" : "Ultimate Tic-Tac-Toe",
        "info"  : "This project is an implementation of Ultimate Tic-Tac-Toe in Python, utilizing the Pygame library to implement music and visuals.",
        "image" : "/Assets/ultimate.jpeg",
        "link"  : ["https://github.com/ZDON-Official/UltimateTicTacToe"]
    },
    {
        "title" : "Spydur Research",
        "info"  : "I designed a website for finding research opportunities on campus. This project streamlines the process of searching for and applying to research opportunities available throughout different university departments.",
        "image" : "/Assets/Spydur_research.jpeg",
        "link"  : ["https://github.com/ZDON-Official/Spydur_research", "https://zdon-official.github.io/Spydur_research/"]
    },
    {
        "title" : "Discord Invest",
        "info"  : "This was my final submission for the GryphHacks 2022 Hackathon. The goal of this project was to create a mock trading Discord bot that allowed users to buy and trade stocks. The project utilizes the Finhub API for real-time stock prices. Additionally, I implemented the CockroachDB database to store user accounts, total value invested, name of stocks owned, and the amount of stocks owned. ",
        "image" : "/Assets/DInvestLogo.jpeg",
        "link"  : ["https://github.com/ZDON-Official/DiscordInvest"]
    },
    {
        "title" : "HeART of the Sea",
        "info"  : "This was my final submission for the AhoyHacks Hackathon. I won \\"The Hidden Treasure Award\\" for best UI/UX. This is a Pirates of the Caribbean inspired game written in Python using the Pygame library.",
        "image" : "/Assets/HeartofSea.jpg",
        "link"  : ["https://github.com/ZDON-Official/AhoyHacks"]
    },
    {
        "title" : "ODIN Landing Page",
        "info"  : "I implemented a website landing page template for The ODIN Project using HTML and CSS.",
        "image" : "/Assets/ODIN_Landing_page.jpeg",
        "link"  : ["https://github.com/ZDON-Official/Odin-Landing-Page","https://zdon-official.github.io/Odin-Landing-Page/"]
    },
    {
        "title" : "Portfolio Website",
        "info"  : "This is my personal portfolio website created using HTML, CSS, and JavaScript.",
        "image" : "/Assets/ZDON_Portfolio_website.jpeg",
        "link"  : ["https://github.com/ZDON-Official/ZDON-Official.github.io", "https://zdon-official.github.io/"]
    },
    {
        "title" : "ODIN Rock Paper Scissors",
        "info"  : "I designed a Rock, Paper, Scissors web game using HTML, CSS, and JavaScript.",
        "image" : "/Assets/ODIN-Rock-Paper-Scissor.jpeg",
        "link"  : ["https://github.com/ZDON-Official/Odin-Rock-Paper-Scissors", "https://zdon-official.github.io/Odin-Rock-Paper-Scissors/"]
    },
    {
        "title" : "ODIN Etch-a-Sketch",
        "info"  : "I implemented an Etch-a-Sketch web app for The ODIN Project. This project utilizes HTML, CSS, and JavaScript.",
        "image" : "/Assets/ODIN-Etch-a-Sketch.jpeg",
        "link"  : ["https://github.com/ZDON-Official/Odin-Etch-a-Sketch", "https://zdon-official.github.io/Odin-Etch-a-Sketch/"]
    },
    {
        "title" : "ODIN calculator",
        "info"  : "I developed a calculator web app for The ODIN Project. This project utilizes HTML, CSS, and JavaScript.",
        "image" : "/Assets/Odin-Calc.png",
        "link"  : ["https://github.com/ZDON-Official/Odin-Calculator", "https://zdon-official.github.io/Odin-Calculator"]
    }
]`;

//! Code to load projects

const parent = document.getElementById("prj_list");
const btn_description = ["View on Github", "Live demo"];

function loadResources(jsonItem) {
  if (parent && jsonItem) {
    const jsList = JSON.parse(jsonItem);
    console.log(jsList);

    let button = ``;

    for (i in jsList) {
      let child = document.createElement("li");
      child.className = "projects";
      button = ` `;

      for (btn in jsList[i].link) {
        button += `<button class="prj_button"><a href="${jsList[i].link[btn]}">${btn_description[btn]}</a></button>`;
      }

      let content = `
                <div class="prj_top">
                    <h2 class="prj_links">${jsList[i].title}</h2>
                    <p>
                        ${jsList[i].info}
                    </p>
                </div>
                <div class="prj_bottom">
                    <img class="prj_img" src="${jsList[i].image}" alt="image of ${jsList[i].title}">
                    <div class="prj_btn_div">
                        ${button}
                    </div>
                </div>
                <div class="prj_empty_div"></div>
            `;
      child.innerHTML = content;
      parent.appendChild(child);
    }
  }
}

loadResources(project_list);
