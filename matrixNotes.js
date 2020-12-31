const notes=[
  ["Hans", 80, 90, 10, 50],
  ["Ulrich", 94, 36, 76, 74],
  ["Olaf", 30, 60, 34, 78],
  ["Otto", 60, 60, 78, 23],
  ["Tina", 71, 45, 89, 100],
  ["Rosalina", 40, 56, 82, 40],
  ["Urs", 49, 45, 56, 67],
  ["Monika", 49, 42, 16, 62]
];
console.log("   *** Cok boyutlu dizilerde islemler ***   ");
console.log("Matematik dersinin ortalamasi: "+mathMean());
console.log("Almanca dersinin ortalamasi: "+germanMean());
console.log("Ingilizce dersinin ortalamasi: "+englishMean());
console.log("Ingilizce dersinin ortalamasi: "+geographyMean());
console.log("Herhangi bir dersten 70 ustu alanlarin listesi: "+findOver70InAnyLesson());
console.log("Tum derslerden ortalamanin ustu alanlarin listesi: "+aboveMeanListInAllLessons());
console.log("Matematik,Almanca,Ingilizce ve Cografya derslerinden sirasiyla en yuksek notlar: "+findMaxInAnyLessons());
console.log("Sinifta en kotu not "+findMinInAnyLessons()+"  ve bu notun alindigi ders Ingilizcedir");
console.log("Matematik,Almanca,Ingilizce ve Cografya derslerinden sirasiyla en basarili ogrenciler: "+bestStudentInLessons());


//Matematik dersinin ortalamasini alan fonksiyon
function mathMean(){
    let result=0;
    for(let i=0;i<notes.length;i++){
       result= result+ notes[i][1];
    }
  return result/notes.length;
}
//Almanca dersinin ortalamasini alan fonksiyon
function germanMean() {
    let result=0;
    for(let i=0;i<notes.length;i++){
        result= result+ notes[i][2];   
     }
   return result/notes.length;
 }
//Ingilizce dersinin ortalamasini alan fonksiyon
 function englishMean() {
    let result=0;
    for(let i=0;i<notes.length;i++){
        result= result+ notes[i][2];
     }
   return result/notes.length;
 }
//Cografya dersinin ortalamasini alan fonksiyon
 function geographyMean() {
    let result=0;
    for(let i=0;i<notes.length;i++){
        result= result+ notes[i][2];
     }
   return result/notes.length;
 }
//Herhangi bir dersten 70 ustu alanlarin listesi
 function findOver70InAnyLesson(){
    let names=[];
    let newnames=[];
     for(let i=0;i<notes.length;i++){
         for(let j=1;j<notes.length;j++){
             if(notes[i][j]>70){
                  names.push(notes[i][0]);
             }
         }
     }
     //Dizideki tekrarli stringleri silme.
     for (let str of names) {
        if (!newnames.includes(str)) {
          newnames.push(str);
        }
      }
     return newnames;
 }
// Tum derslerden ortalamanin ustu alanlarin listesi
 function aboveMeanListInAllLessons(){
     let list=[];
     for(let i=0;i<notes.length;i++){
         if(notes[i][1]>mathMean()){
             list.push(notes[i][0]);
             continue;
         } else
         if(notes[i][1]>germanMean()){
             list.push(notes[i][0]);
             continue;
         }
         if(notes[i][1]>englishMean()){
             list.push(x[i][0]);
             continue;
         }
         if(notes[i][1]>geographyMean()){
             list.push(x[i][0]);
             continue;
         }
     }
     return list;
 }
// Siniftaki herhangi bir dersten en yuksek not
 function findMaxInAnyLessons(){
     let mathMax,germanMax,englishMax,geographyMax;
     let arr1=[],arr2=[],arr3=[],arr4=[];
     let maxNumbers=[];
     for(let i=0;i<notes.length;i++){
         arr1.push(notes[i][1]);
         arr2.push(notes[i][2]);
         arr3.push(notes[i][3]);
         arr4.push(notes[i][4]);
     }
      mathMax=Math.max.apply(null,arr1);
      germanMax=Math.max.apply(null,arr2);
      englishMax=Math.max.apply(null,arr3);
      geographyMax=Math.max.apply(null,arr4);
      maxNumbers.push(mathMax,germanMax,englishMax,geographyMax);

     return maxNumbers;
 }
// Siniftaki en dusuk not
 function findMinInAnyLessons(){
    let mathMax,germanMax,englishMax,geographyMax;
    let arr1=[],arr2=[],arr3=[],arr4=[];
    let minNumbers=[];
    for(let i=0;i<notes.length;i++){
        arr1.push(notes[i][1]);
        arr2.push(notes[i][2]);
        arr3.push(notes[i][3]);
        arr4.push(notes[i][4]);
    }
     mathMax=Math.min.apply(null,arr1);
     germanMax=Math.min.apply(null,arr2);
     englishMax=Math.min.apply(null,arr3);
     geographyMax=Math.min.apply(null,arr4);
     minNumbers.push(mathMax,germanMax,englishMax,geographyMax);
     minNumbers.sort();

    return minNumbers[0];
}
// Siniftaki her dersten en basarili ogrenciler
 function bestStudentInLessons(){
    let arr1=[],arr2=[],arr3=[],arr4=[],arr5=[];
    let max1,max2,max3,max4;
    let bestStudent=[];
    for(let i=0;i<notes.length;i++){
        arr1.push(notes[i][0]);
        arr2.push(notes[i][1]);
        arr3.push(notes[i][2]);
        arr4.push(notes[i][3]);
        arr5.push(notes[i][4]);
    }
     max1=arr2[0];
     max2=arr3[0];
     max3=arr4[0];
     max4=arr5[0];

    for(let i=0;i<arr2.length;i++){
        if(max1<arr2[i]){
            max1=arr2[i];
                 }
        }
    let arr1Max1=arr2.indexOf(max1);
    bestStudent.push(arr1[arr1Max1]);
    for(let i=0;i<arr3.length;i++){
        if(max2<arr3[i]){
            max2=arr3[i];
                 }
        }
    let arr1Max2=arr3.indexOf(max2);
    bestStudent.push(arr1[arr1Max2]);
    for(let i=0;i<arr4.length;i++){
        if(max3<arr4[i]){
            max3=arr4[i];
                  }
        }
    let arr1Max3=arr4.indexOf(max3);
    bestStudent.push(arr1[arr1Max3]);
    for(let i=0;i<arr5.length;i++){
        if(max4<arr5[i]){
            max4=arr5[i];
                  }
        }
    let arr1Max4=arr5.indexOf(max4);
    bestStudent.push(arr1[arr1Max4]);

    return bestStudent;
}
