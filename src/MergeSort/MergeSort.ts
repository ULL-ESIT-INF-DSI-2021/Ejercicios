import {sortStrategy} from '../solver';

/**
 * Sorts an array of numbers.
 * @param array Unordered array to be sorted.
 * @return TThe array sorted.
 *
 * Usage:
 * ```typescript
 * sort([2, 4, 5, 1, 7]) = [1, 2, 4, 5, 7]
 * ```
 */
export class MergeSort implements sortStrategy {
  /**
   * Executes the algorythm.
   * @param array Arrsy to be sorted.
   */
  execute(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }
    const mid = Math.floor(array.length /2);
    return this.merge(
        this.execute(array.slice(0, mid)),
        this.execute(array.slice(mid)),
    );
  }

  /**
   * Merges the sub algorithm.
   * @param items Array to be sorted.
   */
  merge(left: number[], right: number[]): number[] {
    const mergeArr = [];
    let i = 0; let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        mergeArr.push(left[i++]);
      } else {
        mergeArr.push(right[j++]);
      }
    }
    return mergeArr.concat(left.slice(i)).concat(right.slice(j));
  }
}
