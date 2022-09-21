function validSolution(board){
    for(let i = 0; i < 9; i+=3){
      const group = board.slice(i,i+3);
      for(let y = 0; y < 9; y+=3){
        const isValid = [].concat(...group.map((_,i) => group[i].splice(0,3))).sort((a,b) => a - b).join('') === '123456789'
        if(!isValid) return false;
      }
    }
    return true;
  }

  validSolution([[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
[ 2, 3, 1, 5, 6, 4, 8, 9, 7 ],
[ 3, 1, 2, 6, 4, 5, 9, 7, 8 ],
[ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
[ 5, 6, 4, 8, 9, 7, 2, 3, 1 ],
[ 6, 4, 5, 9, 7, 8, 3, 1, 2 ],
[ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
[ 8, 9, 7, 2, 3, 1, 5, 6, 4 ],
[ 9, 7, 8, 3, 1, 2, 6, 4, 5 ]]) 