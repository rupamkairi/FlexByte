import { apis } from '$/constants/apis';
import { flexTypes } from '$/store/generics/flex-types';
import axios from 'axios';

export async function init() {
	const res = await axios.get(apis.generics.flexTypes);
	if (!res.data.flex_types) return;
	flexTypes.set(res.data.flex_types);
}
