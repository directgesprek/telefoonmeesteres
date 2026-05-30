jQuery(document).ready(function($) {
    'use strict';

    if(simple_grid_ajax_object.secondary_menu_active){
        if(simple_grid_ajax_object.secondary_mobile_menu_active){

        $(".simple-grid-nav-secondary .simple-grid-secondary-nav-menu").addClass("simple-grid-secondary-responsive-menu");

        $( ".simple-grid-secondary-responsive-menu-icon" ).on( "click", function() {
            $(this).next(".simple-grid-nav-secondary .simple-grid-secondary-nav-menu").slideToggle();
        });

        $(window).on( "resize", function() {
            if(window.innerWidth > 1112) {
                $(".simple-grid-nav-secondary .simple-grid-secondary-nav-menu, nav .sub-menu, nav .children").removeAttr("style");
                $(".simple-grid-secondary-responsive-menu > li").removeClass("simple-grid-secondary-menu-open");
            }
        });

        $( ".simple-grid-secondary-responsive-menu > li" ).on( "click", function(event) {
            if (event.target !== this)
            return;
            $(this).find(".sub-menu:first").toggleClass('simple-grid-submenu-toggle').parent().toggleClass("simple-grid-secondary-menu-open");
            $(this).find(".children:first").toggleClass('simple-grid-submenu-toggle').parent().toggleClass("simple-grid-secondary-menu-open");
        });

        $( "div.simple-grid-secondary-responsive-menu > ul > li" ).on( "click", function(event) {
            if (event.target !== this)
                return;
            $(this).find("ul:first").toggleClass('simple-grid-submenu-toggle').parent().toggleClass("simple-grid-secondary-menu-open");
        });

        }
    }

    if(simple_grid_ajax_object.primary_menu_active){
        if(simple_grid_ajax_object.primary_mobile_menu_active){

            if(simple_grid_ajax_object.sticky_menu_active){
            // grab the initial top offset of the navigation 
            var simplegridstickyNavTop = $('.simple-grid-primary-menu-container').offset().top;
            
            // our function that decides weather the navigation bar should have "fixed" css position or not.
            var simplegridstickyNav = function(){
                var simplegridscrollTop = $(window).scrollTop(); // our current vertical position from the top
                     
                // if we've scrolled more than the navigation, change its position to fixed to stick to top,
                // otherwise change it back to relative

                if(simple_grid_ajax_object.sticky_mobile_menu_active){
                    if (simplegridscrollTop > simplegridstickyNavTop) {
                        $('.simple-grid-primary-menu-container').addClass('simple-grid-fixed');
                    } else {
                        $('.simple-grid-primary-menu-container').removeClass('simple-grid-fixed');
                    }
                } else {
                    if(window.innerWidth > 1112) {
                        if (simplegridscrollTop > simplegridstickyNavTop) {
                            $('.simple-grid-primary-menu-container').addClass('simple-grid-fixed');
                        } else {
                            $('.simple-grid-primary-menu-container').removeClass('simple-grid-fixed'); 
                        }
                    }
                }
            };

            simplegridstickyNav();
            // and run it again every time you scroll
            $(window).on( "scroll", function() {
                simplegridstickyNav();
            });
            }

            $(".simple-grid-nav-primary .simple-grid-primary-nav-menu").addClass("simple-grid-primary-responsive-menu");

            $( ".simple-grid-primary-responsive-menu-icon" ).on( "click", function() {
                $(this).next(".simple-grid-nav-primary .simple-grid-primary-nav-menu").slideToggle();
            });

            $(window).on( "resize", function() {
                if(window.innerWidth > 1112) {
                    $(".simple-grid-nav-primary .simple-grid-primary-nav-menu, nav .sub-menu, nav .children").removeAttr("style");
                    $(".simple-grid-primary-responsive-menu > li").removeClass("simple-grid-primary-menu-open");
                }
            });

            $( ".simple-grid-primary-responsive-menu > li" ).on( "click", function(event) {
                if (event.target !== this)
                return;
                $(this).find(".sub-menu:first").toggleClass('simple-grid-submenu-toggle').parent().toggleClass("simple-grid-primary-menu-open");
                $(this).find(".children:first").toggleClass('simple-grid-submenu-toggle').parent().toggleClass("simple-grid-primary-menu-open");
            });

            $( "div.simple-grid-primary-responsive-menu > ul > li" ).on( "click", function(event) {
                if (event.target !== this)
                    return;
                $(this).find("ul:first").toggleClass('simple-grid-submenu-toggle').parent().toggleClass("simple-grid-primary-menu-open");
            });

        }
    }

    if($(".simple-grid-social-icon-search").length){
        $(".simple-grid-social-icon-search").on('click', function (e) {
            e.preventDefault();
            document.getElementById("simple-grid-search-overlay-wrap").style.display = "block";
            const simple_grid_focusableelements = 'button, [href], input';
            const simple_grid_search_modal = document.querySelector('#simple-grid-search-overlay-wrap');
            const simple_grid_firstfocusableelement = simple_grid_search_modal.querySelectorAll(simple_grid_focusableelements)[0];
            const simple_grid_focusablecontent = simple_grid_search_modal.querySelectorAll(simple_grid_focusableelements);
            const simple_grid_lastfocusableelement = simple_grid_focusablecontent[simple_grid_focusablecontent.length - 1];
            document.addEventListener('keydown', function(e) {
              let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
              if (!isTabPressed) {
                return;
              }
              if (e.shiftKey) {
                if (document.activeElement === simple_grid_firstfocusableelement) {
                  simple_grid_lastfocusableelement.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === simple_grid_lastfocusableelement) {
                  simple_grid_firstfocusableelement.focus();
                  e.preventDefault();
                }
              }
            });
            simple_grid_firstfocusableelement.focus();
        });
    }

    if($(".simple-grid-search-closebtn").length){
        $(".simple-grid-search-closebtn").on('click', function (e) {
            e.preventDefault();
            document.getElementById("simple-grid-search-overlay-wrap").style.display = "none";
        });
    }

    if(simple_grid_ajax_object.fitvids_active){
        $(".entry-content, .widget").fitVids();
    }

    if(simple_grid_ajax_object.backtotop_active){
        if($(".simple-grid-scroll-top").length){
            var simple_grid_scroll_button = $( '.simple-grid-scroll-top' );
            simple_grid_scroll_button.hide();

            $(window).on( "scroll", function() {
                if ( $( window ).scrollTop() < 20 ) {
                    $( '.simple-grid-scroll-top' ).fadeOut();
                } else {
                    $( '.simple-grid-scroll-top' ).fadeIn();
                }
            } );

            simple_grid_scroll_button.on( "click", function() {
                $( "html, body" ).animate( { scrollTop: 0 }, 300 );
                return false;
            } );
        }
    }

    if(simple_grid_ajax_object.news_ticker_active){
        if($(".simple-grid-marquee").length){
            $('.simple-grid-marquee').marquee({
                /*
                allowCss3Support: true,
                css3easing: 'linear',
                easing: 'linear',
                delayBeforeStart: 1000,
                direction: 'left',
                duplicated: false,
                duration: 5000,
                gap: 20,
                pauseOnCycle: false,
                pauseOnHover: false,
                startVisible: false
                */
                delayBeforeStart: 0, //time in milliseconds before the marquee will start animating
                direction: simple_grid_ajax_object.news_ticker_direction, //'left' or 'right'
                duplicated: true, //true or false - should the marquee be duplicated to show an effect of continues flow
                duration: simple_grid_ajax_object.news_ticker_duration, //duration in milliseconds of the marquee
                gap: 0, //gap in pixels between the tickers
                pauseOnHover: true,
                startVisible: true
            });
        }
    }

    $(document).on('click', '.themesdna-likes', function(){
        var link = $(this);
        if (link.hasClass('themesdna-likes-active')) return false;

        var id = $(this).attr('id');

        $.ajax({
            type: 'POST',
            url: simple_grid_ajax_object.ajaxurl,
            data: {
                action: 'themesdna-likes',
                likes_id: id,
            },
            xhrFields: {
                withCredentials: true,
            },
            success: function(data) {
                link.html(data).addClass('themesdna-likes-active').attr('title', 'You already like this');
            },
        });

        return false;
    });

    if ($('body.ajax-themesdna-likes').length) {
        $('.themesdna-likes').each(function() {
            var id = $(this).attr('id');
            $(this).load(simple_grid_ajax_object.ajaxurl, {
                action: 'themesdna-likes',
                post_id: id,
            });
        });
    }

    if ($('body.ajax-themesdna-views').length) {
        $('.simple-grid-entry-meta-single-views .themesdna-views').each(function() {

            var themesdna_views = $(this);

            var id = $(this).attr('id');

            $.ajax({
                type: 'POST',
                url: simple_grid_ajax_object.ajaxurl,
                data: {
                    action: 'themesdna-views',
                    post_id: id,
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: function(data) {
                    themesdna_views.html(data);
                },
            });

            return false

        });
    }

    if(simple_grid_ajax_object.sticky_sidebar_active){
        $('.simple-grid-main-wrapper, .simple-grid-sidebar-one-wrapper, .simple-grid-sidebar-two-wrapper').theiaStickySidebar({
            containerSelector: ".simple-grid-content-wrapper",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            minWidth: 960,
        });

        $(window).on( "resize", function() {
            $('.simple-grid-main-wrapper, .simple-grid-sidebar-one-wrapper, .simple-grid-sidebar-two-wrapper').theiaStickySidebar({
                containerSelector: ".simple-grid-content-wrapper",
                additionalMarginTop: 0,
                additionalMarginBottom: 0,
                minWidth: 960,
            });
        });
    }

    if($(".simple-grid-tabbed-wrapper").length){
        $(".simple-grid-tabbed-wrapper").each(function(){
        var $thistab = $(this);

        $thistab.find(".simple-grid-tabbed-content").hide();
        $thistab.find("ul.simple-grid-tabbed-names li:first a").addClass("simple-grid-tabbed-current").show();
        $thistab.find(".simple-grid-tabbed-content:first").show();

        $thistab.find("ul.simple-grid-tabbed-names li a").on( "click", function() {
            $thistab.find("ul.simple-grid-tabbed-names li a").removeClass("simple-grid-tabbed-current a"); 
            $(this).addClass("simple-grid-tabbed-current");
            $thistab.find(".simple-grid-tabbed-content").hide(); 
            var simplegridactivetab = $(this).attr("href");
            $thistab.find(simplegridactivetab).fadeIn();
            return false;
        });

        });
    }

    if($(".simple-grid-grid-post-inside").length){
        $(".simple-grid-grid-post-inside").attr("tabindex",0);
    }

    if($(".simple-grid-mini-share-buttons").length){
        $(".simple-grid-mini-share-buttons").attr("tabindex",0);
    }


    if(simple_grid_ajax_object.masonry_active){

    // init Masonry
    var $simple_grid_grid = $('.simple-grid-posts-grid').masonry({
      itemSelector: '.simple-grid-grid-post',
      columnWidth: simple_grid_ajax_object.columnwidth,
      gutter: simple_grid_ajax_object.gutter,
      percentPosition: true,
      transitionDuration: '0.4s'
    });
    // layout Masonry after each image loads
    $simple_grid_grid.imagesLoaded().progress( function() {
      $simple_grid_grid.masonry('layout');
    });

    $(".simple-grid-grid-posts").each(function(){
    var $thisgrid = $(this);

    // init Masonry
    var $simple_grid_grid_widget = $thisgrid.masonry({
      itemSelector: '.simple-grid-grid-post',
      columnWidth: $thisgrid.find(".simple-grid-col-sizer")[0],
      gutter: $thisgrid.find(".simple-grid-col-gutter")[0],
      percentPosition: true
    });
    // layout Masonry after each image loads
    $simple_grid_grid_widget.imagesLoaded().progress( function() {
      $simple_grid_grid_widget.masonry('layout');
    });

    });

    }

    if(simple_grid_ajax_object.posts_navigation_active){
    if(simple_grid_ajax_object.posts_navigation_type == 'loadmoreclick'){
        function simple_grid_load_more_button() {
            if($(".simple-grid-load-more-button").length){
                $( ".simple-grid-load-more-button" ).on( "click", function() {
             
                    var button = $(this),
                        data = {
                        'action': 'simple_grid_loadmore',
                        'query': simple_grid_ajax_object.posts,
                        'page' : simple_grid_ajax_object.current_page,
                        'security': simple_grid_ajax_object.load_more_nonce,
                    };
             
                    $.ajax({
                        url : simple_grid_ajax_object.ajaxurl,
                        data : data,
                        type : 'POST',
                        beforeSend : function ( xhr ) {
                            button.html(simple_grid_ajax_object.loading);
                        },
                        success : function( response ){
                            if( response ) {
                                var content = $( response );
                                $( '.simple-grid-posts-grid' ).append(content).imagesLoaded( function() {
                                    if(simple_grid_ajax_object.masonry_active){
                                    $( '.simple-grid-posts-grid' ).masonry( 'appended', content, function() {
                                        $( '.simple-grid-posts-grid' ).masonry( 'layout' );
                                    } );
                                    }
                                } );

                                button.html(simple_grid_ajax_object.loadmore);
                                simple_grid_ajax_object.current_page++;
             
                                if ( simple_grid_ajax_object.current_page == simple_grid_ajax_object.max_page ) {
                                    button.remove();
                                }
             
                                // you can also fire the "post-load" event here if you use a plugin that requires it
                                // $( document.body ).trigger( 'post-load' );
                            } else {
                                button.remove();
                            }
                        },
                        error: function() {
                            button.html(simple_grid_ajax_object.loadfailed);
                        }
                    });

                });
            }
        }
        simple_grid_load_more_button();
    }
    }

    if(simple_grid_ajax_object.posts_navigation_active){
    if(simple_grid_ajax_object.posts_navigation_type == 'loadmorescroll'){
        function simple_grid_load_more_scroll() {
            var button = $('.simple-grid-load-more-scroll'),
                canBeLoaded = true,
                bottomOffset = 4000;
         
            $(window).on( "scroll", function() {
                var data = {
                    'action': 'simple_grid_loadmore',
                    'query': simple_grid_ajax_object.posts,
                    'page' : simple_grid_ajax_object.current_page,
                    'security': simple_grid_ajax_object.load_more_nonce,
                };

                if( ( $(document).scrollTop() > ( $(document).height() - bottomOffset ) ) && canBeLoaded == true ){
                    $.ajax({
                        url : simple_grid_ajax_object.ajaxurl,
                        data:data,
                        type:'POST',
                        beforeSend: function( xhr ){
                            button.html('<i class="fas fa-spinner fa-spin" aria-hidden="true"></i>');
                            canBeLoaded = false; 
                        },
                        success:function(response){
                            if( response ) {

                            var content = $( response );
                            $( '.simple-grid-posts-grid' ).append(content).imagesLoaded( function() {
                                if(simple_grid_ajax_object.masonry_active){
                                $( '.simple-grid-posts-grid' ).masonry( 'appended', content, function() {
                                    $( '.simple-grid-posts-grid' ).masonry( 'layout' );
                                } );
                                }
                            } );

                            button.html('<i class="fas fa-spinner fa-spin" aria-hidden="true"></i>');
                            canBeLoaded = true;
                            simple_grid_ajax_object.current_page++;

                            if ( simple_grid_ajax_object.current_page == simple_grid_ajax_object.max_page ) {
                                button.remove();
                            }

                            }
                        },
                        error: function() {
                            button.remove();
                        },
                        complete: function() {
                            //$('.simple-grid-grid-post-inside').find('audio,video' ).mediaelementplayer();
                        }
                    });
                }
            });
        }
        simple_grid_load_more_scroll();
    }
    }

});