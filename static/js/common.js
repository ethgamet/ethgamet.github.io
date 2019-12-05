$(function() {
	$('#joinTab li:eq(0) a').tab('show');
	
	$('#participate-tab-panner .btn.ethNUm').click(function() {
		$('#participate-tab-panner .btn.ethNUm').removeClass('active');
		$(this).addClass('active');
		$('#sendEthInput').val($(this).find('.value').text());
	})
})

alertify.set('notifier', 'position', 'bottom-left');
// alertify.defaults.transition = "slide";
alertify.defaults.theme.ok = "btn btn-primary";
alertify.defaults.theme.cancel = "btn";
alertify.defaults.theme.input = "form-control";
var alert = function(html, style, autoclose, clodeCbk) {
	style = style === undefined ? 'error' : style;
	autoclose = autoclose === undefined ? 5 : autoclose;
	alertify.notify(html, style, autoclose, function() {
		if (typeof clodeCbk == 'function') clodeCbk();
	});
}

var timeDiffFormate = function(micro_second, formats, isFill) {
	formats = formats === undefined ? {
		d: '天',
		h: ':',
		m: ':',
		s: ''
	} : formats;
	isFill = isFill === undefined ? true : isFill;

	var day = Math.floor(micro_second / 86400000);
	var hour = Math.floor((micro_second / 3600000) % 24);
	var min = Math.floor((micro_second / 60000) % 60);
	var sec = Math.floor((micro_second / 1000) % 60);
	if (isFill) {
		hour = hour < 10 ? '0' + hour : hour;
		min = min < 10 ? '0' + min : min;
		sec = sec < 10 ? '0' + sec : sec;
	}
	var format = '';
	if (day > 0) {
		format = day + formats.d + hour + formats.h + min + formats.m + sec + formats.s;
	}
	if (day <= 0 && hour > 0) {
		format = hour + formats.h + min + formats.m + sec + formats.s;
	}
	if (day <= 0 && hour <= 0) {
		format = min + formats.m + sec + formats.s;
	}
	return format;

}
