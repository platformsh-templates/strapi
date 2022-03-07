module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0e33a923f1f033de889ec02ccc308053'),
  },
});
