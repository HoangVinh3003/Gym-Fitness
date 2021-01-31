	// JavaScript Document

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/********************PLAY VIDEO*******************/
var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 
/********************COUNTDOWN*******************/
 $(function() {
   

	   function countUp(count) {
		var div_by = 13,
			speed = Math.round(count / div_by),
			$display = $('.countdown_first'),
			run_count = 0,
			int_speed = 100;
		var int = setInterval(function () {
			if (run_count < div_by) {
				$display.text(speed * run_count);
				run_count++;
			} else if (parseInt($display.text()) < count) {
				var curr_count = parseInt($display.text()) + 1;
				$display.text(curr_count);
			} else {
				clearInterval(int);
			}
		}, int_speed);
	}
	countUp(12);

function countUp2(count) {
    var div_by = 151,
        speed = Math.round(count / div_by),
        $display = $('.countdown_second'),
        run_count = 0,
        int_speed = 50;
    var int = setInterval(function () {
        if (run_count < div_by) {
            $display.text(speed * run_count);
            run_count++;
        } else if (parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}
countUp2(150);
});
/********************ACCORDION*******************/
    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}