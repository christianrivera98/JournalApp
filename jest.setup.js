// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- npm add whatwg-fetch
import 'setimmediate';

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));