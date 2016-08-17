$(function() {
	
		$(window).scroll(function(){
	
		//Getting the scroll percentage
		var windowHeight = $(window).height();
		var scrollHeight = $(window).scrollTop();
		var scrollPercentage =  (scrollHeight / windowHeight);
		
		// if we have scrolled past 200, add the alternate class to nav bar
		
		if(scrollPercentage > 0.8) {
			$('#navfixed').addClass('scrolling');
		} else {
			$('#navfixed').removeClass('scrolling');
		}
		
	});
	
	$('a').on('click', function(e) {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top - 80
	      }, 1000);
	      return false;
	    }
	  }

	}); // code courtesy of CSS-Tricks
		
	// get an array of 'href' of each a tag

	var navLink = $('ul.navHighlighter a');
	var aArray = [];

	for(var i = 0; i < navLink.length; i++) {
		console.log(i);
		var aChild = navLink[i];
		var navArray = $(aChild).attr('href');
		aArray.push(navArray);
		var selector = aArray.join(" , ");
		
	}
	
		$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop)
		var tops = [];
		
		$(selector).each(function(){
			var top = $(this).position().top +500;			
			if(scrollTop > top) {
				var id = $(this).attr('id');
				$('.active').removeClass('active');
				$('a[href="#'+id+'"]').parent().addClass('active');
			}
			tops.push(top);
		});

	});
});