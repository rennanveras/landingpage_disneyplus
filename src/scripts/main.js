document.addEventListener('DOMContentLoaded', function(){
    const buttonsTab = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    

    window.addEventListener('scroll', function() {
        let currentPosition = window.scrollY;

        if(currentPosition < alturaHero){
            hideElementsHeader();
        }else{

            showElementsHeader();
        }
    })

    
    //Seção de atrações, progamação das abas
    for (let i = 0; i < buttonsTab.length; i++) {
        buttonsTab[i].addEventListener('click', function(btn){
            const targetTab = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideTabs();
            tab.classList.add('shows__list--is-active');
            removeButtonActive()
            buttonsTab[i].classList.add('shows__tabs__button--is--active');

        })
    }

    //Seção fac accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', OpenOrClouseAnswer)
    }
})

function showElementsHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

function hideElementsHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function OpenOrClouseAnswer(element) {
    const classe = 'faq__questions__item--is-open'
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(classe)
}

function removeButtonActive(){
    const buttonsTab = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttonsTab.length; i++) {
        buttonsTab[i].classList.remove('shows__tabs__button--is--active');
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0;i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

