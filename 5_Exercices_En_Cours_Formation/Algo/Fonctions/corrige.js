function fullLine_answer(w, c) {
	let s = "";
	for(let i=0;i<w;i++) {
		s += c;
	}
	return s;
}

function emptyLine_answer(w, c1, c2) {
	let s = c1;
	for(let i=0; i<w-2;i++)	{
		s += c2;
	}
	if(w > 1) {
		s += c1;
	}
	return s;
}

function fullRectangle_answer(w, h, c) {
	let s="";
	for(let i=0;i<h;i++) {
		s += fullLine_answer(w, c);
		s += '\n';
	}
	return s;
}

function emptyRectangle_answer(w, h, c1, c2) {
	let s = fullLine_answer(w, c1) + '\n';
	for(let i=0 ; i<h-2 ; i++) {
		s += emptyLine_answer(w, c1, c2);
		s += '\n';
	}
	if(h>1) {
		s += fullLine_answer(w, c1);
	}
	return s;
}

function fullTriangle1_answer(h, c) {
	let s = "";
	for(let i=1 ; i<=h ; i++) {
		s += fullLine_answer(i, c);
		s += '\n';
	}
	return s;
}

function fullTriangle2_answer(h, c1, c2) {
	let s = "";
	for(let i=1 ; i<=h ; i++) {
		s += fullLine_answer(h-i, c2);
		s += fullLine_answer(i, c1) + '\n';
	}
	return s;
}

function fullTriangle3_answer(h, c1, c2) {
	let s = "";
	let nbC2 = h-1;
	let nbC1 = 1;
	for(let i=1 ; i<=h ; i++) {
		s += fullLine_answer(nbC2, c2);
		s += fullLine_answer(nbC1, c1) + '\n';
		
		nbC2--;
		nbC1 += 2;
	}
	return s;
}

function emptyTriangle1_answer(h, c1, c2) {
	let s = "";
	for(let i=1 ; i<=h-1 ; i++) {
		s += emptyLine_answer(i, c1, c2) + '\n';
	}
	s += fullLine_answer(h, c1);
	return s;
}

function emptyTriangle2_answer(h, c1, c2) {
	let s = "";
	for(let i=1 ; i<=h-1 ; i++) {
		s += fullLine_answer(h-i, c2);
		s += emptyLine_answer(i, c1, c2) + '\n';
	}
	s += fullLine_answer(h, c1);
	return s;
}

function emptyTriangle3_answer(h, c1, c2) {
	let s = "";
	let nbC2 = h-1;
	let nbC1 = 1;
	for(let i=1 ; i<=h-1 ; i++) {
		s += fullLine_answer(nbC2, c2);
		s += emptyLine_answer(nbC1, c1, c2) + '\n';
		
		nbC2--;
		nbC1 += 2;
	}
	s += fullLine_answer(nbC1, c1);
	return s;
}

function pacman_answer(h, c) {
	let s = "";
	let nbC = h;
	if(nbC%2 == 0) {
		nbC--;
	}
	
	for(let i=0; i<Math.floor(h/2); i++) {
		s += fullLine_answer(nbC, c) + '\n';
		nbC -= 2;
	}
	
	nbC = 1;
	for(let i=0; i<h/2; i++) {
		s += fullLine_answer(nbC, c) + '\n';
		nbC += 2;
	}
	
	return s;
}

function hourglass_answer(h, c1, c2) {
	let s = "";
	let nbC1 = h;
	let nbC2 = 0;
	if(nbC1%2 == 0) {
		nbC1--;
	}
	
	for(let i=0; i<Math.floor(h/2); i++) {
		s += fullLine_answer(nbC2, c2);
		s += fullLine_answer(nbC1, c1) + '\n';
		nbC1 -= 2;
		nbC2++;
	}
	
	nbC1 = 1;
	if(h%2==0) {
		nbC2--;
	}
	for(let i=0; i<h/2; i++) {
		s += fullLine_answer(nbC2, c2);
		s += fullLine_answer(nbC1, c1) + '\n';
		nbC1 += 2;
		nbC2--;
	}
	
	return s;
}

function plusEmptyLine_answer(w, c1, c2) {
	let s = "";
	let emptyChars = Math.floor((w-1)/2);
	for(let j=0; j<emptyChars; j++) {
		s += c2;
	}
	s += c1;
	if(w%2 == 0) {
		s += c1;
	}
	s += '\n';
	
	return s;
}

function plus_answer(w, c1, c2) {
	let s = "";
	let emptyLines = Math.floor((w-1)/2);
	for(let i=0; i<emptyLines; i++) {
		s += plusEmptyLine_answer(w, c1, c2);
	}
	for(let j=0; j<=(w+1)%2; j++) {
		s += fullLine_answer(w, c1) + '\n';
	}
	for(let i=0; i<emptyLines; i++) {
		s += plusEmptyLine_answer(w, c1, c2);
	}
	return s;
}

function times_answer(w, c1, c2) {
	let s = "";
	let pos1 = 0;
	let pos2 = w-1;
	for(let i=0; i<w; i++) {
		for(let j=0; j<w; j++) {
			if(j == pos1 || j == pos2) {
				s += c1;
			}
			else {
				s += c2;
			}
		}
		s += '\n';
		pos1 += 1;
		pos2 -= 1;
	}
	return s;
}

function snake1_answer(w, c1, c2) {
	let s = "";
	for(let i=0; i<w; i++) {
		if(i%2==0) {
			s += fullLine_answer(w, c1) + '\n';
		}
		else if(i%4==1) {
			s += fullLine_answer(w-1, c2);
			s += c1 + '\n';
		}
		else {
			s += c1;
			s += fullLine_answer(w-1, c2) + '\n';
		}
	}
	return s;
}

function snake2_answer(w, c1, c2) {
	let s = "";
	for(let j=0; j<w; j++) {
		if(j%4 == 1) {
			s += c2;
		} else {
			s += c1;
		}
	}
	s += '\n';
	
	for(let i=0; i<w-2; i++) {
		for(let j=0; j<w; j++) {
			if(j%2==0) {
				s += c1;
			} else {
				s += c2;
			}
		}
		s += '\n';
	}
	
	if(w > 1) {
		for(let j=0; j<w; j++) {
			if(j%4 == 3) {
				s += c2;
			} else {
				s += c1;
			}
		}
	}
	
	return s;
}

function checkerboard_answer(w, c1, c2) {
	let s = "";
	for(let i=0; i<w; i++) {
		for(let j=0; j<w; j++) {
			s += (i+j)%2==0?c1:c2;
		}
		s += '\n';
	}
	return s;
}

function diagonal1_answer(w, c1, c2) {
	let s = "";
	for(let i=0; i<w; i++) {
		for(let j=0; j<w; j++) {
			s += (i+j)%4==0?c1:c2;
		}
		s += '\n';
	}
	return s;
}

function diagonal2_answer(w, c1, c2) {
	let s = "";
	for(let i=0; i<w; i++) {
		for(let j=0; j<w; j++) {
			s += (i-j)%4==0?c1:c2;
		}
		s += '\n';
	}
	return s;
}
	
