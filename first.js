let boxes=document.querySelectorAll(".box");
let bot=document.querySelector("#btn1");
let bot2=document.querySelector("#btn2");
document.querySelector("#show").style.visibility="hidden";
const pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let checkwin=() =>{
    for(let patterns of pattern){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                last();
            
            }
        }
    }
}
let turn=true;
let box;
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("click");
        if(turn){
            turn=false;
            box.innerText="x";

        }
        else{
            box.innerText="o";
            turn=true;
        }
        box.disabled=true;
        checkwin();
        
    })
    
})

let last=() =>{
    document.querySelector("#show").style.visibility="visible";

}





    

