// ici notre code JS
        
//mélanger les boites aléatoirement et isolation du code dans une fonction. Pour éviter la réutilisation et la modification de cette partie du code:
function shuffleChildren(parent){
    let children = parent.children;
    let i = children.length, k ,temp;
    while (--i > 0){ // on boucle tant que 1 oté de i est toujours positif
        k = Math.floor(Math.random() * (i+1));// k stocke un nombre aléatoire basé sur i
        temp = board.children[k];// temp pointe temporairement l'élément à la position k dans board
        children[k] = children[i]; // remplace l'élément à la position k par l'élément à la position i
        parent.appendChild(temp); // place l'émément k pointé temporairement à la fin du contenu de board
    }
}

const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector ("#board");

let nb=1;// on déclare une variable nb qui représentera le numéro attendue et s'incrémentera en cas de clc valide

// crée plusieur boites:
for(let i = 1; i<=50;i++){ // nombre de boite voulu 130 ou 10
    const newbox = box.cloneNode();// faire des clone de la boite 
    newbox.innerText=i;
    board.appendChild(newbox);

    newbox.addEventListener("click", function(){

        console.log( "Boite n°" + i +", click !")

        if (i == nb){// vérification que le nbr de la boite correspond à la variable nb
            newbox.classList.add("box-click");// modifie visuellement la case cliquée 

            //1 toutes les conditions ont été respecter par le joueur
            if (nb == board.children.length){
                alert (" VICTOIRE TU ES LE GRAND CHAMPION  ! ");
            }
            nb++;
        }
        //2 le joueur a cliquée sur une boite au numéro plus élever il recommence 
        else if (i > nb){
            alert(" GAME OVER  HAaaaaaaa !!");
            nb=1;
            board.querySelesctorALL(".box-click").forEach(function(validBox){
                validBox.classList.remove("box-click")
            })
        }
        //3 le joueur a cliquée sur une page déjà grisée il est juste informer
        else {
            alert ("Casse déjà cliquée concentre toi!");
        }
    })
}
shuffleChildren(board);