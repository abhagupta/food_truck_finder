var shifu = require('@walmart/shifu');
shifu.id('example');

var corsHeaders = {
  origin: ['*'],
  headers: ["Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"],
  credentials: true,
}

shifu.route({
  id: 'message',
  label: 'Hello message',
  path: '/message',

  variantLabel: 'hello world',
  handler: function (req, reply) {
    //shifu.util.respondWithFile(this, reply, {code: 202});
    reply("Hello world");
  }
})


shifu.route({
  id: 'latLong',
  label: 'LatLong',
   path: '/location_address/94010',
   config: {
          cors: corsHeaders
        },

  variantLabel: 'default'
}).respondWithFile()

  .variant({
    id: 'discount',
    label: 'Get Discount Collection',
    handler: function (req, reply) {
      reply({message: 'hello pre-order'});
    }
  }).respondWithFile();
