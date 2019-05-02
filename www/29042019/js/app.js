
    function getQuantidade(preco){
        quantidade = 12;
        preco  = preco.replace(',','.');
        var nPreco = parseFloat(preco.substr(2,5));
        console.log('Preco convertido: '+ nPreco);

        if(nPreco > 5 &&  nPreco <= 9.99){
            quantidade = 8;
        }  else if(nPreco > 10 &&  nPreco <= 19.99){
            quantidade = 6
        }else if(nPreco > 20 &&  nPreco <= 79.99){
            quantidade = 4
        }else if(nPreco > 80 &&  nPreco <= 99.99){
            quantidade = 3
        }else if(nPreco > 100){
            quantidade = 2
        }
        

        return quantidade;
    }
                function consultaProduto(ean){
                        console.log("Consultando produto " +ean);
                        $.ajax({
                        url: "http://192.168.0.125/projetos/SrvBuscaPreco/index.php?ean=" + ean,
                        type: "get",
                        //data: "ean="+ean.value,
                        dataType: "json"

                        }).done(function(resposta) {
                            if(resposta.EAN){
                                console.log("Retornou:"  + resposta.EAN + "||" + resposta.DESCRICAO);
                                //$('#ean').html(resposta.DESCRICAO);
                                $('#imgProduto').attr('src','http://192.168.0.125/projetos/SrvBuscaPreco/imagens/'+ resposta.CODIGO +'.jpg');
                                $('#ean').html(resposta.EAN);
                                $('#codigo').html(resposta.CODIGO);
                                $('#descricao').html(resposta.DESCRICAO);
                                $('#varejo').html(resposta.VAREJO);
                                $('#atacado').html(resposta.ATACADO);
                                $('#quantidade').html(getQuantidade(resposta.VAREJO));
                                $('.modal').modal('open');
                                
                            }else{
                                console.log("Retornou Erro");
                                
                                ean = "";
                                $('#ean').val("PRODUTO NÃO CADASTRADO");
                            }
                            

                        }).fail(function(jqXHR, textStatus ) {
                            console.log("Falhou na requisição: " + textStatus);
                            $('#ean').val("PRODUTO NÃO CADASTRADO");

                        }).always(function() {
                            console.log("Concluido");
                        });

                        ean = "";

                        $('#ean').val(ean);
                    }
                
           