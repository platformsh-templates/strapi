module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3680b93b97d9d7dd4ad26d44241f3380'),
  },
});
