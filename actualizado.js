document.querySelector('#btnSaveFriend').addEventListener ('click',saveFriend);

function saveFriend (){

    var sNombre = document.querySelector ('#txtNombre').value,
        sCorreo = document.querySelector ('#txtCorreo').value,
        sAsunto = document.querySelector ('#txtAsunto').value,
        sMensaje = document.querySelector ('#txtMensaje').value;


addFriendToSystem (sNombre, sCorreo, sAsunto, sMensaje);
}
var friendList=[];



function addFriendToSystem (pnombre, pcorreo, pasunto, pmensaje){

    var newfriend = {
       nombre : pnombre,
       correo : pcorreo,
       asunto : pasunto,
       mensaje : pmensaje
    };
   
    console.log (newfriend);
    friendList.push(newfriend);
}