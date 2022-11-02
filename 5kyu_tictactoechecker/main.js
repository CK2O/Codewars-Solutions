function isSolved(board) {
  
   
  if ((board[0][0]==1 && board[1][1]==1 && board[2][2]==1)||//diagonal
     (board[0][2]==1 && board[1][1]==1 && board[2][0]==1)||//opposite diagonal
    (board[0][0]==1 && board[1][0]==1 && board[2][0]==1)||
    (board[0][2]==1 && board[1][2]==1 && board[2][2]==1)||
    (board[0][1]==1 && board[1][1]==1 && board[2][1]==1)||
    (board[0][0]==1 && board[0][1]==1 && board[0][2]==1)||
    (board[1][0]==1 && board[1][1]==1 && board[2][2]==1)){
    return 1
  }
  
  else if ((board[0][0]==2 && board[1][1]==2 && board[2][2]==2)||//diagonal
     (board[0][2]==2 && board[1][1]==2 && board[2][0]==2)||//opposite diagonal
    (board[0][0]==2 && board[1][0]==2 && board[2][0]==2)||
    (board[0][2]==2 && board[1][2]==2 && board[2][2]==2)||
    (board[0][1]==2 && board[1][1]==2 && board[2][1]==2)||
    (board[0][0]==2 && board[0][1]==2 && board[0][2]==2)||
    (board[1][0]==2 && board[1][1]==2 && board[2][2]==2)||
    (board[2][0]==2 && board[2][1]==2 && board[2][2]==2)) {
    return 2
  }
  else if ((board[0].includes(0))||
           (board[1].includes(0))||
           (board[2].includes(0))){
    return -1
  }
  else return 0
}
