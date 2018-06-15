jQuery(document).ready(function($) {
  e();
  $(window).resize(function(event) {
      e();
      initSwiper(); 
      initSwiperJob(); 
  });  

  //Адаптивная ширина МЕНЮ 
  var domHeightVideoBlock,
      windowSizeMobile,
      heightClientsBlock,
      windowSizeWdth1025,
      swiperImgNewsModal;

  function e(){

    var offset = $('.h__wrap-soc').offset(),
        domPosMenu = offset.left,
        domLeftPosMenu = $('.modal__menu'),
        domBigVideo = $('.js-video-block').find('.big-video'),
        domFormJob = $('.form__job'), 
        domVideoContentInner = $('.video-grid-item').eq(1).outerHeight() + $('.video-grid-item').eq(3).outerHeight() + 30;
        domHeightVideoBlock = $('.big-video img').outerHeight(true);
        windowSizeWdth1025 = $(window).width() > 1025 ? true : false;

        if ( $(window).width() > 801 )  {
          windowSizeMobile = false;
          domBigVideo.outerHeight( domVideoContentInner );
        }else{
          windowSizeMobile = true;
          domBigVideo.outerHeight( 335 );    
        }            

        if ( $(window).width() > 960 )  {

            domLeftPosMenu.css('left', domPosMenu - 60);
        }else{
            domLeftPosMenu.css('left', 'auto');    
        }  

        //Сворачивание контента ВИДЕО
        $('.js-video-block').readmore({
            speed: 300,
                  collapsedHeight: domVideoContentInner,
                  moreLink: '<a class="collapse-list-info collapse-open "><span>ПОКАЗАТЬ ЕЩЁ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>',
                  lessLink: '<a class="collapse-list-info collapse-close icon-arrow-list"><span>СВЕРНУТЬ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>'
          });


          //Показ и скрытие формы резюме
        var domBtnFace = $('.js-btn-face'),
            domFormJob = $('.js-form-validate-job');
            domBtnFace.click( function(event){
              $(this).slideUp(0, function() {
                domFormJob.fadeIn();
              });
            });

        // корректируем стили формы в узком месте
        if( $('.form__job').width() < 300 ){
            $('.form__job').addClass('smallform');
            formJobSmall();   
          }else{
            $('.form__job').removeClass('smallform');    
          } 

            //Сворачивание контента Клиенты

          heightClientsBlock = windowSizeMobile ? 628 : 350;
          $('.js-cases-description-block').readmore({
            speed: 300,
                  collapsedHeight: heightClientsBlock ,
                  moreLink: '<a class="collapse-list-info collapse-open "><span>ПОКАЗАТЬ ЕЩЁ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>',
                  lessLink: '<a class="collapse-list-info collapse-close icon-arrow-list"><span>СВЕРНУТЬ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>'
          });

    } 


    function formJobSmall(){
      $('.form__job').addClass('smallform');  
    }

  //Сворачивание контента НОВОСТИ
      $('.js-news-block').readmore({
          speed: 300,
                collapsedHeight: 510,
                moreLink: '<a class="collapse-list-info collapse-open "><span>ПОКАЗАТЬ ЕЩЁ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>',
                lessLink: '<a class="collapse-list-info collapse-close icon-arrow-list"><span>СВЕРНУТЬ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>'
        });
  //Страница НОВОСТИ - высота сворачивания контента

    var countNewsBlock = $('.news__description').find('.news__block-item').length,
        heightNewsBlock;

      if (windowSizeWdth1025) {

        switch(countNewsBlock) {
          case 1:           
          case 2:          
          case 3:
            heightNewsBlock = 510; 
            break;

          case 4:           
          case 5:          
          case 6:
            heightNewsBlock = 1020; 
            break;
          case 7:           
          case 8:            
          case 9:
            heightNewsBlock = 1530;           
            break;  
          default:
            heightNewsBlock = 1530;                 
        }
      }else{
        heightNewsBlock = 1590;    
      }

      $('.news__description').find('.js-news-block').readmore({
          speed: 300,
          collapsedHeight: heightNewsBlock ,
          moreLink: '<a class="collapse-list-info collapse-open "><span>ПОКАЗАТЬ ЕЩЁ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>',
          lessLink: '<a class="collapse-list-info collapse-close icon-arrow-list"><span>СВЕРНУТЬ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>'
      });

  //Страница VIDEO - высота сворачивания контента

    var countVideoBigBlock = $('.video__description').find('.big-video').length,
        heightVideoBigBlock;

      if (windowSizeWdth1025) {

        switch(countVideoBigBlock) {
          case 1:           
          case 2:
            heightVideoBigBlock = 380; 
            break;
          case 3:           
          case 4:
          case 5:             
            heightVideoBigBlock = 730; 
            break;
        
          case 6:
            heightVideoBigBlock = 1140;           
            break;  
          default:
            heightVideoBigBlock = 1120;                 
        }
      }else{
        heightVideoBigBlock = 1120;    
      }

      $('.video__description').find('.js-video-description-block').readmore({
          speed: 300,
          collapsedHeight: heightVideoBigBlock ,
          moreLink: '<a class="collapse-list-info collapse-open "><span>ПОКАЗАТЬ ЕЩЁ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>',
          lessLink: '<a class="collapse-list-info collapse-close icon-arrow-list"><span>СВЕРНУТЬ</span><p class="icon-arrow-list"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="10" viewBox="0 0 17 10"><defs><path id="i7gua" d="M632.99 1990.15l7.25 7.26 7.26-7.26"/></defs><g><g transform="translate(-632 -1989)"><use fill="#fff" fill-opacity="0" stroke="#000" stroke-miterlimit="50" stroke-width="2" xlink:href="#i7gua"/></g></g></svg></p></a>'
      });

    // Промотка кнопок на главной странице в блоке PROMO

    var swiperPromoBtn = undefined;
    initSwiper();


    function initSwiper() {
        var screenWidth = $(window).width(); 

        if(screenWidth < 801 && swiperPromoBtn == undefined &&  $('.js-button-slider').length ) {            
          swiperPromoBtn = new Swiper('.js-button-slider', {
            slidesPerView: 1,
            spaceBetween: 15, 
            scrollbar: {
              el: '.swiper-scrollbar',
              hide: false,
            }
          });
        } else if (screenWidth > 801 && swiperPromoBtn != undefined) {
            swiperPromoBtn.destroy();
            swiperPromoBtn = undefined;
            $('.js-button-slider').find('.swiper-wrapper').removeAttr('style');
            $('.js-button-slider').find('.swiper-slide').removeAttr('style');            
        }        
    }

  // перестройка карточек команды в слайдер на мобильных экранах  
    var swiperJob = undefined;
    initSwiperJob();

    function initSwiperJob() {

      if( $(window).width()  < 1008 && swiperJob == undefined  &&  $('.js-our-commands-slider').length ) {  
          $('.js-our-commands-slider').find('.swiper-wrapper').removeClass('row');
          $('.js-our-commands-slider').find('.swiper-slide').removeClass('col-sm-12 col-md-4 col-lg-3');

          $(".b__form-job").clone().appendTo(".js-container-form-job");
          $('.js-container-form-job').find('.b__form-job').css('display', 'block');
          

          swiperJob = new Swiper('.js-our-commands-slider', {
            slidesPerView: 1,
            spaceBetween: 5,
            pagination: {
              el: '.swiper-pagination',
            },
            breakpoints: {
              
              1025: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              }
            }
          });


        } else if ($(window).width()  > 1008 ) {
          if ( swiperJob != undefined ) {
              swiperJob.destroy();
              swiperJob = undefined;  
            }
            $('.js-our-commands-slider').find('.swiper-wrapper').removeAttr('style').addClass('row');
            $('.js-our-commands-slider').find('.swiper-slide').removeAttr('style').addClass('col-sm-12 col-md-4 col-lg-4 col-xl-3'); 
            $('.js-container-form-job').find('.b__form-job').css('display', 'none').remove();

        }  
    }

//----------   MODAL VIDEO  --------------
    $('.js-btn-open-video').click( function(event){

        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){ 
                $('.js-show-modal-video ') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '0'}, 200);
        });
            $('body').addClass('no-scroll');        
    });

