var shifu = require('@walmart/shifu');
shifu.id('example');

var corsHeaders = {
    origin: ['*'],
    headers: ["Access-Control-Allow-Headers", "Access-Control-Request-Method", "Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept"],
    credentials: true
}

shifu.route({
    id: 'message',
    label: 'Hello message',
    path: '/message',
    config: {
        cors: corsHeaders
    },

    variantLabel: 'hello world',
    handler: function (req, reply) {
        //shifu.util.respondWithFile(this, reply, {code: 202});
        reply("Hello world");
    }
});

shifu.route({
    id: 'welcome_message',
    label: 'welcome message',
    path: '/welcome_message',
    config: {
        cors: corsHeaders
    },

    variantLabel: 'default',
    handler: function (req, reply) {
        shifu.util.respondWithFile(this, reply);
        //reply("Hello world");
    }
});

shifu.route({
    id: 'location_address',
    label: 'location_address',
    path: '/location_address/94010',
    config: {
        cors: corsHeaders
    },
    variantLabel: 'default',
    handler: function (req, reply) {
        shifu.util.respondWithFile(this, reply, {code: 202});
        //reply("Hello world");
    }
});

