const triangle = (size) => {
    let tri = "";
    for (let i = 0; i < size; i++){
        tri += "#";
        console.log(tri);
    }
}

const fizzBuzz = (size) => {
    for (let i = 1; i <= size; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

const chessboard = (width, height) => {
    if (width % 2 === 0) { width += 1 };
    let board = "";
    for (let i = 0; i < width; i++){
        for (let j = 0; j < height; j++){
            let idx = i * width + j;
            if (idx % 2 === 0) {
                board += " ";
            }
            else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
}

triangle(7);
fizzBuzz(100);
chessboard(8, 8);
