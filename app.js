let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    // console.log("clicked");
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete"); //giving class

    item.appendChild(delbtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = ""; // automatic remove ho jaate hain entered kiye gaye inputs

});

//Event delegation
//Event Bubbling
// event argument default parameter
ul.addEventListener("click", function(event){
    // console.log(event.target);
    // console.log(event.target.nodeName);
    // console.log("button clicked");

    if(event.target.nodeName == "BUTTON"){
        // console.log("delete");
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("deleted");

    }
    // else{
    //     console.log("don't delete");
    // }
});

// let delbtns = document.querySelectorAll(".delete");
// for( del of delbtns){
//     del.addEventListener("click", function(){
//         let par = this.parentElement;
//         // console.log("element deleted");
//         // console.log(par);
//         par.remove();

//     });
// }




