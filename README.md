fieldSplit
==========

A jQuery Plugin that will split the contents of one input into two designated inputs after the first space. 

Notes
----------
The inteded use for this plugin is to take one input and dynamically split the typed value into two other fields. A good use case for this plugin (and the reason that it was originally developed) is if a form needs to submit a "first-name" and a "last-name", but for the user experience, you only want to offer your audience one visible "name" field. You will then want to the contents of the one field to be split after the first space to break the name into first name and last name. 

*This is of course a generealization of how people's names are written, but seem to generally get the job done.*

Use
----------
Consider you wrote the following HTML:
```
<form action="">
  <ul>
    <li><input type="text" id="fieldToSplit" name="full_name" placeholder="name" /></li>
  </ul>
</form>
```
To use this plugin, I woudl suggest changing your HTML to the following:
```
<form action="">
  <input type="hidden" name="first_name" id="firstField" />
  <input type="hidden" name="last_name" id="secondField" />
  <ul>
    <li><input type="text" id="fieldToSplit" placeholder="name" /></li>
  </ul>
</form>
```
Note that I removed the "name" attribute from the initial input and added two hidden inputs that will receive the split field content. 

Now it is time for the JavaScript! This plugin is dependant upon jQuery, so you will want to make sure that you first include jQuery on your page, like so:

`<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>`

You will now want to include the fieldSlipt plugin from this repo (once you have downloaded it of course) like so:

`<script src="js/jquery.fieldsplit.current.js"></script>`

Now you need to create a "custom" function inside of a document ready statement that will run the fieldSplit Method on your desired field:

```
<script>
	jQuery(function($){
		$('#fieldToSplit').fieldSplit();
	});
</script>
```
In the above code `#fieldToSplit` is the id of the targeted HTML input that you want to have split into two fields. By defualt this plugin will split that field into two other inputs, one with the id of 'first_name' and the second with the id of 'last_name'. If you would like to customize the field target, or if you have more than one field you want to split, you can modify your code to specify the field targets as follows:

```
<script>
  jQuery(function($){
    $('#fieldToSplit').fieldSplit({
        firstField : '#firstField',
        secondField : '#secondField'
    });
  });
</script>
```
In this code segment, note that the `firstField` will get the content before the first space and `secondField` will get the rest of the content entered into `#fieldToSplit`. 

That is it. You are good to go! One last thing worth noting is that the jQuery object that you apply the `.fieldSplit()` method to should only have one object in it. In other words, only target one element to be split (so selectors that have id's tend to be a good bet). 

Happy coding :-)
