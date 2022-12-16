
const project_list = `[
    // {
    //     "title" : "Traffic Simulator"
    //     "info"  : "The goal of this project was to implement a traffic simulator in C++"
    //     "image" : "Assets/traffic_sim.png"
    //     "link"  : "https://github.com/ZDON-Official/Traffic_Simulation"
    // },
    {
        "title" : "Processor Simulator"
        "info"  : "This project is a computer simulation which uses logisim to simulate a working processor and other I/O devices
        This was implemented by Zohaib and Ying. This is version 1.0.0 of the project."
        "image" : "Assets/Processor.png"
        "link"  : "https://github.com/ZDON-Official/Processor-Simulator"
    }
]`

// "title" : ""
// "info"  : ""
// "image" : ""
// "link"  : ""









//! Code to load projects 

const parent = document.getElementById('prj_list')

function loadResources(jsonItem){
    if (parent && jsonItem){
        const jsList = JSON.parse(jsonItem)

        for (i in jsList){
            let child = document.createElement('ul')
            child.className = 'List_wrapper'

            let content = `
                <li>
                    <p class = "item_text">${jsList[i].item_text}</p>
                    <i class="material-icons">${jsList[i].icon_name}</i>
                </li>
            `
            child.innerHTML = content
            parent.appendChild(child)

        }
    }
}

loadResources(project_list)