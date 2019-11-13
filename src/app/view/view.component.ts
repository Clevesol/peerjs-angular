import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var Peer:any;


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit,AfterViewInit {


 getUserMedia = navigator.getUserMedia;
 // || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  public clientId:string;

  


  constructor() { }




  peer:any;

  ngOnInit() {

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


  ngAfterViewInit(){



  		navigator.getUserMedia({video: true, audio: true}, function(stream) {
  		document.querySelector('video').srcObject = stream;

	  }, function(err) {
	    console.log('Failed to get local stream' ,err);
	  });

	 

  }


  
	

}
