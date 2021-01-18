import knex from 'knex';
import bookshelf from 'bookshelf';
import knexfile from '../knexfile';

const env = process.env.ENVIRONMENT || 'development';

const configOptions = knexfile[env];

const shelf = bookshelf(knex(configOptions));

export default shelf;
