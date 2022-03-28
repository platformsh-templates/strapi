module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '87353ce0e4b3be37464adfa3f5ad82ae'),
  },
});
