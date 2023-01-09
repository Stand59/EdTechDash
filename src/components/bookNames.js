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
    let sample2 = Object.values(sample1);
    console.log(sample2)
    let length = sample2.length
    // console.log(length)
    let title = sample2.map(a => a.title);
    let links = sample2.map(a => a.links);
    let bookImages = links.map(a => a.book_cover_images);
    let smImage = bookImages.map(a => a.sm);
    let smName = sample2.map(a => a.short_name)
    // console.log(smImage)
    // for (let i = 0; i < length; i++){
        
    // }
    // sample2.map((object, idx) => {
    //     object["image"] = smImage
    // })

    // smImage.map((Images, Idx) => {
        //code to create new object, but hte new object would be combined
        // let combined = []
        // figure out how to iterate through to make many combined variables
        // then have that work for combined in the below two functions
        // below function better
    // })

    //another possibility
    // {for (let i = 0; i < length; i++){
    //     let combined = []
    // }

    // var k = 1;
    // var i = 0;
    // var value1 = 0
    // console.log (i)
    // console.log (k)
    // for(i = 1; i < length; i++) {
    //    var value1 = (k + i)
    //      eval ('var ' +'value'  +'=' + i )
    //    console.log (value8)
    // }

    
    // console.log("value1=" + value1);
    // console.log("value2=" + value2);
    // console.log("value3=" + value3);
    // console.log("value4=" + value4);


    
    // smImage.map((Images, Idx) => {
    //     //code to create new object, but hte new object would be combined
    //     let variable = 'combined' + Idx
    //     variable['image'] = Images;
    // })

    // smName.map((short, Idx) => {
    //     //code to create new object, but hte new object would be combined
    //     //add idx som
    //     let variable = 'combined' + Idx
    //     variable['shortName'] = short;
    // })

    // console.log(combined);
    // console.log(title)
    // let links = sample2.links
    // console.log(links)
    
    // console.log (smImage)
    // let sample3 = sample2.links
    // console.log (sample3)

    // function analyticsGo(i) {
    //     // console.log(i)
    //     navigate('/analytics');
        
    // }
    
    // let links = Object.values(sample2)
    // console.log (links)

    // let sample21 = sample1[4]
    // let sample31 = sample21.title
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
                 <h1>EdTech Books Analytics</h1>
                    <Container>
                        <Row>
                            {sample2.map((item, idx) => (
                                <Col className='col-md-2'  key={idx}>
                                    <div>
                                        <Card color='primary' className='my-4'>
                                        

                                        {/* {for (let i = 0; i < length; i++){
                                        {item.image[index]}
                                        }} */}
{/* https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
// https://bobbyhadz.com/blog/react-map-object
// How to map an object inside an object
// https://bobbyhadz.com/blog/react-map-inside-map
                                             */}
                                             <img
                                                src={'https://edtechbooks.org/book_cover_images/' + item.cover_image_md}
                                            />
                                            
                                            {/* {console.log(item)} */}
                                            
                                            
                                            
                                            {/* <Button component={Link} to="/analytics">Analytics</Button> */}
                                            {/* <Button onClick={navigate}>Analytics</Button> */}
                                            {/* <Button onClick={() => navigate('../analytics', { replace: true })}>Register</Button> */}
                                            <Button color="primary" onClick={() => {
                                                 var shortName = item.short_name;
                                                // console.log(shortName)
                                                navigate('/analytics');
                                                
                                                 setName(shortName);
                                                 console.log(shortName45);
                                                // setName(shortName1)
                                            }}>
                                                Visit Analytics
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
                        {/* <Row>
                            <Col>
                            {sample2.map((item, idx) => (
                                
                                    <div key={idx}>
                                        <Card>
                                            <CardBody>
                                                <div>
                                                <CardTitle>{item.title}</CardTitle>
                                                
                                                <Button onClick={analyticsGo}>Visit Dashboard</Button>
                                                </div>
                                            </CardBody> */}
                                            {/* <Button component={Link} to="/analytics">Analytics</Button> */}
                                            {/* <Button onClick={navigate}>Analytics</Button> */}
                                            {/* <Button onClick={() => navigate('../analytics', { replace: true })}>Register</Button> */}
                                        {/* </Card>  */}
                                        {/* <h3>{item.title}</h3> */}
                                    {/* </div>
                                ))} 
                            </Col>
                        </Row> */}
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