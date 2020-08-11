/**const { compact } = require("lodash");

const randnum=(num=0)=>{
   
       
        var num=0;
       let i=0;
       
               t=Math.floor((Math.random() * 100000000) + 1);

             
             var b=t.toString();
            var g=b.substring(0,4);
         
           
             var a="bdjhvndihvnkvnfkfvnivnfkvn"; 
             var ans = ''; 
             for ( i = a.length; i > 0; i--) { 
                 ans +=  
                   a[Math.floor(Math.random() * a.length)]; 
             } 
             for(i=0;i<5;i++){
                    var n=ans.replace(ans[5],g[0]).substring(4,6);
                    var m=ans.replace(ans[3],g[1]).substring(2,4);
                    var o=ans.replace(ans[1],g[2]).substring(0,2);
                    var p=ans.replace(ans[7],g[3]).substring(6,8);
             }
             console.log(m+n+o+p);         

}
randnum();*/


  


const {unicode}= require("uni-code");
  let data="password";
  const returnValue=unicode(data);

  

