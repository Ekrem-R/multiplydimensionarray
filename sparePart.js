const sparePart = new Array("silecek_supurgesi5","v_kayisi_bmw3","subap_lastigi","buji","ampul","amortisor","24_Amortisor","ampul_35");
console.log("*** Envarterdeki parcalarin isimlerinin ilk harfleri buyuk sekilde siralanisi: *** ");
console.log(spareParts());
console.log("*** Envarterdeki parcalarin isimlerinin tersten yazilisi: *** ");
console.log(writingBackwardsElementOfArray());
console.log("*** Envarterdeki herbir parcanin basina (KEREMAG_) stringini ekleme: ***") ;
console.log(AddElementToFirstIndexOfArray());
console.log("*** Envarterdeki herbir parcanin sonuna tarih ekleme: ***");
console.log(AddDateAtTheEndOfAllIndexOfArray());
console.log("*** Envarterdeki parcalarin isimlerinde numara varsa numarayi silme: ***");
console.log(removeNumbersFromArray());

// Dizideki elemanlarin ilk harfini buyuk yapma
function spareParts(){
    let arr=[];
    
   for(let i=0;i<sparePart.length;i++){
       arr.push(sparePart[i].slice(0,1).toUpperCase()+sparePart[i].slice(1));
   }
    return arr;
}

// Dizideki elemanlardan rakam icerenleri kaldirma

function removeNumbersFromArray(){
    let search =  /[^\D\s]/g;
    let newString=' ';
    
        for(let i = 0; i < sparePart.length; i++){               
            newString+=sparePart[i]+",";            
           }
      
    let n = newString.replace(search,'');
        return n;
    }
    

//Dizideki elemanlarin terslerini yazdirma
function writingBackwardsElementOfArray(){
     let arr=" "
   for(let i=0;i<sparePart.length;i++){
       for(let j=sparePart[i].length-1;j>=0;j--){
             arr+=sparePart[i].charAt(j);
       }
        arr+=","+" ";
    }
    return arr;
 }

// Dizinin her elemaninin basina yeni bir string ekleme
 function AddElementToFirstIndexOfArray(){
    let arr=[];
    
   for(let i=0;i<sparePart.length;i++){
       arr.push("KEREMAG_",sparePart[i]);
   }
    return arr;
}

function AddDateAtTheEndOfAllIndexOfArray(){
    let arr=" ";
    let date=new Date();
	let year=date.getFullYear();
	let month=date.getMonth();
	let day=date.getDay();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    
   for(let i=0;i<sparePart.length;i++){
       arr+=sparePart[i]+" "+day+"/"+month+"/"+year+" "+hours+":"+minutes;
       arr+=","+" ";
   }
    return arr;
}







