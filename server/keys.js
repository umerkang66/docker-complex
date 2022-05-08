module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    pgUser: process.env.PG_USER,
    pgHost: process.env.PG_HOST,
    // Name of the db inside the postgres that will be connected to
    pgDatabase: process.env.PG_DATABASE,
    pgPassword: process.env.PG_PASSWORD,
    pgPort: process.env.PG_PORT,
};
