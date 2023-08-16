export const weeksInDates = (fecha : string) : number => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const diffDate = new Date(fecha).getTime() - new Date('2023-08-15').getTime();
    const weeks = Math.round(Math.abs(diffDate) / msInWeek);
    return weeks;
}