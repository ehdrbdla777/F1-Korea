[![F1-Korea](./images/header_logo.png)](https://github.com/ehdrbdla777/New-F1-Korea.git)

[해당페이지로 이동](https://github.com/ehdrbdla777/New-F1-Korea.git)

# 프로젝트 명 : F1 Korea Codding

## 제작기간 : 4일 

## 사용언어 : HTML, CSS, JavaScript

## 사용기술 -------------------------------------------------------------------------

### 1. Lodash를 활용하여 scroll함수 제어하기
scroll이벤트가 계속 실행되면 사이트가 무거워 질 수 있으므로 이런부분을 제어 할 수 있는 플러그인이 lodash를 사용
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

### 2. 사용한 구글폰트
구글폰트
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet">
```

### 3. 서브메뉴 fade-in/out
메인메뉴에 hover 하면 각 서브메뉴들이 fade-in/out 되도록 지정
```javascript
$("header .menu li:nth-child(1)").mouseenter(function(){
  $(".recency").stop().fadeIn();
  $(".sub-bg").stop().fadeIn();
});
$("header .menu li:nth-child(1)").mouseleave(function(){
  $(".recency").stop().fadeOut();
  $(".sub-bg").stop().fadeOut();
});

$("header .menu li:nth-child(2)").mouseover(function(){
  $(".schedule").stop().fadeIn();
  $(".sub-bg").stop().fadeIn();
});
$("header .menu li:nth-child(2)").mouseout(function(){
  $(".schedule").stop().fadeOut();
  $(".sub-bg").stop().fadeOut();
});

$("header .menu li:nth-child(3)").mouseover(function(){
  $(".result").stop().fadeIn();
  $(".sub-bg").stop().fadeIn();
});
$("header .menu li:nth-child(3)").mouseout(function(){
  $(".result").stop().fadeOut();
  $(".sub-bg").stop().fadeOut();
});

$("header .menu li:nth-child(4)").mouseover(function(){
  $(".driver").stop().fadeIn();
  $(".sub-bg").stop().fadeIn();
});
$("header .menu li:nth-child(4)").mouseout(function(){
  $(".driver").stop().fadeOut();
  $(".sub-bg").stop().fadeOut();
});

$("header .menu li:nth-child(5)").mouseover(function(){
  $(".team").stop().fadeIn();
  $(".sub-bg").stop().fadeIn();
});
$("header .menu li:nth-child(5)").mouseout(function(){
  $(".team").stop().fadeOut();
  $(".sub-bg").stop().fadeOut();
});
```

### 4. fade-in/out slide
상단 section의 이미지가 천천히 사라지고 천천히 다음 이미지가 천천히 나타나도록 지정
```javascript
$(".fade-in_out ul img").hide();
$(".fade-in_out ul li:first img").fadeIn();


const imgCount = 5;
let nowCount = 0;
function slide(){
  nowCount = (nowCount == imgCount) ? 0 : nowCount += 1;
  $(".fade-in_out ul img").eq(nowCount - 1).fadeOut(3000);
  $(".fade-in_out ul img").eq(nowCount).fadeIn(6000); 
}

setInterval(slide,3000);
```

### 5. slick slide
slick slide section 에 이미지들이 자동으로 슬라이드 되고 prev, next 버튼을 누르면 좌우로 넘어가게 지정
```javascript
$('.image-slider').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	enterPadding: 0,
	centerMode: false,
	draggable: true,
	infinite: true,
});
```

### 6. tab-btn
tab 버튼을 누르면 두개의 콘텐츠가 번갈아 나타나도록 지정
```javascript
const tabList = document.querySelectorAll('.tab-menu .list li');
  const contents = document.querySelectorAll('.ranking .cont')
  let activeCont = ''; // 현재 활성화 된 컨텐츠

  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.tab-btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        // 나머지 버튼 클래스 제거
        tabList[j].classList.remove('is_on');

        // 나머지 컨텐츠 display:none 처리
        contents[j].style.display = 'none';
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add('is_on');

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';
    });
  };
```

### 7. tab-menu active
tab 버튼을 누르면 누른 버튼에 빨간색 밑줄이 생기도록 지정
```javascript
const buttons = document.getElementsByClassName('toggleButton');

  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
          // 현재 클릭된 버튼을 엑티브 상태로 변경
          this.classList.add('active');

          // 다른 버튼들의 엑티브 상태 제거
          for (let j = 0; j < buttons.length; j++) {
              if (buttons[j] !== this) {
                  buttons[j].classList.remove('active');
              }
          }
    });
  }
```
