import { useState, useEffect } from 'react';
import {Card, CardTitle, Container, Row, Col, CardBody, Button} from 'reactstrap';
import {useNavigate, Link} from 'react-router-dom';




const request = 'https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200';
// https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200
// https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics
// https://pokeapi.co/api/v2/pokemon?limit=10
function BookNames({shortName45, setName}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    // console.log(shortName45)
    const navigate = useNavigate();
    // navigate('/analytics');

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
    // console.log(sample)
    // let zero = sample 
    // const first = data.results[0];
    let sample1 = data.books
    let sample2 = Object.values(sample1)
    // console.log (sample2)

    function analyticsGo(i) {
        // console.log(i)
        navigate('/analytics');
        
    }
    
    // let links = Object.values(sample2)
    // console.log (links)

    let sample21 = sample1[4]
    let sample31 = sample21.title
    // console.log(sample31)
    // let sample2 = sample1.books

    // console.log (sample1)
    // let sample3 = Object.keys(sample2)[1]
    // console.log (sample3)
    
   
    
    return (
        <div>
            {data && (
                <div>
                 {/* {sample31} */}
                 <h1>All EdTech Books </h1>
                    <Container>
                        <Row>
                            {sample2.map((item, idx) => (
                                <Col className='col-md-2'  key={idx}>
                                    <div>
                                        <Card color='primary' className='my-4'>
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                            </CardBody>
                                            {/* <Button component={Link} to="/analytics">Analytics</Button> */}
                                            {/* <Button onClick={navigate}>Analytics</Button> */}
                                            {/* <Button onClick={() => navigate('../analytics', { replace: true })}>Register</Button> */}
                                            <Button onClick={() => {
                                                 var shortName = item.short_name;
                                                // console.log(shortName)
                                                navigate('/analytics');
                                                
                                                 setName(shortName);
                                                 console.log(shortName45);
                                                // setName(shortName1)
                                            }}>
                                                Visit Dashboard
                                            </Button>
                                            {/* <Link to="/" happy={item.short_name} /> */}

                                            {/* <Button onClick="analytics()">Visit Dashboard</Button> */}
                                            {/* <Button onClick={analyticsGo}>Visit Dashboard</Button> */}
                                        </Card> 
                                        {/* <h3>{item.title}</h3> */}
                                        
                                    </div>
                                </Col>
                            ))} 
                        </Row>
                        <Row>
                            <Col>
                            {sample2.map((item, idx) => (
                                
                                    <div key={idx}>
                                        <Card>
                                            <CardBody>
                                                <div>
                                                <CardTitle>{item.title}</CardTitle>
                                                
                                                <Button onClick={analyticsGo}>Visit Dashboard</Button>
                                                </div>
                                            </CardBody>
                                            {/* <Button component={Link} to="/analytics">Analytics</Button> */}
                                            {/* <Button onClick={navigate}>Analytics</Button> */}
                                            {/* <Button onClick={() => navigate('../analytics', { replace: true })}>Register</Button> */}
                                        </Card> 
                                        {/* <h3>{item.title}</h3> */}
                                    </div>
                                ))} 
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
}

export default BookNames;

// https://codesandbox.io/s/nucamp-react-fetch-useeffect-async-await-version-eezs9m?file=/src/App.js:0-1512
// https://codesandbox.io/s/nucamp-react-fetch-useeffect-example-7grwhf?file=/src/App.js:1360-1367
// https://upmostly.com/tutorials/how-to-display-json-data-in-react-table
// https://stackoverflow.com/questions/61770691/how-to-split-arrays-inside-object-and-push-to-seperate-state

// How to pass data
// https://dev.to/thatfemicode/passing-data-states-through-react-router-8dh
// https://ultimatecourses.com/blog/navigate-to-url-query-strings-search-params-react-router
// google: passing data with the navigate command in react router