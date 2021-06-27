import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.SENO]: IS_MAINNET ? 'XSE' : 'TXSE',
};
