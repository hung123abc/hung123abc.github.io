function e(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function t(e,t){var n="hor";n=t?"hor":"ver";var o=document.createElement("div"),r=document.createElement("a");r.setAttribute("href","color.html");var d=document.createElement("IMG"),i="res/"+n+"/file_"+e+".jpg";d.setAttribute("data-src",i),d.classList.add("lazy"),r.appendChild(d),o.appendChild(r),a.appendChild(o)}document.getElementsByClassName("fa-refresh")[0].addEventListener("click",(function(e){document.getElementsByTagName("body")[0].setAttribute("opacity",0),location.reload(),window.scrollTo(0,0)}));var a=document.getElementById("photos"),n=1,o=100,r=24,d=new Set,l=e(1,10)%2,c=new Set([5,11,17]),s=0;for(i=0;i<r;i++)s=e(n,o),d.has(s)?--i:(d.add(s),t(s,l),c.has(i)||(l=!l));for(l=!l;d.has(s);)s=e(n,o);t(s,l),$((function(){$(".lazy").Lazy()}));