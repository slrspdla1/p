function bigger(event){
    event.target.style.width=200
    event.target.style.height=60
}
function rt(event){
    event.target.style.width=100
    event.target.style.height=30
}
function longer(event){
    if(event.key==="Backspace"){
        event.target.style.width = Number(event.target.style.width.slice(0, 3)) - 8
    } else{
        event.target.style.width = Number(event.target.style.width.slice(0, 3)) + 8
    }
}
function background(event,color){
    event.target.style.backgroundColor=color
}