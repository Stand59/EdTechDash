import { PieChart } from 'react-minimal-pie-chart';

function Pie ({avg2}) {

    let number = 100 - avg2;


    return(

<PieChart
  data={[
    { title: 'One', value: avg2, color: '#00FF00' },
    { title: 'Two', value: number, color: 'white' },  
  ]}
/>
// "#FF0000", "#FFFF00", "#00FF00"
    )
}

export default Pie;