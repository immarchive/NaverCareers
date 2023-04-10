$(function(){


    /**
     * @subMenu
     */

    $('.dropmenu').hover(function(){

        $('.sub-list').addClass('on')
        $('.gnb').addClass('on')
    },
    function(){
        $('.sub-list').removeClass('on')
        $('.gnb').removeClass('on')

    });



    /**
     * @selctbox
     * 
     */

    $('select').change(function(){
        $(this).css('color','#000');
    });



    /**
     * @mainSlide
     */
    
    const visualSlide = new Swiper(".visual-slide", {
        loop: true,
        centeredSlides: true,
        simulateTouch:false, //마우스 드래그 막기
        autoplay: {
            delay: 6000,
        },
    });



    /**
     * @peopleslide
     */

    const perpleSlide = new Swiper(".people-slide", {
        
        loop: false,
        spaceBetween:15,
        slidesPerView:1,

        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },

        breakpoints:{
            768:{
                slidesPerView:1.2,
            },
            320:{
                slidesPerView:1,
            }
        }
    });



    /**
     * @benefits슬라이드
     * 
     * 
     */

    const benefitsSlide = new Swiper(".benefits-slide", {
        loop: false,
        slidesPerView:1,
        spaceBetween:30,

        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },

        breakpoints:{
            1024:{
                slidesPerView:3,
            },
            768:{
                slidesPerView:2,
            },
            320:{
                slidesPerView:1,
            }
        }
    });


    
    /**
     * @푸터관련사이트
     * 
     */

    $('.btn-related').click(function(e){
        e.preventDefault();
        $('.related-wrap').toggleClass('on');
    });



    /**
     * @popupmenuOpen
     * 
     */

    $('.btn-menu').click(function(){
        $('.popup-menu').toggleClass('on')
        $('.popup-menu').toggleClass('close')

        if ($(this).hasClass('close')) {
            $(this).removeClass('close')
        } else {
            $(this).addClass('close')
        }
    })



    /**
     * @팝업메뉴서브메뉴
     * 
     */

    $('.popup-menu .nav-item .title').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).siblings().removeClass('on');
            $(this).parent().removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).siblings().addClass('on');
            $(this).parent().addClass('on');
        }
    })



    /**
     * @전체선택
     * 
     */

    $('.all-chk').click(function(){
        if($(this).siblings('input').prop('checked')){
            $(this).parent().siblings('.sub-box').find('input').prop('checked',false)
        }else{
            $(this).parent().siblings('.sub-box').find('input').prop('checked',true)
        }
    })
    $('.clear').click(function(){
        $('.popup-search input').prop('checked',false)
    })



    /**
     * @popupmenuSublistOpen
     * 
     */

    $('.group-search').click(function(){
        $('.popup-search').addClass('on');
        $('body').addClass('hidden')
    })

    $('.btn-menu-close').click(function(){
        $('.popup-search').removeClass('on');
        $('body').removeClass('hidden')
    })



    $('.chk-area .title.main').click(function(){
        // $(this).siblings().toggleClass('on')

        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
            $(this).siblings('.chk-wrap').removeClass('on')
        } else {
            $(this).addClass('on')
            $(this).siblings('.chk-wrap').addClass('on')
        };

    });

    
    $('.chk-area .title.sub').click(function(){

        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
            $(this).siblings('.sub-list').removeClass('on')
        } else {
            $(this).addClass('on')
            $(this).siblings('.sub-list').addClass('on')
        }
    });



}) //삭제금지