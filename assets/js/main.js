/*---background image---*/
function dataBackgroundImage() {
    $('[data-bgimg]').each(function () {
        var bgImgUrl = $(this).data('bgimg');
        $(this).css({
            'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
        });
    });
}
function activateSlide(){
    /*---slider activation---*/
    $('.slider_area').owlCarousel({
        animateOut: 'fadeOut',
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        navText: ['<i class="zmdi zmdi-long-arrow-left zmdi-hc-fw"></i>','<i class="zmdi zmdi-long-arrow-right zmdi-hc-fw"></i>'],
    });
    dataBackgroundImage();
}

function activateBanner() {
    // CSS styles for the banner and its content
    const styles = `
        /* Styles for the banner area */
        .banner_area {
            margin-bottom: 66px; /* You can adjust this value as needed */
        }

        /* Style for the banner images and content */
        .single_banner {
            margin-bottom: 30px;
        }

        .banner_thumb {
            position: relative;
            overflow: hidden;
        }

        .banner_thumb img {
            display: block;
            width: 100%;
            height: auto;
            transition: transform 0.3s ease-in-out;
            max-width: 100%;
            height: auto;
        }

        .banner_conent {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 15px;
            color: #fff;
            text-align: center;
        }

        .banner_conent h3 {
            font-size: 18px;
            margin-bottom: 5px;
        }

        .banner_conent h2 {
            font-size: 36px;
            margin-bottom: 10px;
        }

        .banner_conent p {
            font-size: 14px;
            margin: 0;
            font-weight: 300;
        }

        .banner_conent span {
            font-weight: bold;
        }
    `;

    // Create a <style> element and append the styles to it
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;

    // Append the <style> element to the <head> of the document
    document.head.appendChild(styleElement);

    // Your JavaScript logic here
}
function activateBestSeller(){
    /*---product column4 activation---*/
    $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin: 26,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:3,
			},
            992:{
				items:4,
			},

		  }
    });

    /*---product column3 activation---*/
       $('.product_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        margin: 26,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:3,
			},
            992:{
				items:3,
			},

		  }
    });
}
function dataBackgroundImageTestinomial(obj){
    $('.testimonial_area').css({
        'background-image': 'url("'+obj+'")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
        'min-height': '400px',
        'width': '100%',
        'padding': '20px',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    });

    // Add the inline style to the .testimonial_carousel element
    $('.testimonial_carousel').attr('style', 'transform: translate3d(-2292px, 0px, 0px); transition: all 0s ease 0s; width: 8022px;');
}

