import { useState, useEffect } from 'react';
import {Card, Container, Row, Col, CardBody} from 'reactstrap';
import {useNavigate, Link} from 'react-router-dom';
import If from './if';
import { render } from '@testing-library/react';




function ChapterNames({shortName45, shortName22, setName2}) {
    const request = 'https://edtechbooks.org/api.php?book='+ shortName45;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');
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
  
    var book = data.book;
    
    var chapterBriefs = book.chapter_briefs;
   

    const chapter = Object.values(chapterBriefs);
  

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

    // var ready2 = '{<ChapterAnalytics shortName22 = {shortName22} shortName45 = {shortName45} />}'

    // function ready1 (){
    //     ready2 = '{<ChapterAnalytics shortName22 = {shortName22} shortName45 = {shortName45} />}'
    //     console.log(ready2)
    //     // ChapterNames.forceUpdate();
    // }

    

    return (
        <div>
            {data && (
                <Container>
                    <br/>
                    <h2>Chapter Analytics</h2>
                    <div>click on a chapter to see its analytics</div>
                    <br/>
                    {chapter.map((item, idx) => (
                    <Row>
                        <Col className='col-4 ' key={idx}>
                            <Card color="light" onClick={() => {

                                // setName2(item.short_name);
                                // console.log(shortName22);
                                // ready1();
                                setName2(item.short_name);
                                // console.log(shortName22)
                            }}>
                                <CardBody>{item.title}</CardBody>
                            </Card>
                        </Col>
                       
                    </Row>
                     )
                     )}
                     <Row>
                        <Col>
                            <If shortName22 = {shortName22} shortName45 = {shortName45}/>
                        </Col>
                     </Row>
                </Container>
            
            )}
        </div>
    );
}

export default ChapterNames;
