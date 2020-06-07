class Slider {
    constructor(options) {
        this.dotsCountComeFrom = document.querySelectorAll(options.dotsCountComeFrom)
        this.rootOneItemDotClass = options.rootOneItemDotClass
        this.rootOneItemDotChildClassNode = options.rootOneItemDotChildClassNode
        this.parentOfGeneretedList = document.querySelector(options.parentOfGeneretedList)
        this.slideItems = Array.from(document.querySelector(options.slideItems).children)
        if(options.hasOtherElemet){
            this.hasOtherElemet = options.hasOtherElemet
        }
        if(options.canUseSliderDots && options.canUseSliderDots.length){
            this.canUseSliderDots = options.canUseSliderDots
        }
        this.dotIndex = null

    }
    generateDots() {
        this.dotsCountComeFrom.forEach((node, index) => {
            const dot = document.createElement('div')
            dot.className = this.rootOneItemDotClass
    
            const circle = document.createElement('div')
            circle.className = this.rootOneItemDotChildClassNode
    
            dot.appendChild(circle)
    
            if(this.hasOtherElemet){
                const number_name = document.createElement('div')
                number_name.className = 'number_name'
                number_name.textContent = index + 1 < 10 ? `0${String(index + 1)}` : String(index + 1)
    
                dot.appendChild(number_name)
            }
    
            this.parentOfGeneretedList.appendChild(dot)
        })
        this.slide(this.parentOfGeneretedList.children)
    }
    slide(listofGeneretedDots){
        const slideArray = []
        if(this.canUseSliderDots){
            this.canUseSliderDots.forEach(selector => {
                const newDotUser = Array.from(document.querySelectorAll(selector))
                slideArray.push(newDotUser)
            })
        }
        slideArray.push(Array.from(listofGeneretedDots))

        slideArray.forEach((nodes) => {
            nodes[0].classList.add('active')
            nodes.forEach((node, index) => {
                node.addEventListener('click', () => {
                    if(Array.from(document.querySelectorAll(this.canUseSliderDots)).length){
                        this.dotIndex = index
                        Array.from(document.querySelectorAll(this.canUseSliderDots)).forEach(node => node.classList.remove('active'))
                        Array.from(document.querySelectorAll(this.canUseSliderDots))[this.dotIndex].classList.add('active')
                        Array.from(listofGeneretedDots).forEach(node => node.classList.remove('active'))
                        listofGeneretedDots[this.dotIndex].classList.add('active')
                    }
                    nodes.forEach(node => node.classList.remove('active'))
                    node.classList.add('active')
                    this.addClass(index)
                })
            })
        })
    }
    addClass(index) {
        if(this.slideItems[index]) {
            this.slideItems.forEach(slide => {
                slide.classList.remove('active')
            })
            this.slideItems[index].classList.add('active')
        }
    }
}