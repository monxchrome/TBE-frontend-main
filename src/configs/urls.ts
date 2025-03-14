const baseURL = `${import.meta.env.VITE_BASE_URL}:${import.meta.env.VITE_BASE_PORT}`;

export const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_SECRET;
export const REFRESH_TOKEN = import.meta.env.VITE_REFRESH_SECRET;

const auth = '/auth';
const friendship = '/friendship';
const party = '/party';
const user = '/user';

const urls = {
	auth: {
		register: `${auth}/register`,
		login: `${auth}/login`,
		refresh: `${auth}/refresh`,
		changePassword: `${auth}/password/change`,
		forgotPassword: `${auth}/password/forgot`,
		resetPassword: (token: string) => `${auth}/password/forgot/${token}`,
		changeEmail: `${auth}/email/change`
	},
	friendship: {
		add: `${friendship}/add`,
		respond: `${friendship}/respond`,
		list: `${friendship}/list`
	},
	party: {
		getById: (id: string) => `${party}/${id}`
	},
	user: {
		getById: (userID: string) => `${user}/${userID}`,
		update: (userID: string) => `${user}/${userID}`,
		delete: (userID: string) => `${user}/${userID}`
	}
} as const;

export { baseURL, urls };
