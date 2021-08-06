


$(document).ready(function () {

	function Slider(blockForSlider) {
		this.viewPort = blockForSlider.children('.viewport');
		this.slideWrapper = this.viewPort.children('.slidewrapper');
		this.slideCount = this.slideWrapper.children().length;
		this.slideNow = 1;
		this.translateWidth = 0;

		this.nextSlide = function () {
			if (this.slideNow == this.slideCount || this.slideNow <= 0 || this.slideNow > this.slideCount) {
				this.slideWrapper.css('transform', 'translate(0, 0)');
				this.slideNow = 1;
			} else {
				this.translateWidth = -this.viewPort.width() * (this.slideNow);
				this.slideWrapper.css({
					'transform': 'translate(' + this.translateWidth + 'px, 0)'
				});
				this.slideNow++;
			}
		};

		this.prevSlide = function () {
			if (this.slideNow == 1 || this.slideNow <= 0 || this.slideNow > this.slideCount) {
				this.translateWidth = -this.viewPort.width() * (this.slideCount - 1);
				this.slideWrapper.css({
					'transform': 'translate(' + this.translateWidth + 'px, 0)'
				});
				this.slideNow = this.slideCount;
			} else {
				this.translateWidth = -this.viewPort.width() * (this.slideNow - 2);
				this.slideWrapper.css({
					'transform': 'translate(' + this.translateWidth + 'px, 0)'
				});
				this.slideNow--;
			}
		};

		//setInterval(this.nextSlide(), 5000);

	}


	//sucessesSlider
	let sucessesInterval = 3000;
	let sucessesSlider = new Slider($('.successes .block-for-slider'));
	let sucessesIdInterval = setInterval(() => { sucessesSlider.nextSlide() }, sucessesInterval);
	$('.successes .next-btn').click(function () {
		sucessesSlider.nextSlide();
	});

	$('.successes .prev-btn').click(function () {
		sucessesSlider.prevSlide();
	});
	$('.successes .viewport').hover(function () {
		clearInterval(sucessesIdInterval);
	}, function () {
		sucessesIdInterval = setInterval(() => { sucessesSlider.nextSlide() }, sucessesInterval);
	});

	//reviewsSlider
	let reviewsInterval = 5000;
	let reviewsSlider = new Slider($('.reviews .block-for-slider'));
	let reviewsIdInterval = setInterval(() => { reviewsSlider.nextSlide() }, reviewsInterval);
	$('.reviews .next-btn').click(function () {
		reviewsSlider.nextSlide();
	});

	$('.reviews .prev-btn').click(function () {
		reviewsSlider.prevSlide();
	});
	$('.reviews .viewport').hover(function () {
		clearInterval(reviewsIdInterval);
	}, function () {
		reviewsIdInterval = setInterval(() => { reviewsSlider.nextSlide() }, reviewsInterval);
	});

	//

});

/*---------------------------------------------------------------------- */
//let slideNow = 1;
//let slideCount = $('.successes .slidewrapper').children().length;
//let slideInterval = 5000;
//let translateWidth = 0;

//$(document).ready(function () {
//	let switchInterval = setInterval(nextSlide, slideInterval);

//	$('.successes .viewport').hover(function () {
//		clearInterval(switchInterval);
//	}, function () {
//		switchInterval = setInterval(nextSlide, slideInterval);
//	});

//	$('.successes .next-btn').click(function () {
//		nextSlide();
//	});

//	$('.successes .prev-btn').click(function () {
//		prevSlide();
//	});

//});



//function nextSlide() {
//	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//		$('.successes .slidewrapper').css('transform', 'translate(0, 0)');
//		slideNow = 1;
//	} else {
//		translateWidth = -$('.successes .viewport').width() * (slideNow);
//		$('.successes .slidewrapper').css({
//			'transform': 'translate(' + translateWidth + 'px, 0)'
//		});
//		slideNow++;
//	}
//}

//function prevSlide() {
//	if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//		translateWidth = -$('.successes .viewport').width() * (slideCount - 1);
//		$('.successes .slidewrapper').css({
//			'transform': 'translate(' + translateWidth + 'px, 0)'
//		});
//		slideNow = slideCount;
//	} else {
//		translateWidth = -$('.successes .viewport').width() * (slideNow - 2);
//		$('.successes .slidewrapper').css({
//			'transform': 'translate(' + translateWidth + 'px, 0)'
//		});
//		slideNow--;
//	}
//}
