$(document).ready(function() {
	$(".add-section").hide();
	$(".add-command").hide();

    $(".add").click(function() {
	    $(".add-section").slideToggle();
	});
    
    var sections = [];
    
    $(".submit").click(function() {
	    var sectionHead = $(".section-head").val();

	    $(".section-head").val("");

	    if (!sectionHead) {
	    	return;
	    }
    
	    var section = {
		    "title": sectionHead,
		    "cheats": []
	    }

	    var selectedSection = sections.filter(function(item) {
	    	return item.title === section.title;
	    });


	    if (selectedSection.length === 0) {
	    	sections.unshift(section);
	    } else {
			// Show error, duplication section
	    	return
	    }
    
	    //storage = {}
	    //storage["todo"] = notes;
	    //browser.storage.local.set(storage);

	    localStorage.quickcheat = JSON.stringify(sections);
    
	    getSections();
		$(".add-section").slideUp();
    });
    
    function getSections() {

	    /*browser.storage.local.get("todo").then(function(storedNotes) {
		    notes = storedNotes.todo;
		    if (notes === undefined || notes.length === 0) {
		        notes = [];
		        $(".empty").fadeIn();
		    } else {
		    	$(".empty").fadeOut();
		    }

		    console.log(notes);

		    updateNotes();
	    });*/

	    if (!localStorage.quickcheat || localStorage.quickcheat === "[]") {
		    sections = [];
		    $(".empty").fadeIn();
		} else {
		    $(".empty").fadeOut();
		    sections = JSON.parse(localStorage.quickcheat);
		}

		
		updateSections();
    }
    
    function updateSections() {
		var sectionsHtml = "";
		
	    
   
	    sections.forEach(function(elem) {
			var commandsHtml = "";

			elem.cheats.forEach(function(command) {

				commandHtml = "<div class='command'>" +
									"<div class='card-header'>" +
										"<span><strong>" + command.title + "</strong></span>" +
		                    			"<span>" +
		                        			"<span class='edit-command'>" +
		                            			"<img src='edit.svg'>" +
		                        			"</span>" +
		                        			"<span class='remove-command'>" +
		                            			"<img src='remove.svg'>" +
		                        			"</span>" +
		                    			"</span>" +
									"</div>" +
									"<div class='command-body'>" +
										command.body +
									"</div>" +
							   "</div>";
				commandsHtml += commandHtml;
			});

			commandsHtml = "<div class='cheat-commands'>" +
								commandsHtml +
			               "</div>"

		    sectionHtml = "<div class='card'>" +
		                		"<div class='card-header'>" +
		                    		"<span><strong>" + elem.title + "</strong></span>" +
									"<span>" +
										"<span class='command-add'>" +
											"<img src='add-command.svg'>" +
										"</span>" +
										"<span class='show-all'>" +
											"<img src='vert.svg'>" +
										"</span>" +
		                        		"<span class='remove'>" +
		                            		"<img src='remove.svg'>" +
		                        		"</span>" +
		                    		"</span>" +
		                		"</div>" +
								"<div class='card-body'>" +
										"<div class='add-command'>" +
											"<input type='text' class='command-head command-input' placeholder='Command tile or usecase or anything (should be unique in this section)...'>" +
											"<textarea rows='4' cols='2' class='command-head command-body' placeholder='Note text ...'></textarea>" +
											"<div class='submit-command'>" +																									
        										"<img src='done.svg'>" +																									
											"</div>" +
										"</div>" +
										commandsHtml +																		
								"</div>" +
		               	   "</div>";
		    sectionsHtml += sectionHtml;
	    });
    
		$(".sections").html(sectionsHtml);

		$(".add-command").hide();
		
		$(".command-add").click(function() {
			$(this).parent().parent().next().children().first().slideToggle();
		});

		$(".show-all").click(function() {
			$(this).parent().parent().next().children(".cheat-commands").slideToggle();
		});

	    $(".remove").click(function() {
	    	var key = $(this).parent().prev().text();
	    	sections = sections.filter(function(item) {
	    		return item["title"] !== key;
	    	});
	    	
	    	//storage = {}
	        //storage["todo"] = notes;
	        //browser.storage.local.set(storage);

	        localStorage.quickcheat = JSON.stringify(sections);
	        getSections();
		});

		$(".remove-command").click(function() {
			var sectionTitle = $(this).parent().parent().parent().parent().parent().prev().text();
			var commandTitle = $(this).parent().prev().text()

			section = sections.filter(function(item) {
	    		return item["title"] === sectionTitle;
			});
			
			section = section[0]
			section.cheats = section.cheats.filter(function(item) {
				return item["title"] !== commandTitle;
			});

			localStorage.quickcheat = JSON.stringify(sections);
	        getSections();
		});

		$(".edit-command").click(function() {
			var commandTitle = $(this).parent().prev().text();
			var commandBody = $(this).parent().parent().next().text();

			$(this).parent().parent().parent().parent().prev().children().first().val(commandTitle);
			$(this).parent().parent().parent().parent().prev().children().first().next().val(commandBody);
			$(this).parent().parent().parent().parent().prev().slideDown();
		});
		
		$(".submit-command").click(function() {
			var sectionTitle = $(this).parent().parent().prev().text();
			
			section = sections.filter(function(item) {
				return item["title"] === sectionTitle;
			});

			section = section[0];

			commandTitle = $(this).prev().prev().val();
			commandBody = $(this).prev().val();

			$(this).prev().prev().val("");
			$(this).prev().val("");

			if (commandTitle.length === 0 || commandBody.length === 0) {
				return;
			}


			var newCommand = {
				"title": commandTitle,
				"body": commandBody
			}

			var duplicate = section.cheats.filter(function(item) {
				return item["title"] === newCommand.title;
			});

			if (duplicate.length !== 0) {
				duplicate[0].body = newCommand.body;
			} else {
				section.cheats.unshift(newCommand);
			}

			localStorage.quickcheat = JSON.stringify(sections);

			getSections();
		});

	    //$(".edit").click(function() {
	    	//$(".note-head").val($(this).parent().prev().text());
	    	//$(".note-body").val($(this).parent().parent().next().text());
//
	    	//$(".add-note").slideDown();
		//});
		
		//$(".edit").click(function() {
	    	//$(".note-head").val($(this).parent().prev().text());
	    	//$(".note-body").val($(this).parent().parent().next().text());
//
	    	//$(".add-note").slideDown();
	    //});
    }

    getSections();

});

