// If you want to suggest a new language you can use this file as a template.
// To reduce the file size you should remove the comment lines (the ones that start with // )
if(!window.calendar_languages) {
    window.calendar_languages = {};
}
// Here you define the language and Country code. Replace en-US with your own.
// First letters: the language code (lower case). See http://www.loc.gov/standards/iso639-2/php/code_list.php
// Last letters: the Country code (upper case). See http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm
window.calendar_languages['lt-LT'] = {
    error_noview: 'Kalendorius: Vaizdas {0} nerastas',
    error_dateformat: 'Kalendorius: Blogas datos formatas {0}. Turėtų būti "now" arba "yyyy-mm-dd"',
    error_loadurl: 'Kalendorius: Nenustatytas įvykio URL',
    error_where: 'Kalendorius: Bloga perėjimo kryptis {0}. Gali būti "sekantis" or "kitas" arba "šiandien"',
    error_timedevide: 'Kalendorius: Laiko išskirstymo parametras turėtu dalintis tvarkingai iš 60. Kažkas panašaus į 10, 15 arba 30.',

    no_events_in_day: 'Šią dieną nenumatyti jokie įvykiai.',

    // {0} will be replaced with the year (example: 2013)
    title_year: '{0}',
    // {0} will be replaced with the month name (example: September)
    // {1} will be replaced with the year (example: 2013)
    title_month: '{0} {1}',
    // {0} will be replaced with the week number (example: 37)
    // {1} will be replaced with the year (example: 2013)
    title_week: '{0} savaitė, {1}',
    // {0} will be replaced with the weekday name (example: Thursday)
    // {1} will be replaced with the day of the month (example: 12)
    // {2} will be replaced with the month name (example: September)
    // {3} will be replaced with the year (example: 2013)
    title_day: '{0} {1} {2}, {3}',

    week:'{0} Savaitė',
    all_day:     'Visa diena',
    time:        'Laikas',
    events:      'Įvykiai',
    before_time: 'Baigiasi prieš šiandieną',
    after_time:  'Prasideda po šiandienos',

    m0: 'Sausis',
    m1: 'Vasaris',
    m2: 'Kovas',
    m3: 'Balandis',
    m4: 'Gegužė',
    m5: 'Birželis',
    m6: 'Liepa',
    m7: 'Rugpjūtis',
    m8: 'Rugsėjis',
    m9: 'Spalis',
    m10: 'Lapkritis',
    m11: 'Gruodis',

    ms0: 'Sau',
    ms1: 'Vas',
    ms2: 'Kov',
    ms3: 'Bal',
    ms4: 'Geg',
    ms5: 'Bir',
    ms6: 'Lie',
    ms7: 'Rugp',
    ms8: 'Rugs',
    ms9: 'Spa',
    ms10: 'Lap',
    ms11: 'Gru',

    d0: 'Sekmadienis',
    d1: 'Pirmadienis',
    d2: 'Antradienis',
    d3: 'Trečiadienis',
    d4: 'Ketvirtadienis',
    d5: 'Penktadienis',
    d6: 'Šeštadienis',

    // Which is the first day of the week (2 for sunday, 1 for monday)
    first_day: 1,
    // Week numbering according to ISO 8601 (if false, week 1 starts with January 1st)
    week_numbers_iso_8601: false,

    // The list of the holidays.
    // Each holiday has a date definition and a name (in your language)
    // For instance:
    // holidays: {
    //  'date': 'name',
    //  'date': 'name',
    //  ...
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
        '01-01':        'Nauji metai',
        '02-16':        'Lietuvos valstybės atkūrimo diena',
        '03-11':        'Lietuvos nepriklausomybės atkūrimo diena',
        '04-20':        'Kanapės legalizavimo diena (nuo 2016 metų)',
        '05-01':        'Tarptautinė darbo diena',
        '05+1*0':       'Motinos diena',
        '06+1*0':       'Tėvo diena',
        '06-24':        'Rasos (Joninės)',
        '07-06':        'Valstybės (Lietuvos karaliaus Mindaugo karūnavimo) diena',
        '08-15':        'Žolinė; Švč. Mergelės Marijos ėmimo į dangų diena',
        '11-01':        'Visų šventųjų diena',
        '12-24':        'Kūčios',
        '12-25>12-26':  'Kalėdos',
    }
};
