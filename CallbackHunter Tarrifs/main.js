jQuery(function () {
	var inputRange = $('.period-range'),
		periodValue = 3,
		dynamicPeriodVal = $('.dynamic-period_val'),
		totalMonthDynamic = $('.total-month_dynamic'),
		benefitDynamic = $('.benifit_dynamic'),
		totalInPeriodDynamic = $('.total-period_dynamic'),
		monthDynamic = $('.month-dynamic');

	inputRange.on('change', function () {
		periodValue = $(this).val();

		if (periodValue == '9') {
			periodValue = '6';
		}

		var results = dynamicValues(periodValue);
		var declinations = wordDeclinations(periodValue);

		monthDynamic.text(declinations);
		dynamicPeriodVal.text(periodValue);
		totalMonthDynamic.text(results.totalMonth);
		benefitDynamic.text(results.benefit);
		totalInPeriodDynamic.text(results.totalInPeriod);
	});

	//Функция расчета стоимости
	function dynamicValues (period) {
		var results = {
			'totalMonth': 0,
			'benefits': 0,
			'totalInPeriod': 0
		}

		switch (period) {
			case '3':
				results.totalMonth = 2249;
				results.benefit = 750;
				results.totalInPeriod = 6747;
				break;
			case '6':
				results.totalMonth = 1999;
				results.benefit = 3000;
				results.totalInPeriod = 11994;
				break;
			case '12':
				results.totalMonth = 1749;
				results.benefit = 9000;
				results.totalInPeriod = 20988;
				break;
			default:
				results.totalMonth = 2249;
				results.benefit = 750;
				results.totalInPeriod = 6747;
		}

		return results;
	}

	//Функция склонения слов месяц
	function wordDeclinations (value) {
		var word = '';
		switch (value) {
			case '3':
				word = 'месяца';
				return word;
				break;
			case '6':
				word = 'месяцев';
				return word;
			case '12':
				word = 'месяцев';
				return word;
			default:
				word = 'месяца';
				return word;
		}
	}
});