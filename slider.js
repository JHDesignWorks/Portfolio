
let imageIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const imageSlider = document.querySelector('.image-slider');

function slide() {
    // 현재 보여지고 있는 이미지의 active 클래스 제거
    images[imageIndex].classList.remove('active');

    // 다음 이미지로 인덱스 증가
    imageIndex = (imageIndex + 1) % images.length;

    // 다음 이미지에 active 클래스 추가
    images[imageIndex].classList.add('active');
}

// 이미지 슬라이드 기능 실행
setInterval(slide, 3000); // 3초마다 이미지 변경


