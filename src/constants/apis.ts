export const api = '/api';

export const apis = {
	auth: {
		login: `${api}/auth/login`
	},

	app: {
		company: `${api}/app/company`,

		flexes: `${api}/app/flexes`,
		createFlex: `${api}/app/flexes/create`,
		editFlex: `${api}/app/flexes/edit`
	},

	generics: {
		flexTypes: `${api}/flex-types`
	}
};
