// Pokédex en vrac

function pokedex(nombres){
    let synthe = [];
    let ini = [];
    let poke = nombres.split(", ");
    poke = poke.sort((a, b) => a - b);
    for(let i = 0 ; i < poke.length+1 ; i++){
        if(poke[i-1] != Number(poke[i])-1 && poke[i+1] != Number(poke[i])+1){
            synthe.push(poke[i]);
        }
        else if(poke[i-1] != Number(poke[i])-1 && poke[i+1] == Number(poke[i])+1){
            ini.push(poke[i]);
        } 
        else if(poke[i-1] == Number(poke[i])-1 && poke[i+1] != Number(poke[i])+1){
            ini.push('-'+poke[i]);
            synthe.push(ini);
            ini = [];
        }
    }
    synthe.flat();
    synthe = synthe.toString();
    synthe = synthe.replaceAll(',-','-');
    console.log(synthe);
    // console.log(poke);
}
console.log('Voici la vision synthétique du Pokédex de Sacha :');
pokedex("215, 710, 893, 209, 728, 552, 359, 877, 451, 246, 640, 847, 416, 669, 91, 117, 129, 638, 690, 853, 263, 211, 897, 610, 898, 420, 352, 844, 837, 396, 634, 442, 761, 501, 782, 651, 182, 236, 20, 567, 560, 754, 141, 522, 650, 9, 50, 286, 750, 467, 151, 691, 446, 318, 147, 777, 852, 185, 855, 675, 131, 38, 849, 262, 427, 445, 261, 356, 269, 327, 357, 798, 72, 635, 426, 734, 546, 54, 836, 64, 36, 896, 887, 725, 298, 316, 697, 69, 822, 519, 380, 137, 40, 607, 371, 700, 698, 353, 448, 142, 75, 233, 463, 177, 461, 349, 539, 281, 355, 92, 135, 207, 559, 470, 326, 766, 222, 156, 636, 4, 410, 488, 329, 538, 303, 433, 807, 759, 730, 110, 739, 625, 174, 704, 760, 477, 775, 264, 170, 267, 452, 30, 550, 260, 547, 242, 727, 360, 856, 336, 795, 19, 518, 751, 192, 143, 493, 489, 753, 181, 299, 715, 2, 255, 79, 524, 253, 313, 245, 121, 721, 32, 597, 205, 556, 364, 425, 535, 408, 490, 668, 330, 584, 223, 214, 379, 587, 527, 105, 555, 3, 781, 67, 590, 579, 677, 338, 289, 34, 8, 801, 46, 687, 830, 838, 270, 98, 437, 660, 301, 204, 146, 5, 894, 28, 496, 814, 806, 850, 799, 288, 324, 686, 826, 162, 149, 810, 228, 604, 495, 89, 309, 254, 394, 14, 507, 779, 680, 817, 96, 315, 581, 126, 417, 113, 512, 115, 733, 229, 599, 447, 319, 302, 484, 536, 76, 703, 475, 363, 217, 846, 132, 595, 376, 862, 684, 180, 114, 742, 55, 154, 543, 468, 85, 412, 762, 133, 455, 851, 26, 504, 575, 619, 148, 365, 891, 386, 724, 808, 65, 653, 707, 804, 145, 869, 12, 22, 833, 47, 729, 43, 671, 248, 778, 237, 491, 772, 57, 880, 61, 464, 613, 430, 372, 594, 709, 256, 868, 398, 577, 17, 557, 482, 842, 643, 609, 769, 624, 175, 307, 18, 101, 171, 665, 439, 351, 534, 689, 81, 27, 679, 314, 197, 825, 238, 321, 441, 100, 190, 840, 647, 400, 432, 773, 717, 533, 570, 571, 696, 498, 97, 720, 401, 645, 358, 220, 788, 103, 786, 377, 654, 59, 860, 399, 106, 51, 60, 325, 287, 249, 474, 480, 674, 384, 780, 350, 505, 752, 600, 601, 239, 785, 340, 164, 48, 322, 726, 540, 827, 644, 829, 450, 268, 499, 366, 168, 688, 368, 258, 765, 531, 108, 70, 285, 346, 361, 53, 656, 166, 456, 382, 637, 722, 500, 492, 871, 292, 593, 757, 6, 345, 161, 485, 551, 731, 582, 867, 282, 530, 692, 173, 160, 407, 672, 713, 86, 797, 159, 719, 648, 738, 213, 598, 608, 116, 566, 243, 875, 188, 119, 343, 304, 390, 35, 569, 861, 80, 274, 466, 771, 881, 392, 387, 667, 805, 528, 344, 792, 158, 576, 866, 872, 472, 33, 787, 196, 219, 157, 232, 612, 839, 863, 895, 107, 341, 802, 167, 834, 93, 525, 272, 184, 90, 251, 888, 342, 293, 828, 37, 478, 49, 741, 66, 454, 809, 332, 681, 24, 605, 337, 312, 225, 323, 820, 652, 858, 621, 134, 362, 628, 523, 723, 774, 486, 516, 563, 716, 513, 655, 7, 45, 127, 136, 783, 629, 203, 247, 74, 529, 812, 295, 370, 422, 63, 155, 419, 444, 646, 763, 199, 848, 568, 793, 639, 747, 841, 548, 620, 397, 212, 583, 250, 815, 903, 278, 144, 706, 699, 271, 508, 257, 83, 374, 118, 23, 210, 586, 339, 290, 735, 558, 31, 459, 276, 73, 630, 218, 502, 230, 348, 235, 514, 224, 611, 857, 553, 835, 29, 221, 409, 878, 310, 393, 627, 549, 102, 905, 423, 811, 614, 823, 740, 544, 658, 626, 193, 139, 745, 198, 737, 865, 462, 176, 666, 178, 296, 94, 297, 471, 275, 565, 244, 859, 657, 694, 317, 542, 354, 819, 606, 642, 413, 580, 331, 77, 767, 395, 300, 818, 776, 15, 659, 884, 712, 902, 415, 405, 294, 25, 537, 831, 305, 885, 545, 440, 231, 532, 854, 41, 71, 428, 572, 266, 460, 435, 554, 832, 702, 130, 240, 661, 892, 465, 453, 693, 746, 169, 683, 622, 128, 120, 864, 39, 873, 676, 901, 458, 562, 476, 424, 883, 511, 404, 768, 383, 226, 790, 280, 749, 44, 510, 283, 800, 187, 695, 16, 42, 369, 234, 403, 385, 886, 631, 843, 104, 389, 78, 588, 803, 591, 623, 641, 194, 662, 306, 273, 388, 789, 334, 367, 617, 711, 172, 483, 649, 186, 201, 899, 633, 436, 328, 824, 755, 406, 743, 632, 414, 411, 434, 375, 585, 736, 277, 596, 200, 718, 308, 791, 870, 574, 421, 123, 163, 561, 503, 58, 202, 320, 481, 578, 1, 515, 506, 95, 56, 602, 708, 874, 109, 457, 429, 487, 183, 748, 758, 732, 682, 603, 227, 13, 821, 241, 84, 469, 889, 494, 150, 347, 670, 189, 279, 701, 764, 517, 291, 252, 152, 431, 813, 890, 140, 784, 378, 52, 138, 206, 714, 521, 497, 845, 520, 62, 11, 333, 373, 473, 179, 770, 705, 88, 592, 509, 882, 165, 99, 381, 335, 391, 744, 265, 153, 573, 10, 685, 438, 284, 259, 564, 443, 879, 900, 756, 216, 876, 122, 82, 195, 616, 479, 816, 418");


