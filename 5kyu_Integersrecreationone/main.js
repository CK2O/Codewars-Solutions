function listSquared(m, n) {
    const ans = [];

  function divsOf(x) {
    let divs = [];

    for (let j = 1; j <= x; j++) {
        if (x % j === 0) {
            divs.push(j);
        }
    }

    return divs;
}
  
  
  
    for (let i = m; i <= n; i++) {
        let factors = divsOf(i);

        let sumSquFacts = factors.reduce(
            (sum, cV) => (sum += cV**2),
            0
        );

        if (Math.sqrt(sumSquFacts% 1 === 0)&&sumSquFacts%Math.sqrt(sumSquFacts)==0) {
          
            ans.push([i, sumSquFacts]);
        }
    }

    return ans;
}
