module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'bertosee_bkdb'),
        username: env('DATABASE_USERNAME', 'bertosee_root'),
        password: env('DATABASE_PASSWORD', 'jm38613861'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
