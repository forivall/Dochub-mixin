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
	
	var currentLanguage = getLanguage();
	
	if(currentLanguage == "unkown") {
		Alert.show("Unkown Language", "This language is not kown by dochub.io");
	} else {
		popover.size = {width: 800, height: 500};	
		popover.url = dochub_url + "/#" + currentLanguage + "/" + word;	
		popover.run();	
	}
}

function getLanguage () {
	var scope = Document.current().rootScope();
	
	var knownLanguages = ["js", "php", "css", "html"];
	
	var scopeLanguage = "unkown";
	
    var scopeArray = scope.split(".");
    
	knownLanguages.forEach(function(element, index, array) {
		var indexOfResult = scopeArray.indexOf(element);
		Alert.show("Debug", element);
		
		if(indexOfResult > -1) {
			scopeLanguage = element;
		}
	});
	
	//@TODO: if scope is js also search in dom and jquery
	if(scopeLanguage == "js") scopeLanguage = "javascript";
	
	return scopeLanguage;
}