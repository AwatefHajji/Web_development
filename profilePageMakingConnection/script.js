 function changeName(id){
 document.getElementById(id).innerText = "Awatef Hajji";
}
function remove(id){
    document.getElementById(id).remove();
}
    
function change(image){
    image.src = "images/my-photo.jpeg"
}
function returnImg (image){
    image.src = "images/jane-m.jpg" 
}
function incrementation(id){
    document.getElementById(id).innerText++;
}