# REplaceOlder for jQuery

####A jQuery plugin for placeholder in older browsers

##How to use?
- In `$(document).ready(function(){});` section;
- Put `$('input, textarea').placeholder();` code;
- Change the color of placeholder with `.placeholder { color: #999; }` in your CSS;
- Done!

##Features:
- Very easy to use! Too light to load (only 6 KB)!
- Work in all browsers!
 
##Install:
```html
    <script src="http://code.jquery.com/jquery-latest.js"></script>
		<script src="jquery.replaceOlder.js"></script>
```
##The code:
```html
		<script type="text/javascript">
			$(document).ready(function() {
				$('input, textarea').rOlder();
			});
		</script>
	 	<style type="text/css">
			.placeholder { color: #999; }
	 	</style>
```
##The html:
```html
		<form action="#" method="post">
			<p>
				<label for="name">Nome:</label><br />
				<input type="text" name="name" id="name" placeholder="Informe seu nome completo" tabindex="1" />
			</p>
			<p>
				<label for="mail">Endereço de e-mail:</label><br />
				<input type="text" name="mail" id="mail" placeholder="Informe seu e-mail" tabindex="2" />
			</p>
			<p>
				<label for="message">Mensagem:</label><br/ >
				<textarea name="message" id="message" placeholder="Escreva aqui sua mensagem" tabindex="3"></textarea>
			</p>
		</form>
```
##Links:
- Plugin page <http://vinicius-stutz.github.io/jquery.replaceOlder>
- Official website <http://www.vinicius-stutz.com/>

Enjoy!
