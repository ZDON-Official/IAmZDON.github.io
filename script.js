console.log("script loaded")
const buttons = document.querySelectorAll("[data-carousel-button]")

console.log(`button is ${buttons.length}`)

buttons.forEach(button => {
    console.log("buttons")
    button.addEventListener("click", () =>{
        console.log("button clicked")
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const proj = button
            .closest("[data-carousel]")
            .querySelector("[data-projects]")

        const active_prj = proj.querySelector("[data-active]")
        let newIndex = [...proj.children].indexOf(active_prj) + offset

        if(newIndex < 0) newIndex = proj.children.length - 1
        if(newIndex >= proj.children.length) newIndex = 0

        proj.children[newIndex].dataset.active = true
        delete active_prj.dataset.active
    })
})