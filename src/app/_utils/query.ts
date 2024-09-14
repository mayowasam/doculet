import axios from 'axios'
import { handler } from './localstorage';

const uploadInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASEURL,
	headers: {
		"Content-Type": "multipart/form-data",
	},

});

const baseInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASEURL,
	headers: {
		"Content-Type": "application/json",
	},

});

const widgetInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASEURL,
	headers: {
		"Content-Type": "application/json",
	},

});

widgetInstance.interceptors.request.use(
	(config) => {
		if (typeof window !== 'undefined') {
			const href = window.location.href;
			const params =  new URL(href)?.searchParams;
			const publicKey =  params.get("key");

			config.headers['public-key'] = publicKey
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);


const authInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASEURL,
	headers: {
		"Content-Type": "application/json",
	},
	validateStatus: function (status) {
		return status >= 200 && status < 300;
	},
});

authInstance.interceptors.request.use(
	(config) => {
		const companySession = handler("companySession");		
		if (companySession) {
			config.headers.Authorization = "Bearer " + companySession?.tokens?.accessToken;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export { baseInstance, authInstance, uploadInstance, widgetInstance };
