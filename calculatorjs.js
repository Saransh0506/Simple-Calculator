myArray=[];
var totalVal ='';
const outputElement = document.querySelector('.js-output');


const getButton = (buttonValue) => {
        myArray.push(!isNaN(buttonValue) ? Number(buttonValue) : buttonValue);    
        totalVal = myArray.join('');
        outputElement.innerText=`${totalVal}`;
};


function equalTo()
{
    try{
    console.log(totalVal);// Use eval to evaluate the expression in totalVal
    var result = math.evaluate(totalVal);
     console.log(result);
     if (isNaN(result) || !isFinite(result)) {
        throw new Error('Invalid mathematical expression');
    }
    outputElement.innerText=`${result}`;    
    }
    catch(error)
        {
            outputElement.innerText=`${error}`;
            result=0;
            console.log(result);
        }
        finally {
            totalVal=`${result}`;
            myArray = [totalVal];            
        }    
}


function reset()
{
    myArray = [];
    totalVal='';
    outputElement.innerText=`0`;
}