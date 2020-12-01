const versao 			    = '20201201';
const servidor 			  = 'http://192.168.0.200/srvbuscapreco/';

const getConsulta 		= servidor + "index.php/consulta/produto/";
const getIpCliente 		= servidor + "index.php/consulta/getIpCliente/";
const urlFoto			    = servidor + "assets/imagens_produtos/";
const urlBanner			  = servidor + "assets/imagens_banner/";
const instalador 		  = 'http://192.168.0.200/srvbuscapreco/assets/instalador/'+versao+".apk";

var gravaLog  = false;
var ean = "";
var timeOutModal = 5000;
var objTimeOutModal = null;

(function($){
  $(function(){

  	$("#versao").text(".. V:"+versao+"..");
    $('.sidenav').sidenav();
    $('#icoDownload').attr('href',instalador);
    $('select').formSelect();
    $('.tooltipped').tooltip();
    $('.modal').modal({ inDuration: 30, 
                        outDuration: 30,
                        startingTop: '30%',
                        onOpenEnd: function(){
                          fecharModal();
                        }
                        });
    $('.slider').slider({
      indicators: false,
      height: 400
    });

    $('#btnHome').floatingActionButton({
      direction:'top',
      hoverEnabled: false
    });

    //HABILIDA GRAVAÇÃO DE LOGS
    $("#icoLog").click(function(){
      gravaLog = !gravaLog;
      if(gravaLog){
        $("#telaLog").css("height","200px");
        log("Iniciando gravação de log");
      }else{
        $("#telaLog").css("height","0px");  
        $('#telaLog').html("");
      }
    });

    //SETA INTERVALO DA TELA DE CONSULTA
    setInterval(function(){ getIp(); }, 5000);

    //INCLUI O EVENT KEYPRESS
    document.addEventListener('keypress', capturaTecla, true);
  }); // end of document ready
})(jQuery); // end of jQuery name space
