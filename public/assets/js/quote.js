Number.prototype.toMoney = function(decimals, decimal_sep, thousands_sep)
{ 
   var n = this,
   c = isNaN(decimals) ? 2 : Math.abs(decimals), //if decimal is zero we must take it, it means user does not want to show any decimal
   d = decimal_sep || '.', //if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator)

   /*
   according to [http://stackoverflow.com/questions/411352/how-best-to-determine-if-an-argument-is-not-sent-to-the-javascript-function]
   the fastest way to check for not defined parameter is to use typeof value === 'undefined' 
   rather than doing value === undefined.
   */   
   t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, //if you don't want to use a thousands separator you can pass empty string as thousands_sep value

   sign = (n < 0) ? '-' : '',

   //extracting the absolute value of the integer part of the number and converting to string
   i = parseInt(n = Math.abs(n).toFixed(c)) + '', 

   j = ((j = i.length) > 3) ? j % 3 : 0; 
   return sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ''); 
};
var roomCount = 1;
function validateForm() {
	var area = 0;
	var w = 0;
	var l = 0;
	var success = true;

	for(var i = 1; i <= roomCount; i++) {
		w = parseInt($('#width' + i).val(),10);
		l = parseInt($('#length' + i).val(),10);

		if(isNaN(w) || isNaN(l)) {
			alert('Please enter a number of feet for all entries');
			success = false;
			break;
		}

		area += (w * l);
		// console.log("i=" + i + ', ' + w + "*" + l);
	}

	if(success) {
		var cost = ((area * 35)/100);
		if(cost < 135) {
			(cost).toMoney(2, '.', ',');
			$('#quote').html('<p class="error">The price for this job will be $' + cost + '.<br /> Unfortunately we have a minimum of $135.00');
		} else {
			(cost).toMoney(2, '.', ',');
			$('#quote').html('<p>Your price will be $' + cost + '</p>');
		}
	}
}
function addRoom() {

	var num = roomCount + 1;
	var newRoom = '<div id="room' + num + '">' +
		'<input id="width' + num + '" type="text" value="Width">' +
		'&nbsp;feet by <input id="length' + num + '" type="text" value="Length">&nbsp;feet' +
		'&nbsp;<button class="btn" onclick="removeRoom(' +
		num + 
		');"><i class="icon-minus"></i></button>' +
		'<br />' +
		'</div>';

	$(newRoom).insertAfter('#room' + roomCount);

	roomCount++;
}
function removeRoom(val) {
	if(roomCount == 1) return;

	$('#room' + roomCount).remove();
	roomCount--;
}