$(document).ready(function(){
    $(window).scroll(function(){
        if(scrollY>20){
            $('.navbar').addClass('sticky')
        }
        else{
            $('.navbar').removeClass('sticky')
        }
    });
    //togglemenubutton/navbar
    $('.menubtn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menubtn i').toggleClass('active');
    })
})