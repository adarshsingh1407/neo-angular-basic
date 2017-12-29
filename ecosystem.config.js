module.exports = {
  /**
   * @author Adarsh Singh
   * @description PM2 Application Configuration
   */
  apps : [
    // NAB application
    {
      name      : 'NAB',
      script    : 'index.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        NODE_ENV: 'staging'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};
