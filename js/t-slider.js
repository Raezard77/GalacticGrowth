const btns = document.querySelectorAll(".btn")
const slideRow = document.querySelector(".slide-row")
const slider = document.querySelector(".slider")

let currentIndex = 0

const updateSlide = (_) => {
    slideRow.style.transform = `translateX(${currentIndex * -slider.offsetWidth}px)`

    btns.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex)
    })
}

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index
        updateSlide()
    })
})

window.addEventListener("resize", () => {
    updateSlide()
})
