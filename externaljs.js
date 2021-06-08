$(document).ready(function(){
    console.log("ready");

    let v = 1;
    $("#firstbutton").html("Click To Hide");
   
    $("#firstbutton").on("click", function( event ) {
      $("#para1").toggle();
      v = v*-1;
      console.log(v);

      if(v == 1) {
            $("#firstbutton").html("Click To Hide");
      };
  
      if(v == -1){
          $("#firstbutton").html("Click To Reveal");
      }
      
       
    });

   

    $("#divbutton").html("Click to test .add()");
    $("#divbutton").on("click", function( event ) {
      
      $( "#div1" ).css( "border", "2px solid red" )
      .add( "#div1" ).css( "background", "yellow" );
      
    });

    $("#div1button").html("Click to test .children()");
    $("#div1button").on("click", function( event ) {
      
      $( "#div1" ).children( ".subc" ).html( "Poof");
      
    });

    $("#div2button").html("Click to test .each()");
    $("#div2button").on("click", function( event ) {
      $( "#div1" ).each(function( i ) {
        if ( this.style.color !== "blue" ) {
          this.style.color = "blue";
        } else {
          this.style.color = "red";
        }
      });
    });

    
    $("#filt").html("Click to test .filter()");
    $("#filt").on("click", function( event ) {
        $( ".pbox" ).css( "background", "#b4b0da" );

        $(".pbox").filter(function( index ) {
            return index === 0 || $( this ).attr( "id" ) === "sixth";
          })
            .css( "border", "3px double red" );
      
    });

    $("#findb").html("Click to test .find()");
    $("#findb").on("click", function( event ) {
        
      $( "p" ).find( "span" ).css( "color", "red" );
        
    });

    $("#firstb").html("Click to test .first()");
    $("#firstb").on("click", function( event ) {
        
      $( "ul li" ).first().css( "background-color", "yellow" );;
        
    });

    $("#lastb").html("Click to test .last()");
    $("#lastb").on("click", function( event ) {
        
      $( "ul li" ).last().css( "background-color", "yellow" );
        
    });

    $("#hasb").html("Click to test .has()");
    $("#hasb").on("click", function( event ) {
        
      $( "li" ).has( "ul" ).css( "background-color", "red" );
        
    });

    $("#notb").html("Click to test .not()");
    $("#notb").on("click", function( event ) {

      $( "li" ).not( document.getElementById( "notli" ) )
      .css( "background-color", "teal" );

    });

    $("#parb").html("Click to test .parent()");
    $("#parb").on("click", function( event ) {

      $( "li#item4a" ).parent().css( "background-color", "green");

    });

    $("#parsb").html("Click to test .parents()");
    $("#parsb").on("click", function( event ) {

      $( "#dlist #item4a" ).parents().css( "background-color", "green");

    });

    $("#parsbc").html("Clear .parents()");
    $("#parsbc").on("click", function( event ) {

      $( "#dlist #item4a" ).parents().css( "background-color", "white");

    });

    $("#sib").html("Click to test .siblings()");
    $("#sib").on("click", function( event ) {

      $( "#dlist #item2a" ).siblings().css( "background-color", "purple" );

    });


    $( "#hovertest" ).hover(
      function() {
        $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
        $( this ).find( "span" ).last().remove();
        }
        
    );
      
  
    $("#ontest").on("click", function(){
      alert("On test Completed");
    }); 


    let j = 1;

    $("#offtog").html("Click To Hide Offtest");
    
    $("#offfade").html("Click to test .fadeIn() and .fadeOut()");
    $("#offfade").on("click", function( event ) {

      $("#offtest").fadeOut();
      $("#offtest").fadeIn();
      
    });

    $("#offfadet").html("Click to test .fadeToggle()");
    $("#offfadet").on("click", function( event ) {

      $("#offtest").fadeToggle();
      
    });

    $("#offtog").on("click", function( event ) {
      $("#offtest").toggle();
      

      j = j*-1;
      

      if(j == 1) {
          $("#offtog").html("Click To Hide Offtest");
      };
  
      if(j == -1){
          $("#offtog").html("Click To Reveal Offtest");
      }
      
       
    });

    $("#offt").html("test .off() for Offtest Toggle");
    $("#offt").on("click", function( event ) {
      $("#offtog").off("click");
        
    });

    $( ".target" ).change(function() {
        alert( ".change actuacted" );
      });

    $( "#targ" ).blur(function() {
      alert( ".blur() actuated" );
    })
    
    $( "#targe" ).focus(function() {
        alert( "focus() actuated" );
      });
     
    $("#hideb").html("test .hide()");
    $("#hideb").click(function(){
      $("#hidetest").hide();
    });

    $("#showb").html("test .show()");
    $("#showb").click(function(){
      $("#hidetest").show();
    });

    $("#slub").html("test .slideUp()");
    $("#slub").click(function(){
      $("#hidetest").slideUp();
    });

    $("#sldb").html("test .slideDown()");
    $("#sldb").click(function(){
      $("#hidetest").slideDown();
    });

    $("#sltb").html("test .slideToggle()");
    $("#sltb").click(function(){
      $("#hidetest").slideToggle();
    });

    $("#hcb1").click(function(){
        alert($("#hcb1").hasClass("yesclass"));
    });

    $("#hcb2").click(function(){
        alert($("#hcb2").hasClass("yesclass"));
    });

    $("#hcb3").click(function(){
        alert($("#hcb3").hasClass("yesclass"));
    });

    $("#rmc1").click(function(){
        $("#hcb1").removeClass("yesclass");
    });

    $("#adc1").click(function(){
        $("#hcb1").addClass("yesclass");
    });

    $("#tc1").click(function(){
        $("#hcb3").toggleClass("yesclass");
    });

    $("#attb").click(function(){
        $("#goog").attr("alt", "bigbrother" );
    });

    $("#adaf").click(function(){
        $("#app").after("TextAfter")
    });
    $("#adbf").click(function(){
        $("#app").before("TextBefore")
    });
    $("#appendb").click(function(){
        $("#app").append("Appended")
    });
    $("#prependb").click(function(){
        $("#app").prepend("Prepended")
    });
    $("#appendtb").click(function(){
        $("<span>AppendTo</span>").appendTo("#app1")
    });
    $("#prependtb").click(function(){
        $("<span>PrependTo</span>").prependTo("#app1")
    });
    $("#rmvb").click(function(){
        $("#app").remove()
    });
    $("#repl").click(function(){
        $("<span>Replaced!</span>").replaceAll("#app1")
    });
    $("#replw").click(function(){
        $("#app2").replaceWith("<span>Replaced With</span>")
    });
});

