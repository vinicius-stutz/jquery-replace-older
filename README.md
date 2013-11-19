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

##MIT License
The MIT License (MIT)

Copyright (c) 2013 Vinícius Stutz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Enjoy!
