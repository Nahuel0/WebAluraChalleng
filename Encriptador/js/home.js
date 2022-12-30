

function obtenerTexto(){
    let texto = document.getElementById('texto');
    document.getElementById("encriptar").addEventListener('click',()=>
    {
     encriptar(texto);
    });

   document.getElementById("desencriptar").addEventListener('click',()=>{
        desencriptar(texto);
   });
}

function encriptar(texto){
    let text = texto.value
    let cadenaEncriptada = "";
    if(text.length>0){
        
        let rectangulo = document.getElementById("rectangulo");
        
        for(let i = 0; i<text.length;i++){
            switch(text[i]){
                case "a":
                    cadenaEncriptada+="ai";break;
                case "e":
                    cadenaEncriptada+="enter";break;
                case "i":
                    cadenaEncriptada+="imes";break;
                case "o":
                    cadenaEncriptada+="ober";break;
                 case "u":
                    cadenaEncriptada+="ufat";break;
                default:
                    cadenaEncriptada+=text[i];
            }
        }
        
        rectangulo.innerHTML = `<p class="text-encriptado">${cadenaEncriptada}</p>`;
        rectangulo.innerHTML += `<button class="button-copy" id="copy">Copiar</button>`;

        document.getElementById("copy").addEventListener('click',()=>{
            navigator.clipboard.writeText(cadenaEncriptada);

        })
        

    }else{
        alert("No se encontro texto");
    }
}

function desencriptar(texto){
    let text = texto.value
    let cadenaEncriptada = "";
    if(text.length>0){
        
        let rectangulo = document.getElementById("rectangulo");
        
        for(let i = 0; i<text.length;i++){
            switch(text[i]){
                case "a":
                    cadenaEncriptada+="ai";break;
                case "e":
                    cadenaEncriptada+="enter";break;
                case "i":
                    cadenaEncriptada+="imes";break;
                case "o":
                    cadenaEncriptada+="ober";break;
                 case "u":
                    cadenaEncriptada+="ufat";break;
                default:
                    cadenaEncriptada+=text[i];
            }
        }
        
        rectangulo.innerHTML = `<p class="text-encriptado">${cadenaEncriptada}</p>`;
        rectangulo.innerHTML += `<button class="button-copy" id="copy">Copiar</button>`;

        document.getElementById("copy").addEventListener('click',()=>{
            navigator.clipboard.writeText(cadenaEncriptada);

        })
        

    }else{
        alert("No se encontro texto para desencriptar");
    }
}