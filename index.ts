import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { BooksDatabase } from './db';

new Elysia()
    .use(html())
    .decorate('db', new BooksDatabase())
    .listen(3000);
    