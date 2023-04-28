import redis from 'redis';

const portRedis = process.env.PORT_REDIS || '6379';

// Creates a redis client on the port 6379 
const redisClient = redis.createClient();

// Connect with the redis-server (imp otherwise breaks unexpectedly)
redisClient.connect();

export default redisClient;