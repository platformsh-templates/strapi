module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4c0c83decef7011a1b97655ddce792e'),
  },
});