function activateTestimonial(){
    /*---testimonial active activation---*/
    $('.testimonial_carousel').owlCarousel({
        autoplay: true,
		loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots: true,

    })

    /*---testimonial sidebar carousel activation---*/
    $('.testimonial_sidebar_carousel').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots: true,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
    })
}
function activateProducts(){
    $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,		loop: true,        nav: true,        autoplay: false,        autoplayTimeout: 8000,        items: 4,        margin: 26,        dots:false,        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],        responsiveClass:true,
        responsive:{				0:{				items:1,			},            576:{				items:2,			},            768:{				items:3,			},            992:{				items:4,			},		  }
    });

    /*---product column3 activation---*/
       $('.product_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,		loop: true,        nav: true,        autoplay: false,        autoplayTimeout: 8000,        items: 3,        margin: 26,        dots:false,        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],        responsiveClass:true,
        responsive:{				0:{				items:1,			},            576:{				items:2,			},            768:{				items:3,			},            992:{				items:3,			},		  }
    });

     /*---product seven column3 activation---*/
       $('.product_seven_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,		loop: true,        nav: true,        autoplay: false,        autoplayTimeout: 8000,        items: 3,        dots:false,        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],        responsiveClass:true,
        responsive:{				0:{				items:1,			},            576:{				items:2,			},            768:{				items:3,			},            992:{				items:2,			},            1200:{				items:3,			},		  }
    });


    /*---product column6 activation---*/
       $('.product_column6').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,		loop: true,        nav: true,        autoplay: false,        autoplayTimeout: 8000,        margin: 10,        items: 6,        dots:false,        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],        responsiveClass:true,
        responsive:{				0:{				items:1,			},            576:{				items:2,			},            768:{				items:3,			},            992:{				items:4,			},            1200:{				items:6,			},		  }
    });

    /*---product tab column3 activation---*/
       $('.product_tab_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,		loop: true,        nav: true,        autoplay: false,        autoplayTimeout: 8000,        items: 3,        margin: 26,        dots:false,        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],        responsiveClass:true,
        responsive:{				0:{				items:1,			},            768:{				items:2,			},            992:{				items:3,			},		  }
    });
    /*---product column1 activation---*/
       $('.product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,		loop: true,        nav: true,        autoplay: false,        autoplayTimeout: 8000,        items: 1,        dots:false,        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],       responsiveClass:true,
        responsive:{				0:{				items:1,			},            768:{				items:2,			},            992:{				items:1,			},		  }
    });
}
function activateNewsLetter() {
    $('#subscribe_pemail').keypress(function(e) {
        if (e.which == 13) {
            e.preventDefault();
            email_subscribepopup();
        }
        var name = $(this).val();
        $('#subscribe_pname').val(name);
    });
    $('#subscribe_pemail').change(function() {
        var name = $(this).val();
        $('#subscribe_pname').val(name);
    });
}
function activateFeaturedProducts(){
    /*---product seven column3 activation---*/
    $('.product_seven_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:3,
			},
            992:{
				items:2,
			},
            1200:{
				items:3,
			},

		  }
    });


    /*---product column6 activation---*/
       $('.product_column6').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        margin: 10,
        items: 6,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:3,
			},
            992:{
				items:4,
			},
            1200:{
				items:6,
			},

		  }
    });

    /*---product tab column3 activation---*/
       $('.product_tab_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        margin: 26,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
			},
            992:{
				items:3,
			},

		  }
    });

    /*---product column1 activation---*/
       $('.product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
			},
            992:{
				items:1,
			},

		  }
    });
}
function activateBlogs() {
    /*---blog column3 activation---*/
    $('.blog_column3').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        margin: 26,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
			},
             992:{
				items:3,
			},
		  }
    });

    /*---blog column1 activation---*/
    $('.blog_column1').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        navText: ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
                margin:30,
			},
             992:{
				items:1,
			},
        }

    });
}
(function ($) {
    "use strict";

    new WOW().init();


    $(window).on('load', function () {
        dataBackgroundImage();
    });

    /*---stickey menu---*/
    $(window).on('scroll',function() {
           var scroll = $(window).scrollTop();
           if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
           }else{
            $(".sticky-header").addClass("sticky");
           }
    });

    /*---jQuery MeanMenu---*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "9901",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });



    // /*---product column4 activation---*/
    //    $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
    //     $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
    //     autoplay: true,
	// 	loop: true,
    //     nav: true,
    //     autoplay: false,
    //     autoplayTimeout: 8000,
    //     items: 4,
    //     margin: 26,
    //     dots:false,
    //     navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
    //     responsiveClass:true,
	// 	responsive:{
	// 			0:{
	// 			items:1,
	// 		},
    //         576:{
	// 			items:2,
	// 		},
    //         768:{
	// 			items:3,
	// 		},
    //         992:{
	// 			items:4,
	// 		},

	// 	  }
    // });

    // /*---product column3 activation---*/
    //    $('.product_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
    //     $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
    //     autoplay: true,
	// 	loop: true,
    //     nav: true,
    //     autoplay: false,
    //     autoplayTimeout: 8000,
    //     items: 3,
    //     margin: 26,
    //     dots:false,
    //     navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
    //     responsiveClass:true,
	// 	responsive:{
	// 			0:{
	// 			items:1,
	// 		},
    //         576:{
	// 			items:2,
	// 		},
    //         768:{
	// 			items:3,
	// 		},
    //         992:{
	// 			items:3,
	// 		},

	// 	  }
    // });

     /*---product seven column3 activation---*/
       $('.product_seven_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:3,
			},
            992:{
				items:2,
			},
            1200:{
				items:3,
			},

		  }
    });


    /*---product column6 activation---*/
       $('.product_column6').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        margin: 10,
        items: 6,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:3,
			},
            992:{
				items:4,
			},
            1200:{
				items:6,
			},

		  }
    });

    /*---product tab column3 activation---*/
       $('.product_tab_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        margin: 26,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
			},
            992:{
				items:3,
			},

		  }
    });

    /*---product column1 activation---*/
       $('.product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
			},
            992:{
				items:1,
			},

		  }
    });

     /*---deals product column1 activation---*/
       $('.deals_product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},

		  }
    });

    /*---small product column1 activation---*/
       $('.small_product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        responsiveClass:true,
		responsive:{
                0:{
                items:1,
			},
            576:{
				items:2,
                margin:15,
			},
            768:{
				items:1,
			},

		  }
    });


    /*---sidebar product column1 activation---*/
       $('.sidebar_product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
                0:{
                items:1,
			},
            768:{
				items:2,
                margin:30,
			},
            992:{
				items:1,
			},

		  }
    });


     /*---categories column2 activation---*/
       $('.categories_column2').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 2,
        margin: 26,
        dots:false,
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
			},
            992:{
				items:2,
			},

		  }
    });

    // /*---testimonial active activation---*/
    // $('.testimonial_carousel').owlCarousel({
    //     autoplay: true,
	// 	loop: true,
    //     nav: false,
    //     autoplay: false,
    //     autoplayTimeout: 8000,
    //     items: 1,
    //     dots: true,

    // })

    // /*---testimonial sidebar carousel activation---*/
    // $('.testimonial_sidebar_carousel').owlCarousel({
    //     autoplay: true,
	// 	loop: true,
    //     nav: true,
    //     autoplay: false,
    //     autoplayTimeout: 8000,
    //     items: 1,
    //     dots: true,
    //     navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
    // })

    /*---blog column3 activation---*/
    // $('.blog_column3').owlCarousel({
    //     autoplay: true,
	// 	loop: true,
    //     nav: true,
    //     autoplay: false,
    //     autoplayTimeout: 8000,
    //     items: 3,
    //     margin: 26,
    //     dots:false,
    //     navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
    //     responsiveClass:true,
	// 	responsive:{
	// 			0:{
	// 			items:1,
	// 		},
    //         768:{
	// 			items:2,
	// 		},
    //          992:{
	// 			items:3,
	// 		},
	// 	  }
    // });

    // /*---blog column1 activation---*/
    // $('.blog_column1').owlCarousel({
    //     autoplay: true,
	// 	loop: true,
    //     nav: true,
    //     autoplay: false,
    //     autoplayTimeout: 8000,
    //     items: 1,
    //     dots:false,
    //     navText: ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    //     responsiveClass:true,
	// 	responsive:{
	// 			0:{
	// 			items:1,
	// 		},
    //         768:{
	// 			items:2,
    //             margin:30,
	// 		},
    //          992:{
	// 			items:1,
	// 		},
    //     }

    // });

    /*---brand container activation---*/
     $('.brand_container').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 6,
        dots:false,
        navText: ['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            480:{
				items:3,
			},
            768:{
				items:4,
			},
            992:{
				items:5,
			},
            1200:{
				items:6,
			},

		  }
    });



     /*---instagram column6 activation---*/
     $('.instagram_column7').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 7,
        dots:false,
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            480:{
				items:3,
			},
            768:{
				items:4,
			},
            992:{
				items:6,
			},
            1200:{
				items:7,
			},

		  }
    });

    /*---blog thumb activation---*/
    $('.blog_thumb_active').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
    });



    /*---single product activation---*/
    $('.single-product-active').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin:15,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            320:{
				items:2,
			},
            992:{
				items:3,
			},
            1200:{
				items:4,
			},


		  }
    });


    /*---product navactive activation---*/
    $('.product_navactive').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            250:{
				items:2,
			},
            480:{
				items:3,
			},
            768:{
				items:4,
			},

        }
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.product_navactive').resize();
    })

    $('.product_navactive a').on('click',function(e){
      e.preventDefault();

      var $href = $(this).attr('href');

      $('.product_navactive a').removeClass('active');
      $(this).addClass('active');

      $('.product-details-large .tab-pane').removeClass('active show');
      $('.product-details-large '+ $href ).addClass('active show');

    })

    /*--- video Popup---*/
    $('.video_popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    /*--- Magnific Popup Video---*/
    $('.port_popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /*--- niceSelect---*/
     $('.select_option').niceSelect();


    /*--- counterup activation ---*/
    $('.counter_number').counterUp({
        delay: 10,
        time: 1000
    });

    /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*---countdown activation---*/

	 $('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">hours</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>'));

       });
	});

    /*---slider-range here---*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
       }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
       " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    /*---niceSelect---*/
     $('.niceselect_option').niceSelect();

    /*---elevateZoom---*/
    $("#zoom1").elevateZoom({
        gallery:'gallery_01',
        responsive : true,
        cursor: 'crosshair',
        zoomType : 'inner'

    });

    /*---portfolio Isotope activation---*/
      $('.portfolio_gallery').imagesLoaded( function() {

        var $grid = $('.portfolio_gallery').isotope({
           itemSelector: '.gird_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gird_item'
            }
        });

          /*---ilter items on button click---*/
        $('.portfolio_button').on( 'click', 'button', function() {
           var filterValue = $(this).attr('data-filter');
           $grid.isotope({ filter: filterValue });

           $(this).siblings('.active').removeClass('active');
           $(this).addClass('active');
        });

    });


    /*---categories slideToggle---*/
    $(".categories_title").on("click", function() {
        $(this).toggleClass('active');
        $('.categories_menu_toggle').slideToggle('medium');
    });

    /*---widget sub categories---*/
    $(".sub_categories1 > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_categories1').slideToggle('medium');
    });

    /*---widget sub categories---*/
    $(".sub_categories2 > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_categories2').slideToggle('medium');
    });

    /*---widget sub categories---*/
    $(".sub_categories3 > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_categories3').slideToggle('medium');
    });

    /*---addClass/removeClass categories---*/
   $("#cat_toggle.has-sub > a").on("click", function() {
            $(this).removeAttr('href');
            $(this).toggleClass('open').next('.categorie_sub').toggleClass('open');
            $(this).parents().siblings().find('#cat_toggle.has-sub > a').removeClass('open');
    });


    /*---MailChimp---*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });
    function mailChimpResponse(resp) {

        if (resp.result === 'success') {
            $('.mailchimp-success').addClass('active')
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

    /*---Category menu---*/
    function categorySubMenuToggle(){
        $('.categories_menu_toggle li.menu_item_children > a').on('click', function(){
        if($(window).width() < 991){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        }
        });
        $('.categories_menu_toggle li.menu_item_children > a').append('<span class="expand"></span>');
    }
    categorySubMenuToggle();


    /*---shop grid activation---*/
    $('.shop_toolbar_btn > button').on('click', function (e) {

		e.preventDefault();

        $('.shop_toolbar_btn > button').removeClass('active');
		$(this).addClass('active');

		var parentsDiv = $('.shop_wrapper');
		var viewMode = $(this).data('role');


		parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

		if(viewMode == 'grid_3'){
			parentsDiv.children().addClass('col-lg-4 col-md-4 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');

		}

		if(viewMode == 'grid_4'){
			parentsDiv.children().addClass('col-lg-3 col-md-4 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
		}

        if(viewMode == 'grid_list'){
			parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5');
		}

	});


   /*---Newsletter Popup activation---*/
   /*
       setTimeout(function() {
            if($.cookie('shownewsletter')==1) $('.newletter-popup').hide();
            $('#subscribe_pemail').keypress(function(e) {
                if(e.which == 13) {
                    e.preventDefault();
                    email_subscribepopup();
                }
                var name= $(this).val();
                  $('#subscribe_pname').val(name);
            });
            $('#subscribe_pemail').change(function() {
             var name= $(this).val();
                      $('#subscribe_pname').val(name);
            });
            //transition effect
            if($.cookie("shownewsletter") != 1){
                $('.newletter-popup').bPopup();
            }
            $('#newsletter_popup_dont_show_again').on('change', function(){
                if($.cookie("shownewsletter") != 1){
                    $.cookie("shownewsletter",'1')
                }else{
                    $.cookie("shownewsletter",'0')
                }
            });
        }, 2500);
*/

    /*---search box slideToggle---*/
    $(".search_box > a").on("click", function() {
        $(this).toggleClass('active');
        $('.search_widget').slideToggle('medium');
    });


    /*---slide toggle activation---*/
    $('.mini_cart_wrapper > a').on('click', function(event){
        if($(window).width() < 991){
            $('.mini_cart').slideToggle('medium');
        }
    });

    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });

    $('.canvas_close,.off_canvars_overlay').on('click', function(){
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });


    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });


})(jQuery);
function getCheckOutDetails(){
var k = $.cookie('checkOut');
var l = JSON.parse(k)
return l;
}
function initital(){

dummyData=[];
$.cookie('checkOut', JSON.stringify(dummyData), {});
}
function updateCookie(data){
$.cookie('checkOut', JSON.stringify(data), {});
}
globalCookie=[]
function populateCheckOut(){

$(".item_count").text(""+globalCookie.length);
subtotal=0;
       // existing = getCheckOutDetails();
        $(".cart_gallery").html("");
        for (i=0;i<globalCookie.length;i++){
        obj=globalCookie[i];
        url='assets/img/s-product/product.webp';
        name='Quisque In Arcu';
        price=0.00;
        quantity=1;
         if(obj['url']) url=obj['url']

        if(obj['name']) name=obj['name']
        if(obj['price']) price=obj['price']
        subtotal+=price;
        if(obj['quantity']) quantity=obj['quantity'];
         var cartText='<div class="cart_item">'+
                     '                          <div class="cart_img">'+
                     '                              <a href="#"><img src="'+url+'" alt=""></a>'+
                     '                          </div>'+
                     '                           <div class="cart_info">'+
                     '                               <a href="#">'+name+'</a>'+
                     '                               <p><span> '+price+' </span> X '+quantity+'</p>'+
                     '                           </div>'+
                     '                           <div class="cart_remove">'+
                     '                               <a href="#" onclick="removeItem('+i+')"><i class="ion-android-close"></i></a>'+
                     '                           </div>'+
                     '                       </div>';
$(".cart_gallery").append(cartText);
        }


}
function removeItem(index){
globalCookie.splice(index, 1);
updateCookie(globalCookie);
populateCheckOut();
}
function fetchDate(obj){
    switch(obj) {
        case "/index.html":
          pullIndex();
          break;
        case '/':
            pullIndex();
            break;
        case "/cart.html":
          products = getCheckOutDetails();
          pullCart();
          break;
        default:
          // code block
      }
      populateCheckOut();
}
function fetchSliderData(obj) {
    var dataList = $("#container1")[0];
    itl = "";
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (item["Type"] == 1) {
            var txt = '<div class="single_slider d-flex align-items-center" data-bgimg="' + item['url1'] + '">' +
                '    <div class="container">' +
                '        <div class="row">' +
                '            <div class="col-lg-6 col-md-7">' +
                '                <div class="slider_content content_left">' +
                '                    <h1> ' + item['Text1'] + ' </h1>' +
                '                     <h2>' + item['Text2'] + '</h2>' +
                '                     <p>  ' + item['Text3'] + ' </p>' +
                '                     <a class="button" href="shop.html?itemId=' + item['ObjetId'] + ' ">shop Now <i class="zmdi zmdi-long-arrow-right"></i></a>' +
                '                             </div>' +
                '            </div>' +
                '       </div>' +
                '   </div>' +
                '</div>'
            itl += txt;
        }
    }
    dataList.innerHTML = itl;
    activateSlide();
}
function fetchBannerData(obj) {
    var container = $("#container3")[0];
    var bannerHTML = "";

    var preText = '<div class="banner_area mb-66">'+
                  '   <div class="container">' +
                  '    <div class="row">';
    var postText = '         </div>' +
                    '    </div>' +
                   '</div>';

    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (item["Type"] == 2) {
            var banner = '<div class="col-lg-4 col-md-4">' +
                         '    <figure class="single_banner">' +
                         '        <div class="banner_thumb">' +
                         '            <a href="shop.html">' +
                         '                <img src="' + item['url1'] + '" alt="" width="370" height="430">' +
                         '            </a>' +
                         '            <div class="banner_conent">' +
                         '                <h3>' + item['Text1'] + '</h3>' +
                         '                <h2>' + item['Text2'] + '</h2>' +
                         '                <p>' + item['Text3'] + '</p>' +
                         '            </div>' +
                         '        </div>' +
                         '    </figure>' +
                         '</div>';
            bannerHTML += banner;
        }
    }

    var finalHTML = preText + bannerHTML + postText;
    container.innerHTML = finalHTML;
}
function fetchProductAreaData(obj) {
    var products = obj;
    var productContainer = $("#best_seller")[0];
    var bannerHTML = "";
    var preText = "";
    var postText = '            </div>' +
                   '         </div>' +
                   '    </div>' +
                   '</div>';
    // Loop through the products and generate HTML for each product
    for (var i = 0; i < products.length; i += 2) {
        var currentElement = products[i];
        //var postElement = products[i+1];
        var postElement = (i + 1 < products.length) ? products[i + 1] : null;
        var item = products[i];
        if(item["Text1"] != '' && item["Text2"] != '' && item["Text3"] != '') {
            if (item["Type"] == 4) {
                preText = '<div class="row" >'+
                        '   <div class="col-lg-4 col-md-4">'+
                        '       <div class="product_left">'+
                        '           <article class="single_product">'+
                        '               <figure>'+
                        '                   <div class="product_thumb">'+
                        '                       <a class="primary_img" href1="product-details.html">'+
                        '                           <img src="'+item.url1+'" alt="">'+
                        '                        </a>'+
                        '                       <a class="secondary_img" href1="product-details.html">'+
                        '                           <img src="'+item.url2+'" alt="">'+
                        '                       </a>'+
                        '                       <div class="product_content">'+
                        '                           <h4 class="product_name"><a href1="product-details.html">'+item.Text1+'</a></h4>'+
                        '                           <div class="price_box"> '+
                        '                               <span class="old_price">'+item.Text2+'</span> '+
                        '                               <span class="current_price">'+item.Text3+'</span>'+
                        '                           </div>'+
                        '                       </div>'+
                        '                   </div>'+
                        '               </figure>'+
                        '           </article>'+
                        '        </div>'+
                        '    </div>'+
                        '<div class="col-lg-8 col-md-8">'+
                        '   <div class="product_right">'+
                        '    <div class="row">'+
                        '        <div class="product_carousel product_column4 owl-carousel">';
            }
        }
        if (postElement != null && item["Text1"] == '' && item["Text2"] == '' && item["Text3"] == '') {
            if (item["Type"] == 4) {
                bannerHTML +=   '<div class="col-lg-3">'+
                                '     <div class="product_items">'+
                                '         <div class="single_product">'+
                                '             <figure>'+
                                '                  <div class="product_thumb">'+
                                '                        <a class="primary_img" href1="product-details.html"><img src="'+currentElement.url1+'" alt=""></a>'+
                                '                        <a class="secondary_img" href1="product-details.html"><img src="'+currentElement.url2+'" alt=""></a>'+
                                '                        <div class="action_links">'+
                                '                            <ul>'+
                                '                                <li class="quick_button"><a href="#" data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view"> <i class="zmdi zmdi-eye"></i></a></li>'+
                                '                                <li class="add_to_cart"><a href=""  onclick="addToCart('+(i)+')" title="Add to cart"><i class="zmdi zmdi-shopping-cart"></i></a></li>'+
                                '                            </ul>'+
                                '                        </div>'+
                                '                    </div>'+
                                '                </figure>'+
                                '            </div>'+
                                '            <div class="single_product">'+
                                '                <figure>'+
                                '                    <div class="product_thumb">'+
                                '                        <a class="primary_img" href1="product-details.html"><img src="'+postElement.url1+'" alt=""></a>'+
                                '                        <a class="secondary_img" href1="product-details.html"><img src="'+postElement.url2+'" alt=""></a>'+
                                '                        <div class="action_links">'+
                                '                            <ul>'+
                                '                                <li class="quick_button"><a href="#"   data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view"> <i class="zmdi zmdi-eye"></i></a></li>'+
                                '                                <li class="add_to_cart"><a href=""  onclick="addToCart('+(i+1)+')"  title="Add to cart"><i class="zmdi zmdi-shopping-cart"></i></a></li>'+
                                '                            </ul>'+
                                '                        </div>'+
                                '                    </div>'+
                                '                </figure>'+
                                '            </div>'+
                                '        </div>'+
                                '    </div>';
            }
        }
        // Append the product HTML to the container
    }
    productContainer.innerHTML = preText + bannerHTML + postText;
    activateBestSeller(); // Assuming this is a function to initialize the banner behavior
}
function fetchTestimonialContainerData(obj) {
    var dataList = $("#container2")[0];
    itl = "";
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (item["Type"] == 3) {
            var obj1 = item["bgimg"];
            var txt = '<div class="single_testimonial">'+
                    '       <div class="testimonial_img">'+
                    '            <a href="#"><img src="'+item['url1'] + '" alt="" width="263" height="360"></a>'+
                    '      </div>'+
                    '       <div class="testimonial_content">'+
                    '           <h4><a href="#">' + item['Text2'] + '</a></h4>'+
                    '           <p>' + item['Text3'] + ' </p>'+
                    '       </div>'+
                    '   </div>'
            itl += txt;
        }
    }
    dataList.innerHTML = itl;
    // dataBackgroundImageTestinomial(obj1)
    //dataBackgroundImage();
    activateTestimonial();
}
function fetchNewsLetterData(obj) {
    var dataList = $("#newsletter_area")[0];
    itl = "";
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (item["Type"] == 5) {
            var txt = '<div class="newsletter_title">'+
                      '     <h3>'+item['Text1']+'</h3>'+
                      '     <p>'+item['Text2']+'</p>'+
                      '</div>'+
                      '<div class="subscribe_form">'+
                      '     <form id="mc-form" class="mc-form footer-newsletter" >'+
                      '         <input id="mc-email" type="email" autocomplete="off" placeholder="'+item['Text3']+'" />'+
                      '         <button id="mc-submit">Subscribe</button>'+
                      '     </form>'+
                      '     <div class="mailchimp-alerts text-centre">'+
                      '         <div class="mailchimp-submitting"></div>'+
                      '         <div class="mailchimp-success"></div>'+
                      '         <div class="mailchimp-error"></div>'+
                      '     </div>'+
                      '</div>';
            itl = txt;
        }
    }
    dataList.innerHTML = itl;
    activateNewsLetter();
}
function fetchBlogs(obj) {
    var dataList = $("#blog_area")[0];
    itl = "";
    var preText = '<div  class="blog_carousel blog_column3 owl-carousel">';
    var postText = '</div>';
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (item["Type"] == 6) {
            //console.log("Processing item", item);
            var txt =   '<div class="col-lg-3">'+
                        '   <article class="single_blog">'+
                        '       <figure>'+
                        '           <div class="blog_thumb">'+
                        '               <a href="blog-details.html"><img src="'+item["url1"]+'" alt=""></a>'+
                        '           </div>'+
                        '           <figcaption class="blog_content">'+
                        '               <h4 class="post_title"><a href="blog-details.html">'+item["Text1"]+'</a></h4>'+
                        '               <p class="post_desc">'+item["Text2"]+'</p>'+
                        '               <footer class="btn_more">'+
                        '                   <a href="blog-details.html"> Read more <i class="zmdi zmdi-long-arrow-right"></i></a>'+
                        '               </footer>'+
                        '           </figcaption>'+
                        '        </figure>'+
                        '   </article>'+
                        '</div>';
            itl += txt;

        }
    }
    itl = preText+itl+postText;
    //console.log(itl);
    dataList.innerHTML = itl;
    activateBlogs();
}
function fetchAddress(obj) {
    var dataList = $("#footer_address")[0];
    itl = "";
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (item["Type"] == 8) {
            //console.log("Processing item", item);
            var txt =   '<div class="widgets_container contact_us">'+
                        '   <div class="footer_logo">'+
                        '       <a href="index.html"><img src="assets/img/logo/logo1.png" alt=""></a>'+
                        '   </div>'+
                        '   <div class="footer_desc">'+
                        '       <p>'+item["Text1"]+'</p>'+
                        '   </div>'+
                        '   <p><span>Address:</span>'+item["Text2"]+'</p>'+
                        '   <p><span>Email:</span> <a href="#">'+item["Text3"]+'</a></p>'+
                        '   <p><span>Phone:</span> <a href="cel:+91'+item["Text4"]+'">+91 '+item["Text4"]+'/+91 '+item["Text5"]+'</a></p>'+
                        '</div>';
            itl = txt;

        }
    }
    //itl = preText+itl+postText;
    //console.log(itl);
    dataList.innerHTML = itl;
}
function fetchInformation(obj) {
    var dataList = $("#footer_information")[0];
    itl = "";
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (item["Type"] == 8) {
            //console.log("Processing item", item);
            var txt =   '<div class="widgets_container widget_menu">'+
                        '   <h3>Information</h3>'+
                        '   <div class="footer_menu">'+
                        '       <ul>'+
                        '           <li><a href="about.html">About Us</a></li>'+
                        '           <li><a href="#">New products</a></li>'+
                        '           <li><a href="#">Best sales</a></li>'+
                        '           <li><a href="#">Terms & Conditions</a></li>'+
                        '           <li><a href="#">Order History</a></li>'+
                        '           <li><a href="#">Specials</a></li>'+
                        '       </ul>'+
                        '   </div>'+
                        '</div>';
            itl = txt;

        }
    }
    //itl = preText+itl+postText;
    //console.log(itl);
    dataList.innerHTML = itl;
}

