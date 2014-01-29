// If you want to suggest a new language you can use this file as a template.
// To reduce the file size you should remove the comment lines (the ones that start with // )
if(!window.calendar_languages) {
        window.calendar_languages = {};
}
// Here you define the language and Country code. Replace en-US with your own.
// First letters: the language code (lower case). See http://www.loc.gov/standards/iso639-2/php/code_list.php
// Last letters: the Country code (upper case). See http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm
window.calendar_languages['zh-CN'] = {
        error_noview: 'Calendar: 没有发现视图 {0} ',
        error_dateformat: 'Calendar: 日期格式不正确： {0}. 应当为 "now" 或者 "yyyy-mm-dd"',
        error_loadurl: 'Calendar: 没有设置事件的 URL',
        error_where: 'Calendar: Wrong navigation direction {0}. Can be only "next" or "prev" or "today"',

        no_events_in_day: '今天没有事件。',

        // {0} will be replaced with the year (example: 2013)
        title_year: '{0}',
        // {0} will be replaced with the month name (example: September)
        // {1} will be replaced with the year (example: 2013)
        title_month: '{1} 年 {0}',
        // {0} will be replaced with the week number (example: 37)
        // {1} will be replaced with the year (example: 2013)
        title_week: '{1} 年 第 {0} 周 ',
        // {0} will be replaced with the weekday name (example: Thursday)
        // {1} will be replaced with the day of the month (example: 12)
        // {2} will be replaced with the month name (example: September)
        // {3} will be replaced with the year (example: 2013)
        title_day: '{3} 年 {2} {1} 日， {0} ',

        week:'第{0}周',

        m0: '1 月',
        m1: '2 月',
        m2: '3 月',
        m3: '4 月',
        m4: '5 月',
        m5: '6 月',
        m6: '7 月',
        m7: '8 月',
        m8: '9 月',
        m9: '10 月',
        m10: '11 月',
        m11: '12 月',

        ms0: '1 月',
        ms1: '2 月',
        ms2: '3 月',
        ms3: '4 月',
        ms4: '5 月',
        ms5: '6 月',
        ms6: '7 月',
        ms7: '8 月',
        ms8: '9 月',
        ms9: '10 月',
        ms10: '11 月',
        ms11: '12 月',

        d0: '周日',
        d1: '周一',
        d2: '周二',
        d3: '周三',
        d4: '周四',
        d5: '周五',
        d6: '周六',

        // Which is the first day of the week (2 for sunday, 1 for monday)
        first_day: 2,

        // The list of the holidays.
        // Each holiday has a date definition and a name (in your language)
        // For instance:
        // holidays: {
        //      'date': 'name',
        //      'date': 'name',
        //      ...
        //   'date': 'name' //No ending comma for the last holiday
        // }
        // The format of the date may be one of the following:
        // # For a holiday recurring every year in the same day: 'dd-mm' (dd is the day of the month, mm is the month). For example: '25-12'.
        // # For a holiday that exists only in one specific year: 'dd-mm-yyyy' (dd is the day of the month, mm is the month, yyyy is the year). For example: '31-01-2013'
        // # For Easter: use simply 'easter'
        // # For holidays that are based on the Easter date: 'easter+offset in days'.
        //   Some examples:
        //   - 'easter-2' is Good Friday (2 days before Easter)
        //   - 'easter+1' is Easter Monday (1 day after Easter)
        //   - 'easter+39' is the Ascension Day
        //   - 'easter+49' is Pentecost
        // # For holidays that are on a specific weekday after the beginning of a month: 'mm+n*w', where 'mm' is the month, 'n' is the ordinal position, 'w' is the weekday being 0: Sunday, 1: Monday, ..., 6: Saturnday
        //   For example:
        //   - Second (2) Monday (1) in October (10): '10+2*1'
        // # For holidays that are on a specific weekday before the ending of a month: 'mm-n*w', where 'mm' is the month, 'n' is the ordinal position, 'w' is the weekday being 0: Sunday, 1: Monday, ..., 6: Saturnday
        //   For example:
        //   - Last (1) Saturnday (6) in Match (03): '03-1*6'
        //   - Last (1) Monday (1) in May (05): '05-1*1'
        // # You can also specify a holiday that lasts more than one day. To do that use the format 'start>end' where 'start' and 'end' are specified as above.
        //   For example:
        //   - From 1 January to 6 January: '01-01>06-01'
        //   - Easter and the day after Easter: 'easter>easter+1'
        //   Limitations: currently the multi-day holydays can't cross an year. So, for example, you can't specify a range as '30-12>01-01'; as a workaround you can specify two distinct holidays (for instance '30-12>31-12' and '01-01').
        holidays: {
          '01-01':'元旦',
          '08-03':'妇女节',
          '01-05':'国际劳动节',
          '04-05':'青年节',
          '01-06':'儿童节',
          '01-10':'国庆节'
        }
};
