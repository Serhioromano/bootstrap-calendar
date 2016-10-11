if(!window.calendar_languages) {
	window.calendar_languages = {};
}
window.calendar_languages['es-CL'] = {
	error_noview:     'Calendario: Vista {0} no encontrada',
	error_dateformat: 'Calendario: Formato de fecha inválido {0}. Debe ser "now" o "yyyy-mm-dd"',
	error_loadurl:    'Calendario: URL de carga de eventos no configurada',
	error_where:      'Calendario: Dirección de navegación incorrecta {0}. Los valores correctos son "next" o "prev" o "today"',
	error_timedevide: 'Calendario: parámetro para el separador de hora debe dividir 60 por un entero. Por ejemplo 10, 15, 30',

	no_events_in_day: 'No hay eventos hoy',

	title_year:  'Año {0}',
	title_month: '{0} {1}',
	title_week:  'Semana {0} del {1}',
	title_day:   '{0} {1} {2} {3}',

	week:        'Semana {0}',
	all_day:     'Todo el día',
	time:        'Tiempo',
	events:      'Eventos',
	before_time: 'Horas previas',
	after_time:  'Horas posteriores',

	m0:  'Enero',
	m1:  'Febrero',
	m2:  'Marzo',
	m3:  'Abril',
	m4:  'Mayo',
	m5:  'Junio',
	m6:  'Julio',
	m7:  'Agosto',
	m8:  'Septiembre',
	m9:  'Octubre',
	m10: 'Noviembre',
	m11: 'Diciembre',

	ms0:  'Ene',
	ms1:  'Feb',
	ms2:  'Mar',
	ms3:  'Abr',
	ms4:  'May',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Ago',
	ms8:  'Sep',
	ms9:  'Oct',
	ms10: 'Nov',
	ms11: 'Dic',

	d0: 'Domingo',
	d1: 'Lunes',
	d2: 'Martes',
	d3: 'Miércoles',
	d4: 'Jueves',
	d5: 'Viernes',
	d6: 'Sábado',

	easter:       'Pascua',
	easterMonday: 'Lunes de Pascua',

	first_day: 1,
	week_numbers_iso_8601: true,

	//Holidays from http://www.timeanddate.com/holidays/chile
	holidays: {
		'01-01':    "Año Nuevo",
		'easter-2': "Viernes Santo",
		'easter-1': "Sábado Santo",
		'easter':   "Pascua",
		'01-05':    "Día del Trabajador",
		'21-05':    "Día de las Glorias Navales",
		'19-06-2016':    "Elecciones Primarias Municipales",
		//Saint Peter and Saint Paul varies according to the year
		'27-06-2016':    "San Pedro y San Pablo",
		'26-06-2017':    "San Pedro y San Pablo",
		'02-07-2018':    "San Pedro y San Pablo",
		'16-07':    "Día de la Virgen del Carmen",
		'easter+39':    "Asunción de la Virgen",
		'18-09':    "Independencia Nacional",
		'19-09':    "Día de las Glorias del Ejército",
		//Columbus day varies depending on the year 
		'10-10-2016':    "Encuentro de Dos Mundos",
		'09-10-2017':    "Encuentro de Dos Mundos",
		'15-10-2018':    "Encuentro de Dos Mundos",
		//Reformation day varies depending on the year 
		'31-10':    "Día de las Iglesias Evangélicas y Protestantes",
		'27-10-2017':    "Día de las Iglesias Evangélicas y Protestantes",	
		'02-10-2018':    "Día de las Iglesias Evangélicas y Protestantes",
		'01-11':    "Día de todos los Santos",
		'08-12':    "Inmaculada Concepción",
		'25-12':    "Navidad"
	}
};