function fetchFooter(obj) {
    fetchAddress(obj);
    fetchInformation(obj);
}

function pullIndex(){
    $.ajax({
        url: "https://opensheet.elk.sh/1HN35lxS5gKZ6rVOrpNvNHQseiBvZbE-z2rBMzl0piMQ/index", // Replace with your API endpoint
        method: "GET",
        dataType: "json",
        success: function(data) {
            // Assuming the API response is an array of objects
            fetchSliderData(data);
            fetchTestimonialContainerData(data);
            fetchBannerData(data);
            fetchProductAreaData(data);
            fetchNewsLetterData(data);
            fetchBlogs(data);
            fetchFooter(data);
        },
        error: function(xhr, status, error) {
            console.error("Error:", status, error);
            //$("#dataList").html("An error occurred while fetching data.");
        }
    });
    $.ajax({
        url: "https://opensheet.elk.sh/1HN35lxS5gKZ6rVOrpNvNHQseiBvZbE-z2rBMzl0piMQ/products", // Replace with your API endpoint
        method: "GET",
        dataType: "json",
        success: function(data) {
            GProduct=data
            getProduct("Men");
        },
        error: function(xhr, status, error) {
            console.error("Error:", status, error);
            //$("#dataList").html("An error occurred while fetching data.");
        }
    });

}
var GProduct=[];
function getProduct(obj) {
    $("#products").html("");
    var categoryProducts = GProduct.filter(product => product.id === obj);
    var productContainer = $("#products");
            var getHtml = generateProductHTML(categoryProducts);
            productContainer.append(getHtml);
            activateProducts();
            generateProductHTML

}
// Generate HTML for each product in a category
function generateProductHTML(products) {
    var productHTML = '';
    var productHTMLStart =  '<div class="tab-pane fade show active" id="'+products[0]["id"]+'" role="tabpanel">'+
                            '   <div class="row">'+
                            '       <div class="product_carousel product_column4 owl-carousel">';

    var productHTMLEnd ='       </div>'+
                        '   </div>'+
                        '</div>';
    for (var i = 0; i < products.length; i += 2) {
        var currentElement = products[i];
        var postElement = products[i+1];
        productHTML +=
                '<div class="col-lg-3">'+
                '   <div class="product_items">'+
                '        <article class="single_product">' +
                '            <figure>' +
                '                <div class="product_thumb">' +
                '                               <a class="primary_img" href1="product-details.html"><img src="' + currentElement.url1 + '" alt=""></a>' +
                '                               <a class="secondary_img" href1="product-details.html"><img src="' + currentElement.url2 + '" alt=""></a>' +
                '                               <div class="action_links">' +
                '                                   <ul>' +
                '                                        <li class="quick_button"><a href="' + currentElement.quickView + '" data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view"> <i class="zmdi zmdi-eye"></i></a></li>' +
                '                                        <li class="add_to_cart"><a href=""  onclick="addToCart('+i+')"  title="Add to cart"><i class="zmdi zmdi-shopping-cart"></i></a></li>'+
                '                                   </ul>' +
                '                                </div>' +
                '                </div>' +
                '                <figcaption class="product_content">' +
                '                    <h4 class="product_name"><a href1="product-details.html">' + currentElement.products_title + '</a></h4>' +
                '                    <div class="price_box">' +
                '                        <span class="old_price">' + currentElement.old_price + '</span>' +
                '                        <span class="current_price">' + currentElement.current_price + '</span>' +
                '                    </div>' +
                '                    <div class="product_rating">' +
                '                        <ul>' +
                '                            ' + '<li><i class="fa fa-star" aria-hidden="true"></i></li>'.repeat(currentElement.rating) +
                '                        </ul>' +
                '                    </div>' +
                '                </figcaption>' +
                '            </figure>' +
                '        </article>' +
                '        <article class="single_product">' +
                '            <figure>' +
                '                <div class="product_thumb">' +
                '                               <a class="primary_img" href1="product-details.html"><img src="' + postElement.url1 + '" alt=""></a>' +
                '                               <a class="secondary_img" href1="product-details.html"><img src="' + postElement.url2 + '" alt=""></a>' +
                '                               <div class="action_links">' +
                '                                   <ul>' +
                '                                        <li class="quick_button"><a href="' + postElement.quickView + '" data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view"> <i class="zmdi zmdi-eye"></i></a></li>' +
                '                                        <li class="add_to_cart"><a href=""  onclick="addToCart('+(i+1)+')" onclick("'+(i+1)+'")" title="Add to cart"><i class="zmdi zmdi-shopping-cart"></i></a></li>'+
                '                                   </ul>' +
                '                                </div>' +
                '                </div>' +
                '                <figcaption class="product_content">' +
                '                    <h4 class="product_name"><a href1="product-details.html">' + postElement.products_title + '</a></h4>' +
                '                    <div class="price_box">' +
                '                        <span class="old_price">' + postElement.old_price + '</span>' +
                '                        <span class="current_price">' + postElement.current_price + '</span>' +
                '                    </div>' +
                '                    <div class="product_rating">' +
                '                        <ul>' +
                '                            ' + '<li><i class="fa fa-star" aria-hidden="true"></i></li>'.repeat(postElement.rating) +
                '                        </ul>' +
                '                    </div>' +
                '                </figcaption>' +
                '            </figure>' +
                '        </article>' +
                '    </div>'+
                '</div>';        
    };
    productHTML1 = productHTMLStart+productHTML+productHTMLEnd;
    return productHTML1;
}

