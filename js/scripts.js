//espero que cargue el DOM para validar los campos
document.addEventListener("DOMContentLoaded",()=>{
    // Guardo el formulario
    let formulario = document.getElementById("formulario");
    
    // Evitar que se envíe el formulario automáticamente
    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();
    });

    botonenviar.addEventListener("click",()=>{
        console.log("aprestaste el boton");
        //guardo los valores y limpie los espacios en blanco
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const inputs = document.querySelectorAll(".campo__input");
        const parrafo = document.querySelector(".parrafo-validacion");

        // Recorro todos los campos y verifico que no esten vacios
        //for (let index = 0; index < inputs.length; index++) {
            let validar = true;
            if(nombre == "" || email == ""){
                validar = false;
                error(validar);
            }else{
                aceptado(validar);
            }            
        //}
        
        // Funciones error y limpiar los campos
        function error(validar){
            let inputs = document.querySelectorAll(".campo__input");
            inputs.forEach((input) => {
            input.style.border = "red solid 1px";
            });
            alert("completa todos los campos");    
        };

        function aceptado(validar){
            let inputs = document.querySelectorAll(".campo__input");
            inputs.forEach((input) => {
            input.style.border = "green solid 1px";
            });
            parrafo.style.visibility = "visible";    
        };
    });
});
