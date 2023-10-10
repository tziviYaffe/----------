var colorIndex=0
var x=4,y=4;


var computer=['red','yellow','purple','blue']//מערך של המחשב למיחוש
var arrColors=['','','',''];//מערך של ניחושי המשתמש
function setColor(color)//מכניס למערl את הצבעים שנבחרו על ידי המשתמש
{
    if(colorIndex<4)
    {
       arrColors[colorIndex]=color;
    } 
    colorIndex++;
    document.getElementById(colorIndex).style.backgroundColor=color;


}


function mm(){
    document.getElementById("music").play();
}
function stopAudio()
{
    document.getElementById("rm").play();

}


function clearAll(color)//פונקציה שמנקה בכל תור את 4 הצבעים שנבחרו
{
    for(var i=1;i<=4;i++)
    {
        document.getElementById(i).style.backgroundColor=color;
    }
    colorIndex=0
    document.getElementById('r').innerHTML=""
    document.getElementById('vilo').innerHTML="" 
    document.getElementById('oops').innerHTML=""
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "aquamarine";
     ctx.fillRect(0, 0, 200, 100); 
    ctx.clearRect(0, 0,200, 100);
    x=4;
    y=4;
}
function clearTheScreen()//אם בן אדם לא בחר עדיין צבעים המחשב כותב לו לבחור
{
    var bul=0;
    var pgiaa=0;
   if(colorIndex>=4)
      {
 
         for (var i = 0; i < 4; i++)//בודק את מספר הבולים עבור כל ניחוש
         {
             if (arrColors[i] ==computer[i])
             {
               bul++;

             }  
         }
         for (var i = 0; i <4 ;i++ )
         {   
                 for (var j = 0; j <4; j++)//בודק את מספר הפגיעות עבור כל ניחוש
                 {
                 if (arrColors[i] == computer[j] && i != j)
                  pgiaa++;
                 }        
         }
         for(var i=0;i<pgiaa;i++)
         {
            drawp()
         }
         for(var i=0;i<bul;i++)
         {
            drawbul()
         }
       
         if(bul==4)//במקרה של ניצחון
         {
            document.getElementById("pras").disabled=false;
            document.getElementById('div1').innerHTML=""
            document.getElementById('div2').innerHTML=""
            document.getElementById('div3').innerHTML= "" 
            document.getElementById("timer").innerHTML="";
            document.getElementById("timer").innerHTML="";
            stopTimer(); 
            document.getElementById("r").style.fontSize="100px"
            document.getElementById("r").style.marginLeft="42.5%"
            document.getElementById("r").innerHTML=" ניצחת";
            document.getElementById("oops").style.fontSize="40px"
            document.getElementById("oops").innerHTML=" לחץ  לקבלת המדליה לפני גמר הזמן";
            
            
        }
         else
         {
         document.getElementById('vilo').style.color="#FF0000"
         document.getElementById('vilo').innerHTML="בולים= " +bul
         document.getElementById('r').style.color="#4d4dff"
         document.getElementById('r').innerHTML="פגיעה=" +pgiaa
        }

           
      }
      else{
      
        document.getElementById('oops').innerHTML="הופס בבקשה בחר 4"
       
        
      }
}
function drawp(){//מצייר את הפגיעות בצבע כחול
         var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
         ctx.fillStyle = "#4d4dff";
        ctx.fillRect(x+=33,y=4,30,30);


}
function drawbul(){//מצייר את הבולים בצבע אדום
    var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
   ctx.fillRect(x+=33,y=4,30,30);
   


}



function stopTimer()
{
    clearInterval(x);
}

var index1=400
function getTime()
{
    ////קידום הטימר 
index1--;
document.getElementById("timer").innerHTML=index1;
if(index1==-1 )
{
index1="";
document.getElementById("timer").innerHTML="";
document.getElementById("r").style.fontSize="70px"
document.getElementById("r").style.marginLeft="42.5%"
document.getElementById("r").innerHTML="תם הזמן";
document.getElementById("ta").disabled=true;
document.getElementById("tb").disabled=true;

}

}
function clearTimer()
{
    
    index1=0;
    document.getElementById("timer").innerHTML=index1;   
    
}
var x;
 x=setInterval("getTime()",1000)

 function changkishur(){//משנה את הצבע של הקישור
     document.getElementById("bb").style.backgroundColor="gold"
     document.getElementById("bb").style.width="2.5cm"
     document.getElementById("bb").style.height="1.4cm"
 }









