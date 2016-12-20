$(document).ready(function(e) {
  var carroCompras = {};

  $("#btnañadir").click(function(event) {
    var elemento = $("#elemento").val();
    if (elemento == "") {
      console.log("El elemento no existe");
    } else {
      $("li:last").after('<li class="list-group-item">'+
        '<span class="pull-left producto">'+elemento+
        '</span><span class="cantidad badge pull-left">0</span>'+
        '<button type="button" class="menos btn btn-default pull-right glyphicon glyphicon glyphicon-minus">'+
        '</button>'+
        '<button type="button" class="carrito btn btn-default pull-right glyphicon glyphicon-shopping-cart">'+
        '</button>'+
        '<button type="button" class="mas btn btn-default pull-right glyphicon glyphicon glyphicon-plus">'+
        '</button>'+
        '<button type="button" class="borrar btn btn-default pull-right glyphicon glyphicon-trash">'+
        '</button></li>');
        $("#elemento").val('');
    }
    event.preventDefault();
  });

  $("ul").on('click', 'li', function(event)  {
   /* var badge = $(this).children('.badge');
    var contador = parseInt(badge.html());
    if (contador == 0){
      badge.html(contador + 1);
      
    }else {
      $('#myModal').modal('show');
      $('#modalSi').on('click',function () {
        badge.html('0');
      });
           
      

    }
  */
    $(this).toggleClass('active');



  });
  $("ul").on('click','.mas', function(event) {

      var badge = $(this).siblings('.cantidad');
      var contador = parseInt(badge.html());
      var producto = $(this).siblings('.producto').html();
      console.log(producto);
      if (contador == 0) {
        $(this).parent('li').addClass('active');
      }
      badge.html(contador + 1);
      carroCompras [producto] = contador;
      console.log(carroCompras);
      return false;
  });
  $("ul").on('click','.menos', function(event) {

      var badge = $(this).siblings('.cantidad');
      var contador = parseInt(badge.html());
      var producto = $(this).siblings('.producto').html();
      if (contador == 0) {
        $(this).parent('li').addClass('active');
      }
      if (contador >0){
      badge.html(contador - 1);
      carroCompras [producto] = contador;
      }
      return false;
  });
  $("ul").on('click','.borrar', function(event) {
      var badge = $(this).siblings('.cantidad');
      var producto = $(this).siblings('.producto').html();
      $('#myModal').modal('show');
      $('#modalSi').on('click',function () {
        badge.html('0');
        carroCompras [producto] = 0;
      });
      return false;
  });
  $("ul").on('click','.carrito', function(event) {
      var badge = $(this).siblings('.cantidad');
      $('#myModal2').modal('show');
      $('#modal2Si').on('click',function () {
        listadoCarro();
      });
      return false;
  });
    function listadoCarro () {
     alert(JSON.stringify(carroCompras));
  };

});
