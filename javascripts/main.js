jQuery(document).ready(function(){
    //***********************
    // home follow
    var $homeContact = $('.home-contact');
    function addContactData(name, href, img){
        name = name || "";
        return '<a href="'+href+'" target="_blank" ><img src="'+img+'" alt="'+name+'"/></a>';
    }
    var contactTpl = "";
    contactTpl += '<div class="weixin" style="display: none;"><img src="http://7d9r3t.com1.z0.glb.clouddn.com/weixin_code.png" alt="微信"></div>';
    
    $homeContact.append(contactTpl);
    var weixin = $('[href="http://weixin.qq.com/"]');
    weixin.click(function(){
        $('.weixin').toggle(200);
        return false;
    });
    
    $(".home-follow").click(function(e){
        e.preventDefault();
        if($homeContact.is(':visible')){
            $homeContact.slideUp(100);
            $('.weixin').hide();
        }else{
            $homeContact.slideDown(100);
        }
    });
    //***********************
    
    tk.comment.init($('#disqus_container .comment'));

    //ad
    if(tk.isMobile.any()){
        tk.ad.showPageFoot("ad-page-footer", "auto"); 
        //tk.ad.showPageFoot("ad-page-footer", "300-250");        
    }else{
        tk.ad.showPageFoot("ad-page-footer", "auto");
        //tk.ad.showPageFoot("ad-page-footer", "728-90");
    }
    
    tk.ad.loadGoogleJs();
    setTimeout(function(){
       // $(".home-follow").click();
    }, 3000);
    
    loadSidebar();

});

function loadSidebar(){
    $(".home-menu-ex").click(function(){
        $("body").toggleClass("sidebar-visible");
    });
    $("#sidebar-close,.close-icon").click(function(){
        $("body").removeClass("sidebar-visible");

    });
    var googleUrl = "https://www.google.com/search?q=site%3Atiankonguse.com+";
    $(".search-submit").click(function(){
        var that = $(this);
        var val = $(".search-field").val();
        that.attr("href", googleUrl + val);
        return true;
    });
    $(".js-menu-trigger").hide();
    $(".home-menu-ex").bind("click", function(e){ 
        $(".js-menu").addClass("is-visible");
        $(".menu-screen").addClass("is-visible");
        $(".js-menu-trigger").show();
        e.preventDefault();
    });
    
    $(".js-menu-trigger").bind("click", function(e) {
        $(".js-menu").removeClass("is-visible");
        $(".menu-screen").removeClass("is-visible");
        $(".js-menu-trigger").hide();
        e.preventDefault();
    });
    
}


