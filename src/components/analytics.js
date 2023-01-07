import { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import {useNavigate, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';


// https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200
// https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics
// https://pokeapi.co/api/v2/pokemon?limit=10
function Analytics({shortName45, setName}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    // const request = 'https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics';
    const request = 'https://edtechbooks.org/api.php?book='+ shortName45 +'&action=analytics';
    console.log(shortName45)
    console.log(request)

    // const location = useLocation();
    // // const shortNameUse = location.shortName;
    // const shortNameUse = location.happy;
    // console.log(shortNameUse);
    // // const {state} = useLocation();
    // // const { id, color } = state; // Read values passed on state
    
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

    let sample = data.book;
    console.log(sample);
    let xx = sample.altmetrics;
    console.log(xx);
    let bookID= xx.book_id
    let totalRatings= xx.total_ratings
    let avgRating= xx.avg_rating
    let costSavings= xx.cost_savings


    return (
        <div>
            {data && (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Button onClick={() => navigate('/')}>Back To All Books</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <h1>Analytics for <em><strong>{sample.title}</strong></em></h1>
                        </Row>
                        <Row>
                            <Col>
                                {/* {sample.book_id} */}
                                {/* {this.xx.book_id} */}
                                <table>
                                    <tr>
                                        <th>Book ID</th>
                                        <td>{bookID}</td>
                                    </tr>
                                    <tr>
                                        <th>Total # of Ratings</th>
                                        <td>{totalRatings}</td>
                                    </tr>
                                    <tr>
                                        <th>Average Ratings</th>
                                        <td>{avgRating}</td>
                                    </tr>
                                    <tr>
                                        <th>Cost Savings</th>
                                        <td>{costSavings}</td>
                                    </tr>
                                </table>
                                
                            </Col>
                        </Row>
                    </Container>

                    
    
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