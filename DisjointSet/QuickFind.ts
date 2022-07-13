class QuickFind {
  //space O(N)
  roots: number[] = [];

  //O(N)
  constructor(size: number) {
    for (let i = 1; i < size; i++) {
      this.roots[i] = i;
    }
  }

  //O(1)
  find(i: number) {
    return this.roots[i];
  }

  //O(N)
  union(i: number, j: number) {
    const iRoot = this.find(i);
    const jRoot = this.find(j);

    if (iRoot === jRoot) return;

    for (let r = 1; r < this.roots.length; r++) {
      if (this.roots[r] === jRoot) {
        this.roots[r] = iRoot;
      }
    }
  }

  //O(1)
  connected(i: number, j: number) {
    return this.find(i) === this.find[j]
  }
}