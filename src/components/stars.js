import Full_Rating from '../assets/Full_Rating.png'; 
import star from '../assets/star.png'

function Stars ({avgRating}) {
    
    var Rating = avgRating;

        var numStar = 0
 
        if (Rating<1 && Rating>=0) {
            // console.log('0-1');
        } else if (Rating<2 && Rating>=1) {
            // console.log('1-2');
            numStar = 1;
        } else if (Rating<3 && Rating>=2) {
            // console.log('2-3');
            numStar = 2;
        } else if (Rating<4 && Rating>=3) {
            // console.log('3-4');
            numStar = 3;
        } else if (Rating<5 && Rating>=4) {
            // console.log('4-5');
            numStar = 4;
        } else if (Rating === 5) {
            // console.log('five');
            numStar = 5;
        } else{
            // console.log('none')
        }
        // console.log('numstar is: ' + numStar)

        var starArray = [];
        for (let step = 0; step < numStar; step++) {
            starArray.push(star);
        }

        var emptyStarNum = 5 - numStar;

        var emptyStarArray = [];
        for (let step = 0; step < emptyStarNum; step++) {
            starArray.push(Full_Rating);
        }
        
      

    return (
        <>
            {starArray.map((item, idx) => (
            <img key= {idx} src={item} width='50px' />
            )
            )}

            {emptyStarArray.map((item, idx) => (
            <img key= {idx} src={item} width='30px' />
            )
            )}

        </>
    )
}
export default Stars;

