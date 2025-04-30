document.getElementById('boton-proxFechas').addEventListener('click',function(){
  alert('3 de Mayo - Mendoza / 10 de Mayo - Cordoba / 24 y 25 de Mayo - Buenos Aires');
});

document.getElementById('boton-mostrarAlbum').addEventListener('click',function(){
  var tapa = document.getElementById('tapaAlbum');
  if(tapa.style.display === 'none'){
    tapa.style.display = 'block';
  }else {
    tapa.style.display = 'none';
  }
});
