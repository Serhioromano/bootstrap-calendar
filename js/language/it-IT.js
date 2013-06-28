var language = {
	error_noview: 'Calendario: vista {0} non trovata',
	error_dateformat: 'Calendario: formato data {0} non valido. Dovrebbe essere "now" o "yyyy-mm-dd"',
	error_loadurl: 'Calendario: URL di caricamento degli eventi non impostato',
	error_where: 'Calendario: direzione di spostamento {0} non valida. I valori validi sono "next" o "prev" o "today"',

	title_year: 'Anno {0}',
	title_month: '{0} {1}',
	title_week: 'Settimana {0} del {1}',
	title_day: '{0} {1} {2} {3}',

	week:'Settimana',

	m0: 'Gennaio',
	m1: 'Febbraio',
	m2: 'Marzo',
	m3: 'Aprile',
	m4: 'Maggio',
	m5: 'Giugno',
	m6: 'Luglio',
	m7: 'Agosto',
	m8: 'Settembre',
	m9: 'Ottobre',
	m10: 'Novembre',
	m11: 'Dicembre',

	ms0: 'Gen',
	ms1: 'Feb',
	ms2: 'Mar',
	ms3: 'Apr',
	ms4: 'Mag',
	ms5: 'Giu',
	ms6: 'Lug',
	ms7: 'Ago',
	ms8: 'Set',
	ms9: 'Ott',
	ms10: 'Nov',
	ms11: 'Dic',

	d0: 'Domenica',
	d1: 'Lunedì',
	d2: 'Martedì',
	d3: 'Mercoledì',
	d4: 'Giovedì',
	d5: 'Venerdì',
	d6: 'Sabato',

	easter: 'Pasqua',
	easterMonday: 'Lunedì dell’Angelo'
};

if(!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}