import GaugeChart from 'react-gauge-chart';

function Views ({views}) {
    
    var totalViews = views;

        // totalViews = 10000000
        var medium = 100000;
        var high = 1000000;
        // var medium = 10;
        // var high = 10000;
        // var high = 30000;
        var impactLevel = 'nothing'
        var number1 = 'nothing'
        var number2 = 'nothing'
        var number3 = 'nothing'
        if (totalViews <=medium){
            number1 = (totalViews/medium)*10
            impactLevel = 0 + (0.033 * number1)
        } else if (totalViews>medium && totalViews<=high) {
            number2 = (totalViews/(high-medium))*10
            impactLevel = .33 + (0.033 * number2)
        } else if (totalViews>high && totalViews<=(high*10)){
            number3 = (totalViews/((high*10)-high))*10
            impactLevel = .66 + (0.033 * number3)
        } else if (totalViews>10000000) {
            impactLevel = 1
        } else  {
            impactLevel = 0
        }
        // 200000/ 1000000
        // .2 


 
        // 20000/100000
        // 1/10
        // *10
        // .33 + (0.033 * 2)

        

        // console.log(impactLevel)
        // 10000/1000000 * 3.3
        // 100,000/1000000 *.33 - nope

        
       
        // console.log('impactLevel is: ' + impactLevel)
        // console.log(impactLevel)

        const chartStyle = {
            width: 250,
          }
        
        // var starArray = [];
        // for (let step = 0; step < impactLevel; step++) {
        //     starArray.push(star);
        // }

        // var emptyStarNum = 5 - impactLevel;

        // var emptyStarArray = [];
        // for (let step = 0; step < emptyStarNum; step++) {
        //     starArray.push(Full_Rating);
        // }
        
      

    return (
        <GaugeChart id="gauge-chart1" percent={impactLevel} hideText="true" style={chartStyle} colors={["#FF0000", "#FFFF00", "#00FF00"]}/>
    )
}
export default Views;