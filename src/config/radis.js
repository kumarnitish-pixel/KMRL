const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-18253.c325.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 18253
    }
});

module.exports = redisClient;