document.addEventListener("DOMContentLoaded", (function () {
    let container = document.createElement("div");
    container.className = "header-container";


    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);
    container.appendChild(h1);
    h1.className = "h1";

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text);
    container.appendChild(h2);
    h2.className = "h2";

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is an h3");
    h3.appendChild(h3Text);
    container.appendChild(h3);
    h3.className = "h3";

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is an h4");
    h4.appendChild(h4Text);
    container.appendChild(h4);
    h4.className = "h4";

    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode("This is an h5");
    h5.appendChild(h5Text);
    container.appendChild(h5);
    h5.className = "h5";

    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode("This is an h6");
    h6.appendChild(h6Text);
    container.appendChild(h6);
    h6.className = "h6";

    document.body.appendChild(container);


    //#9 *************************
    let color = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "indigo",
        "pink"
    ];

    // element.addEventListener("dblclick", function() {});

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)];
        return randomColor;
    }

    // h1.addEventListener('dblclick', getRandomColor());
    // h2.addEventListener('dblclick', getRandomColor());
    // h3.addEventListener('dblclick', getRandomColor());
    // h4.addEventListener('dblclick', getRandomColor());
    // h5.addEventListener('dblclick', getRandomColor());
    // h6.addEventListener('dblclick', getRandomColor());

    h1.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });



    //#11, 12, 13, 14 *************************************************

    let liBtn = document.getElementsByClassName("boton")[0]; //calls button from index.html
    let liCounter = 1; //starts list counter at 1..

    liBtn.addEventListener("click", function () { //adds event listener for click event!
        let ul = document.createElement("ul"); //creates unordered list item in index.html
        document.body.appendChild(ul); //appends ul to the body of the document..
        let li = document.createElement("li"); // creates list
        li.id = liCounter++; //increases list number by 1..
        let liText = document.createTextNode("This is list item " + li.id); //creates visible text when button clicked.
        li.appendChild(liText); //appends liText to list
        ul.appendChild(li); //appends list to unordered list..

        li.addEventListener("click", function () { 
            let colors = [
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "purple",
                "indigo",
                "pink",
            ];

            let randomCol = Math.floor(Math.random() * colors.length);
            li.style.color = colors[randomCol];
    }); //creates event listener function list to randomly shuffle colors when element in list is clicked once!

        li.addEventListener("dblclick", function () {
            li.remove()
        }) //adds event listener that listens for when items are clicked twice and deletes them from the list!

    });





}));