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
    
    // putting all the babies with the daddydiv
    daddydiv.appendChild(div);
    
    //good ol' color array from dom drills
    let colors = ['DodgerBlue', 'BurlyWood', 'Brown', 'Chocolate',
        'Blue', 'Crimson', 'Cyan', 'DarkRed'];

    //color change function
    function colorchange() {
        let headColor = colors[Math.floor(Math.random() * colors.length)];
        return headColor;
    }


    let squareCount = 0;

    // creating squares on click, in-line, and sequenced
    btn.addEventListener('click', function () {

        let div = document.createElement('div');
        let p = document.createElement('p');
        div.className = "squares";
        squareCount++;
        div.id = squareCount;
        daddydiv.appendChild(div);
        div.appendChild(p);
        p.className = 'p';
        p.innerText = squareCount;
        p.style.color = "black"; //black!!
        console.log(div);




        div.addEventListener('mouseover', function () {
            p.style.color = "yellow";
        });
        div.addEventListener('mouseleave', function () {
            p.style.color = "black";
        });

                // this still wont register the event!!!
                div.addEventListener('click', function () {
                    div.style.backgroundColor = colorchange;
        
                });

                    //double click to adjust square based on their even/odd status.
        div.addEventListener('dblclick', function () {
            if (div.id % 2 === 0) {
                if (div.nextSibling) {
                    daddydiv.removeChild(div.nextSibling);
                } else {
                    //js alert window if square doesn't meet the conditions..cool
                    alert('No Square To Delete');
                };
            } else {
                if (div.previousSibling) {
                    daddydiv.removeChild(div.previousSibling);
                } else {
                    alert('No Square To Delete');
                };
            };
        });
    });





    //document.addEventListener('click', console.log, true);




});
