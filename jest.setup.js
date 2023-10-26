// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- npm add whatwg-fetch
import 'setimmediate';
import { config } from 'dotenv/lib/main';

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));

config({
    path: '.env.test.local'
})