//Konami code

function konami(x){
    // x = prompt('Entrez le code complet');
    x = x.split('');
    let code = [];
    let xl = x.length;
    for(let i = 0 ; i < xl/2 ; i++){
        code.push(x.shift()+x.shift());
    }
    code = code.toString();
    code = code.replaceAll(',','-');
    code = code.replaceAll('←←','h');
    code = code.replaceAll('←↑','!');
    code = code.replaceAll('←→','m');
    code = code.replaceAll('←↓','l');
    code = code.replaceAll('←A','s');
    code = code.replaceAll('←B',',');
    code = code.replaceAll('↑←','r');
    code = code.replaceAll('↑↑','p');
    code = code.replaceAll('↑→','x');
    code = code.replaceAll('↑↓','b');
    code = code.replaceAll('↑A','j');
    code = code.replaceAll('↑B','v');
    code = code.replaceAll('→←','a');
    code = code.replaceAll('→↑','i');
    code = code.replaceAll('→→',' ');
    code = code.replaceAll('→↓','w');
    code = code.replaceAll('→A','g');
    code = code.replaceAll('→B','é');
    code = code.replaceAll('↓←','è');
    code = code.replaceAll('↓↑','t');
    code = code.replaceAll('↓→','.');
    code = code.replaceAll('↓↓','o');
    code = code.replaceAll('↓A','n');
    code = code.replaceAll('↓B','u');
    code = code.replaceAll('A←','à');
    code = code.replaceAll('A↑','?');
    code = code.replaceAll('A→','y');
    code = code.replaceAll('A↓','c');
    code = code.replaceAll('AA','f');
    code = code.replaceAll('AB','d');
    code = code.replaceAll('B←','q');
    code = code.replaceAll('B↑','k');
    code = code.replaceAll('B→',"'");
    code = code.replaceAll('B↓','z');
    code = code.replaceAll('BA','e');
    code = code.replaceAll('BB','ê');
    code = code.replaceAll('-','');
    return code;
}
console.log('Voici la conversion du message en code Konami:');
console.log(konami('←↓↓↓↑←←AB←↓BBA→→↓↑↓B→→→←↓B↑←→←←A→→↑B→←→↑↓AA↓↓B→→↑↓→↑→A→→A↓↓↓↑←BA←B→→→←AAAA↑←↓↓↓A↓↑→B→→←↓BA→→↑←BA→A→←↑←AB→→→↑←→↑↑→↑↓↑↓↓A→→←↑↓←↓BA→→ABBA←A→→←A↓↑→←↓↑↓BBA←A→→→→←→↓↓→←→↑→→BA↓↑→→←A↓B↑←↑B→BA↓↓B→→→←↓B→→↑↓→←←↓←↓BA↓↑→→ABBA←A→→←A↓↓↓BA↓↓↓↓B↑↑BA←A←B→→→←↑↑↑←↓←←A→→→←↑B↓↓→↑↑←→→↓↑BA↓A↓B→→↓↑BB↓↑BA→→→←↓B↑→→→→←←→→↑↑↓BA←A→→→→↓↑BA↓A↓↑→←A↓↓B←↓→←→↑↑←BA←A←B→→↓↑↓B→→BA↓A↓↑↑←BA↑←→←←A→→BA↓AAA→↑↓A→→AB→←↓A←A→→←↓→←→→↑↓→←←ABA→→ABBA←A→→↑↓→←A↓↓↑→B↑←→↑→←↓A←A→→↑↑BA↓B↑↑←↓→BBA→→ABBA→→↑←↓↓↑↓↓↓↓↑←A→→↑↓→↑↑↑↓←ABBA←A↓→→→↑↑↓B→↑←A←B→→↓↑↓B→→AB→BA↓↓↓↓B↑B↑←→↑↑←→←←A→→←↓BA→→A↓BA↑←↑BBA→←↓B←B→→B←↓BB→→↑←↓→→↓↑BA→→AA→←↓BAB↑←→←→→AB→B↓↑↑←↓B→↑↑←BA↓→→→BA↓↑→→↓ABA→→↓↑B→→←↑B→↑←ABA→→↑↑→←←A→→ABBA→→A↓↓↓←→←→BA↓AA↓BA↑←→→A←→→AB→BA↓←←→↑AAAA↑←BA↑←→→A↓BA→→←→BA←A←A→←→ABA→→A←→→←↓→←→→←→→←→↑↓A→→BA↓A→→↑↑→←↑←↓↑→←↓A↓↑→→ABBA→→←↓→←→→AA→↑↓A←B→→A↓→←↑←→→←→↓↓↓A→→↓↓↑↓↑ABAA↓↓↑→↑AA→→BA←A↓↑→→ABBA→→↓↑BA→→AB→BA↓↓↓↓B↑←→←→ABA↑←→→ABB→→←→A→↑↑←→→ABBA→→←↓→←→→←A↓↓↑←↓↑BA↓→'));
// console.log(konami());
// ←↓↓↓↑←←AB←↓BBA→→↓↑↓B→→→←↓B↑←→←←A→→↑B→←→↑↓AA↓↓B→→↑↓→↑→A→→A↓↓↓↑←BA←B→→→←AAAA↑←↓↓↓A↓↑→B→→←↓BA→→↑←BA→A→←↑←AB→→→↑←→↑↑→↑↓↑↓↓A→→←↑↓←↓BA→→ABBA←A→→←A↓↑→←↓↑↓BBA←A→→→→←→↓↓→←→↑→→BA↓↑→→←A↓B↑←↑B→BA↓↓B→→→←↓B→→↑↓→←←↓←↓BA↓↑→→ABBA←A→→←A↓↓↓BA↓↓↓↓B↑↑BA←A←B→→→←↑↑↑←↓←←A→→→←↑B↓↓→↑↑←→→↓↑BA↓A↓B→→↓↑BB↓↑BA→→→←↓B↑→→→→←←→→↑↑↓BA←A→→→→↓↑BA↓A↓↑→←A↓↓B←↓→←→↑↑←BA←A←B→→↓↑↓B→→BA↓A↓↑↑←BA↑←→←←A→→BA↓AAA→↑↓A→→AB→←↓A←A→→←↓→←→→↑↓→←←ABA→→ABBA←A→→↑↓→←A↓↓↑→B↑←→↑→←↓A←A→→↑↑BA↓B↑↑←↓→BBA→→ABBA→→↑←↓↓↑↓↓↓↓↑←A→→↑↓→↑↑↑↓←ABBA←A↓→→→↑↑↓B→↑←A←B→→↓↑↓B→→AB→BA↓↓↓↓B↑B↑←→↑↑←→←←A→→←↓BA→→A↓BA↑←↑BBA→←↓B←B→→B←↓BB→→↑←↓→→↓↑BA→→AA→←↓BAB↑←→←→→AB→B↓↑↑←↓B→↑↑←BA↓→→→BA↓↑→→↓ABA→→↓↑B→→←↑B→↑←ABA→→↑↑→←←A→→ABBA→→A↓↓↓←→←→BA↓AA↓BA↑←→→A←→→AB→BA↓←←→↑AAAA↑←BA↑←→→A↓BA→→←→BA←A←A→←→ABA→→A←→→←↓→←→→←→→←→↑↓A→→BA↓A→→↑↑→←↑←↓↑→←↓A↓↑→→ABBA→→←↓→←→→AA→↑↓A←B→→A↓→←↑←→→←→↓↓↓A→→↓↓↑↓↑ABAA↓↓↑→↑AA→→BA←A↓↑→→ABBA→→↓↑BA→→AB→BA↓↓↓↓B↑←→←→ABA↑←→→ABB→→←→A→↑↑←→→ABBA→→←↓→←→→←A↓↓↑←↓↑BA↓→


