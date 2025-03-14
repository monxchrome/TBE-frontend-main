import { baseURL } from '../configs/urls';
import { goto } from '$app/navigation';
import { authService } from './authService';

let isRefreshing = false;

async function apiService(url: string, options: RequestInit = {}, isRetry: boolean = false): Promise<Response> {
	const accessToken = authService.getAccessToken();

	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		...((options.headers as Record<string, string>) || {})
	};

	if (accessToken) {
		headers.Authorization = `Bearer ${accessToken}`;
	}

	const response = await fetch(`${baseURL}${url}`, {...options, headers});

	if (response.status === 401 && !isRetry) {
		const refreshToken = authService.getRefreshToken();

		if (refreshToken && !isRefreshing) {
			isRefreshing = true;
			try {
				await authService.refresh(refreshToken);
			} catch (e) {
				authService.deleteTokens();
				await goto('/login?session=true');
				throw new Error(`Please login again, ${e}`);
			}
			isRefreshing = false;
			return apiService(url, options, true);
		}
	}

	return response;
}

export { apiService };