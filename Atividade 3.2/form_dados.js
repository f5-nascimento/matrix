
        var btnSalvar = document.getElementById("btnSalvar"); 
        var btnConsulta = document.getElementById("btnConsulta"); 
        var nomeSexo  = document.getElementById("sexo"); 
        var nomeCurso  = document.getElementById("curso"); 
        var nomeUf  = document.getElementById("uf");

        
        btnSalvar.addEventListener("click", function(e){
        e.preventDefault();   

                var obj = {
                        
                        email : document.getElementById("email").value,
                        nome  : document.getElementById("nome").value,
                        sexo  : nomeSexo.options[nomeSexo.selectedIndex].value,
                        curso : nomeCurso.options[nomeCurso.selectedIndex].value, 
                        correspondencia : document.getElementById("correspondencia").value,
                        complemento : document.getElementById("complemento").value,
                        cep : document.getElementById("cep").value,
                        municipio : document.getElementById("municipio").value,
                        uf : nomeUf.options[nomeUf.selectedIndex].value,
                        
        }

                //Salva no storage e converti objeto para String        
                localStorage.setItem("Cadastro", JSON.stringify(obj));

        });

       
        btnConsulta.addEventListener("click", function(e){
        e.preventDefault();

             
                //Salva na variavel dados_str os valores no storage
                var dados_str = localStorage.getItem("Cadastro");
                //Salva na variavel dados_obj a conversao de String para objeto
                var dados_obj = JSON.parse(dados_str);
                //Passagem para o documento
                document.getElementById("email").value = dados_obj.email;   
                document.getElementById("nome").value = dados_obj.nome;
                document.getElementById("sexo").value = dados_obj.sexo;
                document.getElementById("curso").value = dados_obj.curso;
                document.getElementById("correspondencia").value = dados_obj.correspondencia;
                document.getElementById("complemento").value = dados_obj.complemento;
                document.getElementById("cep").value = dados_obj.cep;
                document.getElementById("municipio").value = dados_obj.municipio;
                document.getElementById("uf").value = dados_obj.uf;       

});