// Compter les étoiles chaudes

/*
const body = document.querySelector("body"),
      img = new Image(800,800);
img.src = "ciel.png";
// img.setAttribute('crossOrigin', '');
// img.crossOrigin = "Anonymous";
let canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d", {willReadFrequently: true});
canvas.width = 800;
canvas.height = 800;

img.onload = () => {
    ctx.drawImage(img, 0, 0, 800, 800);
    let pix = ctx.getImageData(0, 0, 1, 1).data;
    console.log(pix);
    let etoiles = 0;
    for(let x = 0 ; x < 801 ; x++){
        for(let y = 0 ; y < 801 ; y++){
            if(ctx.getImageData(x, y, 1, 1).data[2] > ctx.getImageData(x, y, 1, 1).data[1] && ctx.getImageData(x, y, 1, 1).data[2] > ctx.getImageData(x, y, 1, 1).data[0]){
                etoiles++;
            }
        }
    }
    console.log(etoiles);
}

body.appendChild(canvas);
body.appendChild(img);
*/

// Gestion de l'espace-temps par le Tardis
/*
const body = document.querySelector("body"),
img = new Image(320,320);
img.src = "tardis.png";
let canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d", {willReadFrequently: true});
canvas.width = 320;
canvas.height = 320;
let annee = [];
let an = [];

function pushing(v){
    annee.push(v);
}

function add(){
    let pop = annee.pop();
    pop = (pop+annee.pop())%256;
    annee.push(pop);
}

function mul(){
    let pop = annee.pop();
    pop = (pop*annee.pop())%256;
    annee.push(pop);
}

function write(){
    an.push(annee[annee.length-1]);
    console.log(annee[annee.length-1]);
}

img.onload = () => {
    ctx.drawImage(img, 0, 0, 320, 320);
    for(let y = 0 ; y < 321 ; y+=20){
        for(let x = 0 ; x < 321 ; x+=20){
            if(ctx.getImageData(x, y, 20, 20).data[1] == 0 && ctx.getImageData(x, y, 20, 20).data[2] == 0 && ctx.getImageData(x, y, 20, 20).data[0] != 0){
                pushing(ctx.getImageData(x, y, 20, 20).data[0]);
            }
            else if(ctx.getImageData(x, y, 20, 20).data[2] == 230){
                add();
            }
            else if(ctx.getImageData(x, y, 20, 20).data[2] == 240){
                mul();
            }
            else if(ctx.getImageData(x, y, 20, 20).data[2] == 200){
                write();
            }
        }
    }
    let date = 256*an[0];
    for(let i = 1 ; i < an.length ; i++){
        date += an[i];
    }
    date -= 10000;
    console.log(date);
}

body.appendChild(canvas);
body.appendChild(img);
*/



