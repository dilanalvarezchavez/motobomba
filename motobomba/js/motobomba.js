class Motobomba{
    constructor(id,capacidad,estado=false){
        this.id = id;
        this.capacidad = capacidad;
        this.estado = estado;
    }
    prender(){
        return this.estado = true;
    }
    apagar(){
        return this.estado = false;
    }
    getEstado(){
        return this.estado;
    }
    toString(){
        if(this.estado == true){
            return "la motobomba con id " + this.id + " esta encendida"
        }else{
            return "la motobomba con id " + this.id + " esta apagada"
        }
    }
    crear(){
        let prueba = document.getElementById("id").value;
        let cap = document.getElementById("capacidad").value;
        this.id = prueba;
        this.capacidad = cap;
        document.getElementById("prob").innerHTML = 'el ID es:  '+prueba+' '+'Capacidad es:  '+cap;
        document.getElementById("img").innerHTML = ('<img src="img/motobomba.jpg"/>');
        
        let boton = document.createElement("button");
        boton.innerHTML = "boton";
        document.body.appendChild(boton);

        boton.onclick = function() {
            if(this.estado == true){
                return boton.innerHTML='encendido';
            }else{
                return boton.innerHTML='apagado';
            }
        }
        
    }
    tapar(){
        if(this.estado == true){
            document.getElementById('cuadro').style.display = 'none';
        }else{
            document.getElementById('cuadro').style.display = 'block';
        }
    }

}

let prueba = new Motobomba(1,2,true);
console.log(prueba.toString());
