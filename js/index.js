$(document).ready(function() {
    // AOS 초기화
    AOS.init({
        duration: 1000, 
        once: false,     
    });

    // 메뉴
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const gnbItems = document.querySelectorAll('.gnb > li');

    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            const isActive = nav.classList.toggle('active');
            menuToggle.classList.toggle('active', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
            if (!isActive) resetGnbItems();
        }
    };

    const resetGnbItems = () => gnbItems.forEach(li => li.classList.remove('active'));

    menuToggle.addEventListener('click', toggleMenu);
    
    gnbItems.forEach(item => {
        item.querySelector('a').addEventListener('click', (event) => {
            event.preventDefault(); 
            const isItemActive = item.classList.contains('active');

            resetGnbItems(); 
            if (!isItemActive) { 
                item.classList.add('active'); 
            }
        });
    });

    // 창 크기 변경 시 메뉴 상태 초기화
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) resetMenu();
    });

    // 메뉴 초기화 함수
    const resetMenu = () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
        resetGnbItems();
    };
});