// Q-Suite

let memory = [];
function Q(n){
    if(n <= 2){
        return 1;
    }
    else if (memory[n] != undefined){
        return memory[n];
    }
    else {
        memory[n] = Q(n-Q(n-1))+Q(n-Q(n-2));
        return memory[n];
    }
}

function Qsuite(i,j){
    let total = 0;
    for(let k = i ; k <= j ; k++){
        total += Q(k);
    }
    return total;
}

console.log(Qsuite(1583,1697));


// Hen Llinge obfusqué

function hen(str){
    str = str.split('');
    for (let i = 0 ; i < str.length ; i++){
        if(str[i].toUpperCase() == str[i+1]){
            str.splice(i, 2);
            i = 0;
        }
    }
    str = str.toString();
    str = str.replaceAll(',','');
    return str;
}

// console.log(hen(prompt('Saisir le code à déchiffrer')));

// Piège numérique à Pokémons

let piege = [];
for(let i = 0 ; i < 1000 ; i++){
    let j = i;
    j = j.toString();
    j = j.split('');
    if(j.length < 3 ){
        if(i%7 == 0 && (parseInt(j[0]) + parseInt(j[1])) == 11){
            piege.push(i);
        }
    }
    else {
        if(i%7 == 0 && (parseInt(j[0]) + parseInt(j[1]) + parseInt(j[2])) == 11){
            piege.push(i);
        }
    }
}
piege = piege.toString();
console.log(piege);

// Des lettres bien rangées


function strNoAccent(a) {
    a = a.normalize("NFD");
    a = a.replace(/\p{Diacritic}/gu, "");
    return a;
}

/*
function alphabet(str){
    let compteur = 0;
    str = strNoAccent(str);
    str = str.toLowerCase();
    let mots = str.split("\r\n");
    let boucles = 0;
    for(let i = 0 ; i < mots.length ; i++){
        let mot = mots[i].split('');
        for(let j = 0 ; j < mot.length ; j++){
            if(mot[j+1] == undefined){
                if(mot.length > 2){
                    compteur++;
                }
            }
            if(mot[j] > mot[j+1]){      
                break;
            }
            
        }
    }
    console.log(boucles);
    console.log(`Il y a ${compteur} mots dans l'ordre`);
}
alphabet(prompt('Rentre la liste de mots'));
*/

// Points fixes dans le temps

