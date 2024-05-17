import pg from 'pg';
const Pool = pg.Pool;
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})


export default pool;