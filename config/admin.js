module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2bd00e94268295c05f555d825afd8f60'),
  },
});
