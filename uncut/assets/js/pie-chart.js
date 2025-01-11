/*!
    Easy pie chart
    Version: 2.1.7
    Plugin URL: https://github.com/rendro/easy-pie-chart
    License: Copyright | Robert Fleischmann
!*/
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(i){function a(e,a){function i(){a.scaleColor&&c(),a.trackColor&&l(a.trackColor,a.trackWidth||a.lineWidth,1)}var n,t=document.createElement("canvas"),r=(e.appendChild(t),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(t),t.getContext("2d")),s=(t.width=t.height=a.size,1),o=(1<window.devicePixelRatio&&(s=window.devicePixelRatio,t.style.width=t.style.height=[a.size,"px"].join(""),t.width=t.height=a.size*s,r.scale(s,s)),r.translate(a.size/2,a.size/2),r.rotate((a.rotate/180-.5)*Math.PI),(a.size-a.lineWidth)/2),l=(a.scaleColor&&a.scaleLength&&(o-=a.scaleLength+2),Date.now=Date.now||function(){return+new Date},function(e,t,i){var n=(i=Math.min(Math.max(-1,i||0),1))<=0;r.beginPath(),r.arc(0,0,o,0,2*Math.PI*i,n),r.strokeStyle=e,r.lineWidth=t,r.stroke()}),c=function(){var e,t;r.lineWidth=1,r.fillStyle=a.scaleColor,r.save();for(var i=24;0<i;--i)e=i%6==0?(t=a.scaleLength,0):(t=.6*a.scaleLength,a.scaleLength-t),r.fillRect(-a.size/2+e,0,t,1),r.rotate(Math.PI/12);r.restore()},d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};this.getCanvas=function(){return t},this.getCtx=function(){return r},this.clear=function(){r.clearRect(a.size/-2,a.size/-2,a.size,a.size)},this.draw=function(e){var t;a.scaleColor||a.trackColor?r.getImageData&&r.putImageData?n?r.putImageData(n,0,0):(i(),n=r.getImageData(0,0,a.size*s,a.size*s)):(this.clear(),i()):this.clear(),r.lineCap=a.lineCap,t="function"==typeof a.barColor?a.barColor(e):a.barColor,l(t,a.lineWidth,e/100)}.bind(this),this.animate=function(i,n){var r=Date.now(),s=(a.onStart(i,n),function(){var e=Math.min(Date.now()-r,a.animate.duration),t=a.easing(this,e,i,n-i,a.animate.duration);this.draw(t),a.onStep(i,n,t),e>=a.animate.duration?a.onStop(i,n):d(s)}.bind(this));d(s)}.bind(this)}function n(t,i){var n={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,i,n,r){return(t/=r/2)<1?n/2*t*t+i:-n/2*(--t*(t-2)-1)+i},onStart:function(e,t){},onStep:function(e,t,i){},onStop:function(e,t){}},r=(n.renderer=a,{}),s=0,e=function(){for(var e in this.el=t,this.options=r,n)n.hasOwnProperty(e)&&(r[e]=(i&&void 0!==i[e]?i:n)[e],"function"==typeof r[e])&&(r[e]=r[e].bind(this));"string"==typeof r.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[r.easing])?r.easing=jQuery.easing[r.easing]:r.easing=n.easing,"number"==typeof r.animate&&(r.animate={duration:r.animate,enabled:!0}),"boolean"!=typeof r.animate||r.animate||(r.animate={duration:1e3,enabled:r.animate}),this.renderer=new r.renderer(t,r),this.renderer.draw(s),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),r.animate.enabled?this.renderer.animate(s,e):this.renderer.draw(e),s=e,this}.bind(this),this.disableAnimation=function(){return r.animate.enabled=!1,this},this.enableAnimation=function(){return r.animate.enabled=!0,this},e()}i.fn.easyPieChart=function(t){return this.each(function(){var e;i.data(this,"easyPieChart")||(e=i.extend({},t,i(this).data()),i.data(this,"easyPieChart",new n(this,e)))})}}));