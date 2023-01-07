import { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import {useNavigate, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const request = 'https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics';
// https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200
// https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics
// https://pokeapi.co/api/v2/pokemon?limit=10
function Analytics({shortName45, setName}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    console.log(shortName45)

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
    let sample = data.chapter
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
                        <Row>
                            <Col>
                                {sample.book_id}
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