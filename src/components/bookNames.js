import { useState, useEffect } from 'react';
import {Card, CardTitle, Container, Row, Col, CardBody, Button} from 'reactstrap';


const request = 'https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200';
// https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200
// https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics
// https://pokeapi.co/api/v2/pokemon?limit=10
function BookNames() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');

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
    console.log (sample2)
    
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
                 {sample31}
                 <h1> All </h1>
                    <Container>
                        <Row>
                        {sample2.map((item, idx) => (
                        
                            <Col className='col-md-2'>
                                <div key={idx}>
                                    <Card color='primary'>
                                        <CardBody>
                                            <CardTitle>{item.title}</CardTitle>
                                        </CardBody>
                                        <Button>Analytics</Button>
                                    </Card> 
                                    {/* <h3>{item.title}</h3> */}
                                    
                                </div>
                            </Col>
                        ))} 
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