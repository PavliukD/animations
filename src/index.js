import style from './main.scss'
import html from './index.html'

Annimation()

function Annimation() {
    const wrap = document.querySelector('.animation')

    const elOne = wrap.querySelector('.animation-elemnt-one')
    const elTwo = wrap.querySelector('.animation-elemnt-two')

    const steps = ['one', 'two', 'three', 'four', 'five', 'six']

    let counter = 0

    setInterval(() => {
        elOne.classList.remove(steps[counter])
        if (counter === steps.length - 1) {
            counter = 0
            elOne.classList.add(steps[counter])
            elTwo.classList.add(steps[counter])
            return
        }
        counter++
        elOne.classList.add(steps[counter])
        elTwo.classList.add(steps[counter])
    }, 18000)
}


