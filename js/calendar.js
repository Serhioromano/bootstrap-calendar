/**
 * Bootstrap based calendar full view.
 *
 * https://github.com/Serhioromano/bootstrap-calendar
 *
 * User: Sergey Romanov <serg4172@mail.ru>
 * Version 0.1
 */
"use strict";

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
}
Date.prototype.getMonthFormatted = function () {
    var month = this.getMonth() + 1;
    return month < 10 ? '0' + month : month;
}
Date.prototype.getDateFormatted = function () {
    var date = this.getDate();
    return date < 10 ? '0' + date : date;
}

;
(function ($) {

    var defaults = {
        width: '100%',      // maximum width of all calendar
        view: 'month',      // month, week, day
        day: '2013-03-01',  // what day to start with. No matter month, week or day this will be a starting point
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
        views: {
            year: {
                slide_events: 1
            },
            month: {
                slide_events: 1
            }
        },


        // ------------------------------------------------------------
        // CALLBACKS. Events triggered by calendar class. You can use
        // those to affect you UI
        // ------------------------------------------------------------
        onAfterEventsLoad: function (events) {
        },
        onBeforeEventsLoad: function (next) {
            next();
        },
        onAfterViewLoad: function (calendar, view) {
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
            year: '',
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

    Calendar.prototype.render = function () {
        context.html('Start at: ' + options.position.start + '<br> End at: ' + options.position.end);
        context.html('');
        this.load_template();
        this.break = false;

        var data = {};
        data.events = options.events;
        data.cal = this;
        data.day = 1;

        // Getting list of days in a week in correct order. Works for month and week views
        if (options.first_day == 1) {
            data.months = [language.d1, language.d2, language.d3, language.d4, language.d5, language.d6, language.d0]
        } else {
            data.months = [language.d0, language.d1, language.d2, language.d3, language.d4, language.d5, language.d6]
        }

        switch (options.view) {
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

    Calendar.prototype._month = function (month) {
        var newmonth = month + 1;
        var data_day = options.position.start.getFullYear() + '-' + (newmonth < 10 ? '0' + newmonth : newmonth) + '-' + '01';

        var out = '<span class="pull-right" data-cal-date="' + data_day + '" data-cal-view="month">' + language['m' + month] + '</span>';

        var curdate = new Date(options.position.start.getFullYear(), month, 1, 0, 0, 0);
        var start = parseInt(curdate.getTime());
        var end = parseInt(new Date(options.position.start.getFullYear(), month + 1, 0, 0, 0, 0).getTime());
        var events = [];

        $.each(options.events, function (k, event) {
            if ((parseInt(event.start) <= end) && (parseInt(event.end) >= start)) {
                events.push('<a href="' + event.url + '" data-event-id="' + event.id + '" data-event-class="' + event.class +
                    '" class="pull-left event ' + event.class + ' event' + event.id + '" rel="tooltip" data-original-title="' +
                    event.title + '"></a>');
            }
        });
        if (events.length > 0) {
            out += '<small class="cal-events-num badge badge-important pull-left">' + events.length + '</small><div class="hide events-list">' + events.join(' ') + '</div>';
        }

        return out;
    }

    Calendar.prototype._day = function (week, day) {
        var cls = options.classes.months.outmonth;
        var tooltip = '';

        var firstday = options.position.start.getDay();
        if (options.first_day == 2) {
            firstday++;
        }
        day = (day - firstday) + 1;
        var curdate = new Date(options.position.start.getFullYear(), options.position.start.getMonth(), day, 0, 0, 0);

        // if day of the current month
        if (day > 0) {
            cls = options.classes.months.inmonth;
            var holiday = curdate.getDateFormatted() + '-' + curdate.getMonthFormatted();
            if ($.inArray(holiday, _.keys(options.holidays)) > -1) {
                cls = options.classes.months.holidays;
                tooltip = options.holidays[holiday];
            }
        }
        // stop cycling table rows;
        if ((day + 1) > options.position.end.getDate()) {
            this.break = true;
        }
        // if day of the next month
        if (day > options.position.end.getDate()) {
            day = day - options.position.end.getDate();
            cls = options.classes.months.outmonth;
        }

        if (curdate.getDay() == 0 && (cls == options.classes.months.inmonth)) {
            cls = options.classes.months.sunday;
        }
        if (curdate.getDay() == 6 && (cls == options.classes.months.inmonth)) {
            cls = options.classes.months.saturday;
        }
        if (curdate.toDateString() == (new Date()).toDateString()) {
            cls = options.classes.months.today;
        }
        if (day <= 0) {
            var daysinprevmonth = (new Date(options.position.start.getFullYear(), options.position.start.getMonth(), 0)).getDate();
            day = daysinprevmonth - Math.abs(day);
            cls += ' cal-month-first-row';
        }

        var data_day = curdate.getFullYear() + '-' + curdate.getMonthFormatted() + '-' + (day < 10 ? '0' + day : day);

        var out = '<div class="cal-month-day ' + cls + '"><span class="pull-right" data-cal-date="' + data_day + '"  data-cal-view="day"';
        if (tooltip) {
            out += ' rel="tooltip" data-original-title="' + tooltip + '" ';
        }
        out += '>' + day + '</span>';

        var start = parseInt(curdate.getTime());
        var end = parseInt(start + 86400);
        var events = [];

        $.each(options.events, function (k, event) {
            if ((parseInt(event.start) <= end) && (parseInt(event.end) >= start)) {
                events.push('<a href="' + event.url + '" data-event-id="' + event.id + '" data-event-class="' + event.class +
                    '" class="pull-left event ' + event.class + ' event' + event.id + '" rel="tooltip" data-original-title="' +
                    event.title + '"></a>');
            }
        });
        if (events.length > 0) {
            out += '<div class="events-list">' + events.join(' ') + '</div>';
        }
        out += '</div>';
        return out;
    }
    Calendar.prototype.view = function (view) {
        if (view) options.view = view;
        this.init_position.call(this);
        this.load_url.call(this);
        this.render.call(this);

        options.onAfterViewLoad.call(this, options.view);

    };

    Calendar.prototype.navigate = function (where, next) {

        var to = $.extend({}, options.position);
        if (where == 'next') {
            switch (options.view) {
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
        } else if (where == 'prev') {
            switch (options.view) {
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
        } else if (where == 'today') {
            to.start.setTime(new Date().getTime());
        }
        else {
            $.error(language.error_where.format(where))
        }
        options.day = to.start.getFullYear() + '-' + to.start.getMonthFormatted() + '-' + to.start.getDateFormatted();
        this.view.call(this);
        if (_.isFunction(next)) {
            next();
        }
    };

    Calendar.prototype.init_position = function () {
        var year, month, day;

        if (options.day == 'now') {
            var date = new Date();
            year = date.getFullYear();
            month = date.getMonth();
            day = date.getDate();
        } else if (options.day.match(/^\d{4}-\d{2}-\d{2}$/g)) {
            var list = options.day.split('-');
            year = list[0];
            month = list[1] - 1;
            day = list[2];
        }
        else {
            $.error(language.error_dateformat.format(options.day));
        }

        switch (options.view) {
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
                if (options.first_day == 1) first += 1;
                var last = first + 6;

                options.position.start.setTime(new Date(year, month, first).getTime());
                options.position.end.setTime(new Date(year, month, last, 23, 59, 59).getTime());
                break;
            default:
                $.error(language.error_noview.format(options.view))
        }
        return this;
    };

    Calendar.prototype.title = function () {
        var p = options.position.start;
        switch (options.view) {
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

    Calendar.prototype.load_url = function () {
        if (!options.events_url) {
            $.error(language.error_loadurl);
        }
        options.onBeforeEventsLoad(function () {
            $.ajax({
                url: options.events_url,
                data: {
                    from: options.position.start.getTime(),
                    to: options.position.end.getTime()
                }
            }).done(function (json) {
                    if (!json.success) {
                        $.error(json.error);
                    }
                    options.events = json.result;
                    options.onAfterEventsLoad(json.result);
                });
        });
    };
    Calendar.prototype.load_template = function () {
        if (options.templates[options.view]) {
            return;
        }

        $.ajax({
            url: 'tmpls/' + options.view + '.html',
            dataType: 'html',
            type: 'GET'
        }).done(function (html) {
                options.templates[options.view] = _.template(html);
            });
    };


    Calendar.prototype.update = function () {
        var $this = this;

        $('*[rel="tooltip"]').tooltip();

        $('*[data-cal-date]').click(function () {
            options.day = $(this).data('cal-date');
            $this.view($(this).data('cal-view'));
        });
        $('.cal-cell').dblclick(function () {
            options.day = $('[data-cal-date]', this).data('cal-date');
            $this.view($('[data-cal-date]', this).data('cal-view'));
        });

        if (options.views[options.view].slide_events) {


            var activecell = 0;
            var downbox = $(document.createElement('div')).attr('id', 'cal-day-box').html('<i class="icon-chevron-down"></i>');

            $('.cal-month-day, .cal-year-box .span3').each(function (k, v) {
                $(v).bind('mouseenter', function () {
                    if ($('.events-list', v).length == 0) return;
                    if ($(v).children('[data-cal-date]').text() == activecell) return;
                    downbox.show().appendTo(v);
                });
                $(v).bind('mouseleave', function () {
                    downbox.hide();
                });
            });


            var slider = $(document.createElement('div')).attr('id', 'cal-slide-box');
            slider.hide().click(function (event) {
                event.stopPropagation();
            });

            var event_list_template = '';
            $.ajax({
                url: 'tmpls/events-list.html',
                dataType: 'html',
                type: 'GET'
            }).done(function (html) {
                    event_list_template = _.template(html);
                });


            downbox.click(function (event) {

                event.stopPropagation();

                var $this = $(this);
                var cell = $this.parents('.cal-cell');
                var row = $this.parents('.cal-row-fluid');
                var tick_position = cell.data('cal-row');

                $this.fadeOut('fast');

                slider.html(event_list_template({events: $('.events-list a.event', cell)}))
                    .slideUp('fast', function () {
                        row.after(slider);
                        activecell = $('[data-cal-date]', cell).text();
                        $('#cal-slide-tick').addClass('tick' + tick_position).show();
                        slider.slideDown('fast', function () {
                            $('body').one('click', function () {
                                slider.slideUp('fast');
                                activecell = 0;
                            });
                        });
                    });

                $('a.event-item').mouseenter(function () {
                    $('a.event' + $(this).data('event-id')).parents('.cal-span1').addClass('day-highlight dh-' + $(this).data('event-class'));
                });
                $('a.event-item').mouseleave(function () {
                    $('div.cal-span1').removeClass('day-highlight dh-' + $(this).data('event-class'));
                });
            });
        }

        switch (options.view) {
            case 'year':

                break;
            case 'month':
                var week = $(document.createElement('div')).attr('id', 'cal-week-box');
                week.html(language.week);
                var start = options.position.start.getFullYear() + '-' + options.position.start.getMonthFormatted() + '-';
                $('.cal-month-box .cal-row-fluid').each(function (k, v) {
                    var row = $(v);
                    row.bind('mouseenter',function () {
                        var child = $('.cal-span1:first-child .cal-month-day', row);
                        var day = (child.hasClass('cal-month-first-row') ? 1 : $('[data-cal-day]', child).text());
                        day = (day < 10 ? '0' + day : day);
                        week.show().attr('data-cal-week', start + day).appendTo(child);
                    }).bind('mouseleave', function () {
                            week.hide();
                        });
                });

                week.click(function () {
                    options.day = $(this).data('cal-week');
                    $this.view('week');
                });

                $('a.event').mouseenter(function () {
                    $('a.event' + $(this).data('event-id')).parents('.cal-span1').addClass('day-highlight dh-' + $(this).data('event-class'));
                });
                $('a.event').mouseleave(function () {
                    $('div.cal-span1').removeClass('day-highlight dh-' + $(this).data('event-class'));
                });
                break;
            case 'week':

                break;
            case 'day':

                break;
        }
    }

    $.fn.calendar = function (params) {
        context = this;
        return new Calendar(params);
    }
}(jQuery));
