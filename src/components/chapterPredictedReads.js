import { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { CardTitle } from 'reactstrap';



function ChapterPredictedReads({shortName45}) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');


    const request = 'https://edtechbooks.org/api.php?book='+ shortName45 + '&subaction=analytics'
  



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

    let bookData = data.book;
    let chapterBriefs = bookData.chapter_briefs;
    let altmetrics = chapterBriefs.map(a => a.altmetrics);
    console.log(altmetrics)

    // const fetchAll = async () => {
    //     try {
    //         const results = await Promise.all(url1.map((url) => fetch(url).then((r) => r.json())));
    //         const data = JSON.stringify(results, null, 2);
    //         return data;
    //     } catch (e) {
    //       // read key error
    //       return [];
    //     }
    //   };


    //   const letLog = async (data) => {
    //         // console.log(data)
    //         let title = data.map(a => a.status);
    //         //  console.log(title);
    //         return title;
    //     }
    
    //     const complete = async () => {
    //         await fetchAll().then(letLog);
    //     }
        
    //     complete();

    return (
        
          'hello'
    )
}

export default ChapterPredictedReads;