let people = [
    {
        name: 'Jimmy',
        age: 32
    },
    {
        name: 'Jerry',
        age: 26
    },
    {
        name: 'Derek',
        age: 31
    },
    {
        name: 'Joey',
        age: 20
    },
    {
        name: 'Mochi',
        age: 3
    }
];

// Questions to ask yourself when developing:
// what?
// How?
//  and once you've asked how and still don't know, tell google what you're trying to do
//  example: "how to get 'name' property in object that's in an array"

(function() {
    // let rancdom = {name: 'cool', age: 19};
    try {
        let yourArray = [{name: 'taco bell'}, "Jimmy", 'Test', 4, 5];
        console.log(yourArray[0].name);
        for(let i = 0; i < people.length; i++){
            document.getElementById("bigBox").innerHTML +=`
                <div class="bold">
                    <div class="circle">${people[i].age}</div>
                    ${people[i].name}
                </div>
            `;
        }
    } catch (error) {
        console.error(error);
    }
})();


    // onclick of item
    // take id/details of that item
    // pass it to addToCart() function
    // in addToCart() logic it will take item details, and
    //  store it in an array
    //  whatever is in this array, i'm going to display in the cart 

// Make card design inside a div

/** Displaying cards onload based on what is in an array (just getting functionality 1st for now)
 * step 1: for each item in array, generate html div content for that person
 *          and concatenate the html div/card strings
 * step 2: set this html string to the target container in the html file with .innerHTML
 */


