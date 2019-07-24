
function vote(vote)
{

       
        document.getElementById("vote1").classList.remove("active");
        document.getElementById("vote2").classList.remove("active"); 
        document.getElementById("vote3").classList.remove("active"); 


        var el = null;
        switch(vote) {
            case 1: el = document.getElementById("vote1_count"); break;
            case 2: el = document.getElementById("vote2_count"); break;
            case 3: el = document.getElementById("vote3_count"); break;   
        }

        document.getElementById("vote"+vote).className+=" active";
        var count = parseInt(el.innerText);
        count += 1;
        el.innerText = count;




}
