const height = document.getElementById("mainBodyCalculatorHeight");
const weight = document.getElementById("mainBodyCalculatorWeight");
const metric = document.querySelector("#mainBodyMassCalculatorMetric");
const imperial = document.querySelector("#mainBodyMassCalculatorImperial");


weight.addEventListener('input', (e)=>{
    console.log(metric.value)
    console.log(imperial.value)
    const bmiRslt = e.target.value / ((height.value/100)^2)

    if(bmiRslt){

        document.querySelector(".mainBodyCalculatorFormResultResult").innerHTML=`The result is : ${bmiRslt}`
        document.querySelector(".mainBodyCalculatorFormResultParagraph").innerHTML= " "
    }else{
        document.querySelector(".mainBodyCalculatorFormResultResult").innerHTML=`Welcome!`
        document.querySelector(".mainBodyCalculatorFormResultParagraph").innerHTML= "Enter your height and weight and you'll see your BMI result here"
    }
});



