var times2 = document.querySelectorAll('#playlist #container #playlist-items span.style-scope.ytd-thumbnail-overlay-time-status-renderer');

var duration2 = 0;var hour2 = 0;var min2 = 0;var sec2 = 0;var total_hour2 = 0;var total_min2 = 0;var total_sec2 = 0;
for(var i=0; i<times2.length; i++)
{
	console.log(times2[i]);
	var t = times2[i];
	var t = t.innerText;
	t = t.split(':');
	if (t.length == 3)
	{
		hour2 = t[0];
		min2 = t[1];
		sec2 = t[2];
	}
	if (t.length == 2)
	{
		hour2 = 0;
		min2 = t[0];
		sec2 = t[1];
	}
	duration2 = duration2 + parseInt(sec2) + parseInt(min2)*60 + parseInt(hour2)*3600;
}
total_hour2 = parseInt(duration2/3600);
duration2 = duration2 - (total_hour2*3600);
total_min2 = parseInt(duration2/60);
duration2 = duration2 - (total_min2*60);
total_sec2 = duration2;

console.log('TOTAL_TIME: ' + total_hour2 + ':' + total_min2 + ':' + total_sec2);

var newDiv2 = document.createElement('span');
newDiv2.style.background = 'deepskyblue';
newDiv2.style.fontSize = "15px";
newDiv2.style.padding = "2px";
newDiv2.style.fontWeight = "bold";
var newText2 = document.createTextNode(total_hour2 + ':' + total_min2 + ':' + total_sec2);
newDiv2.appendChild(newText2);
document.querySelector('#playlist #header-description').appendChild(newDiv2);

