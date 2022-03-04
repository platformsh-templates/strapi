module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e790925e6353b9c7bf40571f0076f9ce'),
  },
});
