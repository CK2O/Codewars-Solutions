function queueTime(customers, n) {
    let queueArr = new Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
      let currentCustomer = queueArr.indexOf(Math.min(...queueArr));
      queueArr[currentCustomer] += customers[i];
    }
    return Math.max(...queueArr);
  }