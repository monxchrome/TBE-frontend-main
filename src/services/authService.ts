import { apiService } from './apiService';
import { ACCESS_TOKEN, REFRESH_TOKEN, urls } from '../configs/urls';

export const authService = {
	login: async (data: { email: string; password: string }) => {
		const response = await apiService(urls.auth.login, {
			method: 'POST',
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error('Login Error');
		}

		const result = await response.json();
		authService.setTokens(result);
		return result;
	},

	refresh: async (refresh: string) => {
		const response = await apiService(urls.auth.refresh, {
			method: 'POST',
			body: JSON.stringify({ refresh }),
		});

		if (!response.ok) {
			throw new Error('Refresh token error');
		}

		const result = await response.json();
		authService.setTokens(result);
		return result;
	},

	setTokens: ({ access, refresh }: { access: string; refresh: string }) => {
		localStorage.setItem(ACCESS_TOKEN, access);
		localStorage.setItem(REFRESH_TOKEN, refresh);
	},

	getAccessToken: (): string | null => localStorage.getItem(ACCESS_TOKEN),
	getRefreshToken: (): string | null => localStorage.getItem(REFRESH_TOKEN),

	deleteTokens: () => {
		localStorage.removeItem(ACCESS_TOKEN);
		localStorage.removeItem(REFRESH_TOKEN);
	},

	isAuth: (): boolean => !!localStorage.getItem(ACCESS_TOKEN),
}