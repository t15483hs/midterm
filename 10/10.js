function even(a){
    var x = a%2==0;
    return(x)
}

function calc2(exp){
  var exp2 = exp.filter(even);
  var i = exp[0];
  var j =0
  while(j<exp2.length)
   j=j+1
   if(exp2="+"){
       i+exp[i+2]
   }
   else if(exp="-"){
   }
   return(i)
};
   
   function calc(exp){
   if(exp[1]=="+"){
       return(exp[0]+exp[2])
   }
   else if(exp[1]=="-"){
       return(exp[0]-exp[2])
   }
}
