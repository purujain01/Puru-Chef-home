// This is a full set of options
// It is not neccesary to complete every option
const options = {
  info: {
    version: '1.0.0',
    title: 'Chef At Home',
    license: {
      name: 'MIT',
      url: 'http://example.com',
    },
    description: 'API desctiption',
    
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
     BearerAuth: {
      type: 'http',
      scheme: 'bearer',
    },
  },
  filesPattern:  ['../routes/*.js'],
  baseDir: __dirname,
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v3/api-docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
};

module.exports=options