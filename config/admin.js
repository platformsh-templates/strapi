module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0474e9cc00cc81daaab53b676c290093'),
  },
});
