// Retourne une ligne de taille w, avec le caractère c
// Exemple : "*******"
function fullLine(w, c) {
	let s = "";
	for(let i = 0 ; i < w ; i++){
		s += c;
	}
	
	return s;
}

// Retourne un rectangle avec le caractère c, de w colonnes et h lignes
// Exemple : 
// "*****\n*****\n*****\n"
//
// Puisque le caractère \n est un retour à la ligne, ce mot correspond en réalité au rectangle :
// "*****
//  *****
//  *****"
function fullRectangle(w, h, c) {
	let s = "";
	for(let i = 0 ; i < h ; i++){
		s += fullLine(w, c);
		s += "\n";
	}
	return s;
}

// Retourne une ligne de taille w avec c1 au bord, c2 au milieu
// Exemple : "*-----*"
function emptyLine(w, c1, c2) {
	let s = "";
	s += c1;
	for(let i = 1 ; i < w-1 ; i++){
		s += c2;
	}
	s += c1;
	return s;
}

// Retourne un rectangle avec c1 aux bords et c2 au milieu, de w colonnes et h lignes
// Exemple : "*****\n*---*\n*****\n"
// Dessin correspondant :
// *****
// *---*
// *****
function emptyRectangle(w, h, c1, c2) {
	let s = "";
	for(let i = 0 ; i < h ; i++){
		for(let j = 0 ; j < w ; j++){
			if(i == 0 || j == 0 || i == h-1 || j == w-1){
				s += c1;
			}
			else {
				s += c2;
			}
		}
		s += "\n";
	}
	
	return s;
}

// Retourne un triangle rectangle avec le caractère c, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n***\n****\n"
// Dessin correspondant : 
// *
// **
// ***
// ****
function fullTriangle1(h, c) {
	let s = "";
	for(let i = 1 ; i < h+1 ; i++){
		for(let j = h-i ; j < h ; j++){
			s += c;
		}
		s += '\n';
	}
	return s;
}

// Retourne un triangle rectangle avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-***\n****\n"
// Dessin correspondant :
// ---*
// --**
// -***
// ****
function fullTriangle2(h, c1, c2) {
	let s = "";
	for(let i = 1 ; i < h+1 ; i++){
		for(let j = i ; j < h ; j++){
			s += c2;
		}
		for(let k = h-i ; k < h ; k++){
			s += c1;
		}
		s += '\n';
	}
	
	return s;
}

