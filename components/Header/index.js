// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(d, h, t) {
    //create elements
    let header = document.createElement('div');
    let  date = document.createElement('span');
    let  h1 = document.createElement('h1');
    let  temp = document.createElement('span');

    //assign class
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //add text content
    date.textContent = d;
    h1.textContent = h;
    temp.textContent = t;

    //append
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    console.log(header);

    let headerContainer = document.querySelector('.header-container');
    console.log(headerContainer);
    headerContainer.appendChild(header);
}

Header('SMARCH 28, 2019', 'Lambda Times','98°');


