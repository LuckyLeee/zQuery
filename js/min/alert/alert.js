﻿(function(B,C){var D={defaultType:"",ok:"",waring:"icon-exclamation-sign",error:"icon-remove-sign"};var A=function(E){this.opts={title:"",content:"",type:"default",btnModule:[],template:'        	<section class="mask small">			    <div class="close"><a href="javascript:"><i class="icon-remove"></i></a></div>			    <div class="txts"><i class="<$= GlobalData.typeClass $>"></i><$= GlobalData.content $></div>			    <div class="btn">			    	<$ for(var i = 0,l = GlobalData.btnModule.length;i < l;i++){			    		var item = GlobalData.btnModule[i]; $>			    	<a href="javascript:" class="<$= item.className $>"><$= item.title $></a>			    	<$ } $>			    </div>			</section>'};B.extend(true,this.opts,E);this.init();};A.prototype={init:function(){this.formatBtnModule();this.createHtml();this.bindEvent();},bindEvent:function(){var E=this;this.alertPanel.find(".close>a").on("click",function(){E.alertPanel.unmask();E.alertPanel.remove();});this.alertPanel.find(".btn>a").on("click",function(){var F=B(this),G=F.index(),H=E.opts.btnModule[G];if(H.isDisable){return;}if(H.isClose){E.alertPanel.unmask();E.alertPanel.remove();}if(H.onChange&&B(H.onChange)==="function"){H.onChange.call(null);}});},formatBtnModule:function(){var E=[];for(var F=0,H=this.opts.btnModule.length;F<H;F++){var G=B.extend({className:"orangebtn",isClose:true,isDisable:false},this.opts.btnModule[F],true);E.push(G);}this.opts.btnModule=E;this.opts.typeClass=D[this.opts.type];},createHtml:function(){this.alertPanel=B(B.template.replace(this.opts.template,this.opts));$$.container.append(this.alertPanel);this.alertPanel.mask();}};B.extend({Alert:function(E){var F={};if(typeof E!=="undefined"){B.extend(true,F,E);}new A(F);}});$$.Alert=function(E,G){var F={content:E,btnModule:[{title:"确定",onChange:G}]};B.Alert(F);};$$.Confirm=function(F,E,G){var H={content:F,type:"waring",btnModule:[{title:"确定",onChange:E},{title:"取消",className:"graybtn",onChange:G}]};B.Alert(H);};})(jQuery);