import { z } from 'zod';

const reName = new RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u);
const rePhone = new RegExp(/^([\+][1-9]{2})?[ ]?([0-9 ]{8})$/);
const reStreet = new RegExp(/^[\p{L}'][ \p{L}\p{N}'-,]{8,}$/u);
const reZip = new RegExp(/^\d{4}$/);

export const email = z.string().trim().email('Must be a valid email address');
export const name = z.string().trim().regex(reName, 'Must be a valid name');

export const address = z
    .string()
    .trim()
    .regex(reStreet, 'Must be a valid street address');

export const zip = z.string().trim().regex(reZip, 'Must be a valid zip code');

export const phone = z.preprocess(
    (val: any) => val?.split(' ').join(''),
    z.string().trim().regex(rePhone, 'Must be a valid phone number'),
);