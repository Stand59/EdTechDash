import { useState, useEffect } from 'react';
import { Card } from 'reactstrap';

function Referrer ({shortName45}) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const request = 'https://edtechbooks.org/api.php?book='+ shortName45 +'&action=analytics';
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
            return <h1></h1>;
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
        let referersObject = sample.referers
        let referers = referersObject.map(a => a.referer)
        console.log(sample)

    return (
        referers.map((item, idx) => (
                <div>{item}</div>
        ))
    )
}

export default Referrer;