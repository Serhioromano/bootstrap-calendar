/**
 * Bootstrap based calendar full view.
 *
 * https://github.com/Serhioromano/bootstrap-calendar
 *
 * User: Sergey Romanov <serg4172@mail.ru>
 * Version 0.1
 */
"use strict";

Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(), 0, 1);
	return Math.ceil((((this.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
}
Date.prototype.getMonthFormatted = function() {
	var month = this.getMonth() + 1;
	return month < 10 ? '0' + month : month;
}
Date.prototype.getDateFormatted = function() {
	var date = this.getDate();
	return date < 10 ? '0' + date : date;
}

;
(function($) {

	var defaults = {
		width: '100%',      // maximum width of all calendar
		view: 'month',      // month, week, day
		day: 'now',         // what day to start with. No matter month, week or day this will be a starting point
		// format yyyy-mm-dd or now
		first_day: 1,       // Which day is first 2 - sunday or 1 - monday
		events_url: '',     // URL to return JSON list of events in special format.
		// {success:1, result: [....]} or for error {success:0, error:'Something terrible happened'}
		// events: [...] as described in events property description
		// The start and end variables will be sent to this url
		classes: {
			months: {
				inmonth: 'cal-day-inmonth',
				outmonth: 'cal-day-outmonth',
				saturday: 'cal-day-weekend',
				sunday: 'cal-day-weekend',
				holidays: 'cal-day-holiday',
				today: 'cal-day-today'
			}
		},
		holidays: {
			'08-03': 'International Women\'s Day',
			'25-12': 'Christmass'
		},


		// ------------------------------------------------------------
		// CALLBACKS. Events triggered by calendar class. You can use
		// those to affect you UI
		// ------------------------------------------------------------
		onAfterEventsLoad: function(events) {
		},
		onBeforeEventsLoad: function(next) {
			next();
		},
		onAfterViewLoad: function(calendar, view) {
		},

		// -------------------------------------------------------------
		// INTERNAL USE ONLY. DO NOT ASSIGN IT WILL BE OVERRIDDEN ANYWAY
		// -------------------------------------------------------------
		events: [],
		position: {
			start: new Date(),
			end: new Date()
		},
		templates: {
			month: '',
			week: '',
			day: ''
		},
		break: false
	};

	var options = {};
	var context = null;

	function Calendar(params) {
		$.ajaxSetup({dataType: 'json', type: 'post', async: false});
		options = $.extend(true, {}, defaults, params);
		context.css('width', options.width);

		this.view.call(this);
		return this;
	}

	Calendar.prototype.render = function() {
		context.html('Start at: ' + options.position.start + '<br> End at: ' + options.position.end);
		context.html('');
		this.load_template();
		this.break = false;

		var data = {};
		data.events = options.events;
		data.cal = this;
		data.day = 1;

		// Getting list of days in a week in correct order. Works for month and week views
		if(options.first_day == 1) {
			data.months = [language.d1, language.d2, language.d3, language.d4, language.d5, language.d6, language.d0]
		} else {
			data.months = [language.d0, language.d1, language.d2, language.d3, language.d4, language.d5, language.d6]
		}

		switch(options.view) {
			case 'month':
				break;
			case 'week':
				break;
			case 'day':
				break;
		}
		context.append(options.templates[options.view](data));
		this.update();
	};

	Calendar.prototype.month = function(month) {
		return '<span class="pull-right" data-cal-month="' + month + '">' + language['m' + month] + '</span>';
	}

	Calendar.prototype.day = function(week, day) {
		var cls = options.classes.months.outmonth;
		var tooltip = '';

		var firstday = options.position.start.getDay();
		if(options.first_day == 2) {
			firstday++;
		}
		day = (day - firstday) + 1;
		var curdate = new Date(options.position.start.getFullYear(), options.position.start.getMonth(), day);

		// if day of the current month
		if(day > 0) {
			cls = options.classes.months.inmonth;
			var holiday = curdate.getDateFormatted() + '-' + curdate.getMonthFormatted();
			if($.inArray(holiday, _.keys(options.holidays)) > -1) {
				cls = options.classes.months.holidays;
				tooltip = options.holidays[holiday];
			}
		}
		// stop cycling table rows;
		if((day + 1) > options.position.end.getDate()) {
			this.break = true;
		}
		// if day of the next month
		if(day > options.position.end.getDate()) {
			day = day - options.position.end.getDate();
			cls = options.classes.months.outmonth;
		}

		if(curdate.getDay() == 0 && (cls == options.classes.months.inmonth)) {
			cls = options.classes.months.sunday;
		}
		if(curdate.getDay() == 6 && (cls == options.classes.months.inmonth)) {
			cls = options.classes.months.saturday;
		}
		if(curdate.toDateString() == (new Date()).toDateString()) {
			cls = options.classes.months.today;
		}
		if(day <= 0) {
			var daysinprevmonth = (new Date(options.position.start.getFullYear(), options.position.start.getMonth(), 0)).getDate();
			day = daysinprevmonth - Math.abs(day);
			cls += ' cal-for-first';
		}


		return '<td class="cal-day ' + cls + '"><span rel="tooltip" data-original-title="' + tooltip + '" class="pull-right">' + day + '</span></td>';
	}
	Calendar.prototype.view = function(view) {
		if(view) options.view = view;
		this.init_position.call(this);
		this.load_url.call(this);
		this.render.call(this);

		options.onAfterViewLoad.call(this, options.view);

	};

	Calendar.prototype.navigate = function(where, next) {

		var to = $.extend({}, options.position);
		if(where == 'next') {
			switch(options.view) {
				case 'year':
					to.start.setFullYear(options.position.start.getFullYear() + 1);
					break;
				case 'month':
					to.start.setMonth(options.position.start.getMonth() + 1);
					break;
				case 'week':
					to.start.setDate(options.position.start.getDate() + 7);
					break;
				case 'day':
					to.start.setDate(options.position.start.getDate() + 1);
					break;
			}
		} else if(where == 'prev') {
			switch(options.view) {
				case 'year':
					to.start.setFullYear(options.position.start.getFullYear() - 1);
					break;
				case 'month':
					to.start.setMonth(options.position.start.getMonth() - 1);
					break;
				case 'week':
					to.start.setDate(options.position.start.getDate() - 7);
					break;
				case 'day':
					to.start.setDate(options.position.start.getDate() - 1);
					break;
			}
		} else if(where == 'today') {
			to.start.setTime(new Date().getTime());
		}
		else {
			$.error(language.error_where.format(where))
		}
		options.day = to.start.getFullYear() + '-' + to.start.getMonthFormatted() + '-' + to.start.getDateFormatted();
		this.view.call(this);
		next();
	};

	Calendar.prototype.init_position = function() {
		var year, month, day;

		if(options.day == 'now') {
			var date = new Date();
			year = date.getFullYear();
			month = date.getMonth();
			day = date.getDate();
		} else if(options.day.match(/^\d{4}-\d{2}-\d{2}$/g)) {
			var list = options.day.split('-');
			year = list[0];
			month = list[1] - 1;
			day = list[2];
		}
		else {
			$.error(language.error_dateformat.format(options.day));
		}

		switch(options.view) {
			case 'year':
				options.position.start.setTime(new Date(year, 0, 1).getTime());
				options.position.end.setTime(new Date(year, 12, 0, 23, 59, 59).getTime());
				break;
			case 'month':
				options.position.start.setTime(new Date(year, month, 1).getTime());
				options.position.end.setTime(new Date(year, month + 1, 0, 23, 59, 59).getTime());
				break;
			case 'day':
				options.position.start.setTime(new Date(year, month, day).getTime());
				options.position.end.setTime(new Date(year, month, day, 23, 59, 59).getTime());
				break;
			case 'week':
				var curr = new Date(year, month, day);
				var first = curr.getDate() - curr.getDay();
				if(options.first_day == 1) first += 1;
				var last = first + 6;

				options.position.start.setTime(new Date(year, month, first).getTime());
				options.position.end.setTime(new Date(year, month, last, 23, 59, 59).getTime());
				break;
			default:
				$.error(language.error_noview.format(options.view))
		}
		return this;
	};

	Calendar.prototype.title = function() {
		var p = options.position.start;
		switch(options.view) {
			case 'year':
				return language.title_year.format(p.getFullYear());
				break;
			case 'month':
				return language.title_month.format(language['m' + p.getMonth()], p.getFullYear());
				break;
			case 'week':
				return language.title_week.format(p.getWeek(), p.getFullYear());
				break;
			case 'day':
				return language.title_day.format(language['d' + p.getDay()], p.getDate(), language['m' + p.getMonth()], p.getFullYear());
				break;
		}
		return;
	};

	Calendar.prototype.load_url = function() {
		if(!options.events_url) {
			$.error(language.error_loadurl);
		}
		options.onBeforeEventsLoad(function() {
			$.ajax({
				url: options.events_url,
				data: {
					from: options.position.start.getTime(),
					to: options.position.end.getTime()
				}
			}).done(function(json) {
					if(!json.success) {
						$.error(json.error);
					}
					options.events = json.result;
					options.onAfterEventsLoad(json.result);
				});
		});
	};
	Calendar.prototype.load_template = function() {
		if(options.templates[options.view]) {
			return;
		}

		$.ajax({
			url: 'tmpls/' + options.view + '.html',
			dataType: 'html',
			type: 'GET'
		}).done(function(html) {
				options.templates[options.view] = _.template(html);
			});
	};
	Calendar.prototype.update = function() {
		$('*[rel="tooltip"]').tooltip();
		var $this = this;
		switch(options.view) {
			case 'year':
				$('span[data-cal-month]').each(function(k, v) {
					$(v).click(function() {
						var date = new Date(options.position.start.getFullYear(), $(v).data('cal-month'), 1);
						options.day = date.getFullYear() + '-' + date.getMonthFormatted() + '-' + date.getDateFormatted();
						$this.view('month');
					});
				});
				break;
			case 'month':
				var week = $('.cal-week');
				week.html(language.week);
				var start = options.position.start.getFullYear() + '-' + options.position.start.getMonthFormatted() + '-';
				$('table.table-calendar tbody tr').each(function(k, v) {
					$(v).bind('mouseenter', function() {
						var child = $(v).children('td:first-child');
						var day = child.children('span.pull-right').text();
						if(child.hasClass('cal-for-first')) {
							day = 1;
						}
						day = (day < 10 ? '0' + day : day);
						week.show().attr('data-cal-week', start + day).appendTo(child);
					});
					$(v).bind('mouseleave', function() {
						week.hide();
					});
				});
				week.click(function() {
					options.day = $(this).data('cal-week');
					$this.view('week');
				});
				break;
			case 'week':

				break;
			case 'day':

				break;
		}
	}

	$.fn.calendar = function(params) {
		context = this;
		return new Calendar(params);
	}
}(jQuery));
