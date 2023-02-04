import { useState, useEffect } from 'react';
import {Card,  Container, Row, Col, Button} from 'reactstrap';
import {useNavigate} from 'react-router-dom';




const request = 'https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200';

function BookNames({setName}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

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

    
    let sample1 = data.books
    let sample2 = Object.values(sample1);
    
    console.log (sample2)
    let length = sample2.length
    
    let title = sample2.map(a => a.title);
    let links = sample2.map(a => a.links);
    let bookImages = links.map(a => a.book_cover_images);
    let smImage = bookImages.map(a => a.sm);
    let smName = sample2.map(a => a.short_name)


    
    
    
    return (
        <div>
            {data && (
                <div>
                 {/* {sample31} */}
                 <br/>
                 <h1 className="ml-5">EdTech Books Analytics</h1>
                    <Container>
                        <Row>
                            {sample2.map((item, idx) => (
                                <Col className='col-md-2'  key={idx}>
                                    <div>
                                        <Card color='primary' className='my-4'>

                                            <img 
                                                src={'https://edtechbooks.org/book_cover_images/' + item.cover_image_md}
                                                onClick={() => {
                                                    var shortName = item.short_name;
                                                    navigate('/analytics');
                                                    setName(shortName);
                                                        }
                                                     }
                                            />

                                            <Button color="primary" onClick={() => {
                                                 var shortName = item.short_name;
                                            
                                                navigate('/analytics');
                                                
                                                 setName(shortName);
                                
                                            }}>
                                                Visit Analytics
                                            </Button>
                                           
                                        </Card> 

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

