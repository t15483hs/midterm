function distance (a,b){
    if(a.x==b.x && a.y==b.y){
        return(0)
    }
    else if(a.x<b.x && a.y<b.y){
       return((b.x-a.x)+(b.y-a.y))
    }
    else if(a.x<b.x && a.y<b.y){
          return((b.x-a.x)+(a.y-b.y))
    }
    else if(a.x<b.x && a.y<b.y){
          return((a.x-b.x)+(b.y-a.y))
    }
    else{
         return((a.x-b.x)+(a.y-b.y))
    }
}
