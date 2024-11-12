export function commandePizza(element){
    let pizza = 'margarita',
        client = 'Maxime',
        blagues = ["Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre \n?\"Arrête de me trancher la route\"","Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait\ndes conseils ?\"Suis ta pâte et tout ira bien!\""],
        merci = "Merci d'avoir commandé chez \"La Pizzera Raffinata\"";
    element.innerText = `Bonjour ${client}, vous avez commandé une ${pizza}. \n ${blagues[Math.round(Math.random())]} \n ${merci}`
}