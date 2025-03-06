import { nextSunday as nextSundayFn } from 'date-fns/nextSunday';

const nextSunday = (sunday?: string) => (sunday ? new Date(sunday) : nextSundayFn(new Date()));

export default nextSunday;
