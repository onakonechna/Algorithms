class UnionByRank_PathCompress {
  //space O(N)
  parents: number[] = [];
  ranks: number[] = [];

  //O(α(N)) on average
  //α refers to the Inverse Ackermann function. 
  //In practice, we assume it's a constant. In other words, O(α(N)) is regarded as O(1) on average.
  constructor(size: number) {
    for (let i = 1; i < size; i++) {
      this.parents[i] = i;
      this.ranks[i] = 1;
    }
  }

  //O(α(N)) on average
  find(i: number) {
    if (this.parents[i] === i) return i;

    const root = this.find(this.parents[i]);
    this.parents[i] = root;// Path Compression optimization, change parent to root on way back
    // thus next find call on this node will be O(1)
    return root;
  }

  //O(α(N)) on average
  union(i: number, j: number) {
    const iRoot = this.find(i);
    const jRoot = this.find(j);

    //Rank optimisation: shorter tree is attached to longer one, so resulting tree is not elongated
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