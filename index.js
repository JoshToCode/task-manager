let vanes=document.querySelectorAll(".vane");

vanes.forEach(etl => {
  etl.addEventListener("click",function (){
etl.parentElement.parentElement.remove()
  })
});

//months
let c_m=0
let mu=document.querySelector(".mu");
let md=document.querySelector(".md");
let mk=document.querySelector(".mk");

///days
let dy=document.querySelector(".dy");
let dd=document.querySelector(".dd");
let dk=document.querySelector(".dk");

//years

let yu=document.querySelector(".yu");
let yd=document.querySelector(".yd");
let yk=document.querySelector(".yk");




//months part

let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
    ];
   
    mk.innerHTML=months[c_m];

    md.addEventListener("click",function (params) {
      c_m++;
      mk.innerHTML=months[c_m];
      if (c_m ===11) {
        c_m=-1
      }
    })

    mu.addEventListener("click",function (params) {
        if (c_m ===-1) {
            c_m=12
          }
     if (c_m===0) {
        c_m=12
     }
        c_m--;
        mk.innerHTML=months[c_m];
       
      })

      //day part

      dy.addEventListener("click",function (params) {
                let old=Number(dk.innerHTML);
                old++;
             
                if (old===32) {
                    old=1
                }
                document.querySelector(".dk").innerHTML=old;
      })

      dd.addEventListener("click",function (params) {
        let old=Number(dk.innerHTML);
        old--;
     
        if (old===0) {
            old=31
        }
        document.querySelector(".dk").innerHTML=old;
})




//year part
let current=Number(document.querySelector(".yk").innerHTML);

document.querySelector(".yk").innerHTML=current;


yd.addEventListener("click",function(){


current++

document.querySelector(".yk").innerHTML=current;
})

yu.addEventListener("click",function(){
if (current==2024) {
    document.querySelector(".yk").innerHTML=2024 
}else{
    current--
    
    document.querySelector(".yk").innerHTML=current;
}
    })

//set time;

document.querySelector(".fg").addEventListener("click",function (params) {
    let values=document.querySelector(".mk").innerHTML+"-"+document.querySelector(".dk").innerHTML+"-"+document.querySelector(".yk").innerHTML;
document.querySelector(".holder").innerHTML=values
})