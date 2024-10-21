document.getElementById('cat').addEventListener('click', function() {
    let dodayuTuFignyu = document.getElementById('Toyvo-Tseyvo');
    let HappyGif = document.createElement('video');
    HappyGif.src = 'cat.mp4'; 
    HappyGif.controls = true;
    HappyGif.autoplay = true;
    HappyGif.alt = 'happi-happi-happi';
    HappyGif.width = 600;
    dodayuTuFignyu.appendChild(HappyGif);
});


const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = 'Вгору';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.backgroundColor = '#64ffda';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.color = '#000';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
document.body.appendChild(scrollToTopBtn);

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
