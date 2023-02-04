import lowDash from './lowDash.png';
import mediumDash from './mediumDash.png';
import highDash from './highDash.png';

function Views ({views}) {
    
    var totalViews = views;
    // console.log(totalViews)

        var impactLevel = 'nothing'
 
        if (totalViews<10000) {
            // console.log('1-2');
            impactLevel = lowDash;
        } else if (totalViews<100000 && totalViews>=10000) {
            // console.log('2-3');
            impactLevel = lowDash;
        } else if (totalViews<1000000 && totalViews>=100000) {
            // console.log('3-4');
            impactLevel = mediumDash;
        } else {
            impactLevel = highDash
        }
        // console.log('impactLevel is: ' + impactLevel)
        // console.log(impactLevel)
        
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
       <img width="150px"src={impactLevel}/>
    )
}
export default Views;

