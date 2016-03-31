/*
* the initail mod reset
* @Author:      dingyantao
* @CreateDate:  2014-12-4
*/
(function ($) {
    var ResetControl = function (pTask) {
		var _task = pTask || [],
            _isLock = false,            
            bindEvent = function(){
            	var me = this;
                $(window).bind('resize.reset', function (event) {
                    fire.call(me);
                    if (_task.length === 0) {
                        $(window).unbind('resize.reset', arguments.callee);
                    }
                });
            }, fire = function () {
                    //��ǰҳ��ɼ��߶�
                var _iHeight = Math.min(window.innerHeight, document.documentElement.clientHeight),
                    //ҳ������߶�
                    _wHeight = Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.clientHeight, document.body.scrollHeight),
                    //ҳ������ʵ�ʸ߶�
                    _bHeight = document.body.offsetHeight,
                    _resetHeight = 0;
                if (_iHeight > _bHeight) {
                    //��ǰҳ��ɼ��߶� - ҳ������ʵ�ʸ߶�
                    _resetHeight = _iHeight - _bHeight;
                } else {
                    //��ǰҳ��ɼ��߶� - ҳ������߶�
                    _resetHeight = _iHeight - _wHeight;
                }
                _resetHeight = _resetHeight - 1;
            	for(var i = 0,l = _task.length;i < l;i++){
            	    var _h = _task[i][0].offsetHeight;
            	    _h = (_h + _resetHeight) < 200 ? 200 : (_h + _resetHeight);
            	    _task[i].css("height", _h + "px");
            	}
            }
		this.push = function(pItem){
			_task.push(pItem);
		}
		this.init = function(){
			setTimeout(function () {
                fire();
                bindEvent();
            }, 100);
		}
	}
	$$.Reset = ResetControl;
})(jQuery);