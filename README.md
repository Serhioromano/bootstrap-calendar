Bootstrap Calendar
===

> Attention! This project is not yet released. If you found it in search engine note it is not yet ready to be used. Please check back later.

Full view calendar based on Twitter Bootstrap. Please try [demo](http://bootstrap-calendar.azurewebsites.net). You gonna like it.

![Bootstrap full calendar](http://serhioromano.s3.amazonaws.com/github/bs-calendar.png)

### Why?

Why did I start this project? Well, I believe there is no good full view calendar out there with native Bootstrap support. In fact I could not find even one. Also I was trying to make different UI and UX concept.


### Features

- **Reusable** - there is not UI in this calendar. All buttons to switch view or load events should be done separately. Thus you will have your own uniquie calendar design.
- **Template based** - all view like **year**, **month**, **week** or **day** are based on templates. You can easily change how it looks or style it or even add new custom view.
- **LESS** - easy adjust and style your calendar with less variables file.
- **AJAX** - It uses AJAX to feed calendar with events. You provide URL and just return by this URL `JSON` list of events.
- **i18n** - language files are connected separately. You can easily translate calendar into your own language

### How to install

You can install it with [bower](http://twitter.github.com/bower/).

	$ bower install bootstrap-calendar

Bower will automatically install all dependencies. Then by running

	$ bower list --path

You will see list of the files you need to include to your document.




## How to use

### Quick setup
Of course you have to include bootstrap. And calendar. Here is the minimum setup.

	<!DOCTYPE html>
	<html>
	<head>
		<title>Minimum Setup</title>
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/calendar.css">
	</head>
	<body>

		<div id="calendar"></div>

		<script type="text/javascript" src="js/vendor/jquery-1.9.1.js"></script>
		<script type="text/javascript" src="js/language/en-GB.js"></script>
		<script type="text/javascript" src="js/calendar.js"></script>
		<script type="text/javascript">
			var calendar = $('#calendar').calendar();
		</script>
	</body>
	</html>

For calendar you only have to include `calendar.css` and `calendar.js` and calendar language `en-GB.js` file.

### Feed with events

To feed calendar with events you need to provide URL where AJAX request will be made.

	var calendar = $('#calendar').calendar({url:'/api/events.php'});

It will post to variables there `start` and `end` which will tell you what period is required. You have to return it in JSON structure like this

	{
		"success": 1,
		"result": [
			{
				"id: 293,
				"title": "Event 1",
				"url": "http://someurl.com",
				"class": 'event-important',
				start: 12039485678,
				end: 1234576967
			},
			...
		]
	}

`start` and `end` contain dates when event starts and ends in Unix timestamp. Classes are `event-important`, `event-success`, `event-warning`, `event-info`, `event-inverse` and `event-special`. This wil change color of your event indicators.

or if you have error return

	{
		"success": 0,
		"error": "error message here"
	}
