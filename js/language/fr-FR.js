var language = {
  error_noview: 'Calendrier: Vue {0} non trouvée',
	error_dateformat: 'Calendrier: Format de date {0} incorrect. Doit être "now" ou "yyyy-mm-dd"',
	error_loadurl: 'Calendrier: L'URL de récupération des événements n'est pas définie',
	error_where: 'Calendrier: Direction de navigation {0} incorrecte. Peut-être uniquement "next", "prev" ou "today"',

	title_year: 'Année {0}',
	title_month: '{0} année {1}',
	title_week: '{0} semaine de l'année {1}',
	title_day: '{0} {1} {2} année {3}',

	week:'Semaine',

	m0: 'Janvier',
	m1: 'Février',
	m2: 'Mars',
	m3: 'Avril',
	m4: 'Mai',
	m5: 'Juin',
	m6: 'Juillet',
	m7: 'Août',
	m8: 'Septembre',
	m9: 'Octobre',
	m10: 'Novembre',
	m11: 'Décembre',

    ms0: 'Jan',
    ms1: 'Fev',
    ms2: 'Mar',
    ms3: 'Avr',
    ms4: 'Mai',
    ms5: 'Jun',
    ms6: 'Jul',
    ms7: 'Aou',
    ms8: 'Sep',
    ms9: 'Oct',
    ms10: 'Nov',
    ms11: 'Dec',

	d0: 'Dimanche',
	d1: 'Lundi',
	d2: 'Mardi',
	d3: 'Mercredi',
	d4: 'Jeudi',
	d5: 'Vendredi',
	d6: 'Samedi',

	easter: 'Pâques',
	easterMonday: 'Lundi de Pâques'
};

if(!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}
