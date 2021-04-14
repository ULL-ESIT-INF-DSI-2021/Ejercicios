import 'mocha';
import {expect} from 'chai';
import {Sort} from '../src/solver';
import {BubbleSort} from '../src/BubbleSort/BubbleSort';
import {MergeSort} from '../src/MergeSort/MergerSort';

const mySolver = new Sort([2, 4, 5, 1, 7], new BubbleSort());

describe('Prueba de la función Sort', () => {
  it('Ordena correctamente un vector mediante BubbleSort.', () => {
    expect(mySolver.logic()).to.be.deep.equal([1, 2, 4, 5, 7]);
  });

  it('Ordena correctamente un vector mediante BubbleSort.', () => {
    mySolver.setStrategy(new MergeSort());
    expect(mySolver.logic()).to.be.deep.equal([1, 2, 4, 5, 7]);
  });
});
