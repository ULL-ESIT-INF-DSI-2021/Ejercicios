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
    return this.divide(array);
  }

  divide(items: number[]): number[] {
    const halfLength = Math.ceil(items.length / 2);
    let low = items.slice(0, halfLength);
    let high = items.slice(halfLength);
    if (halfLength > 1) {
      low = this.divide(low);
      high = this.divide(high);
    }
    return this.combine(low, high);
  }

  combine(low: number[], high: number[]): number[] {
    let indexLow = 0;
    let indexHigh = 0;
    const lengthLow = low.length;
    const lengthHigh = high.length;
    const combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
      const lowItem = low[indexLow];
      const highItem = high[indexHigh];
      if (lowItem !== undefined) {
        if (highItem === undefined) {
          combined.push(lowItem);
          indexLow++;
        } else {
          if (lowItem <= highItem) {
            combined.push(lowItem);
            indexLow++;
          } else {
            combined.push(highItem);
            indexHigh++;
          }
        }
      } else {
        if (highItem !== undefined) {
          combined.push(highItem);
          indexHigh++;
        }
      }
    }
    return combined;
  }
}
