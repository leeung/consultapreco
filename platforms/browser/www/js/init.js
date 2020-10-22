console.log('-----Declarando constantes----');

const versao 			= '20200902_2';
const servidor 			= 'http://192.168.0.200/srvbuscapreco/';

const getConsulta 		= servidor + "index.php/consulta/consultaproduto/";
const getIpCliente 		= servidor + "index.php/consulta/getIpCliente/";
const urlFoto			= servidor + "assets/imagens_produtos/";
const urlBanner			= servidor + "assets/imagens_banner/";
const instalador 		= 'http://192.168.0.200/srvbuscapreco/assets/instalador/'+versao+".apk";

(function($){
  $(function(){
  	$("#versao").text(".. V:"+versao+"..");
    $('.sidenav').sidenav();
    setInterval(function(){ getIp(); }, 5000);
	$('#icoDownload').attr('href',instalador);

  }); // end of document ready
})(jQuery); // end of jQuery name space
