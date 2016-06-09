function countDigits(number){
    if(number<0){
        return(-1)
    }
    else{
        var count = 1
        while(number/10>=1){
            number=number/10
            count=count+1
        }
        return(count)
    }
}