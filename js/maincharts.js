function firstchart() {
    var myChart3 = echarts.init(document.getElementById('firstcharts'));
    //var myChart4 = echarts.init(document.getElementById('sencharts'));
    var myChart5 = echarts.init(document.getElementById('thrcharts'));
    var myChart6 = echarts.init(document.getElementById('fourcharts'));
    var option3 = {
        title: {
            text: '动态仪表盘',
            textStyle:{
                color:'#ffc543',
                fontSize: 16
            }
        },
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        /*toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },*/
        series:[
            {
                name:'速度',
                type:'gauge',
                min:0,
                max:120,
                splitNumber:6,
                radius: '70%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                        width: 3,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    //length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :2,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 12,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail : {

                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff',
                        fontSize: 15
                    }
                },
                data:[{value: 40, name: 'km/h'}]
            },

        ]
    };
    var option6 = {
        title:{
            text:'车型分布',
            textStyle:{
                color:'#ffc543',
                fontSize: 16
            }
        },
        /*grid:{
          top:'10%',
          left:'10%'
        },*/
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top:'10%',
            left:'0%',
            data:['微型车','SUV','中型车','豪华车','紧凑型车']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['45%', '65%'],
                center:['60%','60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'微型车'},
                    {value:310, name:'SUV'},
                    {value:234, name:'中型车'},
                    {value:135, name:'豪华车'},
                    {value:1548, name:'紧凑型车'},
                ]
            }
        ]
    };
    setInterval(function (){
        option3.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        //option3.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
       // myChart4.setOption(option3);
        myChart3.setOption(option3);
        myChart5.setOption(option3);
        myChart6.setOption(option6);
    },2000);
    window.onresize = function(){
        myChart5.resize();
        myChart3.resize();
    };
}

