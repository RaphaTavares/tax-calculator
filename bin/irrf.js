const ranges = {
    first: {
        start: 0,
        end: 1903.98,
        aliquot: 0,
        totalDiscount: () =>{
            return 0;
        }
    },
    
    second: {
        start: 1903.99,
        end: 2826.66,
        aliquot: 7.5,
        totalDiscount: () =>{
            return (ranges.second.end - ranges.second.start)* (ranges.second.aliquot / 100);
            }
        },

    third: {
        start: 2826.67,
        end: 3751.06,
        aliquot: 15,
        totalDiscount: () =>{
            return (ranges.third.end - ranges.third.start) * (ranges.third.aliquot / 100);
        }
    },

    fourth: {
        start: 3751.07,
        end: 4664.68,
        aliquot: 22.5,
        totalDiscount: () =>{
            return (ranges.fourth.end - ranges.fourth.start) * (ranges.fourth.aliquot / 100);
        }
    },

    fifth: {
        start: 4664.69,
        aliquot: 27.5,
        totalDiscount: salary =>{
            console.log("desconto da ultima aliquota:" + (salary - ranges.fifth.start) * (ranges.fifth.aliquot / 100));
            return (salary - ranges.fifth.start) * (ranges.fifth.aliquot / 100);
        }
    }


}

const irrf = (salary) =>{
    let fifthDiscount = 0;
    let fourthDiscount = 0;
    let thirdDiscount = 0;
    let secondDiscount = 0;
    let firstDiscount = 0;

    if(salary > ranges.fourth.end){
        fifthDiscount = ranges.fifth.totalDiscount(salary);
        fourthDiscount = ranges.fourth.totalDiscount();
        thirdDiscount = ranges.third.totalDiscount();
        secondDiscount = ranges.second.totalDiscount();
        firstDiscount = ranges.first.totalDiscount();
    }

    else if (salary > ranges.fourth.start){
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

    return salary - fifthDiscount
    - fourthDiscount - thirdDiscount - secondDiscount - firstDiscount;
};

module.exports = irrf