import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (({ cookies }) => {
	cookies.delete('accessToken');
	throw redirect(301, '/');
}) satisfies PageServerLoad;
