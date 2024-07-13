// Piece (Quân cờ)
class Piece {
  constructor(color, position) {
    this.color = color;
    this.position = position;
  }
  move() {
    // Di chuyển quân cờ tới vị trí mới
  }
  possibleMoves() {
    // Các nước đi hợp lệ của quân cờ
  }
}

// Move (Nước đi)
class Move {
  constructor(piece, fromPosition, toPosition) {
    this.piece = piece;
    this.fromPosition = fromPosition;
    this.toPosition = toPosition;
  }
  executeMove() {
    // Thực hiện nước đi trên bàn cờ
  }
  isValid() {
    // Kiểm tra tính hợp lệ của nước đi
  }
}
