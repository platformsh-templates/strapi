const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      data.author = ctx.state.user.id;
      entity = await strapi.services.book.create(data, { files });
    } else {
      ctx.request.body.author = ctx.state.user.id;
      entity = await strapi.services.book.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.book });
  },

  /**
   * Get a record.
   *
   * @return {Object}
   */

   async findOne(ctx) {
    const { id } = ctx.params;

    let entity;

    const [book] = await strapi.services.book.find({
      id: ctx.params.id,
      'author.id': ctx.state.user.id,
    });

    if (!book) {
      return ctx.unauthorized(`You do not have permission to view this entry.`);
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.book.findOne({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.book.findOne({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.book });
  },

  /**
   * Update a record.
   *
   * @return {Object}
   */

   async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [book] = await strapi.services.book.find({
      id: ctx.params.id,
      'author.id': ctx.state.user.id,
    });

    if (!book) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.book.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.book.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.book });
  },
};