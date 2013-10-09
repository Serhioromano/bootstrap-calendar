<?php
$currentMonth = gmdate('n');
$currentYear = gmdate('Y');
?>
{
	"success": 1,
	"result": [
		{
			"id": "293",
			"title": "This is worning class eve",
			"url": "http://www.example.com/",
			"class": "event-warning",
			"start": <?php echo gmmktime(18,0,0, $currentMonth, 10, $currentYear) * 1000; ?>,
			"end":   <?php echo gmmktime(18,1,26, $currentMonth, 13, $currentYear) * 1000; ?>
		},
		{
			"id": "294",
			"title": "This is infor class ",
			"url": "http://www.example.com/",
			"class": "event-info",
			"start": <?php echo gmmktime(18,0,0, $currentMonth, 12, $currentYear) * 1000; ?>,
			"end":   <?php echo gmmktime(18,1,26, $currentMonth, 14, $currentYear) * 1000; ?>
		},
		{
			"id": "297",
			"title": "This is success evert",
			"url": "http://www.example.com/",
			"class": "event-success",
			"start": <?php echo gmmktime(18,0,0, $currentMonth, 14, $currentYear) * 1000; ?>,
			"end":   <?php echo gmmktime(18,1,26, $currentMonth, 14, $currentYear) * 1000; ?>
		},
		{
			"id": "54",
			"title": "This is simple event",
			"url": "http://www.example.com/",
			"class": "",
			"start": <?php echo gmmktime(18,0,0, $currentMonth, 18, $currentYear) * 1000; ?>,
			"end":   <?php echo gmmktime(18,1,26, $currentMonth, 19, $currentYear) * 1000; ?>
		},
		{
			"id": "532",
			"title": "This is inverse event",
			"url": "http://www.example.com/",
			"class": "event-inverse",
			"start": <?php echo gmmktime(18,0,0, $currentMonth, 27, $currentYear) * 1000; ?>,
			"end":   <?php echo gmmktime(18,1,26, $currentMonth, 28, $currentYear) * 1000; ?>
		},
		{
			"id": "548",
			"title": "This is special event",
			"url": "http://www.example.com/",
			"class": "event-special",
			"start": <?php echo gmmktime(18,0,0, $currentMonth, 13, $currentYear) * 1000; ?>,
			"end":   <?php echo gmmktime(18,1,26, $currentMonth, 18, $currentYear) * 1000; ?>
		},
		{
			"id": "295",
			"title": "Event 3",
			"url": "http://www.example.com/",
			"class": "event-important",
			"start": <?php echo gmmktime(18,0,0, $currentMonth, 26, $currentYear) * 1000; ?>,
			"end":   <?php echo gmmktime(18,1,26, $currentMonth, 27, $currentYear) * 1000; ?>
		}
	]
}