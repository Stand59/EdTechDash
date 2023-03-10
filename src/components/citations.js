import {Button} from 'reactstrap';

function Citations ({sample, authors}) {

    let title= sample.title;
    let updatedTitle = title.replace(/\s/g, '+');
    

let url = 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C45&q=' + updatedTitle + '+' + authors + '+edtech+books&btnG=';
    return (
<div>
<a href={url} target="_blank"><Button color="primary">Visit Google Scholar</Button></a>
</div>
    )
}

export default Citations;