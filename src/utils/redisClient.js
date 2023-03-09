import { createClient } from 'redis';
import { REDIST_HOST, REDIS_PORT } from '../../config.js';

const redisCliet = createClient({
  socket: {
    host: REDIST_HOST,
    port: REDIS_PORT,
  },
});

try {
  await redisCliet.connect();
} catch (err) {
  console.error(err);
  // eslint-disable-next-line quotes
  console.error("can't connect to redis");
  process.exit(1);
}

// Server not shutting down properly if i do this
// const terminatingEvents = [
//   'SIGINT',
//   'SIGTERM',
//   'SIGQUIT',
//   'SIGHUP',
//   'exit',
// ];
// for (const exitingEvent of terminatingEvents) {
//   process.on(exitingEvent, async () => {
//     console.log('disconnecting to redis');
//     redisCliet.disconnect();
//   });
// }

export default redisCliet;
