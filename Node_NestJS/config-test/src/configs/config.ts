import common from './common';
import dev from './dev';
import local from './local';
import prod from './prod';

const phase = process.env.NODE_ENV;

let conf = {};
if (phase === 'local') {
  conf = local;
} else if (phase === 'dev') {
  conf = dev;
} else if (phase === 'prod') {
  conf = prod;
}

export default () => ({
  ...common,
  ...conf,
});
