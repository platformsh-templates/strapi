module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee31fccbab179547a9763ab07f2ec97b'),
  },
});