function galli(z){
    if(z == 0){
        return 2;
    }
    if(z == 1 || z == 5){
        return 3;
    }
    if(z == 2 || z == 6){
        return 4;
    }
    if(z == 3 || z == 7){
        return 5;
    }
    if(z == 4 || z == 8){
        return 6;
    }
    if(z == 9){
        return 7;
    }
}

function fixes(x,y){
    let annees = 0;
    for(let i = x ; i < y+1 ; i++){
        let total = 0;
        let an = i.toString().split('');
        console.log(an);
        for(let j = 0 ; j < an.length ; j++){
            total += galli(an[j]);
        }
        if(an.length > 1){
            total -= (an.length-1);
        }
        console.log(i, total, i%total);
        if(i%total == 0){
            annees++;
        }
    }
    console.log(`Il y a ${annees} années avec un point temporel fixe entre ${x} et ${y}.`)
}

// fixes(parseInt(prompt('Entrez la date de début')),parseInt(prompt('Entrez la date de fin')));

// Les noms ont de l'importance

function findDuplicates(arr) {
    const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
    return filtered;
};

function noms(str){
    let noformat = str.toLowerCase();
    noformat = noformat.replaceAll(' ','');
    noformat = noformat.split('\r\n'); 
    console.log(noformat);
    let liste = str.split("\r\n");
    console.log(liste);
    let tri = [];
    for(let i = 0 ; i < liste.length ; i++){
        let espece = noformat[i].split('');
        espece.nom = liste[i];
        espece.total = espece.length;
        let dup = findDuplicates(espece);
        espece.diff = espece.length - dup.length;
        espece.ratio = (espece.diff/espece.total).toFixed(3);
        tri.push(espece);
    };
    tri.sort(function (a, b) {
        return a.ratio - b.ratio;
    });
    let trifinal = [];
    tri.forEach((element) => {
        trifinal.push(element.nom);
    });
    for(let i = 0 ; i < trifinal.length ; i++) {
        trifinal[i] = trifinal[i][0].toUpperCase() + trifinal[i].slice(1);
    };
    trifinal = trifinal.toString();
    trifinal = trifinal.replaceAll(',',', ');
    console.log(tri);
    console.log(trifinal);
}

// noms(prompt('Rentre la liste de mots'));

// Sudokteur

function sudok(str) {
    str = str.replaceAll('\r\n','');
    let grille = str.split('');
    let zero = 0,
        un = 0,
        deux = 0,
        trois = 0,
        quatre = 0,
        cinq = 0,
        six = 0,
        sept = 0,
        huit = 0,
        neuf = 0,
        points = 0,
        total = 0;
    for(let i = 0 ; i < grille.length ; i++) {
        if (grille[i] == 0){
            zero++;
        }
        else if (grille[i] == 1){
            un++;
        }
        else if (grille[i] == 2){
            deux++;
        }
        else if (grille[i] == 3){
            trois++;
        }
        else if (grille[i] == 4){
            quatre++;
        }
        else if (grille[i] == 5){
            cinq++;
        }
        else if (grille[i] == 6){
            six++;
        }
        else if (grille[i] == 7){
            sept++;
        }
        else if (grille[i] == 8){
            huit++;
        }
        else if (grille[i] == 9){
            neuf++;
        }
        else if (grille[i] == '.'){
            points++;
        }
        total++;
    }
    console.log('Total :'+total+' Zeros :'+zero+' Un : '+un+' Deux :'+deux+' Trois :'+trois+' Quatre :'+quatre+' Cinq :'+cinq+' Six :'+six+' Sept :'+sept+' Huit :'+huit+' Neuf :'+neuf+' Points :'+points);

};

// sudok(prompt('Rentre la grille'));

// Créatures nocturnes

function creatures(x){
    let bats = 0,
        skell = 0,
        zomb = 0,
        ghost = 0,
        lvl = 1;
    for(let i = 0 ; i < (x*60)+1 ; i++){
        if(i >= 2 && i%2 == 0){
            bats += 10;
        }
        if(i >= 5 && i%5 == 0){
            skell += 5;
        }
        if(i >= 6 && i%6 == 0){
            zomb += 4;
            bats -= 2*lvl;
        }
        if(i >= 10 && i%10 == 0){
            ghost += 3;
        }
        if(i >= 20 && i%20 == 0){
            skell -= lvl;
        }
        if(i >= 30 && i%30 == 0){
            zomb -= lvl;
        }
        if(i >= 40 && i%40 == 0){
            ghost -= lvl;
        }
        if(i >= 240 && i%240 == 0){
            lvl++;
        }
    }
    let populMobs = {
        "Chauve-Souris" : bats,
        "Skellingtons" : skell,
        "Zombies" : zomb,
        "Fantômes Baveux" : ghost
    };
    console.log(populMobs); 
}

// creatures(prompt('Combien de temps la partie va-t-elle durer? (En minutes)'))

// Difficile de comprendre un lapin crétin

function bwa(str){
    str = str.replaceAll('\r\n','');
    let regex = /BWA.A/gi
    str = str.replaceAll(regex,'');
    console.log(str);
}

