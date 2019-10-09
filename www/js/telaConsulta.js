    

    function zeraRegistros(){
        $('#imgProduto').attr('src','');
        $('#barra').html('');
        $('#codigo').html('');
        $('#descricao').html('');
        $('#varejo').html('');
        $('#atacado').html('');
        $('#quantidade').html('');
    }
                function consultaProduto(codBar){
                        console.log("Consultando produto " + codBar);
                        $.ajax({
                        url: getConsulta+codBar+"/null/"+versao,
                        type: "get",
                        //data: {ean: codBar},
                        dataType: "json"

                        }).done(function(resposta) {
                            //console.log(resposta);
                            //var obj = JSON.parse(resposta);
                            console.log(JSON.stringify(resposta));
                            
                            zeraRegistros();
                            console.log('Error: '+resposta.error);
                            console.log('Message: '+resposta.message);
                            if(resposta.error == false){
                                console.log(resposta.result.EAN);
                                
                                $('#imgProduto').attr('src',urlFoto+resposta.result.IMG);
                                $('#barra').html(resposta.result.EAN);
                                $('#codigo').html(resposta.result.CODIGO);
                                $('#descricao').html(resposta.result.DESCRICAO);
                                $('#varejo').html(resposta.result.VAREJO);

                                if(resposta.result.LOTE != ''){
                                    $('#atacado').html(resposta.result.ATACADO);
                                    $('#quantidade').html('Atacarejo partir de '+ Math.round(resposta.result.LOTE) +' unidades' );
                                }
                                $('.modal').modal('open');
                                
                            }else if(resposta.error == true){
                                codBar = "";
                                $('#ean').val(resposta.message);
                            }
                            
                        }).fail(function(jqXHR, textStatus ) {
                            console.log("Falhou na requisição: " + textStatus);
                            $('#ean').val("ERRO DE CONEXAO");

                        }).always(function() {
                            console.log("Concluido");
                            
                        });

                        codBar = "";

                        $('#ean').val(codBar);
                    }
                
           