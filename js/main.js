// pc-menu
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


// tab-submenu
$("header .tab-inner .tab_mo .tab-nav .tab-nav-toggle").on('click', function(){
  const tabMenu = $('.tab_sub-menu');
  tabMenu.stop(true, true).slideToggle();
});


// fade in / out
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


// tab-menu
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


  // tab-menu active
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