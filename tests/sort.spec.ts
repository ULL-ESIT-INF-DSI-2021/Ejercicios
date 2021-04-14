import 'mocha';
import {expect} from 'chai';
import {Sort} from '../src/solver';
import {BubbleSort} from '../src/BubbleSort/BubbleSort';

const mySolver = new Sort([2, 4, 5, 1, 7], new BubbleSort());

describe('Prueba de la función bubbleSort', () => {
  it('Ordena correctamente un vector.', () => {
    expect(mySolver.logic()).to.be.deep.equal([1, 2, 4, 5, 7]);
  });
});
