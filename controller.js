let array = ["Jerry", "Mochi", "Joey", "Derek", "Jimmy"];

function add(){
    let number = 0;
    while(number < 5){
        array.push(number);
        document.getElementById("leftBox").innerHTML += `
        ${number}<br>
    `;
        number++;
    }
   
    console.log(array);
 
}

document.getElementById("leftBox").innerHTML += `
    <button onclick="add()">Add</button>
`;
