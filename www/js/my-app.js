// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

	var deviceModel = device.model;
	var deviceVersion = device.version;
	var devicePlatform = device.platform;
	var deviceUuid = device.uuid;
	var deviceManufacturer = device.manufacturer;
	var isSim = device.isVirtual;
	var deviceSerial = device.serial;

   document.getElementById("r1").innerHTML = deviceModel;
   document.getElementById("r2").innerHTML = deviceVersion;
   document.getElementById("r3").innerHTML = devicePlatform;
   document.getElementById("r4").innerHTML = deviceUuid;
   document.getElementById("r5").innerHTML = deviceManufacturer;
   document.getElementById("r6").innerHTML = isSim;
   document.getElementById("r7").innerHTML = deviceSerial;
	// var permissions = cordova.plugins.permissions;
 
	// permissions.hasPermission( permissions.CAMERA, success, null);
	 
	// function error() {
	  // alert('Camera or Accounts permission is not turned on');
	// }
	 
	// function success( status ) {
	  // if( !status.hasPermission ) {
	  
		// permissions.requestPermissions(
		  // permissions.CAMERA,
		  // function(status) {
			// if( !status.hasPermission ) error();
		  // },
		  // error);
	  // }
	// }
  
  // Camera function
	document.getElementById("cameraTakePicture").addEventListener 
	   ("click", cameraTakePicture); 

	function cameraTakePicture() { 

	   navigator.camera.getPicture(onSuccess, onFail, {  
		  quality: 50, 
		  destinationType: Camera.DestinationType.FILE_URI  
	   });  
	   
	   function onSuccess(imageURI) { 
		  var image = document.getElementById('myImage'); 
		  image.src = imageURI; 
	   }  
	   
	   function onFail(message) { 
		  alert('Failed because: ' + message); 
	   } 
	}
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})