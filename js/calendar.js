/**
 * User: sergey
 * Date: 3/12/13
 * Time: 7:54 PM
 */
;(function($) {

	if (!String.prototype.format) {
		String.prototype.format = function() {
			var args = arguments;
			return this.replace(/{(\d+)}/g, function(match, number) {
				return typeof args[number] != 'undefined'
					? args[number]
					: match
					;
			});
		};
	}

	var date = new Date();
	var options = {};

	var defaults = {
		events:[],          // List of events to fetch. Example like
							// [{start:'123456753', end:'1234565432', title:'This is event name',
							//    url:'http://site...', class:'green', body:'<h1>Full HTML snapshot</h1>'}, {...}, ...]
		view: 'month',      // month, week, day
		first_day: 1,       // Which day is first 2 - sunday or 1 - monday
		position: {
			start: date.now,
			end: date.now
		},
		events_url: '',     // URL to return JSON list of events in special format.
							// {success:1, events: [....]} or for error {success:0, error:'Something terrible happened'}
							// events: [...] as described in events property description
							// The start and end variables will be sent to this url
		min_height: '100px',// Minumum heigh of calendar cell (row)
		width: '100%',      // maximum width of all calendar

		// callbacks
		onBeforeViewChange: function(){},
		onBeforeViewChange2: function(){},
		onBeforeViewChange3: function(){}
	};

	function Calendar(context, params) {
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
		});

	};

	Calendar.prototype.changeView = function(view) {
		options.view = view;
	}
	Calendar.prototype.getTitle = function() {
		switch(options.view) {
			case 'month':
				return language.title_month.format(language.m1, '2013');
				break;
			case 'week':
				return language.title_week.format(48, '2013');
				return "This is the week";
				break;
			case 'day':
				return language.title_day.format(12, language.m1, '2013');
				break;
		}
	};

	$.fn.calendar = function(params) {
		return new Calendar(this, params);


		/*if(typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} if(typeof method === 'string' && methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.calendar');
		}*/

	}
}(jQuery));
