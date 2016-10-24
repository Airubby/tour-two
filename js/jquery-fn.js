
function b(){
    h = $(window).height()/2;
    t = $(document).scrollTop();
    if(t > h){
        $('#nav_scroll').show();
    }else{
        $('#nav_scroll').hide();
    }
}

function c(srcelement)
{
    var targetid,srcelement,targetelement;
    targetid=srcelement.id+"d";
    targetelement=document.getElementById(targetid);

    if (targetelement.style.display=="none")
    {
        srcelement.className="active";
        targetelement.style.display='';
    }
    else
    {
        srcelement.className="";
        targetelement.style.display="none";
    }
}

$(function(){

    $('#nav_scroll').hide();
    $(window).scroll(function(){
        b();
    });


    /*********************** 登录 **************************************/
    $("#login-box").hide();
    $("#login").on("click",function(){
        $("#login-box").show();
    });
    $("#login-close").on("click",function(){
        $("#login-box").hide();
    });

    /*********************** 图片标题提示 ***************************/
    $(".caption").hover(function(){
        $(".boxcaption",this).stop().animate({bottom:'0px'},{queue:false,duration:320});
    },function(){
        $(".boxcaption",this).stop().animate({bottom:'-30px'},{queue:false,duration:320});
    });

    /**************** 首页导航 ***************/
    $(".nav-pop-wrapper").hide();
    $("#nav_pop_wrapper").show();
    $("#nav_con_left").hover(function(){
        $(".nav-pop-wrapper").slideToggle();
    });
    $(".nav-pop-wrapper .nav-pop").slide({
        titCell:".mod-cate",
        targetCell:".mod-subcate",
        delayTime:0,
        triggerTime:0,
        defaultPlay:false,
        returnDefault:true
    });


    /******************* 线路列表 **********************************/

    var openclosedl=true;
    $(".open-close").on("click",function(){
        if(openclosedl){
            $(this).addClass("active");
            $(this).siblings("dd").addClass("dd-height");
        }else{
            $(this).removeClass("active");
            $(this).siblings("dd").removeClass("dd-height");
        }
        openclosedl=!openclosedl;
    });

    /************* 预订页面 ******************/

    var expanded1 = true;
    var expanded2 = true;
    $(".click-span1").on("click",function(){
        if(expanded1){
            $(this,this).next("em").addClass("this-em");
            $("#list_info1").addClass("info-show");
        }else{
            $(this,this).next("em").removeClass("this-em");
            $("#list_info1").removeClass("info-show");
        }
        expanded1 = !expanded1;
    });
    $(".click-span2").on("click",function(){
        if(expanded2){
            $(this).next("em").addClass("this-em");
            $("#list_info2").addClass("info-show");
        }else{
            $(this).next("em").removeClass("this-em");
            $("#list_info2").removeClass("info-show");
        }
        expanded2 = !expanded2;
    });

    $("#show-state").hide();
    $(".boder-bd-right").hover(function(){
        $("#show-state").show();
    },function(){
        $("#show-state").hide();
    });

    $("#insurance").hide();
    $("#insurance_input").click(function(){
        $(this).each(function(){
            if($(this).attr("checked")=="checked"){
                $("#insurance").show();
            }
            else{
                $("#insurance").hide();
            }
        });
    });



    /********************* 行程内容 ***************************/

    $(".ans-reserve").hide();
    $(".how-reserve").hover(function(){
        $(".ans-reserve").show();
    },function(){
        $(".ans-reserve").hide();
    });

    $(".more-travel-con").hide();
    $(".more-travel-con-close").hide();
    var nicescroll=true;
    $(".more-travel").on("click",function(){
       if(nicescroll){
           $(".more-travel-con").show();
           $(".more-travel-con-close").show();
           $("#nicescroll").niceScroll({
               cursorcolor:"#e1e1e1",
               cursoropacitymax:1,
               touchbehavior:false,
               cursorwidth:"8px",
               cursorborder:"0",
               cursorborderradius:"0px"
           });
       } else{
           $(".more-travel-con").hide();
           $(".more-travel-con-close").hide();
       }
        nicescroll=!nicescroll;
    });
    $(".more-travel-con-close").on("click",function(){
        $(".more-travel-con").hide();
        $(".more-travel-con-close").hide();
    });


    $(".nav_xcts").click(function(){
        $('html,body').animate({scrollTop:$('#xcts').offset().top},500);
        return false;
    });
    $(".nav_xcnr").click(function(){
        $('html,body').animate({scrollTop:$('#xcnr').offset().top},500);
        return false;
    });
    $(".nav_fysm").click(function(){
        $('html,body').animate({scrollTop:$('#fysm').offset().top},500);
        return false;
    });
    $(".nav_wxts").click(function(){
        $('html,body').animate({scrollTop:$('#wxts').offset().top},500);
        return false;
    });
    $(".nav_fhdb").click(function(){
        $('html,body').animate({scrollTop:$('#fhdb').offset().top},500);
        return false;
    });


   /************** 幻灯 *********/
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });








});
