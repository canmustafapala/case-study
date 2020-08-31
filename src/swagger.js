module.exports = {
  swaggerDefinition: {
    info: {
      description: 'Getir Case Study',
      title: 'Getir Case Study',
      version: '1.0.0'
    },
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http', 'https']
  },
  basedir: __dirname,
  files: ['./routes/*.js']
};
