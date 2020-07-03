$(function(){

    var delay = 3000;
    var curIndex = 0;
    var amt = $('.sobre-autor').length; //Quantidade de elementos que existem na classe

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.sobre-autor').length;        
        var sizeContainer = 100 * amt;
        var sizeBoxsingle = 100 / amt;
        $('.scrollWrapper').css('width', sizeContainer+'%');
        $('.sobre-autor').css('width', sizeBoxsingle+'%');
    }

    for (var i = 0; i < amt; i++){
        if(i == 0){
            $('.slider-bullets').append('<span style = "background-color: rgb(170,170,170"></span>');
        }else{
            $('.slider-bullets').append('<span></span>');
        };
    };

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex);
        }, delay);
    };

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scrollWrapper').offset().left;
        $('.slider-bullets span').css('background-color', 'rgb(200,200,200');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'rgb(170,170,170');
        $('.scrollEquipe').stop().animate({'scrollLeft': offSetX+'px'});
    };

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft': 0})
    })


});