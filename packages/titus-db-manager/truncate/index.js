'use strict'

module.exports = async function truncate(pg, { schema, logger }) {
  await pg.query(`
    TRUNCATE TABLE
      ${schema}.some_table
    RESTART IDENTITY;
  `)
  logger.info('Database truncated')
  return true
}
