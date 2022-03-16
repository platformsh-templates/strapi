module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd91bedff2e432213d3dfe3bccaef71ed'),
  },
});
