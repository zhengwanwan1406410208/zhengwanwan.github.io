function charttwo() {
    var myChart = echarts.init(document.getElementById('pageone'));
    var myChart1 = echarts.init(document.getElementById('pagethree'));
    var myChart2 = echarts.init(document.getElementById('pagefour'));
    var myChart3 = echarts.init(document.getElementById('pagetwo'));
    var option = {
        grid:{
            left:'13%',
            top:'16%'
        },
        tooltip:{
            trigger:'axis'
        },
        legend:{
            data:['邮件营销'],
            textStyle:{
                color:'#fff'
            }
        },
        title:{
             text:'降雨量图',
             textStyle:{color:'#fff'}
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine:{
                lineStyle:{color:'#fff'}
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                lineStyle:{color:'#fff'}
            }
        },
        series: [{
            name:'邮件营销',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
                normal:{}
            },
        }]
        };
    var option1 = {
        title:{
            text:'浏览器占比变化',
            subtext:'纯属虚构',
            top:10,
            left:10,
            textStyle:{
                color:'#fff'
            }
        },
        tooltip:{
            trigger:'item',
            backgroundColor:'rgba(0,0,250,0.2)'
        },
        legend:{
            type:'scroll',
            pageIconColor:'#fff',
            pageTextStyle:{
              color:'#fff'
            },
            bottom: 10,
            textStyle:{
                color:'#fff'
            },
            data: (function (){
                var list = [];
                for (var i = 1; i <=28; i++) {
                    list.push(i + 2000 + '');
                }
                return list;
            })()
        },
        visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true,
            textStyle:{
                color:'#fff'
            }
        },
        radar: {
            indicator : [
                { text: 'IE8-', max: 400},
                { text: 'IE9+', max: 300},
                { text: 'Safari', max: 200},
                { text: 'Firefox', max: 500},
                { text: 'Chrome', max: 500}
            ]
        },
        series : (function (){
            var series = [];
            for (var i = 1; i <= 28; i++) {
                series.push({
                    name:'浏览器（数据纯属虚构）',
                    type: 'radar',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    },
                    emphasis: {
                        areaStyle: {
                            color: 'rgba(0,250,0,0.3)'
                        }
                    },
                    data:[
                        {
                            value:[
                                (40 - i) * 10,
                                (38 - i) * 4 + 60,
                                i * 5 + 10,
                                (40 - i) * 10,
                                i * 9+60
                            ],
                            name: i + 2000 + ''
                        }
                    ]
                });
            }
            return series;
        })()
    };
    var category = [];
    var dottedBase = +new Date();
    var lineData = [];
    var barData = [];

    for (var i = 0; i < 13; i++) {
        var date = new Date(dottedBase += 3600 * 24 * 1000);
        category.push([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-'));
        var b = Math.random() * 200;
        var d = Math.random() * 200;
        barData.push(b)
        lineData.push(d + b);
    }
    var option2 = {
        title:{
            text:'向往的生活2',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip:{
            trigger:'axis',
            axisPointer:{
                type:'shadow'
            }
        },
        legend:{
            data:['line','bar'],
            textStyle:{
                color:'#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series:[
            {
                name: 'line',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 10,
                data: lineData
            },
            {
                name: 'bar',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#14c8d4'},
                                {offset: 1, color: '#43eec6'}
                            ]
                        )
                    }
                },
                data: barData
            },
            {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(20,200,212,0.5)'},
                                {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                {offset: 1, color: 'rgba(20,200,212,0)'}
                            ]
                        )
                    }
                },
                z: -12,
                data: lineData
            },
            {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#244656'
                    }
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }
        ]
    };
    var option3 = {
        title : {
            text: '特殊人群统计',
            x:'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8'],
            textStyle:{
                color:'#fff'
            }
        },
        series:{
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            label:{
                formatter: "{b}:{d}%"
            },
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    }
    myChart.setOption(option);
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    window.onresize = function () {
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    }
}