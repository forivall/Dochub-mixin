var dochub_url = "http://dochub.io";

Hooks.addMenuItem("Go/Search on dochub.io", "cmd-ctrl-h", function () {
	Recipe.run(function(r) {
		var wordrange = r.wordRangeForRange(r.selection);
		var word = r.textInRange(wordrange);	
		
		showPopover(word, wordrange);
		
	});
});

function showPopover (word, wordPosition) {
	var popover = new Popover(Editor.current(), wordPosition);
	
	var currentLanguage = "javascript";
	
	popover.size = {width: 800, height: 500};
	
	popover.url = dochub_url + "/#" + currentLanguage + "/" + word;
	
	popover.run();
}