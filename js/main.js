//
 //메인 스와이퍼 라이브러리 캐러샐 
 const swiper = new Swiper(".mySwiper", {
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


//section02Carousel
let myAnimation = window.requestAnimationFrame(onAnimate);
let nowPicture = 1;



  document.getElementById('img_Right').addEventListener("click", function () {
  if (nowPicture == 1) {
    document.querySelector(".section02ContentsCarousell-swiper-wrapper").style.transform = "translateX(-374px)";
    nowPicture += 1;
  } else if (nowPicture == 2) {
    document.querySelector(".section02ContentsCarousell-swiper-wrapper").style.transform = "translateX(-748px)";
    nowPicture += 1;
  }
  else if (nowPicture == 3) {
    document.querySelector(".section02ContentsCarousell-swiper-wrapper").style.transform = "translateX(-1128px)";
    nowPicture += 1;
  }
});
document.getElementById('img_Left').addEventListener("click", function () {
  if (nowPicture == 4) {
    document.querySelector(".section02ContentsCarousell-swiper-wrapper").style.transform = "translateX(-374px)";
    nowPicture -= 1;
  } else if (nowPicture == 3) {
    document.querySelector(".section02ContentsCarousell-swiper-wrapper").style.transform = "translateX(0px)";
    nowPicture = nowPicture -= 1;
  }
});


window.addEventListener("click",onAnimate);

 function onAnimate() {
        myAnimation = window.requestAnimationFrame(onAnimate);
        //console.log("onAnimate");
        
      }

  //section03Carousel
let fromPicture = 1;

  document.getElementById('img_Right02').addEventListener("click", function () {
  if (fromPicture == 1) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-374px)";
   fromPicture += 1;
  } else if (fromPicture== 2) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-748px)";
    fromPicture += 1;
  }
  else if (fromPicture == 3) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-1128px)";
    fromPicture += 1;
  }
});
document.getElementById('img_Left02').addEventListener("click", function () {
  if (fromPicture == 4) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-374px)";
   fromPicture -= 1;
  } else if (fromPicture == 3) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(0px)";
   fromPicture = fromPicture -= 1;
  }
});

  //section04Carousel
let aboutPicture = 1;

  document.getElementById('img_Right03').addEventListener("click", function () {
  if (aboutPicture == 1) {
    document.querySelector(".section04ContentsCarousell-swiper-wrapper").style.transform = "translateX(-374px)";
   aboutPicture += 1;
  } else if (aboutPicture== 2) {
    document.querySelector(".section04ContentsCarousell-swiper-wrapper").style.transform = "translateX(-748px)";
    aboutPicture += 1;
  }
  else if (aboutPicture == 3) {
    document.querySelector(".section04ContentsCarousell-swiper-wrapper").style.transform = "translateX(-1128px)";
    aboutPicture += 1;
  }
});
document.getElementById('img_Left03').addEventListener("click", function () {
  if (aboutPicture == 4) {
    document.querySelector(".section04ContentsCarousell-swiper-wrapper").style.transform = "translateX(-374px)";
   aboutPicture -= 1;
  } else if (aboutPicture == 3) {
    document.querySelector(".section04ContentsCarousell-swiper-wrapper").style.transform = "translateX(0px)";
   aboutPicture = aboutPicture -= 1;
  }
});
