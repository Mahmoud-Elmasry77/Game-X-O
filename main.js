let turn = "X";
let title = document.querySelector(".title");
let squer = []
function Draw(){
    title.innerHTML = "تعادل";
        setInterval(() => {
            title.innerHTML="." + title.innerHTML;
        }, 1000);
        setTimeout(()=>{
            window.location.reload()
        }, 4000)
}

function nums(num1,num2,num3) {
    title.innerHTML = `${squer[num1]} فوز`;
    document.getElementById('item' + num1).style.background = "#252121";
    document.getElementById('item' + num2).style.background = "#252121";
    document.getElementById('item' + num3).style.background = "#252121";
    setInterval(() => {
        title.innerHTML="." + title.innerHTML;
    }, 1000);
    setTimeout(()=>{
        window.location.reload()
    },4000)
}
function winner(){
    for(let i = 1; i < 10 ; i ++){
        squer[i] = document.getElementById("item" + i).innerHTML;
    }

    if(squer[1]==squer[2] && squer[2]==squer[3] && squer[3]!=""){
        nums(1,2,3)
    }

    else if(squer[4]==squer[5] && squer[5]==squer[6] && squer[5]!=""){
        nums(4,5,6)
    }
    else if(squer[7]==squer[8] && squer[8]==squer[9] && squer[9]!=""){
        nums(7,8,9)
    }
    else if(squer[1]==squer[4] && squer[4]==squer[7] && squer[1]!=""){
        nums(1,4,7)
    }
    else if(squer[2]==squer[5] && squer[5]==squer[8] && squer[2]!=""){
        nums(2,5,8)
    }
    else if(squer[3]==squer[6] && squer[6]==squer[9] && squer[3]!=""){
        nums(3,6,9)
    }
    else if(squer[1]==squer[5] && squer[5]==squer[9] && squer[1]!=""){
        nums(1,5,9)
    }
    else if(squer[3]==squer[5] && squer[5]==squer[7] && squer[3]!=""){
        nums(3,5,7)
    }
    else if(squer[1] != '' && squer[2] != ' ' && squer[3] != '' && squer[4] != '' && squer[5] !='' && squer[6] != ' ' && squer[7] != '' && squer[9] != '' && squer[9] !='')
        {
            Draw()
        }
}
function game(id){
    let element = document.getElementById(id)
    if(turn === "X" && element.innerHTML == ""){
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = "O"
    }else if( turn === "O" && element.innerHTML == ""){
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = "X"
    }
    winner()
}