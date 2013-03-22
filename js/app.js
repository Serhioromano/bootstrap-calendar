(function($) {
	var options = {
		events_url: 'events.json.php',
		first_day: 2,
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
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var calendar = $('#calendar').calendar(options);

	$('.page-header h3').text(calendar.title());

	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'), function() {
				$('.page-header h3').text(calendar.title());
			});
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			$('.btn-group button').removeClass('active');

			calendar.view($this.data('calendar-view'));
			$this.addClass('active');

			$('.page-header h3').text(calendar.title());
		});
	});
}(jQuery));