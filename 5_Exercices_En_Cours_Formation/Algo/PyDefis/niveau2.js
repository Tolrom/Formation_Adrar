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


function Q(n){
    if(n <= 2){
        return 1;
    }
    else {
        return Q(n-Q(n-1))+Q(n-Q(n-2));
    }
}
console.log(Q(10));

// function Qsuite(i,j){
//     let total = 0;
//     let qi = Q(i);
//     let qi2 = Q(i+1);
//     for(let k = i ; k < j ; k++){
//         total += qi;
//     }
//     return total;
// }

// console.log(Qsuite(1583,1697));
