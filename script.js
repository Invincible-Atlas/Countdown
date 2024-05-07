const outBox = document.getElementById("timer");
const second = 1000;
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
const fullDay = 24300000;
const fd = fullDay;
const earlyRelease=17100000;
const title = document.getElementById("title");
const allStart=new Date(0,0,0,7,30,0,0);

const fdEnd = new Date(0,0,0,14,15,0,0)
const erEnd = new Date(0,0,0,12,15,0,0)
const er = earlyRelease;
const lateStart=0;
const ls = lateStart;
var totalMilli=0;
const daylist = [];
var startDate= new Date();
const weekend = 0;
const startday = 20;
startDate.setMonth(3);
startDate.setDate(startday);
startDate.setFullYear(2024);
var endDate = new Date()
endDate.setMonth(5);
endDate.setDate(15);
endDate.setFullYear(2024);

var diff1 = endDate.getTime()-startDate.getTime()
let years1 = Math.floor(diff1 / year);
let days1 = Math.floor(diff1 / day)-(years1*365);

var weekday = startDate.getDay();
for(let i = 1; i <=days1; i++){
    if(weekday>6){
        weekday=0;
    }
    if(weekday==0 || weekday==6){
        daylist.push(weekend);
    }else{
        daylist.push(fullDay);
    }
    weekday++;
    
    
    
}

var d3=0;
function digitCheck(text,length){
    var stringText = String(text);
    if(stringText.length<length){
        
        return("0"+stringText);
    }else{
        
        return(stringText);
    }
};
function time() {
    
    var timeleft = 0;
    //Gets the current date and turns it into a Date object
    // var now = (milliConvert(Date.now()));
    var now = (milliConvert(Date.now()+(day*7*0)));
    var now1 = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    var days=dayDiff(startDate,now1)
    var daysleft = 0;
    
    var now2 = new Date(0,0,0,now.getHours(),now.getMinutes(),now.getSeconds());
    if(daylist[days]==weekend){
        // console.log('you are not in school, it is a weekend');
    }else{
        if(allStart<=now2&&now2<fdEnd){
            // console.log("you are in school");
            
            var milliElapsed = now2-allStart;
            
            // console.log(milliElapsed);
            for(let i = days; i< daylist.length;i++){
                timeleft += daylist[i];
                
            }
            timeleft+=(fullDay-milliElapsed);
        }else{
            // console.log('you are not in school')
            for(let i = days; i< daylist.length;i++){
                timeleft += daylist[i];
                
            }
            
        }
    }
    
    timeleft=new Date(timeleft);
    console.log(timeleft)
    
    var outString = "";
    // console.log(timeleft.getDate())
    
    outString = timeleft.getHours()+(dayDiff(new Date(0),timeleft)*24);
    
    // var tempstring = String(timeleft.getHours());
    
    
    // console.log(timeleft.getTime());
    
    // if(tempstring.length<2){
        
    //     outString=outString+":0"+timeleft.getHours();
    // }else{
        
    //     outString=outString+":"+timeleft.getHours();
    // }
    outString=outString+":"+digitCheck(timeleft.getMinutes());
    outString=outString+":"+digitCheck(timeleft.getSeconds());
    daysleft = Math.floor(timeleft.getTime()/fullDay)
    outBox.innerHTML = daysleft +"<br>" + outString;
    title.innerHTML = daysleft + " | " + outString;
    
    
   
}   
setInterval(time,100)