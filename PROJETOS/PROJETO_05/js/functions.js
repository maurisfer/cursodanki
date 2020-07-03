$(function(){

    //Funções para animar barra de pesquisa

    /*Variavéis das funções*/
    var currentValue = 0; //Inicia os valores em 0
    var isDrag = false; //Define que não há botão apertado no mouse
    var precoMaximo = 70000; //Define o valor máximo do preço
    var precoAtual = 0; //Define o valor inicial como 0

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    }); //Quando clicar com o mouse na barra, muda para true

    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection(); //Função para impedir selecionar o texto enquanto o mouse estiver apertado em cima da bara
    }); //Quando no documento inteiro levanta-se o mouse, muda para false

    //Função para arrastar a bolinha marcaora e mudar a cor do preenchimento de acordo com a distância percorrida pelo mouse
    $('.barra-preco').mousemove(function(e){

        if(isDrag){
            disableTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            console.log(mouseX)
            if(mouseX < 0){
                mouseX = 0;
            };
            if(mouseX > elBase.width()){
                mouseX = elBase.width();
            }
            $('.pointer-barra').css('left', (mouseX-13)+'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', currentValue +'%');

            precoAtual = (currentValue / 100) * precoMaximo;
            $('.preco_pesquisa').html(precoAtual.toLocaleString('pt-br',{style: 'currency', 'currency':'BRL'}));
        };
    }); //.pageX recupera o valor horizontal no qual o mouse está clicado em px

    //Funções para habilitar e desabilitar a seleção de texto no documento
    function disableTextSelection(){
        $('body').css('-webkit-user-select', 'none')
        $('body').css('-moz-user-select', 'none')
        $('body').css('-ms-user-select', 'none')
        $('body').css('-o-user-select', 'none')
        $('body').css('user-select', 'none')
    }
    function enableTextSelection(){
        $('body').css('-webkit-user-select', 'auto')
        $('body').css('-moz-user-select', 'auto')
        $('body').css('-ms-user-select', 'auto')
        $('body').css('-o-user-select', 'auto')
        $('body').css('user-select', 'auto')
    }

    /************************************************ */




    //Funções do slider da página teste de single venda

    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img-wrapper').length/3)-1;
    //Math.ceil - conta que arredonda qualquer resultado de length/3-1 para numeros inteiros. Define a quantidade dos grupos de 3 imagens há no elemento e qual será o número maáximo. 
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();

    function initSlider(){
        var amt = $('.mini-img-wrapper').length * 33.3;
        var elScroll = $('.nav-galeria-wrapper');
        var elSingle = $('.mini-img-wrapper');
        elScroll.css('width', amt+'%');
        elSingle.css('width', (100 / amt)*33.3+'%');

    };

    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.mini-img-wrapper').eq(curIndex*3).offset().left - $('.nav-galeria').offset().left;
                $('.nav-galeria').animate({'scrollLeft': elOff+'px'});
            }else{
                //console.log("Chegamos até o final");
            };
        });
        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img-wrapper').eq(curIndex*3).offset().left - $('.nav-galeria').offset().left;
                $('.nav-galeria').animate({'scrollLeft': elOff+'px'});
            }else{
                //console.log("Chegamos até o final");
            };

        })
    };

    function clickSlider(){
        $('.mini-img-wrapper').click(function(){
            $('.mini-img-wrapper').css('background-color', 'transparent');
            $(this).css('background-color', 'rgb(210,210,210')
            var img = $(this).children().css('background-image')
            $('.foto-destaque').css('background-image', img)

        });
        $('.mini-img-wrapper').eq(0).click();

    }

    /*
    CLICAR PARA DIV CONTATO COM ATRIBUTO GOTO
    */
   $('[goto=contato]').click(function(){
       $('nav a').css('color','black');
       $(this).css('color','#EB2D2D');
       $('html,body').animate({'scrollTop': $('#contato').offset().top});
       return false;
   });

   var directory = 'C:/Program Files/Ampps/www/localhost/CURSO DANKI FULL STACK/PROJETOS/PROJETO_05/index.html'

   $('[goto=contato]').click(function(){
       location.href=`${directory}?contato`;
       return false;
   });

   checkUrl();

   function checkUrl(){
       var url = location.href.split('/');
       var curPage = url[url.length-1].split('?');
       if (curPage[1] != undefined && curPage[1] == 'contato'){
           $('header nav a').css('color','black');
           $('footer nav a').css('color','white');
           $('[goto=contato]').css('color','#EB2D2D');
           $('html,body').animate({'scrollTop':$('#contato').offset().top});
       }
   }
   $('.mobile').click(function(){
       $(this).find("ul").slideToggle();
   })


   /*Sistema de navegação depoimento*/

   let amtDepoimento = $('.depoimento-single p').length;
   let curIndexDep = 0;

   inicarDepoimentos();
   navegarDepoimentos();

   function inicarDepoimentos(){
       $('.depoimento-single p').hide();
       $('.depoimento-single p').eq(0).show();
   }


   function navegarDepoimentos(){
       $('[next]').click(function(){
            curIndexDep++;
            if (curIndexDep >= amtDepoimento){
              curIndexDep = 0;
            }
            $('.depoimento-single p').hide();
            $('.depoimento-single p').eq(curIndexDep).show();   
       });
       $('[prev]').click(function(){
        curIndexDep--;
        if (curIndexDep < 0){
          curIndexDep = amtDepoimento-1;
        }
        $('.depoimento-single p').hide();
        $('.depoimento-single p').eq(curIndexDep).show(); 
    })   
   };














});