//----------   MODAL Поставить задачу  --------------
    $('.js-btn-open-todo').click( function(event){
        // закроем МЕНЮ
        $('.header').css('z-index', '100');        
        $('.js-btn-open-menu').removeClass('open');
        $('body').removeClass('open-menu'); 
        $('.js-show-modal-menu').css('display', 'none');
        $('.js-vision-open-menu').fadeOut(0).css('opacity', '0');

        // откроем Поставить задачу        
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){ 
                $('.js-show-modal-todo ') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '45%'}, 200);
        });
            $('body').addClass('no-scroll');        
    });

//----------   MENU   --------------
    $('.js-btn-open-menu').click( function(event){
        event.preventDefault();

        if ($('.js-btn-open-menu').hasClass('open')) {

           $('.js-show-modal-menu ').animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                    $('.js-btn-open-menu').removeClass('open'); 
                    $('.js-vision-open-menu').fadeOut(0).css('opacity', '0');
                    $('body').removeClass('open-menu'); 

                }
            );
        }else{

          $('.overlay').fadeIn(400,
              function(){ 
                  $('.js-show-modal-menu ') 
                      .css('display', 'block')
                      .animate({opacity: 1, top: '0'}, 200);
                  $('.js-vision-open-menu').fadeIn(0).css('opacity', '1');
                  $('.js-btn-open-menu').addClass('open');

          });
              $('body').addClass('open-menu'); 
        }

    });
//---------- CLOSE MODAL -----------------

    // закрытие модального окна
    $('.js-btn-close-modal, .overlay').click( function(){
        $('.js-show-modal-todo, .js-show-modal-menu , .js-show-modal-video')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                    $('.js-btn-open-menu').removeClass('open'); 
                }
            );
            $('.header').css('z-index', '1030'); 
            $('.js-vision-open-menu').fadeOut(0).css('opacity', '0');
            $('body').removeClass('no-scroll'); 
            $(".js-send-ok").fadeOut();
            $(".js-btn-form").fadeIn(); 
            $('.js-show-modal-todo').trigger( 'reset' );              
    });  

