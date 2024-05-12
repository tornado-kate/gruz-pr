import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new Swiper('.main-slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
            el: '.main-slider__pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
    })

    const dropdown = document.querySelector('.dropdown')
    if(dropdown) {
        const select = dropdown.querySelector('.dropdown__select')
        const menu = dropdown.querySelector('.dropdown__menu')
        const options = dropdown.querySelectorAll('.dropdown__item')
        const selected = dropdown.querySelector('.dropdown__selected')

        select.addEventListener('click', () => {
            select.classList.toggle("dropdown__select--is-active");
            menu.classList.toggle("dropdown__menu--is-open")
        })
        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText
                select.classList.remove("dropdown__select--is-active")
                menu.classList.remove("dropdown__menu--is-open")
                options.forEach(option => {
                    option.classList.remove("dropdown__item--is-active")
                })
                option.classList.add('dropdown__item--is-active')
            })
        })
    }
})