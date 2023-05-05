document.addEventListener('DOMContentLoaded', function(){
    const buttonsTab = document.querySelectorAll('[data-tab-button]');
    
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
})

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