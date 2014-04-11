// $('input[value="project"]').click(function () {
//       $("#project").toggle("slow");	
// });

// $('input[value="stagebedrijf"]').click(function () {
//       $("#stage").toggle("slow");	
// });

// $('[value="project"]').click(function () {
//       $("#project").toggle("slow");	
//     });

// $('[value="stagebedrijf"]').click(function () {
//       $("#stage").toggle("slow");	
//     });


// $('id="test1').click(function () {
//       $("#project").toggle("slow");	
//     });

// $('id="test2').click(function () {
//       $("#project").toggle("slow");	
//     });

// Responsive toggle menu
$(document).ready(function() {
  	  $('body').addClass('js');
		  var $menu = $('#menu'),
		  	  $menulink = $('.menu-link'),
		  	  $menuTrigger = $('.has-subnav > a');
		
		$menulink.click(function(e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
		});
		
		$menuTrigger.click(function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
		});		
});

// Tonen en verbergen van sitemap
$(document).ready(function(){

 	$("#verberg_sitemap").hide();

    $("#toon_sitemap").on("click", function(){
        $("#sitemap").toggle();
 		$("#toon_sitemap").hide();
 		$("#verberg_sitemap").toggle();
    });

    $("#verberg_sitemap").on("click", function(){
        $("#sitemap").hide();
 		$("#verberg_sitemap").hide();
 		$("#toon_sitemap").toggle();
    });   

});

// Tonen en verbergen van mededelingen
$(document).ready(function(){

 	$("#verberg_mededelingen").hide();

    $("#toon_mededelingen").on("click", function(){
        $(".mededeling").toggle();
 		$("#toon_mededelingen").hide();
 		$("#verberg_mededelingen").toggle();
    });

    $("#verberg_mededelingen").on("click", function(){
        $(".mededeling").hide();
 		$("#verberg_mededelingen").hide();
 		$("#toon_mededelingen").toggle();
    });   

});

// Tonen en verbergen van agendapunten
$(document).ready(function(){

 	$("#verberg_agendapunten").hide();

    $("#toon_agendapunten").on("click", function(){
        $(".agendapunt").toggle();
 		$("#toon_agendapunten").hide();
 		$("#verberg_agendapunten").toggle();
    });

    $("#verberg_agendapunten").on("click", function(){
        $(".agendapunt").hide();
 		$("#verberg_agendapunten").hide();
 		$("#toon_agendapunten").toggle();
    });   

});


// Kiezen tussen project of stage
$(document).ready(function(){

    $("#project_radio, #stage_radio").change(function () {
        if ($("#project_radio").is(":checked")) {
            $('#project_field').show();
 			$("#stage_field").hide();            
        }
        else if ($("#stage_radio").is(":checked")) {
            $('#stage_field').show();
 			$("#project_field").hide();              
        }
	
    });    

});