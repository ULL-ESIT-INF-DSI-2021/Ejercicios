import 'mocha';
import {expect} from 'chai';
import {bubbleSort} from '../src/bubbleSort/bubbleSort';


describe('Prueba de la función bubbleSort', () => {
  it('Ordena correctamente un vector.', () => {
    expect(bubbleSort([2, 4, 5, 1, 7])).to.be.deep.equal([1, 2, 4, 5, 7]);
  });
});
