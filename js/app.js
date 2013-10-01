(function($) {

    "use strict";

	var options = {
		events_source: 'events.json.php',
		view: 'month',
		tmpl_path: 'tmpls/',
		tmpl_cache: false,
		day: '2013-03-12',
		strings: {
			error_noview: 'Calendar: View {0} not found',
			error_dateformat: 'Calendar: Wrong date format {0}. Should be either "now" or "yyyy-mm-dd"',
			error_loadurl: 'Calendar: Event URL is not set',
			error_where: 'Calendar: Wrong navigation direction {0}. Can be only "next" or "prev" or "today"',
	
			title_year: '{0}',
			title_month: '{0} {1}',
			title_week: 'week {0} of {1}',
			title_day: '{0} {1} {2}, {3}',
	
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
	
			ms0: 'Jan',
			ms1: 'Feb',
			ms2: 'Mar',
			ms3: 'Apr',
			ms4: 'May',
			ms5: 'Jun',
			ms6: 'Jul',
			ms7: 'Aug',
			ms8: 'Sep',
			ms9: 'Oct',
			ms10: 'Nov',
			ms11: 'Dec',
	
			d0: 'Sunday',
			d1: 'Monday',
			d2: 'Tuesday',
			d3: 'Wednesday',
			d4: 'Thursday',
			d5: 'Friday',
			d6: 'Saturday'	
		},
		onAfterEventsLoad: function(events) {
			if(!events) {
				return;
			}
			var list = $('#eventlist');
			list.html('');

			$.each(events, function(key, val) {
				$(document.createElement('li'))
					.html('<a href="' + val.url + '">' + val.title + '</a>')
					.appendTo(list);
			});
		},
		onAfterViewLoad: function(view) {
			$('.page-header h3').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('button[data-calendar-view="' + view + '"]').addClass('active');
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var	 calendar = $('#calendar').calendar(options);

	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.view($this.data('calendar-view'));
		});
	});

    $('#first_day').change(function(){
        var value = $(this).val();
        value = value.length ? parseInt(value) : null;
        calendar.setOptions({first_day: value});
        calendar.view();
    });

    $('#language').change(function(){
        calendar.setLanguage($(this).val());
        calendar.view();
    });
}(jQuery));
