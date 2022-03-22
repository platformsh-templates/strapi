module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '53cbffa1148fa82eda2c3e1f1f07a81c'),
  },
});