document.addEventListener("DOMContentLoaded", function(event) {
    k=''
    k = $.cookie('checkOut');

    if(k==undefined) {initital(); k = $.cookie('checkOut');}
    globalCookie = JSON.parse(k)
    fetchDate(window.location.pathname);
  });
function addToCart(id){
sp = GProduct[id];
cp=0;
if (sp['current_price']!='')
cp = sp['current_price']
selPrd = {"id":sp['id'],"name":sp['products_title'],"url":sp['url1'],"price":cp}
globalCookie.push(selPrd)
updateCookie(globalCookie);
populateCheckOut();
}
function pullCart(){

$('.cart-body').html('');
for (i=0;i<products.length;i++){
var total=0;
if ((products[i]['price'] * products[i]['quantity'])>0) total=(products[i]['price'] * products[i]['quantity']);
    txt =   '                    <tr>'+
        '                           <td class="product_remove"><a href="#"  onclick="removeProductItem('+i+')"><i class="fa fa-trash-o"></i></a></td>'+
            '                            <td class="product_thumb"><a href="#"><img src="'+products[i]['url']+'" alt=""></a></td>'+
            '                            <td class="product_name"><a href="#">'+products[i]['name']+'</a></td>'+
            '                            <td class="product-price">₹ '+products[i]['price']+'</td>'+
            '                            <td class="product_quantity"><label>Quantity</label> <input min="0" max="100" onChange="updateProduct('+i+',this);" value="'+products[i]['quantity']+'" type="number"></td>'+
            '                            <td class="product_total">₹ '+total+'</td>'+
            '                    </tr>';
    $('.cart-body').append(txt);
    }
}
function updateProduct(ind,quantity){
products[ind]['quantity']=parseInt(quantity.value);
globalCookie=products;
updateCookie(products);
populateCheckOut();
}
function removeProductItem(index){
products.splice(index, 1);
globalCookie=products;
pullCart()
updateCookie(products);
populateCheckOut();
}