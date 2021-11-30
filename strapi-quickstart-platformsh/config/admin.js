module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '73d76ac6e2767f26c08ff9c0b90ac428'),
  },
});
