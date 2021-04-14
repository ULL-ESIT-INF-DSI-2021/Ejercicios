/**
 * Interfaz común para los algoritmos de ordenación.
 */
export interface sortStrategy {
  execute(data: number[]): number[];
}

/**
 * Implementa una clase para la ordenación de arrays.
 */
export class Sort {
  constructor(private data: number[], private strategy: sortStrategy) {
  }

  /**
   * Cambia la estrategia de ordenación.
   */
  setStrategy(strategy: sortStrategy) {
    this.strategy = strategy;
  }

  /**
   * Ejecuta el algoritmo de ordenación.
   */
  logic(): number[] {
    return this.strategy.execute(this.data);
  }
}
