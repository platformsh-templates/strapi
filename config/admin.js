module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7356331ec86da39a18ef9db441a05801'),
  },
});
