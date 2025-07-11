$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(window).on('resize scroll', function() {
    if ($('.num_text').isInViewport()) {
        $('.highlighted').each(function () {
                $(this).css({ fill: '#60883C' });
            }) ;
    } else {
        $('.highlighted').each(function () {
            $(this).css({ fill: '#deeddd' });
        }) ;
    }
});

var viewed = false;

var width = window.innerWidth;

var documentHasScroll = function() {
    return window.innerHeight <= document.body.offsetHeight;
};


$(document).ready(function() {
    // $("nav").removeClass("no-transition");
	/* MENU */
	$('.navbar-nav').attr('id', 'menu'); // please don't remove this line
	$( '<div class="calendar-top"></div>' ).insertBefore( "#calendar" );
	$( '<div class="card-profile-top"></div>' ).insertBefore( ".card.profile.card-profile" );
	var divs = $(".card-profiles > div");
	for(var i = 0; i < divs.length; i+=2) {
		divs.slice(i, i+2).wrapAll( '<div class="col-xs" />');
	}

	// var headerNavbar = $('#headerNavbar');
	// var width100 = $('.width100');
	// var innerWidth = $('body').innerWidth();
	// headerNavbar.width(innerWidth);
	// width100.width(innerWidth);

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition")


    if (width < 992) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function(){
            var checked = $(this).is(":checked");
            if(checked){
                $('#menu').show("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            }else{
                $('#menu').hide("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });
    }


    $('body').on('click', '.work_packages .accordion-toggle, .mission .accordion-toggle, .partners-insider .accordion-toggle, .synergies_content_container .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children().find(".plusminus").text('+');
            $(this).children(".plusminus").html('<span class="plus"></span>');
            $(this).children(".green_bullet").removeClass('toggled');

        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children().find(".plusminus").text('-');
            $(this).children(".plusminus").html('<span class="minus"></span>');
            $(this).children(".green_bullet").addClass('toggled');
        }
    });

    $('.work_packages .accordion-content, .messages .accordion-toggle, .partners-insider .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });




    $('body').on('click', '.publications-and-outreach .internal-documents .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children(".plusminus").html('<span class="plus"></span>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children(".plusminus").html('<span class="minus"></span>');
        }
    });



    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (window.location.hash) {
        var link = window.location.hash;
        var anchorId = link.substr(link.indexOf("#") + 1);
        if($("#"+anchorId).offset()){
            $('html, body').animate({
                scrollTop: $("#"+anchorId).offset().top - 150
            }, 500);
        }else{
            $('.accordion-border').each(function(){
                var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                var toggler = $(this).find(".accordion-toggle");
                if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                    $('html, body').animate({
                        scrollTop: toggler.parent().offset().top - 150
                    }, 500);
                    toggler.trigger( "click" );
                }
            });
        }
    }

    $('.dropdown a').click(function(event) {

        if (location.href.indexOf("#") != -1) {
            var link = $(this).attr('href');
            var anchorId = link.substr(link.indexOf("#") + 1);
            if($("#"+anchorId).length>0){
                $('html, body').animate({
                    scrollTop: $("#"+anchorId).offset().top - 150
                }, 500);
            }else{
                // event.preventDefault();
                $("g[title='"+anchorId.toUpperCase()+"']").addClass('active_path');

                $('.accordion-border').each(function(){
                    var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                    var toggler = $(this).find(".accordion-toggle");
                    if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                        $('html, body').animate({
                            scrollTop: toggler.parent().offset().top - 150
                        }, 500);
                        toggler.trigger( "click" );
                        event.preventDefault();
                    }
                });
            }
        }
    });


    $('.work_packages .accordion-content, .messages .accordion-toggle, .partners-insider .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });


	onHashChange();
	$(window).on("hashchange", function() {
		onHashChange();
	});

	$('.nav.nav-pills').removeAttr('id');

	var count = $("h1").text().length;

	$('.library-item').attr('data-aos', 'fade-up');
	$('.partner-item').attr('data-aos', 'fade-up');
	$('.profile-item').attr('data-aos', 'flip-left');
	$('.mission-card').attr('data-aos', 'flip-left');
	$('.about img').attr('data-aos', 'flip-left');
	$('circle').attr('data-aos', 'fade-up-right');
	$('circle').attr('data-aos-delay', '300');

    $('.download_all').text('Download All');

	$('.see_all_partners_link').hide();

    $(".timeline_container.left .blue_line").width(function() {
        return (innerWidth - $('.container').width())/2;
    });



    $('.library .form-wrapper, .library-items').wrapAll('<div class="container-fluid bg-secondary"><div class="container"></div></div>');
    $('.library .tabs').wrapAll('<div class="container"></div>');
    $('.library_content .row.center-xs.mb-1').wrapAll('<div class="container_relative"></div>');

    if(width > 1024){
        $('.partners_list .key_0, .partners_list .key_2, .partners_list .key_4, .partners_list .key_6, .partners_list .key_8, .partners_list .key_10, .partners_list .key_12, .partners_list .key_14, .partners_list .key_16, .partners_list .key_18').wrapAll('<div class="col-md-6 col-xs-12"></div>');
        $('.partners_list .key_1, .partners_list .key_3, .partners_list .key_5, .partners_list .key_7, .partners_list .key_9, .partners_list .key_11, .partners_list .key_13, .partners_list .key_15, .partners_list .key_17, .partners_list .key_19').wrapAll('<div class="col-md-6 col-xs-12"></div>');
    }

    $('.logo-pack .form_container').each(function (){
        $(this).wrapAll('<div class="expand_buttons"></div>');
    });
    // $('.lang_versions_btn .hidden_btn').wrapAll('<div class="expand_buttons"></div>');
    $('<a href="javascript:void(0);" class="more_languages btn btn-secondary">Download <i></i></a>').insertAfter('.logo-pack');


    $('.more_languages').click(function () {
        var link = $(this);
        link.parent().find('.expand_buttons').slideToggle('slow', function() {
            if ($(this).is(':visible')) {
                link.addClass('expaned');
                link.html('Download <i></i>');
            } else {
                link.removeClass('expaned');
                link.html('Download <i></i>');
            }
        });

    });



    if($('.news-carousel').length) {
        /* News highlights carousel **/
        $('.news-carousel').slick({
            autoplay: false,
            // autoplaySpeed: 2000,
            draggable: true,
            // pauseOnHover: true,
            centerMode: false,
            variableWidth: true,
            infinite: true,
            slidesToShow: 2,
            speed: 1000,
            centerPadding: '6%',
            slidesToScroll: 2,
            // centerPadding: '40px',
            arrows: false,
            dots: true,


            // centerPadding: '0px',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: '2%',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(".trigger_prev").click(function () {
            $(".slick-prev").click();
            return false;
        });
        $(".trigger_next").click(function () {
            $(".slick-next").click();
            return false;
        });

        $(".trigger_prev_arrow").click(function () {
            $(".slick-prev").click();
            return false;
        });
        $(".trigger_next_arrow").click(function () {
            $(".slick-next").click();
            return false;
        });
    }


    if($('.related-news-carousel').length) {
        /* News highlights carousel **/
        $('.related-news-carousel').slick({
            autoplay: false,
            // autoplaySpeed: 2000,
            draggable: true,
            // pauseOnHover: true,
            centerMode: false,
            variableWidth: true,
            infinite: true,
            slidesToShow: 3,
            speed: 1000,
            centerPadding: '6%',
            slidesToScroll: 3,
            // centerPadding: '40px',
            arrows: false,
            dots: true,


            // centerPadding: '0px',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: '2%',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(".trigger_prev").click(function () {
            $(".slick-prev").click();
            return false;
        });
        $(".trigger_next").click(function () {
            $(".slick-next").click();
            return false;
        });

        $(".trigger_prev_arrow").click(function () {
            $(".slick-prev").click();
            return false;
        });
        $(".trigger_next_arrow").click(function () {
            $(".slick-next").click();
            return false;
        });
    }


    // $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
    //     '<a class="folder-background" style="display:flex; background: url(/storage/app/media/Outreach.png) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/publications-and-outreach" title="Publications and outreach"></a>\n' +
    //     '<h3 class="card-header"><a href="/internal-repository/publications-and-outreach" title="Publications and outreach">Publications and outreach</a></h3>\n' +
    //     '</div>').insertAfter($('.card.internal').last());

    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(/storage/app/media/Reporting-forms-forsaid.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/dissemination-report-forms" title="Dissemination report forms"></a>\n' +
        '<h3 class="card-header"><a href="/internal-repository/dissemination-report-forms" title="Reporting forms">Reporting forms</a></h3>\n' +
        '</div>').insertAfter($('.card.internal').last());

    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(/storage/app/media/Living-documents-forsaid.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/living-documents" title="Living documents"></a>\n' +
        '<h3 class="card-header"><a href="/internal-repository/living-documents" title="Living documents">Living documents</a></h3>\n' +
        '</div>').insertAfter($('.card.internal').last());



    $('<small>To download individual image please right click</small>').insertAfter($('.all_images_container'));

    $('<div class="mark"></div>').insertAfter($('.group-holder input'));


    $('.library .library-item').each(function (){
        $(this).find('.text-bold').each(function(){
            switch ($(this).text()){
                case 'Authors:':
                    $(this).addClass('authors_label');
                    break;
                case 'Status:':
                    if( $(this).parent().find('.text-ligth').text() == 'Approved'){
                        $(this).addClass('approved_label');
                    }else{
                        $(this).addClass('published_label');
                    }

                    break;
                case 'Journal:':
                    $(this).addClass('journal_label');
                    break;
                case 'Volume/Issue:':
                    $(this).addClass('volume_label');
                    break;
                case 'Publisher:':
                    $(this).addClass('publisher_label');
                    break;
                case 'Place:':
                    $(this).addClass('place_label');
                    break;
                case 'Year:':
                    $(this).addClass('year_label');
                    break;
                case 'URL/DOI:':
                    $(this).addClass('url_label');
                    break;
                case 'Deliverable number:':
                    $(this).addClass('number_label');
                    break;
                case 'Pages:':
                    $(this).addClass('pages_label');
                    break;
            }
            $(this).text('');
        });
    });


    $('.synergies .tabs').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and its associated content
        var $active, $content, $links = $(this).find('a');
        var speed = "fast";
        var activeTab = $(location.hash);
        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter("[href=\'"+location.hash+"\']")[0] || $links[0]);

        if($(this).parent().parent().hasClass('synergies')){
            $active.addClass('active');
        }

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        if(activeTab.length){
            $content.slideDown(speed);
            //scroll to element
            $('html, body').animate({
                scrollTop:  activeTab.offset().top - $('header').height()
            }, speed);
        }

        // Bind the click event handler
        $(this).find("a").click(function (e) {
            if($(this).hasClass('active')) {
                $content.slideDown({
                    scrollTop: $content.offset().top - $('header').height()
                }, speed);
                var screenSize = getScreenSize();
                if (screenSize.width < 800) {
                    // scroll to element
                    $('html, body').animate({
                        scrollTop: $content.offset().top - $('header').height() + 300  // mobile
                    }, speed);
                }else{
                    // //scroll to element icons top
                    // $('html, body').animate({
                    //     scrollTop:  $content.offset().top - $('header').height()
                    // }, speed);
                }
                e.preventDefault();
                return false;
            }
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            location.hash = $active[0].hash;

            // Make the tab active.
            $active.addClass('active');
            $content.slideDown({
                scrollTop: $content.offset().top - $('header').height()
            }, speed);

            // Prevent the anchor\'s default click action
            e.preventDefault();
        });
    });


});

