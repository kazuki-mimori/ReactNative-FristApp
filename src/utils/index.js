import { format } from 'date-fns';

export function dateToString(date) {
	if (!date) {
		return '';
	}
	return format(date, 'yyyy年m月dd日 hh時mm分');
}
