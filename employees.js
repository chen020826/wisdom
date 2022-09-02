 function loadChart02() {
    
      var xhr = new XMLHttpRequest();
      // var obj = {
      //     chart_num:6
      // }
      // console.log(obj);
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
              var res = xhr.responseText;
              res = JSON.parse(res);
              console.log(res);
            
              var dom = document.getElementById('biao1');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product', '导购次数', '用户数', '交易数'],
    source: res.source
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
      };
      }
      xhr.open('POST', 'http://127.0.0.1:8080/shapan/analysis_charts/astanly/', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      var obj = {
          chart_num:2
      }
      xhr.send(JSON.stringify(obj));
  }
  loadChart02();
  function loadChart03() {
    
    var xhr = new XMLHttpRequest();
    // var obj = {
    //     chart_num:6
    // }
    // console.log(obj);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var res = xhr.responseText;
            res = JSON.parse(res);
            console.log(res);
            
    };
    }
    xhr.open('POST', 'http://127.0.0.1:8080/shapan/analysis_charts/astanly/', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var obj = {
        chart_num:3
    }
    xhr.send(JSON.stringify(obj));
}
loadChart03();