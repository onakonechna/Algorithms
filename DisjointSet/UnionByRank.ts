class UnionByRank {
  //space O(N)
  parents: number[] = [];
  ranks: number[] = [];

  //O(N)
  constructor(size: number) {
    for (let i = 1; i < size; i++) {
      this.parents[i] = i;
      this.ranks[i] = 1;
    }
  }

  //O(logN)
  find(i: number) {
    if (this.parents[i] === i) return i;
    return this.find(this.parents[i]);
  }

  //O(logN)
  union(i: number, j: number) {
    const iRoot = this.find(i);
    const jRoot = this.find(j);

    if (this.ranks[iRoot] > this.ranks[jRoot]) {
      this.parents[jRoot] = iRoot;
    } else if (this.ranks[iRoot] < this.ranks[jRoot]) {
      this.parents[iRoot] = jRoot;
    } else {
      this.parents[jRoot] = iRoot;
      this.ranks[iRoot] += 1;
    }
  }

  //O(logN)
  connected(i: number, j: number) {
    return this.find(i) === this.find[j]
  }
}