const tarsaleChart = document.getElementById('tarsale').getContext('2d');
const tarsale = new Chart(tarsaleChart,{
    type:'line',
    data:{
        labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
        datasets:[{
            data:[1200,1990,387,598,276,356,789,654,454,776,534,2546],
            borderColor:['rgb(59, 197,154)'],
            borderWidth:1
        },{
            data:[1100,1390,287,398,176,256,589,354,154,476,334,1546],
            borderColor:['rgb(153, 102,255)'],
            borderWidth:1
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                display:false
            }
        }
    }
})