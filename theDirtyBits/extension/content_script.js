
$(document).ready(function() {

var spell;
console.log('check working');

$('input, textarea, div[contenteditable="true"], .CodeMirror-line, ._1mf').on( 'keyup', function( event ) {
  //console.log('text is', $(this).text(), 'val is', $(this).val());
    console.log(event, $(this));
    var keyCode = event.which || event.keyCode;
    if ( keyCode === 32 ) {
      var  text=$(this)[0].textContent;

       text=text.split(' ');
       console.log(text);
       text=text[text.length-1];
      //chk that func
      text=text.toUpperCase();
      console.log(text);
      spellchk(text);
    }
  });

function spellchk(text)
{
var key="Y0SoTag6KC27kUGa";
text = text.replace(' ','+');
var spell_url = "https://api.textgears.com/check.php?text="+ text + "&key="+key ;
  $.getJSON (spell_url, function(data) {
    //console.log (data);
    spell = data;
    var xx = 'error';
    if (spell) {
        console.log (spell.errors[0]['better']);
      if (spell.errors.length == 0) {
        xx = ' ';
      }
    }

    var msg = new SpeechSynthesisUtterance(xx);
    window.speechSynthesis.speak(msg);
    if (xx === 'error') {
    suggestions();
  }
  });
}

function suggestions()
{
  var suggs = spell.errors[0]['better'];
  var str = "";
  for (val in suggs) {
    str += suggs[val];
    str += " , ";
  }
  alert("ERROR MESSAGE: " + str);
}
});
