module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ed8d37e903b5f45cd44138dead05456'),
  },
});