function toggleExpandReadMoreAdvisory(el){
    var body = $(el).parent().find('.body_c');
    if(body.is(':visible')){
        body.slideUp();
        $(el).html("Read More");
    }else{
        body.slideDown();
        $(el).html("Read Less");

    }

}
function toggleExpandReadMore(el){
    var $el, $ps, $up, totalHeight;
    totalHeight = 185;
    $el = $(el); // read_full link

    $up = $el.parent(); // body
    if ($el.text() == "Read More") {
        $ps = $up.find("p, ul, ol");

        // Measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function () {
            totalHeight += $(this).outerHeight();
        });

        $up.addClass('changed');

        $el.css({
            top: totalHeight - 130
        });
        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 9999,
        });

        // Apply the height change after setting the initial height
        setTimeout(function() {
            $up.css("height", totalHeight - 100);
        }, 10); // Small timeout to ensure transition


        // Stuff to do when btn is in the read more state
        $el.html("Read Less");
    } else {
        $up.removeClass('changed');
        $el.css({
            top: 161
        });
        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 460,
        });

        // Apply the height change after setting the initial height
        setTimeout(function() {
            $up.css("height", totalHeight);
        }, 10); // Small timeout to ensure transition

        // Stuff to do when btn is in the read less state
        $el.html("Read More");

        $('html, body').animate({
            scrollTop: $up.offset().top - $('header').height()
        });
    }
    return false;
}