// Retourne un triangle isocèle avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--***\n-*****\n*******\n"
// Dessin correspondant :
// ---*
// --***
// -*****
// *******
function fullTriangle3(h, c1, c2) {
	let s = "";
	for(let i = 1 ; i < h+1 ; i++){
		for(let j = i ; j < h ; j++){
			s += c2;
		};
		for(let k = h-(2*i-1) ; k < h ; k++){
			s += c1;
		};
		s += '\n';
	}
	
	
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n*-*\n****\n"
// Dessin correspondant :
// *
// **
// *-*
// ****
function emptyTriangle1(h, c1, c2) {
	let s = "";
	for(let i = 1 ; i < h+1 ; i++){
		for(let j = h-i ; j < h ; j++){
			if(j == h-i || i == 1 || j == h-1 || i == h){
				s += c1;
			}
			else{
				s += c2;
			};
		};
		s += '\n';
	}
	
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-*-*\n****\n"
// Dessin correspondant :
// ---*
// --**
// -*-*
// ****
function emptyTriangle2(h, c1, c2) {
	let s = "";
	for(let i = 1 ; i < h+1 ; i++){
		for(let j = i ; j < h ; j++){
			s += c2;
		}
		for(let k = h-i ; k < h ; k++){
			if(k == h-i || i == 1 || k == h-1 || i == h){
				s += c1;
			}
			else {
			s += c2;
			}
		}
		s += '\n';
	}
	
	return s;
}

// Retourne un triangle isocèle vide avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--*-*\n-*---*\n*******\n"
// Dessin correspondant :
// ---*
// --*-*
// -*---*
// *******
function emptyTriangle3(h, c1, c2) {
	let s = "";
	for(let i = 1 ; i < h+1 ; i++){
		for(let j = i ; j < h ; j++){
			s += c2;
		};
		for(let k = h-(2*i-1) ; k < h ; k++){
			if(k == h-(2*i-1) || i == 1 || k == h-1 || i == h){
				s += c1;
			}
			else {
				s += c2;
			}
		};
		s += '\n';
	}
	
	return s;
}

// Retourn un "pacman" de hauteur h avec le caractère c1
// Exemple :
// *****\n***\n*\n***\n*****\n"
// Dessin correspondant :
// *****
// ***
// *
// ***
// *****
function pacman(h, c1) {
	let s = "";
	let H = h;
	if(H%2 == 0){
		H--;
	}

	for(let i = 0 ; i < Math.floor(h/2) ; i++){
		s += fullLine(H, c1) +'\n';
		H -= 2;
	}
	H = 1;
	for(let i = 0 ; i < h/2 ; i++){
		s += fullLine(H, c1) +'\n';
		H += 2;
	}
	return s;
}

// Retourne un sablier de hauteur h avec les caractères c1 et c2
// Exemple :
// "*****\n-***\n--*\n-***\n*****\n"
// Dessin correspondant :
// *****
// -***
// --*
// -***
// *****
function hourglass(h, c1, c2) {
	let s = "";
	let H = h;
	let v = 0;
	if(H%2 == 0){
		H--;
	}

	for(let i = 0 ; i < Math.floor(h/2) ; i++){
		s += fullLine(v, c2);
		s += fullLine(H, c1) +'\n';
		H -= 2;
		v++;
	}
	if(h%2 == 0){
		v--;
	}
	H = 1;
	for(let i = 0 ; i < h/2 ; i++){
		s += fullLine(v, c2);
		s += fullLine(H, c1) +'\n';
		v--;
		H += 2;
	}
	return s;
}

// Retourne un plus de taille w avec les caractères c1 et c2
// Exemple :
// "--*\n--*\n*****\n--*\n--*\n"
// Dessin correspondant :
// --*
// --*
// *****
// --*
// --*
function plus(w, c1, c2) {
	let s = "";
	let H = w;
	if(H%2 == 0){
		H--;
	}
	for(let i = 0 ; i < Math.floor(H/2) ; i++){
		s += fullLine(Math.floor(H/2), c2);
		if(w%2 == 0){
			s += c1;
		}
		s += c1 + '\n';
	}
	if(w%2 == 0){
		s += fullLine(w, c1) + '\n';
	}
	s += fullLine(w, c1) + '\n';
	for(let i = 0 ; i < Math.floor(H/2) ; i++){
		s += fullLine(Math.floor(H/2), c2);
		if(w%2 == 0){
			s += c1;
		}
		s += c1 + '\n';
	}
	return s;
}

// Retourne un multiplié de taille w avec les caractères c1 et c2
// Exemple :
// "*---*\n-*-*\n--*\n-*-*\n*---*\n"
// Dessin correspondant :
// *---*
// -*-*
// --*
// -*-*
// *---*
function times(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Retourne un serpent horizontal de taille w avec les caractères c1 et c2
// Exemple :
// "*****\n----*\n*****\n*\n*****\n"
// Dessin correspondant :
// *****
// ----*
// *****
// *
// *****
function snake1(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Retourne un serpent vertical de taille w avec les caractères c1 et c2
// Exemple :
// "*-***\n*-*-*\n*-*-*\n*-*-*\n***-*\n"
// Dessin correspondant :
// *-***
// *-*-*
// *-*-*
// *-*-*
// ***-*
function snake2(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Retourne un échiquier de taille w avec les caractères c1 et c2
// Exemple :
// "*-*-*\n-*-*\n*-*-*\n-*-*\n*-*-*"
// Dessin correspondant :
// *-*-*
// -*-*
// *-*-*
// -*-*
// *-*-*
function checkerboard(w, c1, c2) {
	let s = "";
	for(let i = 0 ; i < w ; i++){
		for(let j = 0 ; j < w ; j++){
			if(j%2 == 0 && i%2 ==0 || j%2 != 0 && i%2 != 0){
				s += c1;
			}
			else {
				s += c2;
			}
		}
		s += '\n';
	}
	return s;
}

// Cf dessin :)
function diagonal1(w, c1, c2) {
	let s = "";
	for(let i = 0 ; i < w ; i++){
		for(let j = i ; j < w+i ; j++){
			if(j%4 == 0){
				s += c1;
			}
			else {
				s += c2;
			}
		}
		s += '\n';
	}
	return s;
}

// Cf dessin :)
function diagonal2(w, c1, c2) {
	let s = "";
	for(let i = 1 ; i < w+1 ; i++){
		for(let j = w+i ; j > i ; j--){
			if(j%4 == 0){
				s += c1;
			}
			else {
				s += c2;
			}
		}
		s += '\n';
	}
	return s;
}


	
