import { Clerk } from '@clerk/clerk-js';
import { PUBLIC_CLERK_PUB_KEY } from '$env/static/public';

export const clerk = new Clerk(PUBLIC_CLERK_PUB_KEY);
