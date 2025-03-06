import { Day } from 'date-fns';
import { getDay as getDayFn } from 'date-fns/getDay';

const getDay = (date: string): Day => getDayFn(date) as Day;

export default getDay;
