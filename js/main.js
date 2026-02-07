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





const header = document.querySelector('.header');

const logoImg = document.querySelector("header h1 img");


// 마우스 올렸을 때
header.addEventListener("mouseenter", function () {
  header.style.background = "#fff";



  logoImg.src = "IMG/COMMON/LogoColored.svg";


});

// 마우스 벗어났을 때
header.addEventListener("mouseleave", function () {
  header.style.background = "transparent";




  logoImg.src = "IMG/COMMON/Logo.svg";
});

header.addEventListener("mouseenter", () => {
  header.classList.add("active");
});

header.addEventListener("mouseleave", () => {
  header.classList.remove("active");
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



const wrapper = document.querySelector(".section02ContentsCarousell-swiper-wrapper");
const btnRight = document.getElementById("img_Right");
const btnLeft = document.getElementById("img_Left");

const slideWidth = 374;   // 한 칸 너비
const maxIndex = 4;       // 총 이미지 개수
let nowPicture = 1;       // 시작 인덱스 (1부터)

// 위치 이동 함수
function moveSlide() {
  const moveX = -slideWidth * (nowPicture - 1);
  wrapper.style.transform = `translateX(${moveX}px)`;
}

// 오른쪽 버튼
btnRight.addEventListener("click", () => {
  if (nowPicture < maxIndex) {
    nowPicture++;
    moveSlide();
  }
});

// 왼쪽 버튼
btnLeft.addEventListener("click", () => {
  if (nowPicture > 1) {
    nowPicture--;
    moveSlide();
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
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-784px)";
   fromPicture += 1;
  } else if (fromPicture== 2) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-1568px)";
    fromPicture += 1;
  }
  else if (fromPicture == 3) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-784px)";
    fromPicture += 1;
  }
});
document.getElementById('img_Left02').addEventListener("click", function () {
  if (fromPicture == 4) {
    document.querySelector(".section03ContentsCarousell-swiper-wrapper").style.transform = "translateX(-784px)";
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

const BEE =  document.querySelector('.BEE');
const BEEappearTiming = 5053;


window.addEventListener("scroll", function (addEventListener) {
  if (window.scrollY > BEEappearTiming) {
    BEE.style.opacity = 1;
  } 

  
});


const dashBoard =  document.querySelector('.dashBoard');
const dashBoardAppearTiming = 3566;


window.addEventListener("scroll", function (addEventListener) {
  console.log(window.scrollY);
  if (window.scrollY > dashBoardAppearTiming) {
     dashBoard.style.opacity = 1;
  } 

  
});








const funSMSmobile =  document.querySelector('.funSMSmobileApp');
const funSMSAppearTiming = 6915;


window.addEventListener("scroll", function (addEventListener) {
  console.log(window.scrollY);
  if (window.scrollY > funSMSAppearTiming) {
     funSMSmobile.style.opacity = 1;
  } 

  
});


//
//
const musicIcon = document.querySelector('.musicIcon');
const musicIconAppearTiming = 7765;

window.addEventListener("scroll", function (addEventListener) {
  console.log(window.scrollY);
  if (window.scrollY > funSMSAppearTiming) {
     musicIcon.style.opacity = 1;
  } 

  
});


//고객센터
let call = true;
document.getElementById('callCenter').addEventListener('click',function(){
if (call == true){document.getElementById('callCenterMenu').style.opacity = 1; call=false;}

else if (call == false){document.getElementById('callCenterMenu').style.opacity = 0; call=true;}

}
 
);

 