// bwa(prompt('BWAAAAAAAA'));

// Calcul des jours magiques

function jourma(j){
    if((j%7)+1 == 1){
        return 6;
    }
    if((j%7)+1 == 2 || (j%7)+1 == 5 || (j%7)+1 == 7){
        return 8;
    }
    if((j%7)+1 == 3 || (j%7)+1 == 4 || (j%7)+1 == 6){
        return 5;
    }
}

let jmagiques = 0;
let jour = 1;
let jourJ = 1;
let mois = 1;
let y = 2000;
while(y <= 2023){
    while(mois <= 12){
        if(mois == 2){
            if((y-2000)%4 == 0){
                while(jourJ <= 29){
                    if((jourma(jour)+jourJ)%10 == 0){
                        jmagiques++;
                    }
                    jour++;
                    jourJ++;
                }
                jourJ = 1;
                mois++;
            }
            else {
                while(jourJ <= 28){
                    if((jourma(jour)+jourJ)%10 == 0){
                        jmagiques++;
                    }
                    jour++;
                    jourJ++;
                }
                jourJ = 1;
                mois++;
            }
        }
        if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
            while(jourJ <= 30){
                if((jourma(jour)+jourJ)%10 == 0){
                    jmagiques++;
                }
                // console.log(jour, jourJ, mois, y);
                jour++;
                jourJ++;
            }
            jourJ = 1;
            mois++;
        }
        if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12){
            while(jourJ <= 31){
                if(y == 2023 && mois == 10 && jourJ == 24){
                    console.log(`Il y a ${jmagiques} jours magiques dans cet intervalle`);
                }
                if(( jourma(jour) + jourJ)%10 == 0){
                    jmagiques++;
                }
                // console.log(jour, jourJ, mois, y);
                jour++;
                jourJ++;
            }
            jourJ = 1;
            mois++;
        }
    }
    mois = 1;
    y++;
}

// Le cours de potions

function potions(f){
    let fioles = [20, 20, 20, 0];
    for(let i = 0 ; i < f ; i++){
        for(let j = 0 ; j < fioles.length ; j++){
            let tiers = Number((fioles[j]/3).toFixed(2));
            if(25-fioles[(j+1)%4] < tiers){
                fioles[j] -= (25-fioles[(j+1)%4]);
                fioles[(j+1)%4] = 25;
            }
            else {
                fioles[(j+1)%4] += tiers;
                fioles[j] -= tiers;
            }
            tiers = Number((fioles[j]/3).toFixed(2));
            if(25-fioles[(j+2)%4] < tiers){
                fioles[j] -= (25-fioles[(j+2)%4]);
                fioles[(j+2)%4] = 25;
            }
            else {
                fioles[(j+2)%4] += tiers;
                fioles[j] -= tiers;
            }
            tiers = Number((fioles[j]/3).toFixed(2));
            if(25-fioles[(j+3)%4] < fioles[j]/3){
                fioles[j] -= (25-fioles[(j+3)%4]);
                fioles[(j+3)%4] = 25;
            }
            else {
                fioles[(j+3)%4] += tiers;
                fioles[j] -= tiers;
            }
        }
    }
    for(let i = 0 ; i < fioles.length ; i++){
        fioles[i] = Number(fioles[i].toFixed(2));
    }
    console.log(fioles);
}

// potions(parseInt(prompt("Combien d'opérations de vidage par fiole?")));

// Les dragées surprises

function dragee(){
    let dragees = ['A', 'B', 'É', 'C', 'G', 'F', 'M', 'O', 'H', 'P', 'S', 'V'];
    let compte = 0;
    for(let i = 1 ; i < 1000 ; i++){
        if(i%5 === 0){
            let swap = dragees[(i-1)%12];
            dragees[(i-1)%12] = dragees[(i-2)%12];
            dragees[(i-2)%12] = swap;  
            compte++; 
        }
        if((dragees[0] == 'A' || dragees[0] == 'É' || dragees[0] == 'G' || dragees[0] == 'H')
            && (dragees[1] == 'A' || dragees[1] == 'É' || dragees[1] == 'G' || dragees[1] == 'H')
            && (dragees[2] == 'A' || dragees[2] == 'É' || dragees[2] == 'G' || dragees[2] == 'H')
            && (dragees[3] == 'A' || dragees[3] == 'É' || dragees[3] == 'G' || dragees[3] == 'H')
        ){
            return compte;
        }
    }
}
console.log(`Hermione devra procéder à ${dragee()} échanges pour réussir son tour de passe-passe`);

// Paramétrage du vif d'or

function vif(n){
    let posIni = [0, 0, 1],
        pos = [0, 1, 1],
        comptePos = 2;
    while(pos[0] != posIni[0] || pos[1] != posIni[1] || pos[2] != posIni[2]){
        let z = (pos[0]+pos[1]+pos[2])%n;
        pos[0] = pos[1];
        pos[1] = pos[2];
        pos[2] = z;
        comptePos++;
    }
    return comptePos;
}
let traj = [];
let vifdor = [];

for (let i = 2 ; i < 200 ; i++){
    traj.push([vif(i), i]);
}

