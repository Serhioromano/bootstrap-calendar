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
	return Math.ceil((((this.getTime() - onejan.getTime()) / 86400000)) / 7);
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


		// ------------------------------------------------------------
		// CALLBACKS. Events triggered by calendar class. You can use
		// those to affect you UI
		// ------------------------------------------------------------
		onAfterEventsLoad: function(events) {
		},
		onBeforeEventsLoad: function(next) {
			next();
		},

		// -------------------------------------------------------------
		// INTERNAL USE ONLY. DO NOT ASSIGN IT WILL BE OVERRIDDEN ANYWAY
		// -------------------------------------------------------------
		events: [],
		position: {
			start: new Date(),
			end: new Date()
		}
	};

	var options = {};
	var context = null;

	function Calendar(params) {
		$.ajaxSetup({dataType: 'json', type: 'post', async: false});
		options = $.extend({}, defaults, params);

		context.css('width', options.width);

		this.init_position();
		this.loadurl();
		this.render();

		return this;
	}

	Calendar.prototype.render = function() {
		context.html('EEEE!!!!!');
	};

	Calendar.prototype.view = function(view) {
		options.view = view;
		this.init_position();
		this.loadurl();
		this.render();
		//console.log(2);

	};

	Calendar.prototype.navigate = function(where, next) {

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
		//console.log(1);
	};

	Calendar.prototype.title = function() {
		var p = options.position.start;
		switch(options.view) {
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

	Calendar.prototype.loadurl = function() {
		if(!options.events_url) {
			$.error(language.error_loadurl);
		}
		options.onBeforeEventsLoad(function() {
			$.ajax({
				url: options.events_url,
				data: {
					from: options.position.start,
					to: options.position.end
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

	$.fn.calendar = function(params) {
		context = this;
		return new Calendar(params);
	}
}(jQuery));
