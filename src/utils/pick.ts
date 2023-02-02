// Same as lodash/pickBy
export function pickBy<T>(object: object & T, keys: (keyof T)[]): T {
	const newObject: T = Object.fromEntries([keys]);

	keys.forEach((key: keyof T) => {
		newObject[key] = object[key];
	});
	return newObject;
}
