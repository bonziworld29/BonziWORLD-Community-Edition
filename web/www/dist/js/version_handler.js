$(document).ready(function(){
    $.getJSON("./dist/json/version.json", function(result){
      $.each(result, function(i, field){
        $("#login_version").text("Version " + field + "");
		$("#ver_log").text("Version " + field + "");
    });
  });
});
