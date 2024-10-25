const mainContainer = document.getElementById("main-container");

function createShape(title, functionName, nArgs, nChars) {
	const div = document.createElement("div");
	div.classList.add("single-shape");
	const h4 = document.createElement("h4");
	h4.innerHTML = title;
	div.appendChild(h4);

	const correctDrawing = document.createElement("div");
	correctDrawing.classList.add("drawing", "model");
	const drawing = document.createElement("div");
	drawing.classList.add("drawing");
	div.appendChild(drawing);
	div.appendChild(correctDrawing);

	function callFunction() {
		const allArgs = [];

		for(let input of div.getElementsByClassName("chooser")) {
			if(input.type == "range") {
				allArgs.push(parseInt(input.value));
			} else {
				if(input.value == "") {
					return;
				}
				allArgs.push(input.value);
			}
		}

		let result1 = window[functionName](...allArgs);
		result1 = result1.replaceAll("\n", "<br>");
		drawing.innerHTML = result1.replace(" ", "&nbsp;");
		let result2 = window[functionName+"_answer"](...allArgs);
		result2 = result2.replaceAll("\n", "<br>");
		correctDrawing.innerHTML = result2.replaceAll(" ", "&nbsp;");
	}

	for(let i = 0 ; i < nArgs ; i++) {
		const slider = document.createElement("input");
		slider.type = "range";
		slider.classList.add("slider");
		slider.classList.add("chooser");
		slider.min = 1;
		slider.max = 20;
		slider.value = 7;

		slider.addEventListener("change", callFunction);
		slider.addEventListener("input", callFunction);

		div.appendChild(slider);
	}
	
	for(let i = 0 ; i < nChars ; i++) {
		const input = document.createElement("input");
		input.classList.add("char-input");
		input.classList.add("chooser");
		input.type = "text";
		input.maxLength = 1;
		input.size = 1;
		input.value = i==0?"+":"-";
		
		input.addEventListener("change", callFunction);
		input.addEventListener("input", callFunction);
		
		div.appendChild(input);
	}

	callFunction();

	return div;
}

const data = [
	{
		"title": "Lignes",
		"shapes": [
			createShape("Ligne pleine", "fullLine", 1, 1),
			createShape("Ligne vide", "emptyLine", 1, 2)
		]
	},
	{
		"title": "Rectangles",
		"shapes": [
			createShape("Rectangle plein", "fullRectangle", 2, 1),
			createShape("Rectangle vide", "emptyRectangle", 2, 2)
		]
	},
	{
		"title": "Triangles",
		"shapes": [
			createShape("Triangle rectangle à gauche plein", "fullTriangle1", 1, 1),
			createShape("Triangle rectangle à droite plein", "fullTriangle2", 1, 2),
			createShape("Triangle centré plein", "fullTriangle3", 1, 2),
			createShape("Triangle rectangle à gauche vide", "emptyTriangle1", 1, 2),
			createShape("Triangle rectangle à droite vide", "emptyTriangle2", 1, 2),
			createShape("Triangle centré vide", "emptyTriangle3", 1, 2),
		]
	},
	{
		"title": "Carrelage",
		"shapes": [
			createShape("Échiquier", "checkerboard", 1, 2),
			createShape("Diagonale /", "diagonal1", 1, 2),
			createShape("Diagonale \\", "diagonal2", 1, 2)
		]
	},
	{
		"title": "Divers",
		"shapes": [
			createShape("Pacman", "pacman", 1, 1),
			createShape("Sablier", "hourglass", 1, 2),
			createShape("Plus", "plus", 1, 2),
			createShape("Fois", "times", 1, 2),
			createShape("Serpent horizontal", "snake1", 1, 2),
			createShape("Serpent vertical", "snake2", 1, 2)
		]
	}
];

for(let group of data) {
	const div = document.createElement("div");
	div.classList.add("shapes-group");
	const h2 = document.createElement("h2");
	h2.innerHTML = group["title"];
	div.appendChild(h2);

	const shapesDiv = document.createElement("div");
	shapesDiv.classList.add("shapes");


	for(let shape of group["shapes"]) {
		shapesDiv.appendChild(shape);
	}
	div.appendChild(shapesDiv);
	mainContainer.appendChild(div);
}
