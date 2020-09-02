console.log('-----Declarando constantes----');

const versao 			= '20200902_1';
const servidor 			= 'http://192.168.0.200/srvbuscapreco/';

const getConsulta 		= servidor + "index.php/consulta/consultaproduto/";
const getIpCliente 		= servidor + "index.php/consulta/getIpCliente/";
const urlFoto			= servidor + "assets/imagens_produtos/";
const urlBanner			= servidor + "assets/imagens_banner/";
const instalador 		= 'http://192.168.0.200/arquivos/apk'+versao+".apk";

(function($){
  $(function(){
  	$("#versao").text(".. V:"+versao+"..");
    $('.sidenav').sidenav();
    setInterval(function(){ getIp(); }, 5000);

  }); // end of document ready
})(jQuery); // end of jQuery name space
