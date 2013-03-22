var language = {
	error_noview: 'Calendar: View {0} not found',
	error_dateformat: 'Calendar: Wrong date format {0}',
	error_loadurl: 'Calendar: Events load URL is not set',
	error_where: 'Calendar: Wrong navigation direction {0}. Can be only "next" or "prev" or "today"',

	title_year: 'Year {0}',
	title_month: '{0} year {1}',
	title_week: '{0} week of year {1}',
	title_day: '{0} {1} {2} year {3}',

	week:'Week',

	m0: 'January',
	m1: 'February',
	m2: 'March',
	m3: 'April',
	m4: 'May',
	m5: 'June',
	m6: 'July',
	m7: 'August',
	m8: 'September',
	m9: 'October',
	m10: 'November',
	m11: 'December',

	d0: 'Sunday',
	d1: 'Monday',
	d2: 'Tuesday',
	d3: 'Wednesday',
	d4: 'Thursday',
	d5: 'Friday',
	d6: 'Saturday'
};

if(!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}