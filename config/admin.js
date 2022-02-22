module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2c2a10ef48c5ef327b1193c4d16523f7'),
  },
});
