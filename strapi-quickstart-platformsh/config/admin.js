module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a43e839cae14cea0791fe87a7948d28'),
  },
});
