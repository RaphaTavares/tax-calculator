const ranges = {
    first: {
        start: 0,
        end: 1100,
        aliquot: 7.5,
        totalDiscount: () =>{
            return ranges.first.end * (ranges.first.aliquot / 100);
        }
    },
    second: {
        start: 1100.01,
        end: 2203.48,
        aliquot: 9,
        totalDiscount: () =>{
            return (ranges.second.end - ranges.second.start)* (ranges.second.aliquot / 100);
        }
    },
    third: {
        start: 2203.49,
        end: 3305.22,
        aliquot: 12,
        totalDiscount: () =>{
            return (ranges.third.end - ranges.third.start) * (ranges.third.aliquot / 100);
        }
    },
    fourth: {
        start: 3305.23,
        end: 6433.57,
        aliquot: 14,
        totalDiscount: () =>{
            return (ranges.fourth.end - ranges.fourth.start) * (ranges.fourth.aliquot / 100);
        }
    }
}

const inss = (salary) =>{
    
    let fourthDiscount = 0;
    let thirdDiscount = 0;
    let secondDiscount = 0;
    let firstDiscount = 0;

    if(salary > ranges.fourth.end){
        fourthDiscount = ranges.fourth.totalDiscount();
        thirdDiscount = ranges.third.totalDiscount();
        secondDiscount = ranges.second.totalDiscount();
        firstDiscount = ranges.first.totalDiscount();
    }

    else if(salary > ranges.fourth.start && salary <= ranges.fourth.end)
    {
        let amountToBeDiscounted = salary - ranges.fourth.start;
        fourthDiscount = amountToBeDiscounted * (ranges.fourth.aliquot / 100);
        thirdDiscount = ranges.third.totalDiscount();
        secondDiscount = ranges.second.totalDiscount();
        firstDiscount = ranges.first.totalDiscount();
    }
    
    else if(salary <= ranges.fourth.start && salary > ranges.third.start){
        let amountToBeDiscounted = salary - ranges.third.start;
        thirdDiscount = amountToBeDiscounted * (ranges.third.aliquot / 100);
        secondDiscount = ranges.second.totalDiscount();
        firstDiscount = ranges.first.totalDiscount();
    }

    else if(salary <= ranges.third.start && salary > ranges.second.end){
        let amountToBeDiscounted = salary - ranges.second.start;
        secondDiscount = amountToBeDiscounted * (ranges.second.aliquot / 100);
        firstDiscount = ranges.first.totalDiscount();
    }
    
    else if(salary <= ranges.second.start && salary !== 0){
        let amountToBeDiscounted = salary - ranges.first.start;
        firstDiscount = amountToBeDiscounted * (ranges.first.aliquot / 100);
    }
    return salary - fourthDiscount - thirdDiscount - secondDiscount - firstDiscount;
}

module.exports = inss