import ChapterPredictedReads from "./chapterPredictedReads";    

    function LogicChapterPredicted({shortName45, chapters}) {


        let sample2 = Object.values(chapters);
        let chapterNames= sample2.map(a => a.short_name);
        // console.log(chapterNames);
    
        // let readsArray = [];
        // let request = 'nothing'
    
       const url = chapterNames.map((item) => [
        'https://edtechbooks.org/api.php?book=' +shortName45 + '&chapter=' + item + '&action=analytics'
       ])
    
       let url1 = url.map(a => a.shift());
    
    //    let request = ''
    
    // https://stackoverflow.com/questions/69200373/async-function-makes-it-hard-to-access-variable-because-variable-is-not-ready
    
    // function letLog(data) {
    //     // console.log(data)
    //     let title = data.map(a => a.chapter);
    //     console.log(title);
    // }
    
    //  async function fetchAll() {
    //     const results = await Promise.all(url1.map((url) => fetch(url).then((r) => r.json())));
    //     const happy = await JSON.stringify(results, null, 2);
    //     // results1 = JSON.stringify(results, null, 2)
    //     // return happy;
    //     return letLog(happy)
    //   }
    
    // fetchAll();
    
    
    // https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
    
        
    
    // https://stackoverflow.com/questions/69200373/async-function-makes-it-hard-to-access-variable-because-variable-is-not-ready
    
    
    // let data = [
    //     {
    //         friend: 'bobby',
    //         chapter: 'hello'
    //     },
    //     {
    //         friend: 'bobby2',
    //         chapter: 'hello2'
    //     },
    //     {
    //         friend: 'bobby3',
    //         chapter: 'hello3'
    //     }
    // ]
    
    
    
    
    
    // let friend = data.chapter;
    // console.log (friend);
    
    
    // let friend = data.map(a => a)
    
    // console.log(friend)
    // const a = (async () => {
    
    //     const data = await getMetadata(acc1);
    //     return data
        
    //     })()
        
    //     console.log(a)
    
    
    // USE this one
    // const a = (async () => {
    
    //     const data = await Promise.all(url1.map((url) => fetch(url).then((r) => r.json())));
    //     return data
        
    //     })()
        
    //     console.log(a);
    //     let promisedResults = a.PromiseResult.map(a => a.chapter);
    
    //     console.log(promisedResults)
    
    // const request = url1
    
    // useEffect(() => {
    //         const asyncFetch = async () => {
    //             try {
    //                 const response = await Promise.all(url1.map((url) => fetch(url)));
    //                 if (!response.ok) {
    //                     throw new Error(response.status);
    //                 }
    //                 const fetchedData = await response.json();
    //                 setTimeout(() => {
    //                     setLoading(false);
    //                     setData(fetchedData);
    //                     setErrMsg('');
    //                 }, 3000);
    //             } catch (err) {
    //                 setLoading(false);
    //                 setErrMsg(err.toString());
    //             }
    //         };
    //         asyncFetch();
    //     }, []);
    
    //     if (isLoading) {
    //         return <h1>loading...</h1>;
    //     }
    //     if (errMsg) {
    //         return (
    //             <div>
    //                 <h1>whoopsie!: that was a bad request</h1>
    //                 <p>{errMsg}</p>
    //             </div>
    //         );
    //     }
    
    
        // chapterNames.map((item) => {
            
        //     const request = 'https://edtechbooks.org/api.php?book='+ shortName45 
    
            // const [isLoading, setLoading] = useState(true);
            // const [data, setData] = useState(null);
            // const [errMsg, setErrMsg] = useState('');
    
    
        //    useEffect(() => {
        //             const asyncFetch = async () => {
        //                 try {
        //                     const response = await fetch(request);
        //                     if (!response.ok) {
        //                         throw new Error(response.status);
        //                     }
        //                     const fetchedData = await response.json();
        //                     setTimeout(() => {
        //                         setLoading(false);
        //                         setData(fetchedData);
        //                         setErrMsg('');
        //                     }, 3000);
        //                 } catch (err) {
        //                     setLoading(false);
        //                     setErrMsg(err.toString());
        //                 }
        //             };
        //             asyncFetch();
        //         }, []);
            
        
        // })
    
    
    //     const request = 'https://edtechbooks.org/api.php?book='+ item
      
    
    //    console.log(shortName45)
    
    //     useEffect(() => {
    //         const asyncFetch = async () => {
    //             try {
    //                 const response = await fetch(request);
    //                 if (!response.ok) {
    //                     throw new Error(response.status);
    //                 }
    //                 const fetchedData = await response.json();
    //                 setTimeout(() => {
    //                     setLoading(false);
    //                     setData(fetchedData);
    //                     setErrMsg('');
    //                 }, 3000);
    //             } catch (err) {
    //                 setLoading(false);
    //                 setErrMsg(err.toString());
    //             }
    //         };
    //         asyncFetch();
    //     }, []);
    
    //     if (isLoading) {
    //         return <h1>loading...</h1>;
    //     }
    //     if (errMsg) {
    //         return (
    //             <div>
    //                 <h1>whoopsie!: that was a bad request</h1>
    //                 <p>{errMsg}</p>
    //             </div>
    //         );
    //     }
    
    // ))
    
    
    
    
    
    
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
    
    
    // var bookData = data.book;
    // var chapterData =bookData.chapter_briefs;
    // let sample2 = Object.values(chapterData);
    // let chapterDownloads= sample2.map(a => a.pdf_downloads);
    // let sum = chapterDownloads.reduce((a, b) => a + b, 0)
    // let sum2 = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // let chapterViews= sample2.map(a => a.page_views);
    // let views = chapterViews.reduce((a, b) => a + b, 0)
    // let views2 = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // console.log(views2);
    
    // setChapters(chapterData);
    
    return (
        <ChapterPredictedReads url1 = {url1}/>
    )
}

export default LogicChapterPredicted;