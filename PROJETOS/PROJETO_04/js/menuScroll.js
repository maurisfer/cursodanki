$(function(){

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSettop = $(href).offSet().top;

        //offSet().top retorna a altura do topo do elemento

        $('html, body').animate({'scrollTop': offSettop});
        return false;
    });

    //Sistema de scroll para single page, através de id das sessãoes para descer soziho quando clicado no menu
   


});