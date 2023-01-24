function like(id){
    document.getElementById(id).innerText ++;
}
// function like2(id){
//     var likeId="#"+id;
//     console.log(likeId);
//     document.querySelector(id).innerText ++
// }and i will pass #id in the html file

function remove(id){
    document.getElementById(id).remove();
}
function Logout(id){
    document.getElementById(id).innerText = "logOut";
}