// se define tamaño del grid
let rows = 10;
let cols = 10;
let squareSize = 52;

let gameContainer = document.getElementById("gameboard");

// construye grid
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		let square = document.createElement("div");
		gameContainer.appendChild(square);
		
        square.id = 's' + j + i;			
		
		let topPosition = j * squareSize;
		let leftPosition = i * squareSize;			
		
		// posiciona el grid con el CSS
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

let hitCount = 0;

let gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]


gameContainer.addEventListener("click", bullets, false);


function bullets (e) {
	if (e.target !== e.currentTarget) {
		let row = e.target.id.substring(1,2);
		let col = e.target.id.substring(2,3);
				
		if (gameBoard[row][col] == 0) {
			e.target.style.background = 'white';
			gameBoard[row][col] = 3;
		} else if (gameBoard[row][col] == 1) {
			e.target.style.background = 'red';
			gameBoard[row][col] = 2;
			hitCount++;

		if (hitCount == 17) {
				alert("Haz destruido todos los barcos!");
			}
		} else if (gameBoard[row][col] > 1) {
			alert("Ya disparaste en esta coordenada");
		}		
    }  
}