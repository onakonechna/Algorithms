class QuickUnion_PathCompress {
  //space O(N)
  parentOrRoots: number[] = [];

  //O(N)
  constructor(size: number) {
    for (let i = 1; i < size; i++) {
      this.parentOrRoots[i] = i;
    }
  }

  //O(1) best case, O(N) worst case, O(logN) on average
  find(i: number) {
    if (this.parentOrRoots[i] === i) return i;

    const root = this.find(this.parentOrRoots[i]);
    this.parentOrRoots[i] = root; //Path Compression optimization, change parent to root on way back
    // thus next find call on this node will be O(1)
    return root;
  }

  //O(1) best case, O(N) worst case, O(logN) on average
  union(i: number, j: number) {
    const iRoot = this.find(i);
    const jRoot = this.find(j);

    this.parentOrRoots[jRoot] = iRoot;
  }

  //O(1) best case, O(N) worst case, O(logN) on average
  connected(i: number, j: number) {
    return this.find(i) === this.find[j]
  }
}