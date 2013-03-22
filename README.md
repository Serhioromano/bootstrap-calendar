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
- **i18n** - language files are connected separately. You can easily translate calendar into your own language

### How to install

You can install it with [bower](http://twitter.github.com/bower/).

	$ bower install bootstrap-calendar

Bower will automatically install all dependencies. Then by running

	$ bower list --path

You will see list of the files you need to include to your document.




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