traj = traj.sort((a, b) => {
    return a[0] - b[0];
  });

traj = traj.slice(traj.length-10);

traj.forEach((element) => {
    element.shift();
    vifdor.push(element.pop());
})

console.log(vifdor);

// Entrée au ministère

function ministere(){
    let nbrs = [];
    let check = [0, 0, 0, 0, 0,]
    for(let i = 64225 , j = 0 ; j < 3 ; i++){
        let carre = i*i;
        carre = carre.toString();
        carre = carre.split('');
        for(let k = 0 ; k < carre.length ; k++){
            if(carre[k] != 7 && carre[k] != 6 && carre[k] != 4 && carre[k] != 2 && carre[k] != 1){
                k = carre.length;
            }
            else if(carre[k] == 0){

            }
            else if(k = carre.length-1){
                nbrs.push(i);
                j++;
            }
        }
    }
    return nbrs;
}

console.log(ministere());

// Méli-Mélo d'adresses

function newton(entree){
    const list = prompt('Entrer la liste ici');
    let arrList = list.split(`\n`);
    let arrEmpreintes = [];
    arrList.forEach(adresse => {
        let dico = {
            a : 0,
            b : 0,
            c : 0,
            d : 0,
            e : 0,
            f : 0,
            g : 0,
            h : 0,
            i : 0,
            j : 0,
            k : 0,
            k : 0,
            l : 0,
            m : 0,
            n : 0,
            o : 0,
            p : 0,
            q : 0,
            r : 0,
            s : 0,
            t : 0,
            u : 0,
            v : 0,
            w : 0,
            x : 0,
            y : 0,
            z : 0,
        }
        let arrAdresse = adresse.split('');
        arrAdresse.forEach(element => {
            if(element in dico){
                dico[element]++;
            }
        });
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let empreinte = '';
        for(let i = 0 ; i < 26 ; i++){
            let lettre = alphabet[i];
            if(dico[lettre] > 0){
                empreinte += dico[lettre] + lettre;
            }
        }
        arrEmpreintes.push(empreinte);
    });
    arrEmpreintes.forEach(element => {
        if(element == entree){
            console.log('Mulder et Scully devront se rendre dans cette rue : ' + arrList[arrEmpreintes.indexOf(element)]);
        }
    });
}

// newton("1a6e1g1i1l1m1n1o2r2s2u1y");


// Les victimes de Tooms 1/2

function tooms1(){
    let list = prompt('Entre la liste');
    list = list.split('\n');
    let tooms = '10, 12, 6, 9, 18.5, 22, 7, 4, 9, 10';
    tooms = tooms.split(', ');
    let resultat = 0;
    list.forEach(element => {
        element = element.split(' - ');
        let index = element[0];
        let rel = element[1].split(', ');
        for(let i = 0 ; i < 10 ; i++){
            rel[i] -= tooms[i];
        };
        if(rel.every(value => value === rel[0])){
            resultat += parseInt(index);
        }
        console.log('Index : '+index+'\nRelevé : '+rel);
    });
    console.log('Résultat : '+resultat);
}

// tooms1();

// Les hybrides (S01E09)

function splitIntoChunks(str, chunkSize) {
    const regex = new RegExp(`.{1,${chunkSize}}`, 'g');
    return str.match(regex) || [];
}

function hybrides(){
    let list = prompt('Entrer liste');
    let A = '0001',
        C = '0011',
        G = '1100',
        T = '1010';
    list = list.split('\n');
    let resultat = '';
    list.forEach(function(adn) {
        adn = adn.split(' : ');
        let index = adn[0].split(' ');
        index.shift();
        adn.shift();
        const sequences = splitIntoChunks(adn[0], 4);
        let V = true;
        sequences.forEach(function(seq) {
            if(seq != A && seq != C && seq != G && seq != T && V){
                resultat += `${index}, `;
                V = false;
            }
        })
    });    
    console.log(resultat);
};

// hybrides();

// Analyse de sequences 1/2

function analyseSeq(){
    let seq = prompt('Entrer la sequence à analyser').split('');
    let resultat = 1;
    seq.forEach(function(lettre) {
        if(lettre == 'R' ||lettre == 'Y' ||lettre == 'K' ||lettre == 'M' || lettre == 'S' || lettre == 'W'){
            resultat *= 2; 
        }else if(lettre == 'B' ||lettre == 'D' ||lettre == 'H' ||lettre == 'V'){
            resultat *= 3;
        }else if(lettre == 'N'){
            resultat *= 4;
        };
        resultat = resultat.toString();
        if(resultat.length > 5){
            resultat = resultat.slice(-5);
        }
        resultat = parseInt(resultat);
    });
    console.log(resultat);
};

// analyseSeq();

// Analyse de sequences 2/2

