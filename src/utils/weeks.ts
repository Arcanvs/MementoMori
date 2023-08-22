export const weeksInDates = (fecha : string) : number => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const diffDate = new Date(fecha).getTime() - new Date('2023-08-15').getTime();
    const weeks = Math.round(Math.abs(diffDate) / msInWeek);
    return weeks;
}

export const weeksInDates2 = (fecha : string) : boolean[] => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const diffDate = new Date(fecha).getTime() - new Date('2023-08-15').getTime();
    const weeks = Math.round(Math.abs(diffDate) / msInWeek);
    
    const weeksArray = [];
    for (let i = 0; i < 4480; i++) {
        if(i <= weeks){
            weeksArray.push(true);
        }else{
            weeksArray.push(false);
        }
    }
    return weeksArray;
}

export const weeksInDates3 = (fecha : string) : boolean[][] => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const diffDate = new Date(fecha).getTime() - new Date('2023-08-15').getTime();
    const weeks = Math.round(Math.abs(diffDate) / msInWeek);
    
    let weeksArray = [];
    const weeksBlock = [];
    let count = 1;
    for (let i = 0; i < 4480; i++) {
        if(count <= 28){
            if(i <= weeks){
                weeksArray.push(true);
            }else{
                weeksArray.push(false);    
            }
            count++;
        }else{
            count = 1;
            weeksBlock.push(weeksArray);
            weeksArray = [];
        }
    }
    return weeksBlock;
}