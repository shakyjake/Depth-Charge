/*
	Auto depth
	- 2018-03-21 Jake Nicholson (github.com/shakyjake)
	
	This is free and unencumbered software released into the public domain.

	Anyone is free to copy, modify, publish, use, compile, sell, or
	distribute this software, either in source code form or as a compiled
	binary, for any purpose, commercial or non-commercial, and by any
	means.
	
	In jurisdictions that recognize copyright laws, the author or authors
	of this software dedicate any and all copyright interest in the
	software to the public domain. We make this dedication for the benefit
	of the public at large and to the detriment of our heirs and
	successors. We intend this dedication to be an overt act of
	relinquishment in perpetuity of all present and future rights to this
	software under copyright law.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
	OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
	ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	OTHER DEALINGS IN THE SOFTWARE.
	
	For more information, please refer to <http://unlicense.org/>
*/
var DepthCharge;
DepthCharge = function(Selector, Depth){
	
	var _ = this;
	
	_.Depth = typeof(Depth) === 'number' ? Depth : 10;
	
	_.Create = function(NodeName, Class){
		Class = typeof(Class) === 'string' ? Class : '';
		var Node = document.createElement(NodeName);
		if(!!Class.length){
			Node.className = Class;
		}
		return Node;
	};
	
	_.SetStyles = function(Face, IsImg, Element, ID, BGPos, BGSize, Width, Height){
		if(IsImg){
			Face.style.backgroundImage = 'url(' + Element.src + ')';
		} else {
			Face.style.backgroundImage = 'element(#' + ID + ')';
			if(!Face.style.backgroundImage.length){
				Face.style.backgroundImage = '-moz-element(#' + ID + ')';
			}
		}
		Face.style.backgroundPosition = BGPos;
		Face.style.backgroundSize = BGSize;
		Face.style.width = Width;
		Face.style.height = Height;
	};
	
	_.Deepen = function(Element){
		
		var Width, Height, Parent, Face, ID, IsImg;
		
		ID = Element.id;
		if(!ID.length){
			ID = 'Deep_' + Math.floor(Math.random() * 1000000);
			Element.id = ID;
		}
		
		Width = parseInt(Element.offsetWidth);
		Height = parseInt(Element.offsetHeight);
		
		IsImg = Element.nodeName.toLowerCase() === 'img';
		
		Parent = Element.parentNode;
		
		Parent.style.width = Width + 'px';
		Parent.style.height = Height + 'px';
		
		Parent.className = !Parent.className.length ? 'deepen' : Parent.className + ' deepen';
		
		Face = _.Create('span', 'face-top');
		_.SetStyles(Face, IsImg, Element, ID, '50% 0', Width + 'px ' + (Height * _.Depth) + 'px', Width + 'px', _.Depth + 'px');
		Parent.appendChild(Face);
		
		Face = _.Create('span', 'face-bottom');
		_.SetStyles(Face, IsImg, Element, ID, '50% 100%', Width + 'px ' + (Height * _.Depth) + 'px', Width + 'px', _.Depth + 'px');
		Parent.appendChild(Face);
		
		Face = _.Create('span', 'face-left');
		_.SetStyles(Face, IsImg, Element, ID, '0 50%', (Width * _.Depth) + 'px ' + Height + 'px', _.Depth + 'px', Height + 'px');
		Parent.appendChild(Face);
		
		Face = _.Create('span', 'face-right');
		_.SetStyles(Face, IsImg, Element, ID, '100% 50%', (Width * _.Depth) + 'px ' + Height + 'px', _.Depth + 'px', Height + 'px');
		Parent.appendChild(Face);
		
		Face = _.Create('span', 'face-back');
		_.SetStyles(Face, IsImg, Element, ID, '50% 50%', Width + 'px ' + Height + 'px', Width + 'px', Height + 'px');
		Face.style.transform = 'translateZ(-' + _.Depth + 'px)';
		Parent.appendChild(Face);
		
	};
	
	_.Init = function(){
		
		var Elements, i;
		Elements = document.querySelectorAll(Selector);
		i = Elements.length;
		while(!!i){
			i -= 1;
			_.Deepen(Elements[i]);
		}
	};
	
	_.Init();
	
};
