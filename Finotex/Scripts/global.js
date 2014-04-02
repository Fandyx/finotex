$(document).foundation();
$(function() {
	$( ".datepicker" ).datepicker({
	  changeMonth: true,
	  changeYear: true
	});
	var myLanguage = {
	  lengthTooShortStart : 'Mas de '
	};

	$.validate({
	  language : myLanguage,
	});

	$( document ).on( "click", ".js-insert", function(e) {
	  $(".js-insert-file").append("<div class='box'> <input type='file'><a href='javascript:;' class='js-delete delete'>x</a></div>");
	});

	$( document ).on( "click", ".js-delete", function(e) {
	  $(this).parent().remove();
	});
	
	$( document ).on( "click", ".js-insert-family", function(e) {
	  $(".js-comp-family").append("<div class='large-6 columns'><div class='row'><div class='box clearfix'><div class='large-12 columns'><label>Nombre<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Edad<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Fecha de Nacimiento<input type='text' data-validation='length' data-validation-length='min2' class='datepicker'/></label></div><div class='large-12 columns'><label>Parentesco<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Estado Civil<select><option>Soltero</option><option>Casado</option><option>Union libre</option><option>Viudo</option><option>Separado</option></select></label></div><div class='large-12 columns'><label>Escolaridad<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Ocupación, cargo y empresa <input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Vive con el empleado<select><option>Si</option><option>No</option></select></label></div><div class='large-12 columns'><label>Teléfono<input type='text' data-validation='length' data-validation-length='min2'/></label></div><a href='javascript:;' class='delete js-delete-family'>x</a></div></div></div>");
	  $.validate({
		  language : myLanguage,
		});
	});

	$( document ).on( "click", ".js-delete-family", function(e) {
	  $(this).parents(".large-6").remove();
	});

	$( document ).on( "click", ".js-insert-trigger", function(e) {
	  $(".js-insert-income").append("<div class='large-6 columns'><div class='row'><div class='box clearfix'><div class='large-12 columns'><label>Nombre<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Aporte en el Hogar<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Tipo de Ingreso<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Patrimonio Representado en<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Valor<input type='text' data-validation='length' data-validation-length='min2'/></label></div><a href='javascript:;' class='delete js-delete-family'>x</a></div></div></div>");
		$.validate({
		  language : myLanguage,
		});
	});

	$( document ).on( "click", ".js-delete-income", function(e) {
	  $(this).parents(".large-6").remove();
	});

	$( document ).on( "click", ".js-insert-debts-trigger", function(e) {
	  $(".js-insert-debts").append("<div class='large-6 columns'><div class='row'><div class='box clearfix'><div class='large-12 columns'><label>Entidad<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Motivo<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>Cuota<input type='text' data-validation='length' data-validation-length='min2'/></label></div><div class='large-12 columns'><label>De quien<input type='text' data-validation='length' data-validation-length='min2'/></label></div><a href='javascript:;' class='delete js-delete-family'>x</a></div></div></div>");
		$.validate({
		  language : myLanguage,
		});
	});

	$( document ).on( "click", ".js-delete-debts", function(e) {
	  $(this).parents(".large-6").remove();
	});

});