﻿(function(A,C){var B=function(D){this.opts={nowDate:null,startDate:null,endDate:null,onStart:null,onStartTime:null,onFirstEnd:null,onEnd:null,onEndTime:null};A.extend(true,this.opts,D);this.init();};B.prototype={init:function(){this.initFormatTime();this.timeGo();},initFormatTime:function(){var D=this.getDate(this.opts.nowDate).getTime(),E=this.getDate(this.opts.startDate).getTime(),F=this.getDate(this.opts.endDate).getTime();this.countDonwtime={};this.countDonwtime.start=E-D;this.countDonwtime.end=F-D;this.isFirstEnd=true;},getDate:function(E){var D=E.split(" ");_d2=D[0],_time=D[1].split(":"),_h=_time[0],_m=_time[1],_s=_time[2],_ms=_time[3];var F=new Date(_d2);F.setHours(_h);F.setMinutes(_m);F.setSeconds(_s);F.setMilliseconds(_ms);return F;},timeGo:function(){if(this.countDonwtime.start>0){A.type(this.opts.onStart)==="function"&&this.opts.onStart.call(null,this.countDonwtime.start);}var D=this;this.timer=setInterval(function(){D.play();},1000);this.play();},setTime:function(N,M){var H=Math.floor(N/(1000*60*60*24)),I=Math.floor(N/(1000*60*60)%24),K=Math.floor(N/(1000*60)%60),G=Math.floor(N/1000%60),E=[],D=[I,K,G];if(parseInt(H)<10){E.push(0);E.push(H);}else{E.push(H);}for(var L in D){var F=D[L];if(parseInt(F)<10){E.push(0);E.push(F);}else{var J=(F+"").split("");E.push(J[0]);E.push(J[1]);}}N-=1000;A.type(M)==="function"&&M.call(null,E,N);return N;},play:function(){if(this.countDonwtime.start>0&&this.countDonwtime.start<(1000*60*60*24*10)){this.countDonwtime.start=this.setTime(this.countDonwtime.start,this.opts.onStartTime);this.countDonwtime.end-=1000;}else{if(this.countDonwtime.end<0||this.countDonwtime.end>(1000*60*60*24*10)){A.type(this.opts.onEnd)==="function"&&this.opts.onEnd.call(null);clearInterval(this.timer);return;}if(this.isFirstEnd){this.isFirstEnd=false;A.type(this.opts.onFirstEnd)==="function"&&this.opts.onFirstEnd.call(null);}this.countDonwtime.end=this.setTime(this.countDonwtime.end,this.opts.onEndTime);}},stop:function(){clearInterval(this.timer);}};A.extend({CountDown:function(D){var E={};if(typeof D!=="undefined"){A.extend(true,E,D);}return new B(E);}});})(jQuery);