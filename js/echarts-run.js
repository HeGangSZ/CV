/**
 * Created by Neo on 2016/3/2.
 */

$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('power'));

    option = {
        backgroundColor: '#e7e7e7',
        title: {
            text: '核心竞争力',
            left: 'center',
            top:'80px',
            textStyle: {
                fontSize:40,
                color: '#000'
            }
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                //name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:250, name:'具备抗压能力，再难的挑战都尽力完成！'},
                    {value:274, name:'富有责任感，每个任务都尽善尽美。'},
                    {value:330, name:'饱含技术激情，努力钻研付诸实践！'},
                    {value:380, name:'快速学习，具备一定的自学能力'},
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            fontSize:20,
                            color: 'rgba(0, 0, 0, 0.7)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(0, 0, 0, 0.3)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    if($(document).width() <= 768){
        option.series[0].data = [
            {value:250, name:'具备抗压能力'},
            {value:274, name:'富有责任感'},
            {value:330, name:'饱含技术激情'},
            {value:380, name:'快速学习'},
        ]
        option.series[0].label.normal.textStyle.fontSize =10;
    }

    myChart.setOption(option);
});
