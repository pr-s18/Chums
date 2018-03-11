
$(document).ready(function() {

console.log('hi');

$( '#box' ).on( 'keyup', function( event ) {
    var keyCode = event.which || event.keyCode;
    if ( keyCode === 32 ) {
      var text = $( this ).val();
      //chk that func
      console.log(text);
    }
  });
function spellchk(text)
{
var spell;
var key="Y0SoTag6KC27kUGa";
text = text.replace(' ','+');
var spell_url = "https://api.textgears.com/check.php?text="+ text + "&key="+key ;
  $.getJSON (spell_url, function(data) {
    //console.log (data);
    spell = data;
    var xx = 'yes';
    if (spell) {
        console.log (spell.errors);
      if (spell.errors.length == 0) {

        xx = 'no';
      }
    }

    var msg = new SpeechSynthesisUtterance(xx);
    window.speechSynthesis.speak(msg);
  });
}
});
