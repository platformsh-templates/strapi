module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '259a800465d5c5fee02fd54c939f590c'),
  },
});
