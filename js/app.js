//All the necessary variables

var keys = document.getElementsByClassName("key");
var sounds = document.getElementsByTagName("audio");
var itteration = keys.length;
//1. Create event listener for the keypress event

var keyboard = {
	//1.1 When the keypress occurs check what key was pressed
	keyCheck: function() {
		return event.keyCode;
	},
		//1.2.1 Add class "playing" to the <div element and ad playing property to <audio> element and remove them when the transition is over
	addState: function(div, audio) {
		div.classList.add("playing");
		audio.play();
		div.addEventListener("transitionend", function() {
			div.classList.remove("playing");
		});
	},
	keyInteraction: function(code) {
		var letterDiv;
		var audioElement;
	//1.2 If the keycode matches a certain key get koresponding <div> and <audio>
		for (var i = 0; i < itteration; i++) {
			if (keys[i].getAttribute("data-key") == code) {
				this.addState(keys[i], sounds[i]);
			}
		}		
	}
};

window.addEventListener("keydown", function() {
	var key = keyboard.keyCheck(event);
	keyboard.keyInteraction(key);
});



