const productChart = document.getElementById('products').getContext('2d');
const products = new Chart(productChart, {
    type:'line',
    data:{
        labels:['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
        datasets:[{
            data:[5,7,4,15,9,5,23],
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