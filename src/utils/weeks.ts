export const weeksInDates3 = (fecha : string) : boolean[][] => {
    const msResto = parseFloat('1661538.4615385'); 
    const msInWeek = (1000 * 60 * 60 * 24 * 7) + msResto;
    const diffDate = new Date().getTime() - new Date(fecha).getTime();
    const weeks = Math.round(Math.abs(diffDate) / msInWeek);
    const weeksLessDecimal = diffDate / msInWeek;
    console.log('msInWeek ',msInWeek, ' diffDate ',diffDate, ' weeks ',weeks, ' weeksLessDecimal ',weeksLessDecimal);
    let weeksArray = [];
    const weeksBlock = [];
    let count = 1;
    for (let i = 1; i <= 4160; i++) {
        if(count <= 26){
            if(i <= weeks){
                //console.log('i ',i, ' weeks ',weeks, ' count ',count);
                weeksArray.push(true);
            }else{
                weeksArray.push(false);    
            }
            if(count === 26){
                weeksBlock.push(weeksArray);
                weeksArray = [];
                count = 0;
            }
        }
        count++;
    }
    return weeksBlock;
}