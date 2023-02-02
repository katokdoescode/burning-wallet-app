import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (({ cookies }) => {
	const isAuthed = !!cookies.get('accessToken');
	if (!isAuthed) throw redirect(301, 'login');
}) satisfies LayoutServerLoad;
