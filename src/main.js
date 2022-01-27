import {launch} from './server';

const {
    PORT = 8080,
} = process.env;

launch({
    port: PORT,
})