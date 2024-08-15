import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { DATABASE_URL } from '../config';

const client = new Client({
	user: 'avnadmin',
	password: 'AVNS_I0Vkl_x0FfisenJOh9h',
	host: 'flexbyte-rupamkairi.i.aivencloud.com',
	port: 12691,
	database: 'defaultdb',
	ssl: {
		rejectUnauthorized: true,
		ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUETa35AjWqWIdvtZsh/i0gERThPQwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNDJmNmQwZjktYjI3Ni00NDM2LTk1NGUtYzkzMWYzODdi
YzBhIFByb2plY3QgQ0EwHhcNMjQwODE1MDYyMzQwWhcNMzQwODEzMDYyMzQwWjA6
MTgwNgYDVQQDDC80MmY2ZDBmOS1iMjc2LTQ0MzYtOTU0ZS1jOTMxZjM4N2JjMGEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAMu/JsKi
sdYnhgSOHkkam9+1n5sJQ48giOxtR0l4XLJbgKyIcxtn6lfl3GY77aT1gj59123W
Qeb+K2QuUqLSew7WDuEQPR3AhO5pgFo1lD/iQkLesrQLF/WTY3OQXNcL0t+E0n51
2TwWeIcHpeMuFj4a8It1p5WnuBRvtBid6846Am9VJKSPx3Clcy1TYtUjUxVWu12C
HJTWBTbKjwTm3SYlrYmALtIoO6WiiqEm9YYK5hwrXLRPz5YkJZHQdnad9T+/giPl
ZjGlCQiBjgsrW6S6ztl/0ZyuyDmV/4bGeX120Js/NEsTqcr4iENvpSbsr7QTmUmk
2N4zL+uca/t2iXXm16b1RCU8uKW4GEItTRlPU59g3UH4uXCfCMJtQmxLfHntREgA
w6jU2iNNxHW78NSrKly3wZfjmyTo3vgvNVgfOlVvRI8mX4myh1j/C8q4gCSywkXS
+TVO2T/fXmSOSWvT5wyGiD2x0RwiNC8RtHTe3200q6h7kGd8X74LvrrECQIDAQAB
oz8wPTAdBgNVHQ4EFgQUWIAbNumnkCmuWRB+MZWmoxpJHqEwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGxwoEuYoSdQZ3/W
wZppYkF4+i5JsmrUBgiavZBW62wYoEKJyXRZuIN6MJKdjoa19mvOgloVBM9KLMIW
Vys2ugQLu55blyJ3/wBgo+SxZSvk5QeqM1E7xBz94O48kwERCnD8QdRxjaQphXbS
WfjjM/NEuLcfxu2/pSrwre6JfBRF0ENayt372O2Ghj3OvjED+GmxS1Ol68uBmahB
VZVuv0CUJVCS6+cuTZCa/+VVY72SjGvY916Od3HlMUJxugPYy0osPrLm4Au8dj4B
lYVku0IJUHlVPv7cfITkU2R0FykE5+X72Mj1ToMso+4pqRR4kbFERAmAGr3arUH7
XAAXLTzmEgfScskundmCBMMuuyn5KsoH7Jv1f6VEcA53/GF7bNl0bDEhOPosKlVL
Ja2XFPvT9s4BGVPzS0W9hr6TlD4CkyIo67zCfHkgYF0fzXHBMQRq1JMzVIS66XbR
T5LFSqiv43t55WBzncPrnRLDnEsTSLNMHeog65hFCfDKqpJwvw==
-----END CERTIFICATE-----`
	}
});
await client.connect();
const db = drizzle(client);
