/**
 * 4. Mention au bac (version simple)
 * À partir d’une note sur 20, afficher :
 * 
 * <10 : “refusé”

 * 10-11.99 : “passable”

 * 12-13.99 : “assez bien”

 * 14-15.99 : “bien”

 * >=16 : “très bien”
 */

function mentionBac(note) {
    if(note<10){
        return 'refusé';
    } else if(note<12){
        return 'passable';
    } else if(note<14){
        return 'assez bien';
    } else if(note<16){
        return 'bien';
    } else {
        return 'trés bien';
    }
}

console.log(mentionBac(9));
console.log(mentionBac(11));
console.log(mentionBac(13));
console.log(mentionBac(15));
console.log(mentionBac(19));