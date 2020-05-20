/*
  Implement a trie with insert, search, and startsWith methods.

  Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
Output: [null,1,1,1,2,1,4,6]
Explanation: 
First, S = StockSpanner() is initialized.  Then:
S.next(100) is called and returns 1,
S.next(80) is called and returns 1,
S.next(60) is called and returns 1,
S.next(70) is called and returns 2,
S.next(60) is called and returns 1,
S.next(75) is called and returns 4,
S.next(85) is called and returns 6.

Note that (for example) S.next(75) returned 4, because the last 4 prices
(including today's price of 75) were less than or equal to today's price.
*/

class StockSpanner {
  constructor() {
      this.stack = [];
      this.idx = -1;
  }
  
  next(price) {
      this.idx++;
  // if the stack is empty
      if(!this.stack.length) {
    this.stack.push([this.idx, price]); 
    return 1;
  } else {
          let [prevIdx, prevPrice] = this.stack[this.stack.length - 1];
          while(prevPrice <= price) {
              this.stack.pop();
              if(!this.stack.length) break;
              [prevIdx, prevPrice] = this.stack[this.stack.length - 1];
          }
          this.stack.push([this.idx, price])
          if(this.stack.length === 1) return this.idx + 1;
          return this.idx - prevIdx;
      }
  }
}
