//The Basic Woking of the app.
$('#elec_head').on("click",function()
{
	$('.elec_sub').slideToggle(500);
});
$('#clo_head').on("click",function()
{
	$('.clo_sub').slideToggle(500);
});
$('#fur_head').on("click",function()
{
	$('.fur_sub').slideToggle(500);
});
$('#gro_head').on("click",function()
{
	$('.gro_sub').slideToggle(500);
});
//Removes the previouly slided content.
function slide_up()
{
	$(".sm-content").slideUp(10);
	$(".wm-content").slideUp(10);
	$(".tv-content").slideUp(10);
	$(".clomen-content").slideUp(10);	
	$(".clowomen-content").slideUp(10);
	$(".bed-content").slideUp(10);
	$(".lvr-content").slideUp(10);
	$(".gromen-content").slideUp(10);
	$(".growomen-content").slideUp(10);
}
//Basic click events.
$(".sm").on("click",function()
{
	slide_up();
	$(".sm-content").fadeToggle(500);
});
$(".wm").on("click",function()
{
	slide_up();
	$(".wm-content").fadeToggle(500);
});
$(".tv").on("click",function()
{
	slide_up();
	$(".tv-content").fadeToggle(500);
});
$(".clomen").on("click",function()
{
	slide_up();
	$(".clomen-content").fadeToggle(500);
});
$(".clowomen").on("click",function()
{
	slide_up();
	$(".clowomen-content").fadeToggle(500);
});
$(".bed").on("click",function()
{
	slide_up();
	$(".bed-content").fadeToggle(500);
});
$(".lvr").on("click",function()
{
	slide_up();
	$(".lvr-content").fadeToggle(500);
});
$(".gromen").on("click",function()
{
	slide_up();
	$(".gromen-content").fadeToggle(500);
});
$(".growomen").on("click",function()
{
	slide_up();
	$(".growomen-content").fadeToggle(500);
});
$('ul').on("click","li",function(e)
{
	e.stopPropagation();
});
//The main functionality
//SmartPhone
$('#sm-dis-data').on("keypress",function(e)
{
	var newdatas = $('.smnew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "sm";
		$('.sm-discussion').append("<div class='smnew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='smcom-data'"+">" + "</div>");
		$(this).val("");
		$('.sm-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".smcom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//Washing Machine
$('#wm-dis-data').on("keypress",function(e)
{
	var newdatas = $('.wmnew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "wm";
		$('.wm-discussion').append("<div class='wmnew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='wmcom-data'"+">" + "</div>");
		$(this).val("");
		$('.wm-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".wmcom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//TV
$('#tv-dis-data').on("keypress",function(e)
{
	var newdatas = $('.tvnew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "tv";
		$('.tv-discussion').append("<div class='tvnew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='tvcom-data'"+">" + "</div>");
		$(this).val("");
		$('.tv-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".tvcom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//Men-Clothing
$('#clomen-dis-data').on("keypress",function(e)
{
	var newdatas = $('.clomennew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "clomen";
		$('.clomen-discussion').append("<div class='clomennew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='clomencom-data'"+">" + "</div>");
		$(this).val("");
		$('.clomen-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".clomencom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//Women - Clothing
$('#clowomen-dis-data').on("keypress",function(e)
{
	var newdatas = $('.clowomennew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "clowomen";
		$('.clowomen-discussion').append("<div class='clowomennew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='clowomencom-data'"+">" + "</div>");
		$(this).val("");
		$('.clowomen-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".clowomencom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//BedRoom
$('#bed-dis-data').on("keypress",function(e)
{
	var newdatas = $('.bednew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "bed";
		$('.bed-discussion').append("<div class='bednew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='bedcom-data'"+">" + "</div>");
		$(this).val("");
		$('.bed-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".bedcom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//Living Room
$('#lvr-dis-data').on("keypress",function(e)
{
	var newdatas = $('.lvrnew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "lvr";
		$('.lvr-discussion').append("<div class='lvrnew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='lvrcom-data'"+">" + "</div>");
		$(this).val("");
		$('.lvr-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".lvrcom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//Grooming - men
$('#gromen-dis-data').on("keypress",function(e)
{
	var newdatas = $('.gromennew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "gromen";
		$('.gromen-discussion').append("<div class='gromennew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='gromencom-data'"+">" + "</div>");
		$(this).val("");
		$('.gromen-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".gromencom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});
//Grooming - Women
$('#growomen-dis-data').on("keypress",function(e)
{
	var newdatas = $('.growomennew-data');
	if (e.which == 13 && ($(this).val() != "")) 
	{
		var len = (newdatas.length) + "growomen";
		$('.growomen-discussion').append("<div class='growomennew-data'>" + "<ul id=" +"'"+len+"'"+">"
		+ $(this).val() + "</ul><input type='text' placeholder='Add a comment here..' id=" +"'"+len+"'"+"class='growomencom-data'"+">" + "</div>");
		$(this).val("");
		$('.growomen-discussion').fadeIn(500);
	}
});
$(document).on("keypress",".growomencom-data",function(e)
{
	if (e.which == 13 && ($(this).val() != ""))
	{
		var app = ("ul" + "#" + $(this).attr("id"));
		
		$(app).append("<li>" + $(this).val() + "</li>");
		$(this).val("");
	}
});