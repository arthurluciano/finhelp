// const controls = document.querySelectorAll(".control")
// let currentItem = 0
// const items = document.querySelectorAll(".item")
// const maxItems = items.length

// controls.forEach((control) => {
//   control.addEventListener("click", (e) => {
//     isLeft = control.classList.contains("arrow-left")
//     isRight = control.classList.contains("arrow-right")

//     console.log(isLeft, isRight)

//     if (isLeft) {
//       currentItem -= 1
//     } else {
//       currentItem += 1
//     }

//     if (currentItem >= maxItems) {
//       currentItem = 0
//     }

//     if (currentItem < 0) {
//       currentItem = maxItems - 1
//     }

//     items.forEach((item) => item.classList.remove("current-item"))

//     items[currentItem].scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//     })

//     items[currentItem].classList.add("current-item")
//   })
// })

function applyCarouselTo(type) {
  const controls = document.querySelectorAll(`.control.${type}`)
  let currentItem = 0
  const items = document.querySelectorAll(`.item.${type}`)
  const maxItems = items.length

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = control.classList.contains(`arrow-left`)
      isRight = control.classList.contains("arrow-right")

      console.log(isLeft, isRight)

      if (isLeft) {
        currentItem -= 1
      } else {
        currentItem += 1
      }

      if (currentItem >= maxItems) {
        currentItem = 0
      }

      if (currentItem < 0) {
        currentItem = maxItems - 1
      }

      items.forEach((item) => item.classList.remove("current-item"))

      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      })

      items[currentItem].classList.add("current-item")
    })
  })
}



const monthsContainer = document.querySelector("#months")

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

months.forEach((month, index) => {
  monthsContainer.innerHTML += `          <button
  type="button"
  class="item transactions ${index === 0 ? 'currentItem ' : ''}min-w-[157px] h-11 brightness-95 flex items-center justify-center bg-white rounded font-semibold"
>
  ${month}
</button>`
})

function openModal() {
  const modal = document.getElementById('modal')
  modal.style.display = 'flex'
}

function closeModal() {
  const modal = document.getElementById('modal')
  modal.style.display = 'none'
}

applyCarouselTo('banks')
applyCarouselTo('transactions')
