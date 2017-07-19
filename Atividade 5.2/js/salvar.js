 var obj;
 var form = document.getElementById("form");
 var i=localStorage.length+1;

            new Vue({
                el:"#formulario",
                data: function(){
                    return obj = {
                        email           : "",
                        nome            : "",
                        sexo            : "",
                        curso           : "",
                        correspondencia : "",
                        complemento     : "",
                        cep             : "",
                        municipio       : "",
                        uf              : ""
                }
            
            },
             methods: {
                     salvar: function(){
                        localStorage.setItem(i, JSON.stringify(obj));
                        form.reset();
                }
            },
             
            });
               
     