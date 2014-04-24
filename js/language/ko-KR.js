if(!window.calendar_languages) {
	window.calendar_languages = {};
}
window.calendar_languages['ko-KR'] = {
	error_noview: '캘린더: {0} 볼 수 없습니다',
	error_dateformat: '캘린더: 잘못된 날짜 형식 {0}. "now" 또는 "yyyy-mm-dd" 형식이어야 합니다',
	error_loadurl: '캘린더: 이벤트 URL이 설정되지 않았습니다',
	error_where: '캘린더: 잘못된 탐색 방향 {0}. 오직 "next" 또는 "prev" 또는 "today"만 가능합니다',
	error_timedevide: '캘린더: 시간 분할 매개변수는 소수 없이 60을 분할합니다. 10, 15, 30과 같이 합니다',

	no_events_in_day: '이 날에 이벤트가 없습니다.',

	title_year: '{0}년',
	title_month: '{1}년 {0}',
	title_week: '{1}년 {0}째주',
	// {0} will be replaced with the weekday name (example: Thursday)
	// {1} will be replaced with the day of the month (example: 12)
	// {2} will be replaced with the month name (example: September)
	// {3} will be replaced with the year (example: 2013)
	title_day: '{3}년 {2} {1}일 {0}',

	week:'주',
	all_day:     '하루종일',
	time:        '시간',
	events:      '이벤트',
	before_time: '타임라인 전에 끝남',
	after_time:  '타임라인 전에 시작함',

    m0: '1월',
	m1: '2월',
	m2: '3월',
	m3: '4월',
	m4: '5월',
	m5: '6월',
	m6: '7월',
	m7: '8월',
	m8: '9월',
	m9: '10월',
	m10: '11월',
	m11: '12월',

	ms0: '1월',
	ms1: '2월',
	ms2: '3월',
	ms3: '4월',
	ms4: '5월',
	ms5: '6월',
	ms6: '7월',
	ms7: '8월',
	ms8: '9월',
	ms9: '10월',
	ms10: '11월',
	ms11: '12월',

	d0: '일요일',
	d1: '월요일',
	d2: '화요일',
	d3: '수요일',
	d4: '목요일',
	d5: '금요일',
	d6: '토요일',

	first_day: 2,

	holidays: {
	 	'01-01': '신정',
	 	'01-03': '삼일절',
	 	'05-05': '어린이날',
	 	'06-06': '현충일',
	 	'15-08': '광복절',
	 	'03-10': '개천절',
	 	'25-12': '크리스마스'
	 }

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
};
