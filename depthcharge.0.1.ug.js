var DepthCharge;DepthCharge=function(p,e){var r=this;r.Depth="number"==typeof e?e:10,r.Create=function(e,t){t="string"==typeof t?t:"";var p=document.createElement(e);return t.length&&(p.className=t),p},r.SetStyles=function(e,t,p,a,n,l,s,r){t?e.style.backgroundImage="url("+p.src+")":(e.style.backgroundImage="element(#"+a+")",e.style.backgroundImage.length||(e.style.backgroundImage="-moz-element(#"+a+")")),e.style.backgroundPosition=n,e.style.backgroundSize=l,e.style.width=s,e.style.height=r},r.Deepen=function(e){var t,p,a,n,l,s;(l=e.id).length||(l="Deep_"+Math.floor(1e6*Math.random()),e.id=l),t=parseInt(e.offsetWidth),p=parseInt(e.offsetHeight),s="img"===e.nodeName.toLowerCase(),(a=e.parentNode).style.width=t+"px",a.style.height=p+"px",a.className=a.className.length?a.className+" deepen":"deepen",n=r.Create("span","face-top"),r.SetStyles(n,s,e,l,"50% 0",t+"px "+p*r.Depth+"px",t+"px",r.Depth+"px"),a.appendChild(n),n=r.Create("span","face-bottom"),r.SetStyles(n,s,e,l,"50% 100%",t+"px "+p*r.Depth+"px",t+"px",r.Depth+"px"),a.appendChild(n),n=r.Create("span","face-left"),r.SetStyles(n,s,e,l,"0 50%",t*r.Depth+"px "+p+"px",r.Depth+"px",p+"px"),a.appendChild(n),n=r.Create("span","face-right"),r.SetStyles(n,s,e,l,"100% 50%",t*r.Depth+"px "+p+"px",r.Depth+"px",p+"px"),a.appendChild(n),n=r.Create("span","face-back"),r.SetStyles(n,s,e,l,"50% 50%",t+"px "+p+"px",t+"px",p+"px"),n.style.transform="translateZ(-"+r.Depth+"px)",a.appendChild(n)},r.Init=function(){var e,t;for(t=(e=document.querySelectorAll(p)).length;t;)t-=1,r.Deepen(e[t])},r.Init()};