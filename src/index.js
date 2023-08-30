import style from './main.scss'
import html from './index.html'

Annimation()

function Annimation() {
    const wrap = document.querySelectorAll('[data-animation=""]')

    wrap.forEach(el => {
        const elOne = el.querySelector('.animation-elemnt-one')
        const elTwo = el.querySelector('.animation-elemnt-two')


        const steps = ['one', 'two', 'three', 'four', 'five', 'six']
        const time = Number(el.dataset.time)

        let counter = 0

        elOne.classList.remove(steps[counter])
            elTwo.classList.remove(steps[counter])
            counter++
            elOne.classList.add(steps[counter])
            elTwo.classList.add(steps[counter])

        
        setInterval(() => {
            elOne.classList.remove(steps[counter])
            elTwo.classList.remove(steps[counter])
            if (counter === steps.length - 1) {
                counter = 0
                elOne.classList.add(steps[counter])
                elTwo.classList.add(steps[counter])
                return
            }
            counter++
            elOne.classList.add(steps[counter])
            elTwo.classList.add(steps[counter])
        }, time)
        
    })
}


