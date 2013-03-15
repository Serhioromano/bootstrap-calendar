Bootstrap Calendar
===

This calendar based on Twitetr Bootstrap. It uses custom bootsrap 7 columns grid to render calendar.

[DEMO](http://bootstrap-calendar.azurewebsites.net)

### Features

- **Reusable** - there is not UI in this calendar. All buttons to switch view or load events should be done separately. Thus you will have your own uniquie calendar design.
- **Template based** - all view like month, week or day are based on template. You can easely change how it looks or style it or even add new custom view.
- **i18n** - language files are connected separately. You can easily translate calendar into your own language

### How to use

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

### API

#### getTitle()

Get current title of the calendar. It is different for every view. You can use when view is switched.