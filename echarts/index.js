// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();
var map = {};

$.get('./beijing.json', function (geoJson) {
  console.log(geoJson);
  map = geoJson;

});

myChart.hideLoading();

function setMap(getData,title,unit) {
  if(Object.keys(map).length){
    echarts.registerMap('Beijing', map);

    myChart.setOption(option = {
            title: {
                text: title,
                },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} '+ unit
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },

              width:'1380',
              height:'auto',

            visualMap: {
                min: 0,
                max: 10000,
                text:['High','Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue','yellow', 'orangered']
                }
            },
            series: [
                {
                    name: title,
                    type: 'map',
                    mapType: 'Beijing', // 自定义扩展图表类型
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:
                        getData

                }
            ]
          });

  }
}

$(function () {
  $('#submit').click(function () {
      var data = $('form').serialize();

      var mapdata = [
      {name: '门头沟区', value: $('#mtg').val()},
      {name: '海淀区', value: $('#haidian').val()},
      {name: '房山区', value: $('#fangshan').val()},
      {name: '西城区', value: $('#xicheng').val()},
      {name: '东城区', value: $('#dongcheng').val()},
      {name: '密云区', value: $('#miyun').val()},
      {name: '平谷区', value: $('#pinggu').val()},
      {name: '昌平区', value: $('#changping').val()},
      {name: '通州区', value: $('#tongzhou').val()},
      {name: '大兴区', value: $('#daxing').val()},
      {name: '石景山区', value: $('#shijingshan').val()},
      {name: '丰台区', value: $('#fengtai').val()},
      {name: '延庆区', value: $('#yanqing').val()},
      {name: '怀柔区', value:$('#huairou').val()},
      {name: '顺义区', value: $('#shunyi').val()},
      {name: '朝阳区', value: $('#chaoyang').val()},
    ];
    var title = $('#title').val();
    var unit = $('#unit').val();
    var w = $('#width').val();
    var d = $('#height').val();

    setMap(
      mapdata,
      title,
      unit
    )


  });
});
