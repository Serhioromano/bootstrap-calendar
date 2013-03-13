var language = {
	title_month: '{0} year {1}',
	title_week: '{0} week of year {1}',
	title_day: '{0} {1} {2} year {3}',

	m1: 'January',
	m2: 'February',
	m3: 'March',
	m4: 'April',
	m5: 'May',
	m6: 'June',
	m7: 'July',
	m8: 'August',
	m9: 'September',
	m10: 'October',
	m11: 'November',
	m12: 'December',

	d1: 'Monday',
	d2: 'Tuesday',
	d3: 'Wednesday',
	d4: 'Thursday',
	d5: 'Friday',
	d6: 'Saturday',
	d7: 'Sunday'
};

if(!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}