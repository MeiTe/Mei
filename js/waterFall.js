$(window).on('load', function() {
	waterfall();
	var dataInt = {
		"data": [
			{
				"src": "4.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "5.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "6.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "7.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "8.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "9.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "10.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "11.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "12.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "13.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "14.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "15.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "16.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "17.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "18.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "19.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "20.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "21.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "22.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "23.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "24.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "25.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "26.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "27.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "28.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "29.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "30.jpg",
				"text": "Lorem ipsdum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "31.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elitas. Explicabo, eos?"
			},
			{
				"src": "32.jpg",
				"text": "Lorem ipsum dolor sit amet, consedctetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "33.jpg",
				"text": "Lorem ipsum dolor sit amet, consecatetur adipisicding elit. Explicabo, eos?"
			},
			{
				"src": "34.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisaicing elit. Explicabo, eos?"
			},
			{
				"src": "35.jpg",
				"text": "Lorem ipsum dolor sit amet, consecztetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "36.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			},
			{
				"src": "37.jpg",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"
			}
		]
	};

	$(window).on('scroll', function() {
		if(checkScrollSlide) {
			$.each(dataInt.data, function(key, value) {
				var oBox = $("<div>").addClass("box").appendTo($("#rowMain"));
				var oPic = $("<div>").addClass("pic").appendTo($(oBox));
				var oText = $("<div>").addClass("text").insertAfter($(oPic));
				$("<img>").attr("src", "../../img/img_waterFall/" + $(value).attr("src")).appendTo($(oPic));
				oText.text($(value).attr("text"));
			});
		}
		waterfall();
	});
});

function waterfall() {
	var $boxs = $("#rowMain>div");
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(".container").width() / w);
	$("#main").width(w * cols).css("margin", "0 auto");
	var hArr = [];
	$boxs.each(function(index, value) {
		var h = $boxs.eq(index).outerHeight();
		if(index < cols) {
			hArr[index] = h;
		} else {
			var minH = Math.min.apply(null, hArr);
			var minHIndex = $.inArray(minH, hArr);
			$(value).css({
				'position': 'absolute',
				'top': minH + 'px',
				'left': minHIndex * w + 'px',
			});
			hArr[minHIndex] += $boxs.eq(index).outerHeight();
		}
	});
};

function checkScrollSlide() {
	var $lsatBox = $("#main>div").last();
	//var lastBoxDis = $lsatBox.offset().top + Math.floor($lsatBox.outerHeight() / 2);
	var lastBoxDis = $lsatBox.offset().top + $lsatBox.outerHeight();
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return(lastBoxDis < scrollTop + documentH) ? true : false;
}