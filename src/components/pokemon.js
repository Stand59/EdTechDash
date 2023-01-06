import { useState, useEffect } from 'react';


const request = 'https://pokeapi.co/api/v2/pokemon?limit=10';
// https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200
// https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics
// https://pokeapi.co/api/v2/pokemon?limit=10
function Pokemon() {
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
    // console.log(data)
    // console.log(data.results)
    return (
        <div>
            {data && (
                <div>
                     <h1>top 10 poke</h1>
                    {data.results.map((item, idx) => (
                        <div key={idx}>{item.name}</div>
                    ))} 
                    
                </div>
            )}
        </div>
    );
}

export default Pokemon;

// https://codesandbox.io/s/nucamp-react-fetch-useeffect-async-await-version-eezs9m?file=/src/App.js:0-1512
// https://codesandbox.io/s/nucamp-react-fetch-useeffect-example-7grwhf?file=/src/App.js:1360-1367
// https://upmostly.com/tutorials/how-to-display-json-data-in-react-table
// https://stackoverflow.com/questions/61770691/how-to-split-arrays-inside-object-and-push-to-seperate-state