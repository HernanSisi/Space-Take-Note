export const uniqueDates = (task) =>{
    const unique = [];
    task.forEach(element => {
        if (!unique.includes(element.date)) {
            unique.push(element.date);
        }
    });
    unique.sort((a, b) => moment(a, 'DD/MM/YYYY') - moment(b, 'DD/MM/YYYY'));
    return unique;
};