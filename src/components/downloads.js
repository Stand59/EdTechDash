import lowDash from './lowDash.png';
import mediumDash from './mediumDash.png';
import highDash from './highDash.png';

function Downloads ({downloads}) {
    

        var impactLevel = 'nothing'
 
        if (downloads<10000) {
            // console.log('1-2');
            impactLevel = lowDash;
        } else if (downloads<100000 && downloads>=10000) {
            // console.log('2-3');
            impactLevel = lowDash;
        } else if (downloads<1000000 && downloads>=100000) {
            // console.log('3-4');
            impactLevel = mediumDash;
        } else {
            impactLevel = highDash
        }
        // console.log('impactLevel is: ' + impactLevel)
        
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
       <img width="150px" src={impactLevel}/>
    )
}
export default Downloads;

