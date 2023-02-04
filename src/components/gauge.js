import GaugeChart from 'react-gauge-chart';

function Gauge ({views}) {
    
    var totalViews = views;
    console.log(totalViews)
        // totalViews = 100001
        var impactLevel = 'nothing'
 
        if (totalViews<=10000) {
            impactLevel = .033
        } else if (totalViews>10000 && totalViews<=20000) {
            impactLevel = .066;
        } else if (totalViews>20000 && totalViews<=30000) {
            impactLevel = .099;
        } else if (totalViews>30000 && totalViews<=40000) {
            impactLevel = .132;
        } else if (totalViews>40000 && totalViews<=50000) {
            impactLevel = .165;
        } else if (totalViews>50000 && totalViews<=60000) {
            impactLevel = .198;
        } else if (totalViews>60000 && totalViews<=70000) {
            impactLevel = .231;
        } else if (totalViews>70000 && totalViews<=80000) {
            impactLevel = .264;
        } else if (totalViews>80000 && totalViews<=90000) {
            impactLevel = .297;
        } else if (totalViews>90000 && totalViews<100000) {
            impactLevel = .30;
        } else if (totalViews>=100000 && totalViews<=200000) {
            impactLevel = .396;
        } else if (totalViews>200000 && totalViews<=300000) {
            impactLevel = .429;
        } else if (totalViews>300000 && totalViews<=400000) {
            impactLevel = .462;
        } else if (totalViews>400000 && totalViews<=500000) {
            impactLevel = .495;
        } else if (totalViews>500000 && totalViews<=600000) {
            impactLevel = .528;
        } else if (totalViews>600000 && totalViews<=700000) {
            impactLevel = .561;
        } else if (totalViews>700000 && totalViews<=800000) {
            impactLevel = .594;
        } else if (totalViews>800000 && totalViews<=900000) {
            impactLevel = .627;
        } else if (totalViews>900000 && totalViews<=1000000) {
            impactLevel = .66;
        } else {
            impactLevel = .75;
        }

        // 10000/1000000 *.033
        // 100,000/1000000 *.33 - nope
       
        console.log('impactLevel is: ' + impactLevel)
        console.log(impactLevel)

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
export default Gauge;