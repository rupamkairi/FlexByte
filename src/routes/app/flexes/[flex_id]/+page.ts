export const prerender = false;
export const ssr = false;
export const csr = true;

export function load({ params, data }) {
	// console.log('2');
	return {
		params,
		...data
	};
}
