$(function () {
    var myChart = echarts.init(document.getElementById('website-stats'));
    var myChart2 = echarts.init(document.getElementById('pie-chart-container'));
    var option = {
        tooltip:{
            trigger:'axis'
        },
        legend:{
            data:['visits','pages/visit']

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:{
            type:'category',
            boundaryGap:false,
            data:['0.0','1.0','2.0','3.0','4.0','5.0','6.0']
        },
        yAxis:{
            type:'value'
        },
        series:[
            {
                name:'visits',
                type:'line',
                data:['9.0','8.0','5.0','8.0','5.0','14.0','10.0']
            },
            {
                name:'pages/visit',
                type:'line',
                data:['5.0','12.0','4.0','3.0','12.0','11.0','14.0']
            }
        ]
    };
    var option2 = {
             tooltip:{
                 trigger:'item',
                 formatter: "{a} <br/>{b} : {c} ({d}%)"
             },
             legend:{
                orient:'vertical',
                left:'left',
                data:['系列1','系列2','系列3']
             },
        series:[
            {
                name:'统计',
                type:'pie',
                radius:'55%',
                center:['50%','60%'],
                data:[
                    {value:335,name:'系列1'},
                    {value:310,name:'系列2'},
                    {value:234,name:'系列3'}
                ],
                itemStyle:{
                   emphasis:{
                       shadowBlur:10,
                       shadowOffsetX:0,
                       shadowColor:'rgba(0,0,0,0.5)'
                   }
                }
            }
        ]

    };
    myChart.setOption(option);
    myChart2.setOption(option2);
    window.onresize = function(){
        myChart.resize();
        myChart2.resize();
    };
})
