//
 //메인 스와이퍼 라이브러리 캐러샐 
 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 24,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    //아이디 비번창 공백시 알림
document.getElementById('로그인버튼').addEventListener('click',function(){if
(document.getElementById('id').value == ''){alert('아이디를 입력해 주세요')} 
});


document.getElementById('로그인버튼').addEventListener('click',function(){
  if(document.getElementById('pw').value == ''){alert('비밀번호를 입력해 주세요')}
});


