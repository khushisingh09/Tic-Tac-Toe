console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")  
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "✖️"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "✖️"? "⭕": "✖️"
}

// Function to check for a win
const checkWin = ()=>{
    let celltext = document.getElementsByClassName('celltext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((celltext[e[0]].innerText === celltext[e[1]].innerText) && (celltext[e[2]].innerText === celltext[e[1]].innerText) && (celltext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = celltext[e[0]].innerText + " Wins!🎉"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// Game Logic
music.play()
let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(element =>{
    let celltext = element.querySelector('.celltext');
    element.addEventListener('click', ()=>{
        if(celltext.innerText === ''){
            celltext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let celltexts = document.querySelectorAll('.celltext');
    Array.from(celltexts).forEach(element => {
        element.innerText = ""
    });
    turn = "✖️"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})