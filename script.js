const plays = ['rock', 'paper', 'scissor'];
const opposites = {
    rock:'paper', 
    paper:'scissor', 
    scissor:'rock'
};
let youPlay = '';
let oppPlay = '';
let scoreArr = [];
let youPlays = [];
let youScore = 0;
let oppScore = 0;
let oppLoseInRow = 0;

const hex = "0123456789ABCDEF";
const direction = ['bottom', 'left', 'right', 'bottom left', 'bottom right'];
let toTrans = true;
let hexone = "#";
let hextwo = "#";


const radioBTNs = document.querySelectorAll('[type="radio"]');
const body = document.getElementById('bod');
const youIMG = document.getElementById('yourPic');
const oppIMG = document.getElementById('oppPic');
const score = document.getElementById('tally');

const transition = document.getElementById('transition');


radioBTNs.forEach(function(btn){
    btn.addEventListener('click', function(){
        youIMG.src = "assests/"+ btn.id + ".png"
    })
})


function scoreChange(victory) {
    if(victory)
    {
        youScore++;
        scoreArr = score.innerText.split(" ");
        scoreArr[0] = youScore.toString();
        score.innerText = scoreArr.join(" ");
        if(youPlays.length >= 5)
        {
            oppLoseInRow++;
            if(oppLoseInRow > 3)
            {
                oppLoseInRow = 0;
                youPlays.splice(0, youPlays.length);
            }
        }
    }
    else
    {
        oppScore++;
        scoreArr = score.innerText.split(" ");
        scoreArr[scoreArr.length-1] = oppScore.toString();
        score.innerText = scoreArr.join(" ");
    }
}

function shoot(){
    if(youIMG.getAttribute('src') != "")
    {


        if(youPlays.length < 5)
        {
            let num = Math.floor(Math.random() * Math.floor(plays.length));
            console.log(num);
            oppPlay = plays[num];
        }
        else
        {
            let num = Math.floor(Math.random() * Math.floor(plays.length));
            console.log(num);
            oppPlay = opposites[youPlays[num]];
        }
        
        oppIMG.src = "assests/"+ oppPlay + ".png";

        if(youIMG.getAttribute('src').indexOf('rock') != -1)
        {
            youPlay = 'rock';
        }
        else if(youIMG.getAttribute('src').indexOf('paper') != -1)
        {
            youPlay = 'paper';
        }
        else
        {
            youPlay = 'scissor';
        }


        if(youPlay == 'rock' && oppPlay == 'scissor')
        {
            scoreChange(true);
            
        }
        else if(youPlay == 'rock' && oppPlay == 'paper')
        {
            scoreChange(false);
        }
        else if(youPlay == 'paper' && oppPlay == 'rock')
        {
            scoreChange(true);
        }
        else if(youPlay == 'paper' && oppPlay == 'scissor')
        {
            scoreChange(false);
        }
        else if(youPlay == 'scissor' && oppPlay == 'paper')
        {
            scoreChange(true);
        }
        else if(youPlay == 'scissor' && oppPlay == 'rock')
        {
            scoreChange(false);
        }

        youPlays.push(youPlay);
    }
}

function twoRanHex (){
    hexone = "#";
    hextwo = "#";

    for(var i = 0; i < 6; i++)
    {
        hexone = hexone + hex[Math.floor(Math.random() * Math.floor(hex.length))]
    }

    for(var i = 0; i < 6; i++)
    {
        hextwo = hextwo + hex[Math.floor(Math.random() * Math.floor(hex.length))]
    }
    

    if(toTrans)
    {
        transition.style.background= "linear-gradient(to " + direction[Math.floor(Math.random() * Math.floor(direction.length))] + ", " + hexone + ", " + hextwo + ")";
        transition.style.opacity = "1";
        toTrans = false;
    }
    else
    {
        body.style.background= "linear-gradient(to " + direction[Math.floor(Math.random() * Math.floor(direction.length))] + ", " + hexone + ", " + hextwo + ")";
        transition.style.opacity = "0";
        toTrans = true;
    }
};

window.setInterval(twoRanHex, 3000);