function analyseSeq2() {
    // let data = 'NGKWAR\n\nAGAAAA\nGAUCAA\nAGUAAG\nUGGUAG\nUGUUAG\nGGUAAA\nAGGUAG\nCGGAAG\nGGGAAG';
    let data = prompt('Entrer les données');
    data = data.split('\r\n\r\n');
    let motif = data.shift();
    data = data[0].split('\r\n');
    let resultat = 0;
    data.forEach(function(seq){
        let match = 0;
        for(let i = 0 ; i < seq.length ; i++) {
            if(motif[i] == 'N'){
                match++;
            }else if(motif[i] == seq[i]){
                match++;
            }else if(seq[i] == 'A'){
                if(motif[i] == 'R' || motif[i] == 'M' || motif[i] == 'W' || motif[i] == 'D' || motif[i] == 'H' || motif[i] == 'V'){
                    match++;
                }
            }else if(seq[i] == 'C'){
                if(motif[i] == 'Y' || motif[i] == 'M' || motif[i] == 'S' || motif[i] == 'B' || motif[i] == 'H' || motif[i] == 'V'){
                    match++;
                }
            }else if(seq[i] == 'G'){
                if(motif[i] == 'R' || motif[i] == 'K' || motif[i] == 'S' || motif[i] == 'B' || motif[i] == 'D' || motif[i] == 'V'){
                    match++;
                }
            }else if(seq[i] == 'U'){
                if(motif[i] == 'Y' || motif[i] == 'K' || motif[i] == 'W' || motif[i] == 'B' || motif[i] == 'D' || motif[i] == 'H'){
                    match++;
                }
            }
        }
        if(match == seq.length){
            resultat++;
        }
    });
    console.log(resultat);
}

// analyseSeq2();

// Entrée au ministère

function containsNumbers(arr,check){
    return check.every(num => arr.includes(num.toString()));
};
function excludesNumbers(arr, check){
    let result = true;
    check.forEach(function(num){
        if(arr.includes(num.toString())){
            result = false;
        }
    })
    return result;
}

function ministere2(d,f){
    const include = [1,2,4,6,7];
    const exclude = [0,3,5,8,9];
    for(let i = d ; i < f ; i++){
        let carre = i*i;
        carre = carre.toString().split('');
        // console.log(`Le carré : ${carre} \n ${containsNumbers(carre, include)} \n ${excludesNumbers(carre, exclude)}`);
        if(containsNumbers(carre, include) && (excludesNumbers(carre, exclude))){
            console.log(i);
        };
    }
}

// ministere2(64224,100000);

// Vous parlez Fourchelangue?

function fourchelangue(entree){
    let fourche = [];
    let phrase = '';
    const alpha = {
        'HFH' : 'A',
        'FFH' : 'B',
        'SHS' : 'C',
        'SHH' : 'D',
        'SSH' : 'E',
        'FHF' : 'F',
        'FSS' : 'G',
        'HFF' : 'H',
        'HHH' : '[I/J]',
        'SFS' : 'K',
        'FFS' : 'L',
        'FHS' : 'M',
        'SSF' : 'N',
        'FHH' : 'O',
        'HHF' : 'P',
        'SFF' : 'Q',
        'FSF' : 'R',
        'FSH' : 'S',
        'HHS' : 'T',
        'FFF' : '[U/V]',
        'SSS' : 'W',
        'HFS' : 'X',
        'SHF' : 'Y',
        'SFH' : 'Z',
        'HS' : ' ',
    }
    entree = entree.split('');
    while(entree.length > 0){
        let syl = 3;
        console.log(entree);
        if(entree[0] == 'H' && entree[1] == 'S'){
            syl = 2;
        }
        let lettre = '';
        for(let j = 0 ; j < syl ; j++){
            lettre += entree.shift();
        }
        fourche.push(lettre);
    }
    console.log(fourche);
    fourche.forEach(function(syllabe){
        phrase += alpha[syllabe];
    })
    console.log(phrase);
}

// fourchelangue('FHSFHHSSFHSSHSHFFSSHFSFHSSSFHFHFSSFFFHHHSSFHHHHSSHHSSHFHSHFHHHHSSFHSSSHFSHHHSHSFFFSSFHSFSSFSFHFHSSFSHHHSHHHFHHFFFFSFHSHHFFHHFFFFSFHSSSFFHHFFFFSHHSSHSHFHFSFHSSSFFHHFFFFSHHSHFHFFSFFSFHHSSFFSHHSSSHSSFFHFHHHSSFHSHHFFHHFFFFFFFHHHHHFSFHSSSFFHHFFFFSHHSFHHSHSSHSFFFHHFSSHFSFHSSHHSSHHSSHSSSHFSHHSHHSFSFFHHHHHFSHHSHHHFSSSSFFHHFFHFFSSSHFSHHSHHSFSFHFHHHHHHSFSFSSHFSHHSSSHHHSHSFFSFHHFSFFSHSFFFFFSSHHSHHSHFFSSHFHHSHHHFHFSFSHHHSHFHFFSHFHFSHHHSFHHFSFHSSSHHHSHSSHSFHHFSFFHSHFHSHSHSSSFSSHHSSSFFHHFFFFSHHSFSSSSHSSFSSHFSFFHHSSFHHSHSHHFFFSFFFFSHHSSSFFHHFFFFSHHSSSFFHHFFFFSHHSFHHSHSSHSFFFHHFSSHFSFFHHSSFFSHHSSHHSSHFSHHSHFHFFFHHSFSFSSHFSH');


// James n'a pas de tête

