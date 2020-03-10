var home = {
    init: function() {
        this.contentPagination(),
        this.windowPreload(),
        this.clickLogoMob();
    },
    clickLogoMob(){
        var W = $(window).width();
        $('.icon-logo').click(function(){
            $('.box-content').removeClass('page-active');
            $('.box-content.content-home').addClass('page-active');
            $('nav a').removeClass('active');
        });
        function checkWidth() {
            if (W < 1024) {
                $('.box-content').removeClass('page-active');
                $('.box-content.content-home').addClass('page-active');
                $('nav a').removeClass('active');

            }else{
                $('.box-content.content-home').removeClass('page-active');
                $('.box-content.content-about').addClass('page-active');
                $('nav a.about-page').addClass('active');
            }
        }
        checkWidth();
        // $(window).resize(checkWidth);
    },
    contentPagination: function() {
        $('nav a').click(function(){
            var menuSec = $(this).attr('data-menuSec');
            var path = $(this).parents('.center-content').find('.box-content.content-'+menuSec);
            $('.content-home').addClass('content-closed');
            $('nav a').removeClass('active');
            $(this).addClass('active');
            $('.box-content').removeClass('page-active');
            path.addClass('page-active');
            console.log(path);
        });
        $('.icon-logo').click(function(){
            $('.content-home').removeClass('content-closed');
        });

        // $("nav a").click(function() {
        //     $("nav a").removeClass("active"), $("nav a").hasClass("active") || $(this).addClass("active"), $(".box-content").removeClass("page-active")
        // }), $("nav .about-page").click(function() {
        //     $(".box-content.content-about").addClass("page-active")
        // }), $("nav .port-page").click(function() {
        //     $(".box-content.content-port").addClass("page-active")
        // }), $("nav .skills-page").click(function() {
        //     $(".box-content.content-skills").addClass("page-active")
        // })
        
    },
    windowPreload: function() {
        window.onload = function(){
            $(".content-preload").delay(2000).addClass('loadImg');
            $(".content-preload").fadeOut('slow');
        }
    }
};
