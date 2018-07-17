$("document").ready(()=>{
	var apikey = "67c3cad1";

	$("#list").hide();
	$("#buttonTitle").click(()=>{
		
		let enteredTitle = $("#enterTitle").val();
		let enteredYear = $("#enterYearTitle").val();
		if(enteredTitle == "" || enteredTitle == undefined){
			alert("Please enter the title to get movie details");	
		}
		else{
		getAllDataTitle(enteredTitle,enteredYear);
		}
	})
	
	let getAllDataTitle = (enteredTitle,enteredYear) =>{
		console.log("Making request");

		$.ajax({
			type : "GET" ,
			dataType : "json" ,
			async : true,
			url : "http://www.omdbapi.com/?apikey="+apikey+"&t="+enteredTitle +"&y=" +enteredYear,

			success : (response)=>{
				let data = response;
				if(response.Response == "False"){
				alert("No movie found with these details");
				}
				else{
				//Applying dummy picture if poster is unavailable	
				if(data.Poster != "" && data.Poster != undefined && data.Poster != "N/A" ){
				$('#poster').attr('src', data.Poster );
					}
				else{
					$("#poster").attr('src' , "http://polyureashop.studio.crasman.fi/pub/web/img/no-image.jpg")
				}
				{
				
				 $("#title").text(data.Title); // done
				 $("#generation").text(data.Genre); //done
				 $("#type").text(data.Type); // done
				 $("#language").text(data.Language); // done
				 $("#actors").text(data.Actors); //done
				 $("#plot").text(data.Plot); // done
				 $("#writer").text(data.Writer); // done
				 $("#director").text(data.Director); // done
				 $("#awards").text(data.Awards); // done
				 $("#rated").text(data.Rated); // done
				 $("#country").text(data.Country);
				 $("#imdbID").text(data.imdbID);
				 $("#imdbrate").text(data.imdbRating);
				 $("#list").show();
				 
				 //hiding totalSeasons if type is movie
					if(data.Type == "series"){
					$("#seasonNo").show();
					$("#seasons").text(data.totalSeasons);}
					 else{
						 $("#seasonNo").hide();
					 }
				 
			}
				}
			
		},
		error : (error)=> {
			alert("Please check your connection. Please make sure that you have active internet connection");
		}
	})
	}
	
	
})