
       var corpo = document.querySelector("tbody");

            if (localStorage.length!=0){

                   
                    for(var i = 1; i <= localStorage.length; ++i){     
						var dados = JSON.parse(localStorage.getItem(i));

                        var linha = document.createElement("tr");

                        var email = dados["email"];
                        var campo_email = document.createElement("td");
                        var texto_email = document.createTextNode(email);
                        campo_email.appendChild(texto_email);
                        linha.appendChild(campo_email);

                        var nome = dados["nome"];
                        var campo_nome = document.createElement("td");
                        var texto_nome = document.createTextNode(nome);
                        campo_nome.appendChild(texto_nome);
                        linha.appendChild(campo_nome);

						var sexo = dados["sexo"];
                        var campo_sexo = document.createElement("td");
                        var texto_sexo = document.createTextNode(sexo);
                        campo_sexo.appendChild(texto_sexo);
                        linha.appendChild(campo_sexo);                        

						var curso = dados["curso"];
                        var campo_curso = document.createElement("td");
                        var texto_curso = document.createTextNode(curso);
                        campo_curso.appendChild(texto_curso);
                        linha.appendChild(campo_curso);

						var correspondencia = dados["correspondencia"];
                        var campo_correspondencia = document.createElement("td");
                        var texto_correspondencia = document.createTextNode(correspondencia);
                        campo_correspondencia.appendChild(texto_correspondencia);
                        linha.appendChild(campo_correspondencia);

						var complemento = dados["curso"];
                        var campo_complemento = document.createElement("td");
                        var texto_complemento = document.createTextNode(complemento);
                        campo_complemento.appendChild(texto_complemento);
                        linha.appendChild(campo_complemento);

						var cep = dados["cep"];
                        var campo_cep = document.createElement("td");
                        var texto_cep = document.createTextNode(cep);
                        campo_cep.appendChild(texto_cep);
                        linha.appendChild(campo_cep);

						var municipio = dados["municipio"];
                        var campo_municipio = document.createElement("td");
                        var texto_municipio = document.createTextNode(municipio);
                        campo_municipio.appendChild(texto_municipio);
                        linha.appendChild(campo_municipio);

						var uf = dados["uf"];
                        var campo_uf = document.createElement("td");
                        var texto_uf = document.createTextNode(uf);
                        campo_uf.appendChild(texto_uf);
                        linha.appendChild(campo_uf);

                        corpo.appendChild(linha);

            }
            }
            
            else{
                  alert("Não temos cadastro");
            } 