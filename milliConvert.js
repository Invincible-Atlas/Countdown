
function milliConvert(milliseconds){
    
    return(new Date(milliseconds));
}
function dayDiff(date1,date2){
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    return(Difference_In_Days);
}