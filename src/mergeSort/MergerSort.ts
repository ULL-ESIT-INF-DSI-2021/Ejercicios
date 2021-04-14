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
  execute(array: number[]): number[] {
    array = array.slice();

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          const swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
      }
    }
    return array;
  }

  divide(items: number[]): number[] {
    const halfLength = Math.ceil(items.length / 2);
    let low = items.slice(0, halfLength);
    let high = items.slice(halfLength);
    if (halfLength > 1) {
      low = this.divide(low);
      high = this.divide(high);
    }
    return combine(low, high);
  }
}
