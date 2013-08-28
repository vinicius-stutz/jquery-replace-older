/*======================================
=         jQuery.replaceOlder          =
======================================*/

/**
*
* https://github.com/blablablabla
* Version: 0.1 of 27 Aug 2013
* Copyright 2013 - Vinícius Stutz
* Licensed under the MIT license
*
* WHY?
* 	- Because we always seek a compact and practical to enable this feature of HTML5 with older browsers!
*  	- And there's more: Works with the jQuery plugins forms validation (like this http://jqueryvalidation.org/)!
* 
* HOW TO USE?
* 	- Inside:
* 		$(document).ready(function(){});
*  	- Only do:
* 		$('input, textarea').placeholder();
*	- To change the color of the placeholder, place the following line in your CSS files:
*		.placeholder { color: #999; }
*
* Very easy to use! Too light to load (only 6 KB)!
*
**/

// O código está comentado em português, mas é só porque eu sou brasileiro :-)
(function(window, document, $) {

	// Variáveis do plugin
	var campoSuportado = 'placeholder' in document.createElement('input'),
		textAreaSuportado = 'placeholder' in document.createElement('textarea'),
		jQueryRegEx = /^jQuery\d+$/,
		prototype = $.fn,
		valor = $.valHooks, // http://stackoverflow.com/questions/6731153/what-are-jquery-valhooks
		propriedade = $.propHooks,
		ganchos,
		rOlder,
		campo,
		novosAtr,
		id,
		$element,
		$input,
		$inputs,
		$passwordInput,
		$subs,
		$this;

	// Verificações para a chamada correta do plugin
	if (campoSuportado && textAreaSuportado) {
		rOlder = prototype.rOlder = function() { return this; };
		rOlder.input = rOlder.textarea = true;
	} else {

		// Cria a chamada do plugin
		rOlder = prototype.rOlder = function() {
			$this = this;
			$this
				.filter((campoSuportado ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({ 'focus.placeholder': limparPlaceHolder, 'blur.placeholder': criarPlaceHolder })
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		// Colocando a casa em ordem...
		rOlder.input = campoSuportado;
		rOlder.textarea = textAreaSuportado;

		// Simula um get e set dos objetos
		ganchos = {
			'get': function(element) {
				$element = $(element);
				$passwordInput = $element.data('placeholder-password');
				if ($passwordInput) { return $passwordInput[0].value; }
				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				$element = $(element);
				$passwordInput = $element.data('placeholder-password');
				if ($passwordInput) { return $passwordInput[0].value = value; }
				if (!$element.data('placeholder-enabled')) { return element.value = value; }
				if (value == '') {
					element.value = value;
					if (element != document.activeElement) { criarPlaceHolder.call(element); }
				} else if ($element.hasClass('placeholder')) {
					limparPlaceHolder.call(element, true, value) || (element.value = value);
				} else { element.value = value; }
				return $element;
			}
		};

		// Alimenta os ganchos do jQuery com os objetos criados acima
		if (!campoSuportado) { valor.input = ganchos; propriedade.value = ganchos; }
		if (!textAreaSuportado) { valor.textarea = ganchos; propriedade.value = ganchos; }

		// Delegate
		$(function() {
			$(document).delegate('form', 'submit.placeholder', function() {
				$inputs = $('.placeholder', this).each(limparPlaceHolder);
				setTimeout(function() { $inputs.each(criarPlaceHolder); }, 10); // O bacalhau!
			});
		});

		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() { this.value = ''; });
		});

	}

	// Retorna os atributos
	function getNovoAtr(elem) {
		novosAtr = {};
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !jQueryRegEx.test(attr.name)) { novosAtr[attr.name] = attr.value; }
		});
		return novosAtr;
	}

	// Limpa
	function limparPlaceHolder(event, value) {
		campo = this;
		$input = $(campo);
		if (campo.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				if (event === true) { return $input[0].value = value; }
				$input.focus();
			} else {
				campo.value = '';
				$input.removeClass('placeholder');
				campo == document.activeElement && campo.select();
			}
		}
	}

	// A mágica
	function criarPlaceHolder() {
		campo = this;
		$input = $(campo);
		id = this.id;
		if (campo.value == '') {
			if (campo.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try { $subs = $input.clone().attr({ 'type': 'text' }); }
					catch(e) { $subs = $('<input>').attr($.extend(getNovoAtr(this), { 'type': 'text' })); }
					$subs
						.removeAttr('name')
						.data({ 'placeholder-password': $input, 'placeholder-id': id })
						.bind('focus.placeholder', limparPlaceHolder);
					$input
						.data({ 'placeholder-textinput': $subs, 'placeholder-id': id })
						.before($subs);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else { $input.removeClass('placeholder'); }
	}

}(this, document, jQuery));

/*-----  End of jQuery.replaceOlder  ------*/