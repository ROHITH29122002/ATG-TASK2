var path = document.querySelector('#Opaque_Ring')
var pathcontainer = document.querySelector('.path_container')
var text = document.querySelector('.text')
var para1 = document.querySelector('.para1')
var para2 = document.querySelector('.para2')
var extraheading = document.querySelector('.extraheading')
var extrapara1 = document.querySelector('.extrapara1')
var extrapara2 = document.querySelector('.extrapara2')
var extrapara3 = document.querySelector('.extrapara3')
var svg = document.querySelector('#transring')
var carousel = document.querySelector('.carousel')
var carouselitems = document.querySelectorAll('.carousel_div')

gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".container").forEach((container, i) => {
    ScrollTrigger.create({
      trigger: container,
      start: "top top", 
      scrub: true,
      pin: true, 
      pinSpacing: false
    });
  });
  
  
  ScrollTrigger.create({
    snap: {
      snapTo: 1 / 6,
      duration: 0.001
    }
  });
  

gsap.to('.container-1',{
    scrollTrigger : {
        trigger : '.container-2',
        start : 'top center',
        scrub : true,
    },
    onUpdate : () => {
        path.style.cssText += 'stroke-dasharray: 10, 1000'
        para1.innerHTML = 'Redefining'
        text.innerHTML = 'UX Strategy'
        para2.innerHTML = 'and UI Design'
        extrapara1.innerHTML='We are the best'
        extrapara2.innerHTML = 'web development company'
        extrapara3.innerHTML = 'in the world'
        pathcontainer.style.cssText += 'background-color : rgb(4, 4, 50)'
        svg.style.cssText += 'background-color : rgb(4, 4, 50)'
    }
})



gsap.to('.container-2',{
    scrollTrigger : {
        trigger : '.container-2',
        start : 'top center',
        scrub : true,
    },
    onUpdate : () => {
        path.style.cssText += 'stroke-dasharray: 130, 1000'
        para1.innerHTML = 'Next Big'
        text.innerHTML = 'Blockchain'
        para2.innerHTML='Revolution'
        extraheading.innerHTML = 'ABC 234'
        pathcontainer.style.cssText += 'background-color : rgb(122, 33, 224)'
        svg.style.cssText += 'background-color : rgb(122, 33, 224)'
    }
})


gsap.to('.container-3',{
    scrollTrigger : {
        trigger : '.container-3',
        start : 'top center',
        scrub : true,
    },
    onUpdate : () => {
        path.style.cssText += 'stroke-dasharray: 280, 1000'
        para1.innerHTML = 'Developing ERP solutions for'
        text.innerHTML = 'Text Headline'
        para2.innerHTML= 'in furniture industry'
        extraheading.innerHTML = 'ABC 678'
        extrapara1.innerHTML = 'best since 2017'
        extrapara2.innerHTML = 'We offer wide range of'
        extrapara3.innerHTML = 'web development and app development'
        pathcontainer.style.cssText += 'background-color : rgb(9, 9, 122)'
        svg.style.cssText += 'background-color : rgb(9, 9, 122)'
    }
})

gsap.to('.container-4',{
    scrollTrigger : {
        trigger : '.container-4',
        start : 'top center',
        scrub : true,
    },
    onUpdate : () => {
        path.style.cssText += 'stroke-dasharray: 410, 1000'
        para1.innerHTML = 'Powered by advance'
        text.innerHTML = 'NASA'
        para2.innerHTML = 'algorithms'
        extrapara1.innerHTML='We are the best'
        extrapara2.innerHTML = 'web development company'
        extrapara3.innerHTML = 'in the world'
        pathcontainer.style.cssText += 'background-color : black'
        svg.style.cssText += 'background-color : black'
    }
})

gsap.to('.container-5',{
    scrollTrigger : {
        trigger : '.container-5',
        start : 'top center',
        scrub : true,
    },
    onUpdate : () => {
        path.style.cssText += 'stroke-dasharray: 540, 1000'
        para1.innerHTML = 'Text Headline'
        text.innerHTML = 'Text Headline'
        para2.innerHTML = 'Footer Headline'
        extrapara1.innerHTML = 'We are the best AR'
        extrapara2.innerHTML = 'Development company'
        extrapara3.innerHTML = 'in the world'
        pathcontainer.style.cssText += 'background-color : green'
        svg.style.cssText += 'background-color : green'
    }
})


gsap.to('.container-6',{
    scrollTrigger : {
        trigger : '.container-6',
        start : 'top center',
        scrub : true,
    },
    onUpdate : () => {
        path.style.cssText += 'stroke-dasharray: 670, 1000'
        para1.innerHTML = 'Biggest Classifieds'
        text.innerHTML = 'East Asia'
        para2.innerHTML = 'Countries'
        pathcontainer.style.cssText += 'background-color : rgb(219, 13, 13)'
        svg.style.cssText += 'background-color : rgb(219, 13, 13)'
    }
})

gsap.to('.container-7',{
    scrollTrigger : {
        trigger : '.container-7',
        scrub : true,
    },
    onUpdate : () => {
        path.style.cssText += 'stroke-dasharray: 810, 1000'
        para1.innerHTML =''
        text.innerHTML = '25M+ Downloads'
        para2.innerHTML = 'on appstore and playstore'
        pathcontainer.style.cssText += 'background-color : rgb(122, 33, 224)'
        svg.style.cssText += 'background-color : rgb(122, 33, 224)'
    }
})

const buttonHtml = Array.from(carouselitems,()=>{
    return `<span class='carousel_btn'></span>`;
})

carousel.insertAdjacentHTML('beforeend',`
<div class='carousel_nav'>
  ${buttonHtml.join('')}
</div>
`)

var buttons = carousel.querySelectorAll('.carousel_btn');
buttons.forEach((button,i)=>{
    button.addEventListener('click',()=>{
        carouselitems.forEach(item => item.classList.remove('carousel_div_selected'))
        buttons.forEach(button => button.classList.remove('carousel_btn_selected'))
        carouselitems[i].classList.add('carousel_div_selected')
        button.classList.add('carousel_btn_selected')
    })
})

carouselitems[0].classList.add('carousel_div_selected')
buttons[0].classList.add('carousel_btn_selected')