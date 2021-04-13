var times1 = document.querySelectorAll('.ytd-playlist-video-renderer span.style-scope.ytd-thumbnail-overlay-time-status-renderer');


var duration1 = 0;var hour1 = 0;var min1 = 0;var sec1 = 0;var total_hour1 = 0;var total_min1 = 0;var total_sec1 = 0;
for(var i=0; i<times1.length; i++)
{
	var t = times1[i];
	var t = t.innerText;
	t = t.split(':');
	if (t.length == 3)
	{
		hour1 = t[0];
		min1 = t[1];
		sec1 = t[2];
	}
	if (t.length == 2)
	{
		hour1 = 0;
		min1 = t[0];
		sec1 = t[1];
	}
	duration1 = duration1 + parseInt(sec1) + parseInt(min1)*60 + parseInt(hour1)*3600;
}
total_hour1 = parseInt(duration1/3600);
duration1 = duration1 - (total_hour1*3600);
total_min1 = parseInt(duration1/60);
duration1 = duration1 - (total_min1*60);
total_sec1 = duration1;

console.log('TOTAL_TIME: ' + total_hour1 + ':' + total_min1 + ':' + total_sec1);

// document.getElementById('total_time').innerHTML = total_hour1 + ':' + total_min1 + ':' + total_sec1;

var newDiv1 = document.createElement('span');
newDiv1.style.background = 'deepskyblue';
newDiv1.style.fontSize = "20px";
newDiv1.style.padding = "2px";
newDiv1.style.fontWeight = "bold";
var newText1 = document.createTextNode(total_hour1 + ':' + total_min1 + ':' + total_sec1);
newDiv1.appendChild(newText1);
document.querySelector('.ytd-playlist-sidebar-renderer').appendChild(newDiv1);
