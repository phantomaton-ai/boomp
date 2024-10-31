import { expect } from 'chai';
import sinon from 'sinon';
import { boomp } from './boomp.js';

describe('boomp', () => {
  let readFileSync, writeFileSync, execSync;

  beforeEach(() => {
    readFileSync = sinon.stub(fs, 'readFileSync').returns(JSON.stringify({version: '1.2.3'}));
    writeFileSync = sinon.stub(fs, 'writeFileSync');
    execSync = sinon.stub(require('child_process'), 'execSync');
  });

  afterEach(() => {
    readFileSync.restore();
    writeFileSync.restore();
    execSync.restore();
  });

  it('should bump the patch version by default', () => {
    const newVersion = boomp();
    expect(newVersion).to.equal('1.2.4');
    expect(writeFileSync.calledWith(sinon.match(/package\.json/), sinon.match('1.2.4'))).to.be.true;
    expect(execSync.callCount).to.equal(5);
  });

  it('should bump the minor version', () => {
    const newVersion = boomp({minor: true});
    expect(newVersion).to.equal('1.3.0');
    expect(writeFileSync.calledWith(sinon.match(/package\.json/), sinon.match('1.3.0'))).to.be.true;
    expect(execSync.callCount).to.equal(5);
  });

  it('should bump the major version', () => {
    const newVersion = boomp({major: true});
    expect(newVersion).to.equal('2.0.0');
    expect(writeFileSync.calledWith(sinon.match(/package\.json/), sinon.match('2.0.0'))).to.be.true;
    expect(execSync.callCount).to.equal(5);
  });
});