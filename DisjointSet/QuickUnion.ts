class QuickUnion {
  //space O(N)
  parents: number[] = [];

  //O(N)
  constructor(size: number) {
    for (let i = 1; i < size; i++) {
      this.parents[i] = i;
    }
  }

  //O(N)
  find(i: number) {
    if (this.parents[i] === i) return i;
    return this.find(this.parents[i]);
  }

  //worse case O(N)
  union(i: number, j: number) {
    const iRoot = this.find(i);
    const jRoot = this.find(j);

    this.parents[jRoot] = iRoot;
  }

  //O(N)
  connected(i: number, j: number) {
    return this.find(i) === this.find[j]
  }
}