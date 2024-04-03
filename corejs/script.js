function mostrarAlerta(){
    alert("Le has dado like a gatos!");
}


function login(Element){
    if (Element.innerText =="Login"){
        Element.innerText="Logout";
    }else{
        Element.innerText="Login"
    }
}
function hideButton(ev) {
    ev.remove();
}
