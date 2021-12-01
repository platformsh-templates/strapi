module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cd0e009668267292bbff5323e5af5468'),
  },
});
