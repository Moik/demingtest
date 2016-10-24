$(function() {

	// Menu on small screens
	$(".mobile-menu").click(function() {
		$(".main-menu").slideToggle();
	});

	// Banner Slider
	$(".banner-controls span").click(function() {
		var $this = $(this),
			position = $this.index();

		activeClassToggle($this);
		$(".banner-item").removeClass("active").eq(position).addClass("active");
	});

	// Banner description on small screens
	$(".banner-item").click(function() {
		$(".banner-descr").toggleClass("active");
	});

	// Sort Tabs
	$(".sort-bar li").click(function() {
		var $this = $(this),
			filter = $this.data('filter');

		activeClassToggle($this);

		$(".sort-item").each(function() {
			var $this = $(this);
			if($this.hasClass(filter)) {
				$this.show();
			} else {
				$this.hide();
			}
		});
	});

	equalHeights($(".sort-item"));
	
	$(window).resize(function() {

		var wid = $(window).width(),
			menu = $(".main-menu");    
        if(wid > 640 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }

		equalHeights($(".sort-item"));
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

function activeClassToggle(elem) {
	var siblings = elem.parent().children();

	siblings.removeClass("active");
	elem.addClass("active");
}

function equalHeights(elems) {
	var maxHeight = 0;
	elems.removeAttr('style');
	elems.each(function() {
		var height = $(this).height();
		if(height > maxHeight) {
			maxHeight = height;
		}
	});
	elems.height(maxHeight);
}