//---------- END MODAL -----------------

  $(window).on('scroll resize load', function() {
      if ($(this).scrollTop() > 1){  
          $('.header').addClass("sticky");
      }
      else{
          $('.header').removeClass("sticky");
      }
  });
    

//  slider Portfolio Home    
    var swiper = new Swiper('.js-portfolio-slider', {
      slidesPerView: 8,
      spaceBetween: 0,   
      setWrapperSize: true, 
      autoplay: {
	    delay: 12000,
	  },	
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      breakpoints: {
        
        900: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 4,
          spaceBetween: 10,
        }
      }
    });

//  slider NEWSPAGE  
    var swiper = new Swiper('.js-news-slider', {
      slidesPerView: 3,
      spaceBetween: 30,   
      setWrapperSize: true, 
      autoplay: {
      delay: 12000,
      },
      navigation: {
        nextEl: '.swiper-news-button-next',
        prevEl: '.swiper-news-button-prev',
      },
      breakpoints: {
        
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

//  slider КАРТОЧКА УСЛУГ  
    var articleCartSwiper = new Swiper('.js-article-cart-slider', {
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        
        961: {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
              el: '.swiper-pagination',
            },
        }
      }
    });    

//  slider УСЛУГ - рынки - мобильная версия
    var articleCartLinkSwiper = new Swiper('.js-article-cart-link-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        
        961: {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
              el: '.swiper-pagination',
            },
        }
      }
    });   


    //Просмотр изображения НОВОСТИ в модальном окне(fancy)
    if ( $( '.js-news-slider' ).length ) {
      $('.js-news-slider').find( '.swiper-slide' ).swipebox({
        hideBarsDelay : 999999999,
        useSVG : false,
        afterOpen: function() {
          runPosBtnClose();
        },
        nextSlide: function() {
          runPosBtnClose();
        },
        prevSlide: function() {
          runPosBtnClose();            
        }            
      });
    }
      
    //Положение close кнопочки
    var leftPosSlideModal,
        topPosSlideModal,
        widthCurrentImgModal,
        widthModalOverlay;

        $(window).resize(function(event) {
          widthModalOverlay = $(window).width();
          runPosBtnClose();
        });          

    function runPosBtnClose(){
      $('#swipebox-close').css({opacity: 0});
        widthModalOverlay = $(window).width();

      setTimeout(function() {
           /* console.log($('#swipebox-slider').find('.current img')["0"].naturalWidth)*/

            widthCurrentImgModalNatural = $('#swipebox-slider').find('.current img')["0"].naturalWidth;
            widthCurrentImgModal = $('#swipebox-slider').find('.current img').width();

            leftPosSlideModal = $('#swipebox-slider').find('.current img').offset().left;
            topPosSlideModal = $('#swipebox-slider').find('.current img').offset().top;


            if ( widthCurrentImgModalNatural < widthModalOverlay ) {

              $('#swipebox-close').css({

                opacity: 1,
                top: topPosSlideModal,
                left: leftPosSlideModal + widthCurrentImgModal + 30
              });

            }else{
              $('#swipebox-close').css({
                  opacity: 1,
                  top: topPosSlideModal - 50,
                  left: leftPosSlideModal + widthCurrentImgModal -45
                });
            }

      }, 1200)

    }

// -----  MODAL slider video
  var swiperVideo = new Swiper('.js-video-slider', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.modal__video-button-next',
        prevEl: '.modal__video-button-prev',
      },
      
    });   

    
// валидация формы поставить задачу
    $(".js-form-validate").validate({
        rules: {
            nic: {
                required: true,
                minlength: 4,
                maxlength: 120,
            },
            phone: {
                required: true,
                minlength: 9,
                maxlength: 17,
            },
            textarea: {
              required : true,
              minlength: 3,
            },  
            email: {
              required : true,
              email: true
            }                  
        },
        messages: {

            nic: {
                required: "Пожалуйста, введите корректное имя",
                minlength: "Логин должен быть минимум 3 символа",
                maxlength: "Максимальное число символо - 120",
            },
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен быть минимум 9 символа",
                maxlength: "Телефон должен быть максимум 17 символов",
            },
            textarea: "Опишите Вашу задачу" ,  
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Email введён не правильно",
            }

        },

      errorElement: "i"
    });


// валидация формы резюме
    $(".js-form-validate-job").validate({
        rules: {
            nic: {
                required: true,
                minlength: 4,
                maxlength: 120,
            },
            textarea: {
              required : true,
              minlength: 3,
            },  
            email: {
              required : true,
              email: true
            }                  
        },
        messages: {

            nic: {
                required: "Пожалуйста, введите корректное имя",
                minlength: "Логин должен быть минимум 3 символа",
                maxlength: "Максимальное число символо - 120",
            },
            textarea: "Расскажите о Себе" ,  
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Email введён не правильно",
            }

        },

      errorElement: "i"
    });
    $(".js-mask").mask("9 (999) 999-9999"); 
    
});
