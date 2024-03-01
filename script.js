//---seleccion de elemontos--//
const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const textoRespuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
//---boton encriptar---//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto == ""){
        aviso.style.backgraund = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight="800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto != txt){
        aviso.style.backgraund = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight="800";
        aviso.textContent = "No debe tener acentos y carecteres especiales.";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);  
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.backgraund = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight="800";
        aviso.textContent = "El texto debe estar todo en minusculas.";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);        
    }
    else{
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"ober");
        texto = texto.replace(/u/mg,"ufat");

        textoRespuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        
    }

 })

//--boton desencriptar--//

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto == ""){
        aviso.style.backgraund = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight="800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto != txt){
        aviso.style.backgraund = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight="800";
        aviso.textContent = "No debe tener acentos y carecteres especiales.";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);  
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.backgraund = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight="800";
        aviso.textContent = "El texto debe estar todo en minusculas.";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);        
    }
    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufat/mg,"u");

        textoRespuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        
    }

 });

 //---boton copiar---//

 btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = textoRespuesta;
    copiar.select();
    document.exeCommand("copiar");
    
 });
