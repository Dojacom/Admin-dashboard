const salesChart = document.getElementById('sales').getContext('2d');
const sales = new Chart(salesChart, {
    type:'line',
    data:{
        labels:['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
        datasets:[{
            data:[12,19,3,5,2,3,8],
            borderColor:['rgb(59, 197, 154,1)'],
            borderWidth:2
        }]
    },
    options:{
        element:{
            point:{
                radius:0
            }
        },
        scales:{
            x:{
                display:false
            },
            y:{
                display:false
            }
        },
        plugins:{
            legend:{
                display:false
            }
        }
    }
})