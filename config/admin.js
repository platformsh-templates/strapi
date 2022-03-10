module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2447833906120e7f6e649b3933039ccf'),
  },
});
