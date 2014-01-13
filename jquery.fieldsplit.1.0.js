/*
	FIELD SPLIT

	By: Ben Caplan
	Version: 1.0
	Born On: 01.06.2014
	Dependencies: jQuery

	This plugin will take one input and split its contents at the first " " (space) into two designated inputs.
	Please note: This plugin is not intended to have a group of objects passed to it, but rather one object per call.

	Update Log: 
		- 01.06.2014 (BC): Initial build 
*/
(function($){
	$.fn.fieldSplit = function(options){
		//ERROR CHECKS - number of elements
		if( this.length > 1 ) throw new Error('The selector that you are applying the .fieldSplit() method to targets more then one element. This plugin is intended to target only one element per call.');

		//PLUGIN SETTINGS
		var settings = $.extend({
			firstField : '#first_name',
			secondField : '#last_name'
		}, options);

		fn = $(settings.firstField);
		ln = $(settings.secondField);

		return this.each(function(){
			t = $(this);

			//ERROR CHECKS - is element an input?
			if( !t.is('input') ) throw new Error('The element that you are targeting has to be an input, you entered targeted a(n) '+ t.prop('tagName') + ' tag.');

			t.on('propertychange input', function(){
				//remove initial string of spaces (if present)
				v = t.val().replace(/^ +/ ,'');

				//two or more words
				if( v.indexOf(' ') > 0 ){
					//create array of words
					names = v.split(' ');
					//assign first word as first name
					fn.val( names[0] );
					//assign remaining words as last name
					if( Array.isArray(names) ) names.shift();//remove first name
					if( Array.isArray(names) ) names = names.join(' ');//merge array
					ln.val( names );
				}
				//only one word
				else if( v.length > 0 ){
					fn.val(v);
					ln.val(' ');
				}
				//no words
				else{
					fn.val('');
					ln.val('');
				}
			}); //.on('propertychange input')
		});//this.each()
	};//end $.fn.fieldSplit
})(jQuery);
