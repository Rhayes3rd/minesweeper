const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

    const generatePlayerBoard = (numberOfRows,numberOfColumns) => {

      let board = [];

        for(let i = 0; i < numberOfRows; i++){
           let row = [];
           for(let j = 0; j < numberOfColumns; j++){

                row.push(null);
           }
                board.push(row);
      }

        let numberOfBombsPlaced = 0;

        //Will need  control flow to keep overlapping

        while (numberOfBombsPlaced < numberOfBombs) {
          let randomRowIndex = Math.floor(Math.random() * numberOfRows);
          let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      }
          board[randomRowIndex][randomColumnIndex] = 'B';

          numberOfBombsPlaced++;

          const printBoard = board => {
          console.log(board.map(row => row.join('|').join('/n')));
      };


          let playerBoard = generatePlayerBoard(3,4);
          let bombBoard = generateBombBoard(3,4,5);


          console.log('Player Board:  ');
          printBoard(playerBoard);

          console.log('Bomb Board');
          printBoard(bombBoard);

    };
      return (board);

}
generateBombBoard(5, 9, 14)


















/*const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
const printBoard = (board) => {
   console.log('Current Board: ');
  // Log the first element of the board variable
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
console.log(printBoard(board));
board[0][1] = '1';
board[2][2] = 'B';

console.log(printBoard(board));*/
