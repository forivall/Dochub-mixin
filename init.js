Hooks.addMenuItem("Go/Search on dochub.io", "cmd-ctrl-h", function () {
	Recipe.run(function(r) {
		var wordrange = r.wordRangeForRange(r.selection);
		var word = r.textInRange(wordrange);	
		
		Alert.show("This " + word + " Dochub.io");
	});
});