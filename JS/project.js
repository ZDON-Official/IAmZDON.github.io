const project_list = `[
    {
        "title" : "Audio Visualization",
        "info"  : "This project is a audio visualizer using the P5.js framework. This was implemented by Zohiab and Rinki.",
        "image" : "/Assets/audio_playing.png",
        "link"  : "https://github.com/ZDON-Official/Audio-Visualization"
    },
    {
        "title" : "Processor Simulator",
        "info"  : "This project is a computer simulation which uses logisim to simulate a working processor and other I/O devices, This was implemented by Zohaib and Ying. This is version 1.0.0 of the project.",
        "image" : "/Assets/Processor.png",
        "link"  : "https://github.com/ZDON-Official/Processor-Simulator"
    },
    {
        "title" : "MIPS Assembler",
        "info"  : "This project converts MIPS instructions into binary to be used by a processor simulator. The project is implemented in C++.",
        "image" : "/Assets/mips_assembler.png",
        "link"  : "https://github.com/ZDON-Official/MIPS-Assembler"
    },
    {
        "title" : "Ultimate Tic-Tac-Toe",
        "info"  : "This project is am implementation of Ultimate Tic-Tac-Toe in Python. This game utilizes the Pygame python library to implement music and visuals",
        "image" : "/Assets/ultimate.png",
        "link"  : "https://github.com/ZDON-Official/UltimateTicTacToe"
    },
    {
        "title" : "Spydur Research",
        "info"  : "In this project, my team and I designed a website for finding research opportunities on campus. Our main goal was to make finding and applying to research opportunities a streamlined experience.",
        "image" : "/Assets/Spydur_research.png",
        "link"  : "https://github.com/ZDON-Official/Spydur_research"
    },
    {
        "title" : "Discord Invest",
        "info"  : "Final submission for GryphHacks 2022. The goal of this project was to create a mock trading Discord bot.",
        "image" : "/Assets/DInvestLogo.png",
        "link"  : "https://github.com/ZDON-Official/DiscordInvest"
    },
    {
        "title" : "HeART of the Sea",
        "info"  : "Final submission for AhoyHacks. Won hidden treasure award for best UI/UX. Pirates of the Caribbean inspired game made in Python using the Pygame library.",
        "image" : "/Assets/HeartofSea.jpg",
        "link"  : "https://github.com/ZDON-Official/AhoyHacks"
    },
    {
        "title" : "ODIN Landing page",
        "info"  : "Implementation of a website landing page template, for ODIN Project, using HTML and CSS.",
        "image" : "/Assets/ODIN_Landing_page.png",
        "link"  : "https://github.com/ZDON-Official/Odin-Landing-Page"
    },
    {
        "title" : "Portfolio Website",
        "info"  : "This is my personal portfolio website created using HTML, CSS, and Javascript",
        "image" : "/Assets/ZDON_Portfolio_website.png",
        "link"  : "https://github.com/ZDON-Official/ZDON-Official.github.io"
    }
]`;

//! Code to load projects

const parent = document.getElementById("prj_list");

function loadResources(jsonItem) {
  if (parent && jsonItem) {
    const jsList = JSON.parse(jsonItem);
    console.log(jsList);

    for (i in jsList) {
      let child = document.createElement("li");
      child.className = "projects";

      let content = `
                <div class="prj_top">
                    <h2 class="prj_links">${jsList[i].title}</h2>
                    <p>
                        ${jsList[i].info}
                    </p>
                </div>
                <div class="prj_bottom">
                    <img class="prj_img" src="${jsList[i].image}" alt="image of ${jsList[i].title}">
                    <button class="prj_button"><a href="${jsList[i].link}">View on Github</a></button>
                </div>
                <div class="prj_empty_div"></div>
            `;
      child.innerHTML = content;
      parent.appendChild(child);
    }
  }
}

loadResources(project_list);
