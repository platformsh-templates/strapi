module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8c1fff09fff4149b4edf42a7d43f9ae8'),
  },
});
