document.addEventListener("DOMContentLoaded", function () {
   
    
    //button with a div to seperate from daddydiv
    const btn = document.createElement("BUTTON");
    let btntext = document.createTextNode('Add Square');
    let butdiv = document.createElement('div')
    //put button on html document above parent element
    document.body.appendChild(btn);
    btn.appendChild(btntext);
    document.body.appendChild(butdiv)
    
    //parent div
    const daddydiv = document.createElement('div');
    daddydiv.className = "thedivs";
    document.body.appendChild(daddydiv);
    
    //child divs with class name square for styling
    let div = document.createElement('div');
    
    
    
    let squareCount = 0;
    
    // creating squares on click, in-line, and sequenced
    btn.addEventListener('click', function (){
        
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.className = "squares";
        squareCount ++;
        daddydiv.appendChild(div);
        div.appendChild(p);
        p.className = 'p';
        p.innerText = squareCount;
        p.style.color = "black";
        console.log(div)
    });
    
    // putting all the babies with the daddydiv
    daddydiv.appendChild(div);
    div.id = squareCount;
});
