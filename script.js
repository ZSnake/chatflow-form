$(function() {
		$("#send").click(function() {
		  //  $.ajax({
		  //   	type: "GET",
		  //     url: "https://chatflow.kitt.ai/users/5852f7138f68240100637b50/apps/d975273d.5e5ef8/api/hello?token=atk5ZE4K3aoBSz0jKG&input=" + $('#message').val(),
	    //     success: function(returnObj) {
	    //     			console.log(returnObj);
	    //     			if(returnObj.error) {
	 	  //               	console.log("error of some sort");
	 	  //               } else {
      //                 console.log(returnObj);
	 	  //               	$('#message').val(">" + $('#message').val() + "something");
	 	  //               }
			// 			}
			// });
      $.get('https://chatflow.kitt.ai/users/5852f7138f68240100637b50/apps/d975273d.5e5ef8/api/hello?token=atk5ZE4K3aoBSz0jKG&input=' + $('#message').val(), function(response){
          alert(response);
      })
		});
	});
