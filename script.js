function e(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function t(e,t){var o="hor";o=t?"hor":"ver";var n=document.createElement("div"),r=document.createElement("a");r.setAttribute("href","color.html");var d=document.createElement("IMG"),l="res/"+o+"/file_"+e+".jpg";d.setAttribute("data-src",l),d.classList.add("lazy"),r.appendChild(d),n.appendChild(r),a.appendChild(n)}document.getElementsByClassName("fa-refresh")[0].addEventListener("click",(function(e){document.getElementsByTagName("body")[0].setAttribute("opacity",0),location.reload(),window.scrollTo(0,0)}));var a=document.getElementById("photos"),o=1,n=100,r=24,d=new Set,l=e(1,10)%2,c=new Set([5,11,17]),s=0;for(i=0;i<r;i++)s=e(o,n),d.has(s)?--i:(d.add(s),t(s,l),c.has(i)||(l=!l));for(l=!l;d.has(s);)s=e(o,n);t(s,l),$(".lazy").Lazy({onFinishedAll:function(e){document.getElementById("photos").style.opacity=1}});