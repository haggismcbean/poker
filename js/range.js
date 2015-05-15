function Range(param) {
	var _this = this;
	this.percent = param.percent;
	this.hands = [];
	
	populateRange();

	function populateRange() {
		alert(_this.percent);
	}
}

Range.prototype.sortRange = function() {
	alert("Sorting range");
}

Range.prototype.removeDeadCard = function(param) {
	alert("Removing dead card");
}