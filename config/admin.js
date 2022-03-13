module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd1020ab970e8cf969919a31ff8bf469'),
  },
});
