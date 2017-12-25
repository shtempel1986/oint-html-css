(function ($) {


	$(() => {

//===========================================
//	AUTOCOMPLETE START
//	=========================================

		$('[data-autocomplete]').each(function () {

			let data = $(this).data('autocomplete');

			$(this).autocomplete({
				source: data
			});

		});

//===========================================
//	AUTOCOMPLETE END
//	=========================================

//===========================================
//	datepicker START
//	=========================================

		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: '&#x3c;Пред',
			nextText: 'След&#x3e;',
			currentText: 'Сегодня',
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
			dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
			dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false
		};

		$.datepicker.setDefaults($.datepicker.regional["ru"]);

		$('[data-datepicker]').datepicker({
			maxDate: new Date(),
			selectOtherMonths: true,
			showOtherMonths: true

		});

//===========================================
//	datepicker END
//	=========================================


//===========================================
//	AUTORESIZE TEXTAREAS START
//	=========================================

		$('.main-feed__textarea').autoResize();

//===========================================
//	AUTORESIZE TEXTAREAS END
//	=========================================

		//===========================================
//	MAIN FEED SCRIPTS START
//	=========================================

		const MEDIA_RATIO = 0.8491;

		$('.main-feed-add').each(function () {
			$(this).find('textarea').focus(() => {
				$(this).addClass('main-feed-add_active');
			});
		});

		function feedMediaCalculate() {
			let $items = $('.main-feed-media');
			console.log($items);

			$items.each(function () {
				let $targets = $(this).find('.main-feed-media__item:not(:first-child)');
				let count = $targets.length;
				if (!count) {
					return;
				}

				let width = ($(this).width() - (count - 1) * 6) / count;

				let height = width * MEDIA_RATIO;

				console.log(width, height);

				$targets.css({
					width: `${width}px`,
					height: `${height}px`
				})

			});

		}

		feedMediaCalculate();

//===========================================
//	MAIN FEED SCRIPTS END
//	=========================================


	});

})(jQuery);