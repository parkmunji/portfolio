var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false;

    $(document).ready(function(){
        init();
        initEvent();

        $("html, body").stop().animate({'scrollTop' : 0})
        
        // scrolltop이 profile(.cnt02)에 왔을때 애니메이션 실행
        var a = 0;
        var cntTop = $('.cnt02').offset().top;

        $(window).scroll(function() {
            if(a == 0 && $('html, body').scrollTop() <= cntTop ) {
                $('.cnt02 .html .skill_bar .bar').stop().animate({'width':'230px'},700)
                $('.cnt02 .css .skill_bar .bar').stop().animate({'width':'220px'},700)
                $('.cnt02 .js .skill_bar .bar').stop().animate({'width':'200px'},700)
                $('.cnt02 .ps .skill_bar .bar').stop().animate({'width':'250px'},700)
                $('.cnt02 .ai .skill_bar .bar').stop().animate({'width':'240px'},700)
                a = 1;
            }

            else if(a != 0) {
                $('.cnt02 .html .skill_bar .bar').stop().animate({'width':'24px'},900)
                $('.cnt02 .css .skill_bar .bar').stop().animate({'width':'24px'},900)
                $('.cnt02 .js .skill_bar .bar').stop().animate({'width':'24px'},900)
                $('.cnt02 .ps .skill_bar .bar').stop().animate({'width':'24px'},900)
                $('.cnt02 .ai .skill_bar .bar').stop().animate({'width':'24px'},900)
                a = 0;
            }
        }) // scroll

        
      $('.profile2 .btn_prof').click(function() {
         $('.cnt02 .profile2').css('background','url(../img/tablet/profile_1.png)')
         $('.cnt02 .profile2 .profile').css('display','block')
         $('.cnt02 .profile2 .education').css('display','none')
         $('.cnt02 .profile2 .license').css('display','none')
      })
      $('.profile2 .btn_edu').click(function() {
         $('.cnt02 .profile2').css('background','url(../img/tablet/profile_2.png)')
         $('.cnt02 .profile2 .profile').css('display','none')
         $('.cnt02 .profile2 .education').css('display','block')
         $('.cnt02 .profile2 .license').css('display','none')
      })
      $('.profile2 .btn_licen').click(function() {
         $('.cnt02 .profile2').css('background','url(../img/tablet/profile_3.png)')
         $('.cnt02 .profile2 .profile').css('display','none')
         $('.cnt02 .profile2 .education').css('display','none')
         $('.cnt02 .profile2 .license').css('display','block')
      })
    }); //ready
    
    var init = function(){
        $cnt = $(".content");
        $nav = $(".header a");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 4){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false;
        });
        $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
    };
    
};

scroll();

