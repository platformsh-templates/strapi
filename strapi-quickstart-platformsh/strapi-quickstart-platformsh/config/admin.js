module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b8d0c728ba410f844a78eed15a1bf17'),
  },
});
