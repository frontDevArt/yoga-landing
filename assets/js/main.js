document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector('.yoga_container > .not_changed > .header_dots > .header > .burger')
    const close = document.querySelector('.yoga_container > .not_changed > .sidebar > .haader > .close')
    const sidebar = document.querySelector('.yoga_container > .not_changed > .sidebar')
    const overlay = document.querySelector('.overlay')

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
    
    const swiper = new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            790: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            990: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 0
            }
          }
      });
})

const buttons = document.querySelectorAll('.portfolio .filter_buttons > button')
const items = document.querySelectorAll('.portfolio .container > .item')


buttons.forEach(node => {
    node.addEventListener('click', function() {
        buttons.forEach(node => node.classList.remove('active'))
        this.classList.add('active')
        const target = this.getAttribute('data-target')
        console.log(node)
        items.forEach(node => {
            node.style.display = 'none'
            if(node.getAttribute('data-id') === target || target === 'all'){
                node.style.display = 'block'
            }
        })
    })
})