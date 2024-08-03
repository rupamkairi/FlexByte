import { Clerk } from '@clerk/clerk-js';
import { clerk as clerkConfig } from '../config';

export const clerk = new Clerk(clerkConfig.pubKey);
clerk.load();
