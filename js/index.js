var e=1,t=10,n=1,a=200,o=document.getElementById("touchsurface");function r(t){c(e+=t)}function c(t){var n,a=document.getElementsByClassName("mySlides");for(t>a.length&&(e=1),t<1&&(e=a.length),n=0;n<a.length;n++)a[n].style.display="none";a[e-1].style.display="grid"}function d(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function s(e,t){var n,a,o,i,r,c,d=e,s=t||function(e){};d.addEventListener("touchstart",(function(e){var t=e.changedTouches[0];n="none",dist=0,a=t.pageX,o=t.pageY,c=(new Date).getTime(),e.preventDefault()}),!1),d.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),d.addEventListener("touchend",(function(e){var t=e.changedTouches[0];i=t.pageX-a,r=t.pageY-o,(new Date).getTime()-c<=300&&(Math.abs(i)>=150&&Math.abs(r)<=100?n=i<0?"left":"right":Math.abs(r)>=150&&Math.abs(i)<=100&&(n=r<0?"up":"down")),s(n),e.preventDefault()}),!1)}function u(e,t,n,a){var o=new Set;for(i=0;i<e;i++){var r=d(t,n);o.has(r)?--i:(o.add(r),l(r,a))}}function l(e,t){var n=document.createElement("div");n.className="mySlides fade";var a=document.createElement("img");a.src="res/"+t+"/file_"+e+".jpg",n.appendChild(a),o.appendChild(n)}function f(){switch((screen.orientation||{}).type||screen.mozOrientation||screen.msOrientation){case"landscape-primary":case"landscape-secondary":u(t,n,a,"hor");break;case"portrait-primary":case"portrait-secondary":u(t,n,a,"ver");break;default:alert("not supported")}}function h(e){f(),c(e)}document.addEventListener("keydown",(function(e){var t=e.which||e.keyCode;37==t&&r(-1),39==t&&r(1)})),document.getElementById("next").addEventListener("click",(function(e){r(1)})),document.getElementById("prev").addEventListener("click",(function(e){r(-1)})),window.onorientationchange=function(){window.location.reload()},s(o,(function(e){"left"==e&&r(1),"right"==e&&r(-1)})),h(e);