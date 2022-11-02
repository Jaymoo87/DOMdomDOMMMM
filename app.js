document.addEventListener("DOMContentLoaded", function () {
   
    
    //button
    const btn = document.createElement("BUTTON");
    let btntext = document.createTextNode('Add Square');
    //let butdiv = document.createElement('div')
    //document.body.appendChild(butdiv)
    document.body.appendChild(btn);
    btn.appendChild(btntext);
    
    //parent div
    const daddydiv = document.createElement('div');
    daddydiv.className = "thedivs";
    document.body.appendChild(daddydiv);
    
    //child divs
    let div = document.createElement('div')
    div.className = "squares"

    daddydiv.appendChild(div)
    
    //put button on html document
    

    
    
    let squareCount = 0;
    
    
    
    // creating squares on click, in-line, and sequenced
    btn.addEventListener('click', function (){
        let div = document.createElement('div');
        let p = document.createElement('p');
        squareCount ++;
        daddydiv.appendChild(div)
        div.appendChild(p);
        p.className = 'p';
        p.innerText = squareCount;
        p.style.color = "black";

        
        console.log(daddydiv);
        console.log(p);


    })
    
    div.id = squareCount
});
