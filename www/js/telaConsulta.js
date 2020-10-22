    

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
                            log('Error: '+resposta.error);
                            log('Message: '+resposta.message);
                            if(resposta.error == false){
                                log(resposta.result.EAN);
                                
                                $('#imgProduto').attr('src',urlFoto+resposta.result.IMG);
                                $('#barra').html(resposta.result.EAN);
                                $('#codigo').html(resposta.result.CODIGO);
                                $('#descricao').html(resposta.result.DESCRICAO);
                                $('#varejo').html(resposta.result.VAREJO);

                                if(resposta.result.LOTE != ''){
                                    $('#atacado').html(resposta.result.ATACADO);
                                    if(Math.round(resposta.result.LOTE) != '999999')
                                        $('#quantidade').html('Atacarejo partir de '+ Math.round(resposta.result.LOTE) +' unidades' );
                                }else{
                                    $('#atacado').html('');
                                }
                                $('.modal').modal('open');
                                
                            }else if(resposta.error == true){
                                codBar = "";
                                $('#ean').val(resposta.message);
                            }
                            
                        }).fail(function(jqXHR, textStatus ) {
                            log("Falhou na requisição: " + textStatus);
                            $('#ean').val("ERRO DE CONEXAO");

                        }).always(function() {
                            log("Concluido");
                            
                        });

                        codBar = "";

                        $('#ean').val(codBar);
                    }
                
           