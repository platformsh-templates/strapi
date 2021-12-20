module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ada7b63bd3e669930145d3a323049ddd'),
  },
});
