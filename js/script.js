window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

        function hideTabContent() {
            tabsContent.forEach((item) => {
                item.style.display = 'none';
            });

            tabs.forEach((item) => {
                item.classList.remove('tabheader__item_active');
            })
        }

        function showTabContent(i = 1) {
            tabsContent[i].style.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
        }

        hideTabContent()
        showTabContent()

        tabsParent.addEventListener('click', (event) => {
            if(event.target && event.target.matches('.tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (event.target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        })
        
});