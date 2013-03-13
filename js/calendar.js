/**
 * Bootstrap based calendar full view.
 *
 * https://github.com/Serhioromano/bootstrap-calendar
 *
 * User: Sergey Romanov <serg4172@mail.ru>
 * Version 0.1
 */
;(function($) {

	var defaults = {
		width: '100%',      // maximum width of all calendar
		view: 'month',      // month, week, day
		first_day: 1,       // Which day is first 2 - sunday or 1 - monday
		events_url: '',     // URL to return JSON list of events in special format.
							// {success:1, result: [....]} or for error {success:0, error:'Something terrible happened'}
							// events: [...] as described in events property description
							// The start and end variables will be sent to this url


		// ------------------------------------------------------------
		// CALLBACKS. Events triggered by calendar class. You can use
		// those to affect you UI
		// ------------------------------------------------------------
		onAfterEventsLoad: function(events){},


		// -------------------------------------------------------------
		// INTERNAL USE ONLY. DO NOT ASSIGN IT WILL BE OVERRIDDEN ANYWAY
		// -------------------------------------------------------------
		events:[],
		position: {
			start: '',
			end: ''
		}
	};

	var options = {};
	var context = null;

	function Calendar(params) {
		$.ajaxSetup({dataType:'json', type:'post', async:false});
		options = $.extend({}, defaults, params);

		context.css('width', options.width);

		if(options.events_url) {
			this.loadurl();
		}

		//load view

		return this;
	}

	Calendar.prototype.loadurl = function() {
		$.ajax({
			url:options.events_url,
			data:{
				from: options.position.start,
				to: options.position.end
			}
		}).done(function(json){
			if(!json.success) {
				$.error(json.error);
			}
			options.events = json.result;
			options.onAfterEventsLoad(json.result);
		});
	};

	Calendar.prototype.view = function(view) {
		options.view = view;
	};

	Calendar.prototype.navigate = function(where, next) {

		next();
	};

	Calendar.prototype.title = function() {
		switch(options.view) {
			case 'month':
				return language.title_month.format(language.m1, '2013');
				break;
			case 'week':
				return language.title_week.format(48, '2013');
				break;
			case 'day':
				return language.title_day.format(language.d1, 12, language.m1, '2013');
				break;
		}
		return;
	};

	$.fn.calendar = function(params) {
		context = this;
		return new Calendar(params);
	}
}(jQuery));
