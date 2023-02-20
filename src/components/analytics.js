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



function Analytics({shortName45}) {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    // const request = 'https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics';
    const request = 'https://edtechbooks.org/api.php?book='+ shortName45 +'&action=analytics';
  
    const [chapters, setChapters] = useState([]);

//    console.log(data)

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
  
  

    let xx = sample.altmetrics;

    // let bookID= xx.book_id
    let totalRatings= xx.total_ratings
    let avgRatingOld= xx.avg_rating
    let costSavings= xx.cost_savings
    let referersObject = sample.referers
    let referers = referersObject.map(a => a.referer)
 
    let views= sample.page_views;
    let downloads = sample.pdf_downloads;
    let updated = sample.last_updated;

    let avgRating = Math.round((avgRatingOld + Number.EPSILON) * 100) / 100;

    let views1 = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let downloads1 = downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let costSavings1 = costSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let totalRatings1 = totalRatings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    // consider putting all of this in function, may make it not glitch

    return (
        <div>
            {data && (
                <div>
                    <Container>
                        <Row>
                            <Col sm={2}>
                                <Button className="mt-4" onClick={() => navigate('/')}>Back To All Books</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            
                            <Col sm={9}><h1>Analytic Dashboard for<em><strong>{sample.title}</strong></em></h1></Col>
                            <Col>
                                <img height="300px"
                                    src={'https://edtechbooks.org/book_cover_images/' + sample.cover_image_sm}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-6">
                            <h2 >Impact Analytics</h2>
                        </Row>
                        <Row>
                            <Col>
                                <Card color="primary" >
                                    <CardBody>
                                        <CardTitle><h3>Page Views</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col id="white">
                                                    Book Views: {views1}
                                                </Col>
                                                <Col id="white">
                                                    Impact Level
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col id="white">
                                                    Chapter Views: <ChapterViews shortName45={shortName45}/>
                                                </Col>
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
                            <Col>
                                <Card color="primary">
                                    <CardBody>
                                        <CardTitle><h3> PDF Downloads</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col id="white">
                                                    Book Downloads: {downloads1}
                                                </Col>
                                                <Col id="white">
                                                    Impact Level
                                                </Col>
                                                
                                            </Row>
                                            <Row>
                                                <Col id="white">
                                                    Chapter Downloads: <ChapterDownloads shortName45={shortName45} chapters={chapters} setChapters={setChapters} />
                                                </Col>
                                                <Col>
                                                    <Downloads downloads = {downloads}/>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card color="primary">
                                    <CardBody>
                                        <CardTitle><h3>Calculated Cost Savings</h3></CardTitle>
                                        <CardText id="white">${costSavings1}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Card color="primary">
                                    <CardBody>
                                        <CardTitle><h3>Chapter Predicted Reads</h3></CardTitle>
                                        <CardText id="white">
                                            <ChapterPredictedReads shortName45={shortName45}/>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card color="primary">
                                    <CardBody>
                                        <CardTitle><h3>Citations</h3></CardTitle>
                                        <CardText id="white">
                                            <Citations sample={sample} />
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <br/>
                        <Row>
                            <h2>Quality Analytics</h2>
                        </Row>
                        <Row>
                            <Col>
                                <Card color="primary" >
                                    <CardBody>
                                        <CardTitle><h3>User Ratings</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col id="white">
                                                Total # of Ratings: {totalRatings1}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col id="white">
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
                                <Card color="primary">
                                    <CardBody>
                                        <CardTitle><h3>Percentage of Chapters Updated in The Last Year</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col id="white">
                                                    {updated}
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card color="primary">
                                    <CardBody>
                                        <CardTitle><h3>Referrers</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col>
                                                    {referers.map((item, idx) => (
                                                        <Card color="light" key={idx}>
                                                            {item}
                                                        </Card>
                                                    ))
}
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card color="primary">
                                    <CardBody>
                                        <CardTitle><h3>Reading Level/ Difficulty</h3></CardTitle>
                                        <CardText>
                                            <Row>
                                                <Col id="white">
                                                    <Difficulty shortName45={shortName45}/>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        
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

export default Analytics;

// https://codesandbox.io/s/nucamp-react-fetch-useeffect-async-await-version-eezs9m?file=/src/App.js:0-1512
// https://codesandbox.io/s/nucamp-react-fetch-useeffect-example-7grwhf?file=/src/App.js:1360-1367
// https://upmostly.com/tutorials/how-to-display-json-data-in-react-table
// https://stackoverflow.com/questions/61770691/how-to-split-arrays-inside-object-and-push-to-seperate-state