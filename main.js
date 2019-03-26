$("body").on("change", ".filter", function (e) {
	e.preventDefault();
	console.log("Hello, world!");
	const $this_filter = $(this);
	const year_selected = $this_filter.val();
	console.log("Year Selected " + year_selected)
	$(".item.active").removeClass("active");
	$("." + year_selected).addClass("active");

})