$(document).ready(function(){
    
    var typed = new Typed(".typing",{
        strings:["Web Developer","Graphic Designer","App Developer","Teacher","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing2",{
        strings:["Web Developer","Graphic Designer","App Developer","Teacher","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    //scroll function
    $(window).scroll(function(){
        if(scrollY>20){
            $('.navbar').addClass('sticky')
        }
        else{
            $('.navbar').removeClass('sticky')
        }

        if(this.scrollY>500){
            $('.scroll-up-btn').addClass('show')  
        }
        else{
            $('.scroll-up-btn').removeClass('show')  
        }
    });
    //togglemenubutton/navbar
    $('.menubtn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menubtn i').toggleClass('active');
    })

})