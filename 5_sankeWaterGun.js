// Snake Water Gun ---->

// Generating Random Character-->(s,w,g)
let GenerateRandom =()=>{
    let Random="";
    let characters="swg";
    let characterLength=characters.length;
    Random=characters.charAt(Math.floor(Math.random()*characterLength));
    return Random;
}
// console.log(GenerateRandom());
let round=10;
let Your_score=0;
let comp_Score=0;
let Current_Round=0;
while(round--){
    
    let Random=GenerateRandom();
    let Inputchar=prompt("Enter (S for Snake)  or (W for Water) or (G for Gun)");
    
    // If user chooses snake 
    if((Inputchar=='S' || Inputchar=='s') && Random=='s'){
        alert("You both choose sanke \n Try Again ");
        Current_Round++;
    }
    else if((Inputchar=='S' || Inputchar=='s') && Random=='w'){
        alert("You Choose 'Snake' and Computer Chooses 'Water' \n Congratulations! You Won ");
        Current_Round++;
        Your_score++;    
    }

    else if((Inputchar=='S' || Inputchar=='s') && Random=='g'){
        alert("You Choose 'Snake' and Computer Chooses 'Gun' \n OOPS! You Loose ");
        Current_Round++;
        comp_Score++;
    }

    // if user chooses water
    if((Inputchar=='W' || Inputchar=='w') && Random=='w'){
        alert("You both choose water \n Try Again ");
        Current_Round++;
    }
    else if((Inputchar=='W' || Inputchar=='w') && Random=='g'){
        alert("You Choose 'Water' and Computer Chooses 'Gun' \n Congratulations! You Won ");
        Current_Round++;
        Your_score++;

    }

    else if((Inputchar=='W' || Inputchar=='w') && Random=='s'){
        alert("You Choose 'Water' and Computer Chooses 'Snake' \n OOPS! You Loose ");
        Current_Round++;
        comp_Score++;

    }

    // if user chooses Gun
    if((Inputchar=='G' || Inputchar=='g') && Random=='g'){
        alert("You both choose Gun \n Try Again ");
        Current_Round++;
    }
    else if((Inputchar=='G' || Inputchar=='g') && Random=='s'){
        alert("You Choose 'Gun' and Computer Chooses 'Snake' \n Congratulations! You Won ");
        Current_Round++;
        Your_score++;

    }

    else if((Inputchar=='G' || Inputchar=='g') && Random=='w'){
        alert("You Choose 'Gun' and Computer Chooses 'Water' \n OOPS! You Loose ");
        Current_Round++;
        comp_Score++;

    }

}

// Calculate Final Score
if(comp_Score>Your_score){
    alert("OOps Computer Won The Game ! \n Computer Score is "+comp_Score+"\n And Your Score is  "+Your_score);
}
else if (Your_score>comp_Score){
    alert("Congratulations ! You Won the game \n YOur Score is "+Your_score+"\n And Computer Score is  "+comp_Score);
}
else{
    alert("Game Draw ! \n your score and computer Score is "+Your_score,comp_Score);
}
