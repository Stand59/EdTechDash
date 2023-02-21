import { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';



function ChapterDownloads ({shortName45, chapters, setChapters}) {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');


    const request = 'https://edtechbooks.org/api.php?book='+ shortName45 
  

//    console.log(shortName45)

    useEffect(() => {
        const asyncFetch = async () => {
            try {
                const response = await fetch(request);
                if (!response.ok) {
                    throw new Error(response.status);
                }
                const fetchedData = await response.json();
                setTimeout(() => {
                    setLoading(false);
                    setData(fetchedData);
                    setErrMsg('');
                }, 3000);
            } catch (err) {
                setLoading(false);
                setErrMsg(err.toString());
            }
        };
        asyncFetch();
    }, []);

    if (isLoading) {
        return <h1></h1>;
    }
    if (errMsg) {
        return (
            <div>
                <h1>whoopsie!: that was a bad request</h1>
                <p>{errMsg}</p>
            </div>
        );
    }


//     let sample = data.book;
   
// //    console.log('sample' + sample)
  

//     let xx = sample.altmetrics;

//     // let bookID= xx.book_id
//     let totalRatings= xx.total_ratings
//     let avgRatingOld= xx.avg_rating
//     let costSavings= xx.cost_savings
//     let referersObject = sample.referers
//     let referers = referersObject.map(a => a.referer)
 
//     let views= sample.page_views;
//     let downloads = sample.pdf_downloads;
//     let updated = sample.last_updated;

//     let avgRating = Math.round((avgRatingOld + Number.EPSILON) * 100) / 100;

//     let views1 = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     let downloads1 = downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     let costSavings1 = costSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     let totalRatings1 = totalRatings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    // consider putting all of this in function, may make it not glitch


var bookData = data.book;
var chapterData =bookData.chapter_briefs;
let sample2 = Object.values(chapterData);
let chapterDownloads= sample2.map(a => a.pdf_downloads);
let sum = chapterDownloads.reduce((a, b) => a + b, 0)
let sum2 = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let chapterViews= sample2.map(a => a.page_views);
let views = chapterViews.reduce((a, b) => a + b, 0)
let views2 = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// console.log(data)

// console.log(views2);

setChapters(chapterData);

    return (
        <div> {sum2} </div>
    )
}

export default ChapterDownloads;