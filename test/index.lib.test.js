const { UTCTimestamp, UTC2Target, Target2UTC } = require('../lib/index');
const assert = require('assert');

const bj = '2019-01-01 08:00:00';
const ist = '2019-01-01 05:30:00';
const utc = '2019-01-01 00:00:00';
const utc_unix = 1546300800000;

describe('#@jsany/date(lib)', () => {
  describe('#UTCTimestamp', () => {
    it('UTCTimestamp() should return true', () => {
      return assert.strictEqual(UTCTimestamp(utc, -480), utc_unix);
    });
  });
  describe('#UTC2Target', () => {
    it('UTC2Target() should return true', () => {
      return assert.strictEqual(UTC2Target(utc, -480), bj);
    });
    it('UTC2Target() should return true', () => {
      return assert.strictEqual(UTC2Target(utc, -330), ist);
    });
  });
  describe('#Target2UTC', () => {
    it('Target2UTC() should return true', () => {
      return assert.strictEqual(Target2UTC(bj, -480), utc);
    });
    it('Target2UTC() should return true', () => {
      return assert.strictEqual(Target2UTC(ist, -330), utc);
    });
  });
});
