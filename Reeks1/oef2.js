const lijstNummers = [3,8,4,1,6]
let aanElkaar = ""

for (let i = 0; i < lijstNummers.length; i++) {
    aanElkaar += lijstNummers[i]
    if (i < lijstNummers.length -1) {
        aanElkaar += " ; "        
    }    
} 

console.log(aanElkaar);
