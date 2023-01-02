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

    if(text.length>0 && text == text.toLowerCase()){
        
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

        //Le damos la funcionalidad al boton de copiar, que copie en portapapeles
        document.getElementById("copy").addEventListener('click',()=>{
            navigator.clipboard.writeText(cadenaEncriptada);

        })
        

    }else{
        alert("No se encontro texto o estas usando mayusculas");
    }
}

function desencriptar(texto){
    let text = texto.value + "."; 
    let cadenaEncriptada = "";
    if(text.length>0){
        
        let rectangulo = document.getElementById("rectangulo");
        
        let i = 0;
        while(i<=text.length && text !=""){
            switch(text[i]){
                case "a":
                    if(i == text.indexOf("ai")){
                        cadenaEncriptada+="a";
                        text = text.substring(i+2,text.length);
                        i=0;
                    }else{
                        cadenaEncriptada+="a";
                        i++; 
                    };;break;
                    
                case "e":
                    if(i == text.indexOf("enter")){
                    cadenaEncriptada+="e";
                    
                    text = text.substring(i+5,text.length);
                    i=0;
                    }else{
                        cadenaEncriptada+="e";
                        i++;      
                    }
                    
                    ;break;
                case "i":
                    if(i == text.indexOf("imes")){
                        cadenaEncriptada+="i";
                        text = text.substring(i+4,text.length);
                        i=0;
                    }else{
                        cadenaEncriptada+="i";
                        i++; 
                    };break;
                case "o":
                    if(i == text.indexOf("ober")){
                        cadenaEncriptada+="o";
                        text = text.substring(i+4,text.length);
                        i=0;
                    }else{
                        cadenaEncriptada+="o";
                        i++; 
                    };;break;
                 case "u":
                    if(i == text.indexOf("ufat")){
                        cadenaEncriptada+="u";
                        text = text.substring(i+4,text.length);
                        i=0;
                    }else{
                        cadenaEncriptada+="u";
                        i++; 
                    };
                    break;
                case ".":
                    i = text.length+1;
                ;break
                default:
                    cadenaEncriptada+=text[i];
                    i++;break;
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

