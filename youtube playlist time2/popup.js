// 컨텐츠 페이지를 대상으로 코드를 실행
chrome.tabs.executeScript({
	file: 'youtube_playlist_total_time.js'
});

// chrome.tabs.executeScript({
// 	code:'document.querySelector("body").innerText'
// }, function(result){
// 	console.log(result);
// });
