function f1(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += arr[i];
		}
	}
	return result;
}
	
function f2(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) {
			result += arr[i];
		}
	}
	return result;
}

// Écrire une fonction f3 qui prend un tableau en entrée
// et qui retourne la somme des numéros de cases des éléments pairs d'un tableau