function onHashChange(){
	$("g").removeClass('active_path');
	$(".accordion-content").hide();
	var caseStudiesHashTitle = location.hash;

	if(caseStudiesHashTitle){
		var caseStudiesTitle = caseStudiesHashTitle.substring(1, caseStudiesHashTitle.length);
		$("g[title='"+caseStudiesTitle.toUpperCase()+"']").addClass('active_path');


	}
}

function encodeURIObject(data){
    return Object.keys(data).map(function (i) {
        return encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
    }).join('&');
}

function appendProfile() {
    $(document).on('profile', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item"><a href="/profile" target = "_self">Profile</a></li >';
        headerNavbarNav.find('>ul').append(li);
    });
}
function appendSignIn(){
    $(document).on('signin', function (e) {
        var headerNavbarLogin = $('#headernavbar');
        var li = '<div class="sign-in"><a href="/login" target = "_self">Login</a></div>';
		headerNavbarLogin.find('.search-and-social-media').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

function appendSignOut() {
    $(document).on('signout', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item  sign-in"><a data-request="onLogout" data-request-data="redirect: \'/\'">Logout</a></li >';
        headerNavbarNav.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

function redirectAndRefresh(url){
	$(".tabs a").each(function() {
		this.href = window.location.hash;
	});
	window.open(url, '_blank');
	location.reload();
}

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}

function showSearchForm(){
	$('#layout-header').toggleClass('full-width');
	$('#search').toggle();
	$('.navbar a.p-search').css('visibility', 'hidden');
	// $('#menu li').hide();
	// $('nav a:not(.navbar-brand)').hide();
}

function hideSearchForm(){
	$('#layout-header').toggleClass('full-width');
	$('#search').hide();
    $('.navbar a.p-search').css('visibility', 'visible');
	// $('#menu li').show();
    // $('nav a').show();
}

function requestFormLibrary() {
	$('#mylibraryForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function requestFormPartners() {
	$('#myPartnersForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}


function scrollDown(){
	var element = $('#layout-content');
	$("html, body").animate({ scrollTop: element.offset().top - 190 }, 500);
}


function hideMe(elem){
    $(elem).parent().hide();
}


function getScreenSize() {
    var myHeight = 0;
    var myWidth = 0;
    if (window.innerWidth && window.innerHeight) {
        // Netscape & Mozilla
        myHeight = window.innerHeight;
        myWidth = window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        // IE > 6
        myHeight = document.documentElement.clientHeight;
        myWidth = document.documentElement.clientWidth;
    } else if (document.body.offsetWidth && document.body.offsetHeight) {
        // IE = 6
        myHeight = document.body.offsetHeight;
        myWidth = document.body.offsetWidth;
    } else if (document.body.clientWidth && document.body.clientHeight) {
        // IE < 6
        myHeight = document.body.clientHeight;
        myWidth = document.body.clientWidth;
    }

    return {'width': myWidth, 'height': myHeight};
}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
             }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
            }
        }
		// appendSearchAndSocialMedia()
		requestFormLibrary()
		// requestFormPartners()
        // keepFooter(documentHasScroll());

    });
    // appendProfile()
    appendSignIn()
    appendSignOut()
}

function scrollToField(errors){
    $(".get_involved_form input, .get_involved_form select, .get_involved_form .row").removeClass('red_err_field');
    $.each(errors.scroll_to_field, function(key,valueObj){
        $("#"+key).addClass('red_err_field');
        $('html, body').animate({
            scrollTop: $("#"+key).offset().top - 200
        }, 1000);
        return false; // breaks
    });
}



function handleCustomSVGMapMouseMove(event) {
    var countryCode = $(event.target).parent().attr('country_code');
    var title = $(event.target).parent().attr('title');
    var tooltip = document.getElementById("tooltip");

    switch (countryCode) {
        case "AF":
        case "AX":
        case "AL":
        case "DZ":
        case "AS":
        case "AD":
        case "AO":
        case "AI":
        case "AQ":
        case "AG":
        case "AR":
        case "AM":
        case "AW":
        case "AT":
        case "AZ":
        case "BS":
        case "BH":
        case "BD":
        case "BB":
        case "BY":
        case "BE":
        case "BZ":
        case "BJ":
        case "BM":
        case "BT":
        case "BO":
        case "BQ":
        case "BA":
        case "BW":
        case "BV":
        case "BR":
        case "IO":
        case "BN":
        case "BG":
        case "BF":
        case "BI":
        case "KH":
        case "CM":
        case "CV":
        case "KY":
        case "CF":
        case "TD":
        case "CL":
        case "CN":
        case "CX":
        case "CC":
        case "CO":
        case "KM":
        case "CG":
        case "CD":
        case "CK":
        case "CR":
        case "CI":
        case "HR":
        case "CU":
        case "CW":
        case "CY":
        case "CZ":
        case "DK":
        case "DJ":
        case "DM":
        case "DO":
        case "EC":
        case "EG":
        case "SV":
        case "GQ":
        case "ER":
        case "EE":
        case "ET":
        case "FK":
        case "FO":
        case "FI":
        case "FJ":
        case "GF":
        case "PF":
        case "TF":
        case "GA":
        case "GM":
        case "GE":
        case "GH":
        case "GI":
        case "GR":
        case "GL":
        case "GD":
        case "GP":
        case "GU":
        case "GT":
        case "GG":
        case "GN":
        case "GW":
        case "GY":
        case "HT":
        case "HM":
        case "VA":
        case "HN":
        case "HK":
        case "IS":
        case "ID":
        case "IR":
        case "IQ":
        case "IM":
        case "IL":
        case "IT":
        case "JM":
        case "JP":
        case "JE":
        case "JO":
        case "KZ":
        case "KE":
        case "KI":
        case "KP":
        case "KR":
        case "KW":
        case "KG":
        case "LA":
        case "LV":
        case "LB":
        case "LS":
        case "LR":
        case "LY":
        case "LI":
        case "LT":
        case "LU":
        case "MO":
        case "MK":
        case "MG":
        case "MW":
        case "MY":
        case "MV":
        case "ML":
        case "MT":
        case "MH":
        case "MQ":
        case "MR":
        case "MU":
        case "YT":
        case "MX":
        case "FM":
        case "MD":
        case "MC":
        case "MN":
        case "ME":
        case "MS":
        case "MA":
        case "MZ":
        case "MM":
        case "NA":
        case "NR":
        case "NP":
        case "NC":
        case "FR":
        case "IN":
        case "NL":
        case "HU":
        case "IE":
        case "CA":
        case "NZ":
        case "DE":
        case "NI":
        case "NE":
        case "NG":
        case "NU":
        case "NF":
        case "MP":
        case "NO":
        case "OM":
        case "PK":
        case "PW":
        case "PS":
        case "PA":
        case "PG":
        case "PY":
        case "PE":
        case "PH":
        case "PN":
        case "PT":
        case "PR":
        case "QA":
        case "RE":
        case "RU":
        case "RW":
        case "BL":
        case "SH":
        case "KN":
        case "LC":
        case "MF":
        case "PM":
        case "VC":
        case "WS":
        case "SM":
        case "ST":
        case "SA":
        case "SN":
        case "RS":
        case "SC":
        case "SL":
        case "SG":
        case "SX":
        case "SK":
        case "SI":
        case "SB":
        case "SO":
        case "ZA":
        case "GS":
        case "LK":
        case "SD":
        case "SR":
        case "SJ":
        case "SZ":
        case "SE":
        case "SY":
        case "TW":
        case "TJ":
        case "TZ":
        case "TH":
        case "TL":
        case "TG":
        case "TK":
        case "TO":
        case "TT":
        case "TN":
        case "TR":
        case "TM":
        case "TC":
        case "TV":
        case "UG":
        case "UA":
        case "AE":
        case "UM":
        case "UY":
        case "UZ":
        case "VU":
        case "VE":
        case "VN":
        case "VG":
        case "VI":
        case "WF":
        case "EH":
        case "YE":
        case "ZM":
        case "ZW":
        case "US":
        case "GB":
        case "ES":
        case "AU":
        case "RO":
        case "CH":
        case "PL":
            break;
        default:
            return tooltip.classList.remove("active");
    }

    var x = event.clientX;
    var y = event.clientY;

    tooltip.style.left = (x + 20) + "px";
    tooltip.style.top = (y - 20) + "px";

    tooltip.innerHTML = title;
    tooltip.classList.add("active");

}


function onMapCustomPartners(code) {
    $.request('onPartners', {
        update: { 'components/partners_list': '#mycomponentpartners',
        },
        data: {
            code: code
        },
    }).then(response => {
        $('html, body').animate({
            scrollTop: $("#mycomponentpartners").offset().top - 200
        }, 1000);
        var tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("active");
    });
}

function onCustomSinglePartner(pId) {
    $.request('onSinglePartner', {
        update: { 'components/partners_list': '#mycomponentpartners',
        },
        data: {
            partner_id: pId
        },
    }).then(response => {
        $('html, body').animate({
            scrollTop: $("#mycomponentpartners").offset().top - 200
        }, 1000);
        var tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("active");
    });
}

function onCustomSinglePartnerA(pId) {
    $.request('onSinglePartner', {
        update: { 'components/partners_list_a': '#mycomponentpartners',
        },
        data: {
            partner_id: pId
        },
    }).then(response => {
        $('html, body').animate({
            scrollTop: $("#mycomponentpartners").offset().top - 200
        }, 1000);
        var tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("active");
    });
}


function fetchMails(i, searchStr){
    // $('.group_mailing_list').hide();
    if($('.group_mailing_list_'+i).is(":visible")){
        $('.group_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchMailingList', {
            update: { 'mailing_list': '#mailing_list_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.group_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.mailing_list);
        });
        $('.group_mailing_list').hide();
        $('.group_mailing_list_'+i).show();
    }

}


function fetchSingleMail(i, searchStr){
    if($('.single_mailing_list_'+i).is(":visible")){
        $('.single_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchSingleMail', {
            update: { 'individual_email': '#individual_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.single_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.individual_email);
        });
        $('.single_mailing_list').hide();
        $('.single_mailing_list_'+i).show();
    }
}

function initMailingTooltip(){
    var searchStr = '';
    $('.group-holder').eq(0).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $(this).parent().css('display', 'inline-grid');
        $('<img src="/storage/app/media/CMS_icons_groups.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_'+i+'" onclick="fetchMails('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $('<div class="group_mailing_list group_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());


    });
    $('.group-holder').eq(1).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $('<img src="/storage/app/media/CMS_icons_individuals.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_individuals_'+i+'" onclick="fetchSingleMail('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $(this).parent().css('display', 'inline-grid');
        $('<div class="single_mailing_list single_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());
    });

    $('.group-holder').eq(0).prepend( "<p style='margin-left: 10px; width: 100%;'>Prior to sending group emails, please make sure that all individuals you want to contact have been included in the respective group by clicking on the group icon.</p><p></p>" );
    $('.group-holder').eq(1).prepend( "<p style='margin-left: 10px; width: 100%;'>To see each person’s email, click on the account icon.</p><p></p>" );

}

init()
