import { useState, useEffect } from 'react';
import {Card, CardTitle, Container, Row, Col, CardBody, Button, color} from 'reactstrap';
import {useNavigate, Link} from 'react-router-dom';




function ChapterNames({shortName22, shortName45 }) {
    // console.log(shortName45)
    // console.log(shortName22)
        const request = 'https://edtechbooks.org/api.php?book='+ shortName45 + '&chapter=' + shortName22 + '&action=analytics';
    
    // console.log(request)
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
    
    // console.log(data);
    var chapters = data.chapter;
    // console.log(chapters);

    // var book = data.book;
    // console.log(data)
    // var chapterBriefs = book.chapter_briefs;
    // // console.log(chapterBriefs)
    // const chapter = Object.values(chapterBriefs);
    // console.log(chapter)

    //    Object.keys(chapterBriefs).forEach(function(key, index) {
    //     var newIndex = 'x' + index.toString();
    //     var newKey = key.toString();
    //     var newkey = key + newIndex;
    //     chapterBriefs[newkey] = chapterBriefs[key];
    //     delete chapterBriefs[key];
    //   } );

    //   console.log(chapterBriefs)

    // const newObject1 = Object.fromEntries(
    //     Object.entries(o).map(([o_key, o_val]) => {
    //       if (o_key === key) return [newKey, o_val];
    //       return [o_key, o_val];
    //     })
    //   );

   

        return(
        <div>
            {data && (
                <Container>
                    <br/>
                    {/* {chapter.map((item, idx) => ( */}
                    {/* <h1>Analytics for <em><strong>{book.title}</strong></em></h1> */}
                    <Row>
                        <Col>
                        {/* <Col className='col-4 ' key={idx}> */}
                            <table>
                                <tr>
                                    <th>Last Updated : </th>
                                    <td>{chapters.last_updated}</td>
                                </tr>
                                <tr>
                                    <th>Page Views:</th>
                                    <td>{chapters.page_views}</td>
                                </tr>
                            </table>
                        </Col>
                       
                    </Row>
                    {/* //  )
                    //  )} */}
                </Container>
            
            )}
        </div>
    ); 
    }

    
    

    

export default ChapterNames;
