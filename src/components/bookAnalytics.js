import { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import {useNavigate } from 'react-router-dom';
import Stars from './stars';
import Downloads from './downloadsGauge';
import GaugeChart from 'react-gauge-chart';
import Views from './viewGuage';
import ChapterViews from './chapterViews';
import LogicChapterPredicted from './logicChapterPredicted';
import Citations from './citations';
import ChapterDownloads from './chapterDownloads';
import Difficulty from './difficulty';
import ChapterPredictedReads from './chapterPredictedReads';
import Referrer from './referrer';
import Pie from './pie';

function BookAnalytics ({shortName45}) {

 // let { id } = useParams();
    // console.log ('this' + id)
    let currentPath = window.location.pathname;
    let newCurrentPath = currentPath.slice(1);

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    // const request = 'https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics';
    // const request = 'https://edtechbooks.org/api.php?book='+ shortName45 +'&action=analytics';
    const request = 'https://edtechbooks.org/api.php?book='+ newCurrentPath + '&subaction=analytics'
  
    const [chapters, setChapters] = useState([]);

   

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
        return <h1>loading...</h1>;
    }
    if (errMsg) {
        return (
            <div>
                <h1>whoopsie!: that was a bad request</h1>
                <p>{errMsg}</p>
            </div>
        );
    }


    let sample = data.book;
   
    console.log(sample)

    // Book views logic
    let views= sample.page_views;
    let views1 = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    //chapter views logic
    let chapterData =sample.chapter_briefs;
    let sample2 = Object.values(chapterData);
    let chapterViews= sample2.map(a => a.page_views);
    let views5 = chapterViews.reduce((a, b) => a + b, 0)
    let views2 = views5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // book downloads logic
     let downloads = sample.pdf_downloads;
     let downloads1 = downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //  chapter downloads logic
    let chapterDownloads= sample2.map(a => a.pdf_downloads);
    let sum = chapterDownloads.reduce((a, b) => a + b, 0)
    let downloads2 = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // cost savings logic
    let xx = sample.altmetrics;
    let costSavings= xx.cost_savings;
    let costSavings1 = costSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    // chapter predicted reads logic
    let chapterAltmetrics= sample2.map(a => a.altmetrics);
    let chapterPredictedReads= chapterAltmetrics.map(a => a.predicted_reads);
    let chapPred = chapterPredictedReads.reduce((a, b) => a + b, 0)
    let chapPred1 = chapPred.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    // total number of ratings logic
    let totalRatings= xx.total_ratings
    let totalRatings1 = totalRatings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // average rating logic
    let avgRatingOld= xx.avg_rating;
    let avgRating = Math.round((avgRatingOld + Number.EPSILON) * 100) / 100;

    // average reading difficulty logic
    let readingDifficulty= chapterAltmetrics.map(a => a.reading_difficulty);
    let readDiffLength = readingDifficulty.length;
    let readDiffSum = readingDifficulty.reduce((a, b) => a + b, 0);
    let readDiffAvg = (readDiffSum/readDiffLength);
    let readDiffAvg1 = Math.round((readDiffAvg+ Number.EPSILON) * 10) / 10;

// average reading level logic
    let readingLevel= chapterAltmetrics.map(a => a.reading_level);
    let readLevLength = readingLevel.length;
    let readLevSum = readingLevel.reduce((a, b) => a + b, 0);
    let readLevAvg = (readLevSum/readLevLength);
    let readLevAvg1 = Math.round((readLevAvg+ Number.EPSILON) * 10) / 10;

    // percentage of chapters updated logic
    let chapterLastUpdated= sample2.map(a => a.last_updated);

    let chapterWords= chapterAltmetrics.map(a => a.word_count);

    let arrayOfObject = chapterLastUpdated.map(function (value, index){
        return [value, chapterWords[index]]
     });

//    console.log(arrayOfObject)
  
    let ready0 = arrayOfObject.map(a => { 
        if (a[1] < 300){
            const index = arrayOfObject.indexOf(a);
            const x = arrayOfObject.splice(index, 1);
            console.log(x)
            return arrayOfObject;
        }
    })



    let arrayOfTime= arrayOfObject.map(a => a[0]);
   


    let numberOfDays = 730
    let yesNum = 0
   

    let ready = arrayOfTime.map(a => {
        const pastTime = new Date(a);
        const now = new Date();


        const timeInMs = numberOfDays * 24 * 60 * 60 * 1000;

        const timeDiffInMs = now.getTime() - pastTime.getTime();

        if(timeDiffInMs >= timeInMs){
            // console.log('Date is older than' + timeDiffInMs + 'days');
            
        }else{
            // console.log('Date is not older than 30 days');
            yesNum += 1
            
        }
    })

   let avg = yesNum/(arrayOfTime.length);
   let avg1 = (avg*100);
   let avg2 = Math.round((avg1+ Number.EPSILON) * 10) / 10;

//    authors for citation logic

    let authors = sample.authors;
    let authors1 = authors.map(a => a.name);

    // number of chapters logic
    
    let numberOfChapters = sample2.length;
   
    // edtechLink logic
    let edTechLink = 'https://edtechbooks.org/' + shortName45


    
        
    // console.log(chapterWords);
    // console.log(chapterLastUpdated);
    // console.log(oldtimestamp)
    
    



// Past iteration data
//     let xx = sample.altmetrics;

//     // let bookID= xx.book_id
//     let totalRatings= xx.total_ratings
//     let avgRatingOld= xx.avg_rating
//     let costSavings= xx.cost_savings
//     let referersObject = sample.referers
//     let referers = referersObject.map(a => a.referer)
 
    
//     let downloads = sample.pdf_downloads;
//     let updated = sample.last_updated;

//     let avgRating = Math.round((avgRatingOld + Number.EPSILON) * 100) / 100;

    
//     let downloads1 = downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     let costSavings1 = costSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     let totalRatings1 = totalRatings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    // consider putting all of this in function, may make it not glitch

    return (
        <div>
            {data && (
                <div>
                    <Container>
                        <br/>
                        <Row>
                            
                            <Col sm={9}> 
                                <div className='title'>
                                    <h3>Analytic Dashboard for</h3> <h1> <em><strong>{sample.title}</strong></em></h1>
                                </div>
                                <Button className="btn-primary mt-4" onClick={() => navigate('/')}>Back To All Books</Button>
                                
                                <Card className='callout'>
                                    <CardBody className='navbar'>
                                    Number of Chapters: {numberOfChapters} 
                                    <br></br>
                                    Author(s):
                                    <ul>
                                    {authors1.map((item, idx) => (
                                        <li>{item}</li>
                                    ))}
                                    </ul>
                                    </CardBody>
                                </Card>
                           
                                
                       
                            </Col>
                            
                            <Col sm={2}>
                                <Card color='secondary'>
                                    <img 
                                        src={'https://edtechbooks.org/book_cover_images/' + sample.cover_image_sm}
                                    />

                                    <a href={edTechLink}  target="_blank"><Button className="button-block" color="primary"> Visit Book </Button></a>                                          
                                </Card> 
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <h1>Impact Analytics</h1>
                        </Row>
                        <div>
                        <Row>
                        <Col sm={12} md={3}>
                                <Card className='navbar' >
                                    <CardBody>
                                        <CardTitle><h3>Book Views</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {views1}
                                                </Col>
                                                <Col>
                                                    
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    {/* <Views views = {views}/> */}
                                                    <Views views = {views}/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                </Col>
                                                
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12} md={3}>
                                <Card className='navbar' >
                                    <CardBody>
                                        <CardTitle><h3>Individual Chapter Views</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {/* Chapter Views: <ChapterViews shortName45={shortName45}/> */}
                                                    {views2}
                                                </Col>
                                                <Col>
                                                    {/* <Views views = {views}/> */}
                                                    <Views views = {views5}/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                </Col>
                                                
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12} md={3}>
                                <Card className='navbar'>
                                    <CardBody>
                                        <CardTitle><h3> Book PDF Downloads</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {downloads1}
                                                </Col>
                                                
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Downloads downloads = {sum}/>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            
                            <Col sm={12} md={3}>
                                <Card className='navbar'>
                                    <CardBody>
                                        <CardTitle><h3> Chapter PDF Downloads</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {/* Chapter Downloads: <ChapterDownloads shortName45={shortName45} chapters={chapters} setChapters={setChapters} /> */}
                                                   {downloads2}
                                                </Col>
                                                <Col>
                                                    <Downloads downloads = {downloads}/>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col sm={3}>
                                <Card color="success">
                                    <CardBody>
                                        <CardTitle><h3 id="white">Calculated Cost Savings</h3></CardTitle>
                                        <CardText id="white"><p id="money">$ {costSavings1}</p></CardText>

                                    </CardBody>
                                </Card>
                            </Col>
                        
                        
                        
                            <Col sm={3}>
                                <Card className='navbar'>
                                    <CardBody>
                                        <CardTitle><h3>Chapter Predicted Reads</h3></CardTitle>
                                        <CardText>
                                            {/* <ChapterPredictedReads shortName45={shortName45}/> */}
                                            {chapPred1}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card className='navbar' id="citation">
                                    <CardBody>
                                        <CardTitle><h3>Citations</h3></CardTitle>
                                        <CardText>
                                            <Citations sample={sample} authors={authors1}/>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <Row>
                            <h1>Quality Analytics</h1>
                        </Row>
                        <div>
                        <Row>
                            <Col>
                                <Card className='navbar' >
                                    <CardBody>
                                        <CardTitle><h3>User Ratings</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                Total # of Ratings: {totalRatings1}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    Average Rating: {avgRating}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Stars avgRating={avgRating}/>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='navbar'>
                                    <CardBody>
                                        <CardTitle><h3>Percentage of Chapters Updated in The Last Two Years</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {/* {updated} */}
                                                    {avg2}%
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Pie avg2={avg2}/>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='navbar'>
                                    <CardBody>
                                        <CardTitle><h3>Top Ten Referrers</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {/* {referers.map((item, idx) => (
                                                        <Card color="light" key={idx}>
                                                            {item}
                                                        </Card>
                                                    )) */}
                                                    <Referrer shortName45={newCurrentPath}/>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='navbar'>
                                    <CardBody>
                                        <CardTitle><h3>Reading Level/ Difficulty</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {/* <Difficulty shortName45={shortName45}/> */}
                                                    <div>Average Chapter Reading Difficulty: {readDiffAvg1}</div>
                                                    <div>Average Chapter Reading Level: {readLevAvg1}</div>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        </div>
                        
                        <br/>
                        <br/>

                  
                                {/* {sample.book_id} */}
                                {/* {this.xx.book_id} */}
                               
                    </Container>

                    {/* <ChapterNames shortName45={shortName45} shortName22={shortName22} setName2 = {setName2} /> */}
                    
                </div>
            )}
        </div>
    );
   
}

export default BookAnalytics;