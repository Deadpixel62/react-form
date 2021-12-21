

export function passwordHide(){


const input = document.querySelector(".myinput");

if(input.getAttribute("type")==="password"){
  input.setAttribute("type", "text");
} else{
input.setAttribute("type", "password");
}
}

