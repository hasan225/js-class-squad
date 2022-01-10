let info =document.querySelector(".info");

let squad=[
    {
        name:"bijoy",
        age:22,
    },
    {name:"joy",
    age:24},
    {
        name:"jui",
        age:15,
    },
    {
        name:"bijoy",
        age:22,
    },
    {name:"joy",
    age:24},
    {
        name:"jui",
        age:15,
    },
] 

let information =squad.map(function(item){
    return "<div>"+item.name + " is " + item.age+"</div>"
})

info.innerHTML =information.join('\n')

 