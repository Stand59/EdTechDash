import GaugeChart from 'react-gauge-chart';

function Downloads ({downloads}) {
    
    // downloads = 100000

    var medium = 100000;
    var high = 1000000;
    // var medium = 10;
    // var high = 10000;
    // var high = 30000;
    var impactLevel = 'nothing'
    var number1 = 'nothing'
    var number2 = 'nothing'
    var number3 = 'nothing'
    if (downloads <=medium){
        number1 = (downloads/medium)*10
        impactLevel = 0 + (0.033 * number1)
    } else if (downloads>medium && downloads<=high) {
        number2 = (downloads/(high-medium))*10
        impactLevel = .33 + (0.033 * number2)
    } else if (downloads>high && downloads<=(high*10)){
        number3 = (downloads/((high*10)-high))*10
        impactLevel = .66 + (0.033 * number3)
    } else {
        impactLevel = 1
    }

        // 10000/1000000 *.033
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
export default Downloads;

