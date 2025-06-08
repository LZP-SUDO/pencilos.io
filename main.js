// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 移动端菜单切换
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
menuToggle.style.display = 'none';

const navbar = document.querySelector('.navbar .container');
navbar.prepend(menuToggle);

const nav = document.querySelector('nav');

function updateMenu() {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        nav.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        nav.style.display = 'block';
    }
}

menuToggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
});

window.addEventListener('resize', updateMenu);
updateMenu();

// 截图画廊功能
const gallery = document.querySelector('.screenshot-gallery');
if (gallery) {
    const images = [
        'screenshot1.png',
        'screenshot2.png',
        'screenshot3.png'
    ];
    
    let currentIndex = 0;
    
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        gallery.innerHTML = `<img src="img/${images[currentIndex]}" alt="MyOS截图 ${currentIndex + 1}">`;
    }
    
    // 自动轮播
    setInterval(changeImage, 3000);
}
