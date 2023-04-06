import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	tlsAuth: [
		{
			domains: ['lab2'],
			cert: open('/home/scott/conf/certs/client.crt'),
			key: open('/home/scott/conf/certs/client.key'),
		},
	],
};

export default function () {
	http.get('https://lab2:10444');
}

