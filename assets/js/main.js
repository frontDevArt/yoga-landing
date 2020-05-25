document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector('.yoga_container > .not_changed > .header_dots > .header > .burger')
    const close = document.querySelector('.yoga_container > .not_changed > .sidebar > .haader > .close')
    const sidebar = document.querySelector('.yoga_container > .not_changed > .sidebar')
    const overlay = document.querySelector('.overlay')
    const serviceDotContainer = document.querySelector('.service .dots')

    const sliderMain = new Slider({
        dotsCountComeFrom: '.sidebar > ul.list > .slide_dot',
        rootOneItemDotClass: 'dot dis_al slide_dot',
        rootOneItemDotChildClassNode: 'circle',
        slideItems: '.mainSldes.slider_container',
        parentOfGeneretedList: '.dots_container_inner',
        hasOtherElemet: true,
        canUseSliderDots: ['.sidebar > ul.list > .slide_dot']
    })

    const sliderIntro = new Slider({
        dotsCountComeFrom: '.intro .intro_slides > .intro_slide',
        rootOneItemDotClass: 'dot slide_dot',
        rootOneItemDotChildClassNode: 'circle',
        slideItems: '.intro .slider_container',
        parentOfGeneretedList: '.intro .dots'
    })

    sliderMain.generateDots()
    sliderIntro.generateDots()

    const sideBarList = document.querySelectorAll('.sidebar > ul.list > .slide_dot')
    const homeLeftDotList = document.querySelectorAll('.dots_container_inner .number_name')
    
    function changeDotText(){
        homeLeftDotList.forEach((node, index) => {
            node.addEventListener('mouseover', function() {
                this.textContent = sideBarList[index].textContent
            })
            node.addEventListener('mouseout', function() {
                this.textContent = index + 1 < 10 ? `0${String(index + 1)}` : String(index + 1)
            })
        })
    }
    
    changeDotText()

    function closeSidebar(){
        sidebar.classList.remove('active')
        overlay.classList.remove('active')
    }

    burger.addEventListener('click', () => {
        sidebar.classList.add('active')
        overlay.classList.add('active')

    })
    close.addEventListener('click', closeSidebar)
    document.addEventListener('click', e => {
        if(e.target.classList.contains('overlay')){
            closeSidebar()
        }
    })







    function serviceSlider(){
        const serviceSlideContainer = document.querySelector('.service > .service_slides')
        const serviceSlideItemsList  = Array.from(serviceSlideContainer.children)

        // const screenWidth = serviceSlideContainer.offsetWidth

        // const serviceSlideItemsWidthSum =  serviceSlideItemsList.reduce((acc, node) => acc + node.offsetWidth, 0)

        const generetedListDots = genereteDots(serviceSlideItemsList)

        generetedListDots.forEach((node, index) => {
            node.addEventListener('click', () => {
                // 
            })
        })


    }
    function genereteDots(items) {
        const dotsCount = items.length % 2 === 0 ? Math.floor(items.length / 5 ) : items.length % 5
        const generetedDotsList = []
        if(dotsCount){
            for(let i = 0; i <=dotsCount; i++) {
                const dot = document.createElement('div')
                dot.className = 'dot'

                const circle = document.createElement('div')
                circle.className = 'circle'

                dot.appendChild(circle)
                serviceDotContainer.appendChild(dot)

                generetedDotsList.push(dot)
            }
        }
        return generetedDotsList
    }
    serviceSlider()
})