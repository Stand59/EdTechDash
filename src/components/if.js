import ChapterAnalytics from './chapterAnalytics';

function If ({shortName45, shortName22, setName2}) {
    return (
<div>
    {shortName22 != 'hello'
    ? <ChapterAnalytics shortName22 = {shortName22} shortName45 = {shortName45} />
    : <div/>
    }
</div>
    )
}

export default If;