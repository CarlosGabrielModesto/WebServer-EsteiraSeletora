function inicio() {
  $("#aa").hide();
  $("#bb").hide();
  $("#cc").hide();
}

  function uni() {
    $("#aa").fadeIn("slow");
    $("#aa").show();
    $("#bb").hide();
    $("#cc").hide();
    $("#1").css({"background": "#808080", "color": "#ffffff"});
    $("#2").css({"background": "#333333", "color": "#ffffff"});
    $("#3").css({"background": "#333333", "color": "#ffffff"});
  }
    
  function emb(){
      $("#bb").fadeIn("slow");
      $("#aa").hide();
      $("#bb").show();
      $("#cc").hide();
      $("#1").css({"background": "#333333", "color": "#ffffff"});
      $("#2").css({"background": "#808080", "color": "#ffffff"});
      $("#3").css({"background": "#333333", "color": "#ffffff"});
    }

  function cai() {
    $("#cc").fadeIn("slow");
    $("#cc").show();
    $("#bb").hide();
    $("#aa").hide();
    $("#1").css("background", "#333333");
    $("#2").css("background", "#333333");
    $("#3").css("background", "#808080");
  }

update();