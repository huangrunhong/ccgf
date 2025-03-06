import aos from 'aos';
import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

aos.init({ duration: 1250 });
