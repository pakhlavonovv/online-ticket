const obj = {}
const futMatch = (event) => {
    const {value, name} = event.target
    console.log(value)
    obj[name] = value
} 


const btn = document.querySelector("#btn")
let tickets__list = []
btn.addEventListener("click", function(){
    const tickets = document.getElementById("tickets")
    tickets__list.push({...obj})
    console.log(tickets__list)
    let str = ""
    tickets__list.map((item, index)=> {
       return str += '<tr>' +
        '<td>' + [index + 1] + "</td>" +
        "<td>" + item.full_name + "</td>" +
        "<td>" + item.phone_num + "</td>" +
        "<td>" + item.select + "</td>" +
        "<td>" + item.price + "</td>" 
        +
        "</tr>"
    })
    tickets.innerHTML = str
})


