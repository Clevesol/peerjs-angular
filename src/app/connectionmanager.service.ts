import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConnectionmanagerService {

  // public clientId:string;


  constructor() { }


/**

  peer:any;

  connect() {

  this.peer = new Peer();

  this.peer.on('open', (id) => {
  		this.clientId = id;
  		console.log(id);
  });


  this.peer.on('call', function(call) {
	  this.getUserMedia({video: true, audio: true}, function(stream) {
	    call.answer(stream); // Answer the call with an A/V stream.
	    call.on('stream', function(remoteStream) {
	      // Show stream in some video/canvas element.
	    });
	  }, function(err) {
	    console.log('Failed to get local stream' ,err);
	  });
	});


  }


   getUserMedia = navigator.getUserMedia;
   // || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


**/

}
