// console.log(project_list);
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
