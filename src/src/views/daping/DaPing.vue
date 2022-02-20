<template>
  <div>
    <body>
    <!--页面头部-->
    <header>
      <h1>数据可视化-ECharts</h1>
      <div class="showNowTime">
        <router-link to="/daping2">daping2</router-link>
        {{nextTime}}</div>
    </header>
    <!--页面主题部分-->
    <section class="mainbox">
      <!--左侧部分-->
      <div class="column">
        <div class="panel bar">
          <div class="panel-header">
            <div class="left-tittle">
              <div class="bar-symbol"></div>
              <div class="usually-tittle">销售气量</div>
            </div>
          </div>
          <div class="panel-body1">
            <div class="time-query-condition">
              <a-month-picker :placeholder="nowDate" />
            </div>
            <div class="company-query-condition">
              <label class="label-company">公司</label>
              <a-select placeholder="总公司" class="select-company"
                        >
                <a-select-option value="jack">
                  Jack
                </a-select-option>
                <a-select-option value="lucy">
                  Lucy
                </a-select-option>
                <a-select-option value="disabled" disabled>
                  Disabled
                </a-select-option>
                <a-select-option value="Yiminghe">
                  yiminghe
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="panel-body2">
            <div class="sale-total-gas">
              <div class="text-partial-gas">
                <div class="gas-text">售气总量</div>
                <div class="gas-data">1245137</div>
              </div>
              <div class="progress-bar-gas">
                <a-slider :default-value="70" />
              </div>
            </div>
            <div class="sale-total-amount">
              <div class="text-partial-amount">
                <div class="amount-text">售气金额</div>
                <div class="amount-data">1245137</div>
              </div>
              <div class="progress-bar-amount">
                <a-slider :default-value="70" />
              </div>
            </div>
          </div>
<!--          <div class="chart" ref="leftCart1"></div>-->
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <div class="panel-header">
            <a-button type="primary" :class="left_button ? left_button_1 : left_button_2" @click="btnClick1">
              销售笔数
            </a-button>
            <a-button type="primary" :class="!left_button ? left_button_1 : left_button_2" @click="btnClick2">
              销售金额
            </a-button>
            <div class="right-button">
              <div :class="yearActivited1 ? right_button_special : right_button_usually" @click="dateClickYear1">年</div>
              <div :class="monthActivited1 ? right_button_special : right_button_usually" @click="dateClickMonth1">月</div>
              <div :class="dayActivited1 ? right_button_special : right_button_usually" @click="dateClickDay1">日</div>
            </div>
          </div>
          <div class="chart" ref="leftCart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <div class="panel-header">
            <div class="left-tittle">
              <div class="bar-symbol"></div>
              <div class="usually-tittle">物联网表用气分析</div>
            </div>
            <div class="right-button">
              <div :class="yearActivited2 ? right_button_special : right_button_usually" @click="dateClickYear2">年</div>
              <div :class="monthActivited2 ? right_button_special : right_button_usually" @click="dateClickMonth2">月</div>
              <div :class="dayActivited2 ? right_button_special : right_button_usually" @click="dateClickDay2">日</div>
            </div>
          </div>
          <div class="chart" ref="leftCart3"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <!--中间部分-->
      <div class="column">
        <!--数字模块-->
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>123456</li>
              <li>12345678</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <!--地图模块-->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chart" ref="myMap"></div>
        </div>
      </div>
      <!--右侧部分-->
      <div class="column">
        <div class="panel bar">
          <div class="panel-header">
            <div class="left-tittle">
              <div class="bar-symbol"></div>
              <div class="usually-tittle">业务量趋势分析</div>
            </div>
            <div class="right-button">
              <div :class="yearActivited3 ? right_button_special : right_button_usually" @click="dateClickYear3">年</div>
              <div :class="monthActivited3 ? right_button_special : right_button_usually" @click="dateClickMonth3">月</div>
              <div :class="dayActivited3 ? right_button_special : right_button_usually" @click="dateClickDay3">日</div>
            </div>
          </div>
          <div class="chart" ref="myRightChart1"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <div class="panel-header">
            <div class="left-tittle">
              <div class="bar-symbol"></div>
              <div class="usually-tittle">用户支付方式分析</div>
            </div>
            <div class="right-button">
              <div :class="yearActivited4 ? right_button_special : right_button_usually" @click="dateClickYear4">年</div>
              <div :class="monthActivited4 ? right_button_special : right_button_usually" @click="dateClickMonth4">月</div>
              <div :class="dayActivited4 ? right_button_special : right_button_usually" @click="dateClickDay4">日</div>
            </div>
          </div>
          <div class="chart" ref="myRightChart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>柱形图-就业行业</h2>
          <div class="chart" ref="myRightChart3"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
    </body>
  </div>
</template>

<script>
  import 'echarts-gl'
  export default {
    name: "Daping1",
    data() {
      return {
        list: [],
        nextTime:'',
        interval:{},
        left_button:true,
        left_button_1:'left-button-1',
        left_button_2:'left-button-2',
        right_button_usually:'right-button-usually',
        right_button_special:'right-button-special',
        yearActivited1:false,
        monthActivited1:true,
        dayActivited1:false,
        yearActivited2:false,
        monthActivited2:true,
        dayActivited2:false,
        yearActivited3:false,
        monthActivited3:true,
        dayActivited3:false,
        yearActivited4:false,
        monthActivited4:true,
        dayActivited4:false,

        nowDate: new Date().getFullYear().toString(),

        style:{
          width:20,
          color:'#red',
          backgroundColor:'#red'
        },

        //固定数据
        //月份
        monthData:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],

        //后台数据
        //气量、金额、笔数图表数据

        leftChartFirstOrderData:[100, 200, 400, 600, 1100, 1500, 954,500,698,456,800,1300],//一阶 月份数据
        leftChartSecondOrderData:[120, 520, 784, 321, 1540, 1520, 720,520,720,920,820,231],//二阶 月份数据
        leftChartTHreeOrderData:[120, 220, 420, 620, 1120, 1520, 455,520,21,159,700,789],//三阶 月份数据
        leftChart1MinMongData:[180, 650, 880, 750, 1700, 1700, 1100,700,800,1100,950,1500],//民用 月份数据
        leftChart1NotMinMongData:[120, 220, 420, 620, 1120, 1520, 720,520,720,920,820,1320],//非民用 月份数据
        leftChart1MinMongCountData:[200, 300, 300, 1000, 1700, 900, 300,700,900,600,300,1700],//销售笔数 民用 月份数据
        leftChart1NotMinMongCountData:[540, 412, 788, 900, 1500, 1200, 600,400,800,800,1200,900],//销售笔数 非民用 月份数据
        leftChart1MinMongAmountData:[234, 751, 400, 600, 1100, 1100, 900,500,698,900,900,1300],//销售金额 民用 月份数据
        leftChart1NotMinMongAmountData:[456, 751, 400, 700, 600, 100, 1500,500,560,700,800,1300],//销售金额 非民用
        //销气量、同比/环比图表数据
        leftChartSaleAmountData:[1800, 2300, 1600, 1100, 600, 900, 1500,500,560,700,800,1300],//物联网表民用用气
        leftChartNSaleAmountData:[180, 1500, 900, 1300, 800, 350, 1200,560,120,1300,1452,1700],//物联网表非民用用气
        tongBi:[24, 30, 20, 12, 90, 43, 19, 0, 0, 13, 60, 50] ,//同比
        huanBi:[24, 16, 37,66, 28, 75, 60, 80, 30, 65, 56, 79],//环比

        //业务量趋势分析
        totalBusinessVolume:[1800, 2300, 1600, 1100, 600, 900, 1500,500,560,700,800,1300], //总业务量
        minYongBusinessVolume:[1400, 1700, 1100, 800, 400, 600, 1200,400,400,500,600,1000], //民用业务量
        nMinYongBusinessVolume:[400, 600, 500, 200, 200, 300, 300,100,160,200,200,300], //非民用业务量

        //用户支付方式分析
        scanCodePaymentVolume:[1800, 2300, 1600, 1100, 600, 900, 1500,500,560,700,800,1300],//扫码
        cashPaymentVolume:[145, 4323, 245, 245, 543, 4545, 45,500,45,456,4556,4545],//现金
        transferAccountPaymentVolume:[4545, 5445, 255, 1100, 2454, 1435, 5432,1234,245,678,3566,144],//转账
        posPaymentVolume:[2344, 4234, 542, 66, 6879, 756, 454,500,645,7687,800,2542],//pos
        selfHelpPaymentVolume:[243, 24, 1600, 6346, 345, 345, 6765,9867,345,6357,3564,245],//自助
        wechatNetworkHallPaymentVolume:[5425, 4545, 54, 6543, 546, 542, 1500,500,245,700,800,1300]//微信网厅
      }
    },
    created () {
      this.shouTime()
    },
    mounted(){
      // this.myLeftChart1()
      this.myLeftChart2()
      this.myLeftChart3()
      this.myRightChart1()
      this.myRightChart2()
      this.myRightChart3()
      //this.myMap()
    },
    methods: {
      //销售笔数/销售金额切换事件
      btnClick1(){
        if (this.left_button){
          this.left_button = false
        } else {
          this.left_button = true
        }
        console.log(this.leftChart1MinMongData)
        this.leftChart1MinMongData = this.leftChart1MinMongCountData
        this.leftChart1NotMinMongData = this.leftChart1NotMinMongCountData
        this.myLeftChart2()
      },
      btnClick2(){
        if (this.left_button){
          this.left_button = false
        } else {
          this.left_button = true
        }
        this.leftChart1MinMongData = this.leftChart1MinMongAmountData
        this.leftChart1NotMinMongData = this.leftChart1NotMinMongAmountData
        this.myLeftChart2()
      },
      //年月日点击事件
      dateClickYear1(){
        this.yearActivited1 = true
        this.monthActivited1 = false
        this.dayActivited1 = false
      },
      dateClickMonth1(){
        this.yearActivited1 = false
        this.monthActivited1 = true
        this.dayActivited1 = false
      },
      dateClickDay1(){
        this.yearActivited1 = false
        this.monthActivited1 = false
        this.dayActivited1 = true
      },
      dateClickYear2(){
        this.yearActivited2 = true
        this.monthActivited2 = false
        this.dayActivited2 = false
      },
      dateClickMonth2(){
        this.yearActivited2 = false
        this.monthActivited2 = true
        this.dayActivited2 = false
      },
      dateClickDay2(){
        this.yearActivited2 = false
        this.monthActivited2 = false
        this.dayActivited2 = true
      },
      dateClickYear3(){
        this.yearActivited3 = true
        this.monthActivited3 = false
        this.dayActivited3 = false
      },
      dateClickMonth3(){
        this.yearActivited3 = false
        this.monthActivited3 = true
        this.dayActivited3 = false
      },
      dateClickDay3(){
        this.yearActivited3 = false
        this.monthActivited3 = false
        this.dayActivited3 = true
      },
      dateClickYear4(){
        this.yearActivited4 = true
        this.monthActivited4 = false
        this.dayActivited4 = false
      },
      dateClickMonth4(){
        this.yearActivited4 = false
        this.monthActivited4 = true
        this.dayActivited4 = false
      },
      dateClickDay4(){
        this.yearActivited4 = false
        this.monthActivited4 = false
        this.dayActivited4 = true
      },
      //时间显示
      shouTime() {
        this.interval = setInterval(() => {//開始运行
          let dt = new Date();
          let y = dt.getFullYear();
          let mt = dt.getMonth() + 1;
          let day = dt.getDate();
          let h = dt.getHours(); //获取时
          let m = dt.getMinutes(); //获取分
          let s = dt.getSeconds(); //获取秒
          this.nextTime =
            "当前时间：" +
            y +
            "年" +
            mt +
            "月" +
            day +
            "-" +
            h +
            "时" +
            m +
            "分" +
            s +
            "秒";
          console.log(this.nextTime)
        },1000)//设定定时器，循环运行
      },
      //各个图表组件
      myLeftChart2(){
        //实例化对象

        let mychart = this.$echarts.init(this.$refs.leftCart2)
        // 指定配置和数据
        let option = {
          title:{
            show:true,
            text:'万m³',
            textStyle:{
              color:'rgba(255,255,255,.6)',
              fontSize:14
            },
            left:0,
            top:-4
          },
          //修改柱子颜色
          legend: {
            // 距离容器10%
            right: "20%",
            // 修饰图例文字的颜色
            textStyle: {
              color: "#4c9bfd"
            },
            itemGap:20
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor: 'rgba(62,81,255,0.2)',
            textStyle:{
              color:"rgba(10,44,141,.2)"
            },
            borderColor:"rgba(10,51,146,.3)",
            formatter:function (params) {
              console.log(params[0].name)
              let str = '<span>params[0].name</span>' + "<br/>"
              params.forEach((item) => {
                if (item.seriesName == '民用') {
                  str += '' +
                    '<span>'+ item.seriesName +'&emsp;&emsp;'+'</span>' +
                    '<span style="color:#ffeb7b;margin-right: 2px">'+ item.value + '</span><br/>'
                }else {
                  str += '' +
                    '<span>'+ item.seriesName +'&emsp;'+'</span>' +
                    '<span style="color:#ffeb7b;margin-right: 2px">'+ item.value + '</span><br/>'
                }

              })
              return str
            }
          },
          //修改图表大小
          grid: {
            left: "1%",
            top: "35px",
            right: "0%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: this.monthData,
              axisTick: {
                alignWithLabel: true
              },
              //修改x坐标轴上文字的样式
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: "12"
                }
              },
              //x坐标轴的样式设置
              axisLine: {
                show: false
              }
            },
            {
              type: "category",
              data: this.monthData,
              axisTick: {show:false},
              axisLabel: {show:false},
              splitArea: {show:false},
              splitLine: {show:false},
              axisLine: {show:false},
            }
          ],
          yAxis: [
            {
              type: "value",
              interval:500,
              max:3000,
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: "12"
                }
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                  // width: 1,
                  // type: "solid"
                }
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                },
                width:1
              }
            },
            {
              name:'%',
              nameTextStyle:{
                color:'rgba(255,255,255,.7)',
              },
              nameGap:10,
              interval:30,
              min:-90,
              type:'value',
              // 去除刻度
              axisTick: {
                show: false
              },
              // 修饰刻度标签的颜色
              axisLabel: {
                color: "rgba(255,255,255,.7)"
              },
              // 修改y轴分割线的颜色
              splitLine: {
                show:false,
                lineStyle: {
                  color: "#012f4a"
                }
              }
            }
          ],
          series: [

            {
              name:"民用",
              type: "bar",
              barWidth: "36%",
              xAxisIndex:1,
              itemStyle:{
                normal:{
                  color:'rgba(132,198,110,0)',
                  borderColor:new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0.37,
                        color: "rgba(112,181,212,0.9)"
                      },
                      {
                        offset: 1,
                        color: "rgba(3,6,114,0.1)"
                      }
                    ],
                    false
                  ),
                }
              },
              data:this.leftChart1MinMongData,
            },
            {
              name: "一阶",
              type: "bar",
              barWidth: "6%",
              data: this.leftChartFirstOrderData,
              itemStyle:{
                normal:{
                  x:'10%',
                  color:new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0.37,
                        color: "rgba(31,194,237,0.9)"
                      },
                      {
                        offset: 1,
                        color: "rgba(3,6,114,0.1)"
                      }
                    ],
                    false
                  )
                }
              }
            },
            {
              name: "二阶",
              type: "bar",
              barWidth: "6%",
              data:this.leftChartSecondOrderData,
              itemStyle:{
                normal:{
                  color:new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0.37,
                        color: "rgba(16,228,151,0.84)"
                      },
                      {
                        offset: 1,
                        color: "rgba(52,213,70,0)"
                      }
                    ],
                    false
                  )
                }
              }
            },
            {
              name: "三阶",
              type: "bar",
              barWidth: "6%",
              data:this.leftChartTHreeOrderData,
              itemStyle:{
                normal:{
                  color:new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0.37,
                        color: "rgba(212,193,91,0.84)"
                      },
                      {
                        offset: 1,
                        color: "rgba(52,213,70,0)"
                      }
                    ],
                    false
                  )
                }
              }
            },

            {
              name:"非民用",
              type: "bar",
              barWidth: "36%",
              barGap:'20%',
              xAxisIndex:1,
              itemStyle:{
                normal:{
                  color:'rgba(132,198,110,0)',
                  borderColor:new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0.37,
                        color: "rgba(222,206,235,0.9)"
                      },
                      {
                        offset: 1,
                        color: "rgba(3,6,114,0.1)"
                      }
                    ],
                    false
                  ),
                  label:{show:false,textStyle:{color:'#27727B'}}
                }
              },
              data:this.leftChart1NotMinMongData
            },
            {
              type: "bar",
              barWidth: "41%",
              barGap:'70%',
              data:this.leftChartSecondOrderData,
              itemStyle:{
                normal:{
                  color:'rgba(255,255,255,0)'
                }
              }
            },
            {
              name: "同比",
              type: "line",
              stack: "总量",
              // 是否让线条圆滑显示
              smooth: true,
              lineStyle:{
                color:'rgba(193,162,81,.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40,

              },
              showSymbol: false,
              yAxisIndex:1,
              data: this.tongBi
            },
            {
              name: "环比",
              type: "line",
              stack: "总量",
              lineStyle:{
                color:'rgba(0,212,139,.9)'
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              yAxisIndex:1,
              data: this.huanBi
            }
          ]
        };
        // 把配置给实例对象
        mychart.setOption(option);
        window.addEventListener("resize", function() {
          mychart.resize();
        });
      },
      myLeftChart3(){
        let mychart = this.$echarts.init(this.$refs.leftCart3)

        // 2. 指定配置和数据
        let option = {
          title:{
            show:true,
            text:'万m³',
            textStyle:{
              color:'rgba(255,255,255,.6)',
              fontSize:14
            },
            left:9,
            top:12
          },
          color: [new this.$echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0.37,
                color: "rgba(0,255,255,0.9)"
              },
              {
                offset: 1,
                color: "rgba(3,6,114,0.1)"
              }
            ],
            false
          ),new this.$echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0.37,
                color: "rgba(1,245,152,0.9)"
              },
              {
                offset: 1,
                color: "rgba(3,6,114,0.1)"
              }
            ],
            false
          )],

          tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
          },
          legend: {
            // 距离容器10%
            right: "30%",
            // 修饰图例文字的颜色
            textStyle: {
              color: "#4c9bfd"
            },
            itemGap:30
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
          },
          grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
          },

          xAxis: {
            type: "category",
            boundaryGap: false,
            data:this.monthData,
            // 去除刻度
            axisTick: {
              show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
              color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
              show: false
            }
          },
          yAxis: [
            {
              type: "value",
              interval:500,
              max:3500,
              // 去除刻度
              axisTick: {
                show: false
              },
              // 修饰刻度标签的颜色
              axisLabel: {
                color: "rgba(255,255,255,.7)"
              },
              // 修改y轴分割线的颜色
              splitLine: {
                lineStyle: {
                  color: "#012f4a"
                }
              }
            },
            {
              name:'%',
              nameTextStyle:{
                color:'rgba(255,255,255,.7)',
              },
              nameGap:10,
              interval:30,
              min:-90,
              type:'value',
              // 去除刻度
              axisTick: {
                show: false
              },
              // 修饰刻度标签的颜色
              axisLabel: {
                color: "rgba(255,255,255,.7)"
              },
              // 修改y轴分割线的颜色
              splitLine: {
                show:false,
                lineStyle: {
                  color: "#012f4a"
                }
              }
            }

          ],
          series: [
            {
              name: "民用",
              type: "bar",
              barWidth: "15%",
              data:this.leftChartSaleAmountData
            },
            {
              name: "非民用",
              type: "bar",
              barWidth: "15%",
              barGap:'50%',
              data:this.leftChartNSaleAmountData
            },
            {
              name: "同比",
              type: "line",
              stack: "总量",
              // 是否让线条圆滑显示
              smooth: true,
              lineStyle:{
                color:'rgba(193,162,81,.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40,

              },
              showSymbol: false,
              yAxisIndex:1,
              data: this.tongBi
            },
            {
              name: "环比",
              type: "line",
              stack: "总量",
              lineStyle:{
                color:'rgba(0,212,139,.9)'
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              yAxisIndex:1,
              data: this.huanBi
            }
          ]
        };
        // 3. 把配置和数据给实例对象
        mychart.setOption(option);
        window.addEventListener("resize", function() {
          mychart.resize();
        });

      },
      myRightChart1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myRightChart1);
        let option = {
          title:{
            show:true,
            text:'万m³',
            textStyle:{
              color:'rgba(255,255,255,.6)',
              fontSize:14
            },
            left:9,
            top:12
          },
          color: [],

          tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
          },
          legend: {
            // 距离容器10%
            right: "30%",
            // 修饰图例文字的颜色
            textStyle: {
              color: "#4c9bfd"
            },
            itemGap:30
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
          },
          grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
          },

          xAxis: {
            type: "category",
            boundaryGap: false,
            data:this.monthData,
            // 去除刻度
            axisTick: {
              show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
              color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
              show: false
            }
          },
          yAxis: [
            {
              type: "value",
              // 去除刻度
              axisTick: {
                show: false
              },
              // 修饰刻度标签的颜色
              axisLabel: {
                color: "rgba(255,255,255,.7)"
              },
              // 修改y轴分割线的颜色
              splitLine: {
                lineStyle: {
                  color: "#012f4a"
                }
              }
            }

          ],
          series: [
            {
              name: "总数",
              type: "line",
              // 是否让线条圆滑显示
              smooth: true,
              lineStyle:{
                color:'rgba(193,162,81,.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40,

              },
              data: this.totalBusinessVolume
            },
            {
              name: "民用",
              type: "line",
              lineStyle:{
                color:'rgba(0,212,139,.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              data: this.minYongBusinessVolume
            },
            {
              name: "非民用",
              type: "line",
              lineStyle:{
                color:'rgba(46,164,212,0.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              data: this.nMinYongBusinessVolume
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      },
      myRightChart2(){
        let myChart = this.$echarts.init(this.$refs.myRightChart2);
        let option = {
          title:{
            show:true,
            text:'万m³',
            textStyle:{
              color:'rgba(255,255,255,.6)',
              fontSize:14
            },
            left:9,
            top:12
          },
          color: [],

          tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
          },
          legend: {
            // 距离容器10%
            right: "15%",
            // 修饰图例文字的颜色
            textStyle: {
              color: "#4c9bfd"
            },
            itemGap:30
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
          },
          grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
          },

          xAxis: {
            type: "category",
            boundaryGap: false,
            data:this.monthData,
            // 去除刻度
            axisTick: {
              show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
              color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
              show: false
            }
          },
          yAxis: [
            {
              type: "value",
              // 去除刻度
              axisTick: {
                show: false
              },
              // 修饰刻度标签的颜色
              axisLabel: {
                color: "rgba(255,255,255,.7)"
              },
              // 修改y轴分割线的颜色
              splitLine: {
                lineStyle: {
                  color: "#012f4a"
                }
              }
            }

          ],
          series: [
            {
              name: "扫码",
              type: "line",
              // 是否让线条圆滑显示
              smooth: true,
              lineStyle:{
                color:'rgba(193,162,81,.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              showSymbol: false,
              data: this.scanCodePaymentVolume
            },
            {
              name: "现金",
              type: "line",
              lineStyle:{
                color:'rgba(0,212,139,.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              data: this.cashPaymentVolume
            },
            {
              name: "转账",
              type: "line",
              lineStyle:{
                color:'rgba(46,164,212,0.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              data: this.transferAccountPaymentVolume
            },
            {
              name: "pos",
              type: "line",
              lineStyle:{
                color:'rgba(194,121,212,0.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              data: this.posPaymentVolume
            },
            {
              name: "自助",
              type: "line",
              lineStyle:{
                color:'rgba(103,212,192,0.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              data: this.selfHelpPaymentVolume
            },
            {
              name: "微信网厅",
              type: "line",
              lineStyle:{
                color:'rgba(212,43,125,0.9)',
                type:'dotted',
                width:3,
                join:'miter',
                miterLimit:40
              },
              smooth: true,
              showSymbol: false,  //取消折线的衔接点
              data: this.wechatNetworkHallPaymentVolume
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      },
      myLeftChart3bak(){
        let mychart = this.$echarts.init(this.$refs.leftCart3)
        let option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function(p) {
              //其中p为当前鼠标的位置
              return [p[0] + 10, p[1] - 10];
            }
          },
          legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "12"
            }
          },
          series: [
            {
              name: "年龄分布",
              type: "pie",
              center: ["50%", "42%"],
              radius: ["40%", "60%"],
              color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
                "#06b4ab",
                "#06c8ab",
                "#06dcab",
                "#06f0ab"
              ],
              label: { show: false },
              labelLine: { show: false },
              data: [
                { value: 1, name: "0岁以下" },
                { value: 4, name: "20-29岁" },
                { value: 2, name: "30-39岁" },
                { value: 2, name: "40-49岁" },
                { value: 1, name: "50岁以上" }
              ]
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        mychart.setOption(option);
        window.addEventListener("resize", function() {
          mychart.resize();
        });
      },
      myRightChart1bak(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myRightChart1);

        let data = [70, 34, 60, 78, 69];
        let titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
        let valdata = [702, 350, 610, 793, 664];
        let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
        let option = {
          //图标位置
          grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
          },
          xAxis: {
            show: false
          },
          yAxis: [
            {
              show: true,
              data: titlename,
              inverse: true,
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: "#fff",

                rich: {
                  lg: {
                    backgroundColor: "#339911",
                    color: "#fff",
                    borderRadius: 15,
                    // padding: 5,
                    align: "center",
                    width: 15,
                    height: 15
                  }
                }
              }
            },
            {
              show: true,
              inverse: true,
              data: valdata,
              axisLabel: {
                textStyle: {
                  fontSize: 12,
                  color: "#fff"
                }
              }
            }
          ],
          series: [
            {
              name: "条",
              type: "bar",
              yAxisIndex: 0,
              data: data,
              barCategoryGap: 50,
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 20,
                  color: function(params) {
                    let num = myColor.length;
                    return myColor[params.dataIndex % num];
                  }
                }
              },
              label: {
                normal: {
                  show: true,
                  position: "inside",
                  formatter: "{c}%"
                }
              }
            },
            {
              name: "框",
              type: "bar",
              yAxisIndex: 1,
              barCategoryGap: 50,
              data: [100, 100, 100, 100, 100],
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: "none",
                  borderColor: "#00c1de",
                  borderWidth: 3,
                  barBorderRadius: 15
                }
              }
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      },
      myRightChart2bak(){
        let myChart = this.$echarts.init(this.$refs.myRightChart2);
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              lineStyle: {
                color: "#dddc6b"
              }
            }
          },
          legend: {
            top: "0%",
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "12"
            }
          },
          grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
          },

          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12
                }
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.2)"
                }
              },

              data: [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30"
              ]
            },
            {
              axisPointer: { show: false },
              axisLine: { show: false },
              position: "bottom",
              offset: 20
            }
          ],

          yAxis: [
            {
              type: "value",
              axisTick: { show: false },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              },
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12
                }
              },

              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              }
            }
          ],
          series: [
            {
              name: "播放量",
              type: "line",
              smooth: true,
              symbol: "circle",
              symbolSize: 5,
              showSymbol: false,
              lineStyle: {
                normal: {
                  color: "#0184d5",
                  width: 2
                }
              },
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                }
              },
              itemStyle: {
                normal: {
                  color: "#0184d5",
                  borderColor: "rgba(221, 220, 107, .1)",
                  borderWidth: 12
                }
              },
              data: [
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                20,
                40,
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                20,
                40,
                30,
                60,
                20,
                40,
                20,
                40
              ]
            },
            {
              name: "转发量",
              type: "line",
              smooth: true,
              symbol: "circle",
              symbolSize: 5,
              showSymbol: false,
              lineStyle: {
                normal: {
                  color: "#00d887",
                  width: 2
                }
              },
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(0, 216, 135, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(0, 216, 135, 0.1)"
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                }
              },
              itemStyle: {
                normal: {
                  color: "#00d887",
                  borderColor: "rgba(221, 220, 107, .1)",
                  borderWidth: 12
                }
              },
              data: [
                50,
                30,
                50,
                60,
                10,
                50,
                30,
                50,
                60,
                40,
                60,
                40,
                80,
                30,
                50,
                60,
                10,
                50,
                30,
                70,
                20,
                50,
                10,
                40,
                50,
                30,
                70,
                20,
                50,
                10,
                40
              ]
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      },
      myRightChart3(){
        let myChart = this.$echarts.init(this.$refs.myRightChart3);
        // 2. 指定配置项和数据
        let option = {
          legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "12"
            }
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          // 注意颜色写的位置
          color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
          ],
          series: [
            {
              name: "点位统计",
              type: "pie",
              // 如果radius是百分比则必须加引号
              radius: ["10%", "70%"],
              center: ["50%", "42%"],
              roseType: "radius",
              data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "深圳" },
                { value: 42, name: "广东" }
              ],
              // 修饰饼形图文字相关的样式 label对象
              label: {
                fontSize: 10
              },
              // 修饰引导线样式
              labelLine: {
                // 连接到图形的线长度
                length: 10,
                // 连接到文字的线长度
                length2: 10
              }
            }
          ]
        };

        // 3. 配置项和数据给我们的实例化对象
        myChart.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function() {
          // 让我们的图表调用 resize这个方法
          myChart.resize();
        });
      },
      myMap(){
        let myChart = this.$echarts.init(this.$refs.myMap);
        // 2. 指定配置和数据
        let geoCoordMap = {
          上海: [121.4648, 31.2891],
          东莞: [113.8953, 22.901],
          东营: [118.7073, 37.5513],
          中山: [113.4229, 22.478],
          临汾: [111.4783, 36.1615],
          临沂: [118.3118, 35.2936],
          丹东: [124.541, 40.4242],
          丽水: [119.5642, 28.1854],
          乌鲁木齐: [87.9236, 43.5883],
          佛山: [112.8955, 23.1097],
          保定: [115.0488, 39.0948],
          兰州: [103.5901, 36.3043],
          包头: [110.3467, 41.4899],
          北京: [116.4551, 40.2539],
          北海: [109.314, 21.6211],
          南京: [118.8062, 31.9208],
          南宁: [108.479, 23.1152],
          南昌: [116.0046, 28.6633],
          南通: [121.1023, 32.1625],
          厦门: [118.1689, 24.6478],
          台州: [121.1353, 28.6688],
          合肥: [117.29, 32.0581],
          呼和浩特: [111.4124, 40.4901],
          咸阳: [108.4131, 34.8706],
          哈尔滨: [127.9688, 45.368],
          唐山: [118.4766, 39.6826],
          嘉兴: [120.9155, 30.6354],
          大同: [113.7854, 39.8035],
          大连: [122.2229, 39.4409],
          天津: [117.4219, 39.4189],
          太原: [112.3352, 37.9413],
          威海: [121.9482, 37.1393],
          宁波: [121.5967, 29.6466],
          宝鸡: [107.1826, 34.3433],
          宿迁: [118.5535, 33.7775],
          常州: [119.4543, 31.5582],
          广州: [113.5107, 23.2196],
          廊坊: [116.521, 39.0509],
          延安: [109.1052, 36.4252],
          张家口: [115.1477, 40.8527],
          徐州: [117.5208, 34.3268],
          德州: [116.6858, 37.2107],
          惠州: [114.6204, 23.1647],
          成都: [103.9526, 30.7617],
          扬州: [119.4653, 32.8162],
          承德: [117.5757, 41.4075],
          拉萨: [91.1865, 30.1465],
          无锡: [120.3442, 31.5527],
          日照: [119.2786, 35.5023],
          昆明: [102.9199, 25.4663],
          杭州: [119.5313, 29.8773],
          枣庄: [117.323, 34.8926],
          柳州: [109.3799, 24.9774],
          株洲: [113.5327, 27.0319],
          武汉: [114.3896, 30.6628],
          汕头: [117.1692, 23.3405],
          江门: [112.6318, 22.1484],
          沈阳: [123.1238, 42.1216],
          沧州: [116.8286, 38.2104],
          河源: [114.917, 23.9722],
          泉州: [118.3228, 25.1147],
          泰安: [117.0264, 36.0516],
          泰州: [120.0586, 32.5525],
          济南: [117.1582, 36.8701],
          济宁: [116.8286, 35.3375],
          海口: [110.3893, 19.8516],
          淄博: [118.0371, 36.6064],
          淮安: [118.927, 33.4039],
          深圳: [114.5435, 22.5439],
          清远: [112.9175, 24.3292],
          温州: [120.498, 27.8119],
          渭南: [109.7864, 35.0299],
          湖州: [119.8608, 30.7782],
          湘潭: [112.5439, 27.7075],
          滨州: [117.8174, 37.4963],
          潍坊: [119.0918, 36.524],
          烟台: [120.7397, 37.5128],
          玉溪: [101.9312, 23.8898],
          珠海: [113.7305, 22.1155],
          盐城: [120.2234, 33.5577],
          盘锦: [121.9482, 41.0449],
          石家庄: [114.4995, 38.1006],
          福州: [119.4543, 25.9222],
          秦皇岛: [119.2126, 40.0232],
          绍兴: [120.564, 29.7565],
          聊城: [115.9167, 36.4032],
          肇庆: [112.1265, 23.5822],
          舟山: [122.2559, 30.2234],
          苏州: [120.6519, 31.3989],
          莱芜: [117.6526, 36.2714],
          菏泽: [115.6201, 35.2057],
          营口: [122.4316, 40.4297],
          葫芦岛: [120.1575, 40.578],
          衡水: [115.8838, 37.7161],
          衢州: [118.6853, 28.8666],
          西宁: [101.4038, 36.8207],
          西安: [109.1162, 34.2004],
          贵阳: [106.6992, 26.7682],
          连云港: [119.1248, 34.552],
          邢台: [114.8071, 37.2821],
          邯郸: [114.4775, 36.535],
          郑州: [113.4668, 34.6234],
          鄂尔多斯: [108.9734, 39.2487],
          重庆: [107.7539, 30.1904],
          金华: [120.0037, 29.1028],
          铜川: [109.0393, 35.1947],
          银川: [106.3586, 38.1775],
          镇江: [119.4763, 31.9702],
          长春: [125.8154, 44.2584],
          长沙: [113.0823, 28.2568],
          长治: [112.8625, 36.4746],
          阳泉: [113.4778, 38.0951],
          青岛: [120.4651, 36.3373],
          韶关: [113.7964, 24.7028]
        };

        let XAData = [
          [{ name: "西安" }, { name: "北京", value: 100 }],
          [{ name: "西安" }, { name: "上海", value: 100 }],
          [{ name: "西安" }, { name: "广州", value: 100 }],
          [{ name: "西安" }, { name: "西宁", value: 100 }],
          [{ name: "西安" }, { name: "拉萨", value: 100 }]
        ];

        let XNData = [
          [{ name: "西宁" }, { name: "北京", value: 100 }],
          [{ name: "西宁" }, { name: "上海", value: 100 }],
          [{ name: "西宁" }, { name: "广州", value: 100 }],
          [{ name: "西宁" }, { name: "西安", value: 100 }],
          [{ name: "西宁" }, { name: "银川", value: 100 }]
        ];

        let YCData = [
          [{ name: "拉萨" }, { name: "北京", value: 100 }],
          [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
          [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }]
        ];

        let planePath =
          "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
        //var planePath = 'arrow';
        let convertData = function(data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let dataItem = data[i];

            let fromCoord = geoCoordMap[dataItem[0].name];
            let toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
              });
            }
          }
          return res;
        };

        let color = ["#fff", "#fff", "#fff"]; //航线的颜色
        let series = [];
        [
          ["西安", XAData],
          ["西宁", XNData],
          ["银川", YCData]
        ].forEach(function(item, i) {
          series.push(
            {
              name: item[0] + " Top3",
              type: "lines",
              zlevel: 1,
              effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: "red", //arrow箭头的颜色
                symbolSize: 3
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 0,
                  curveness: 0.2
                }
              },
              data: convertData(item[1])
            },
            {
              name: item[0] + " Top3",
              type: "lines",
              zlevel: 2,
              symbol: ["none", "arrow"],
              symbolSize: 10,
              effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 1,
                  opacity: 0.6,
                  curveness: 0.2
                }
              },
              data: convertData(item[1])
            },
            {
              name: item[0] + " Top3",
              type: "effectScatter",
              coordinateSystem: "geo",
              zlevel: 2,
              rippleEffect: {
                brushType: "stroke"
              },
              label: {
                normal: {
                  show: true,
                  position: "right",
                  formatter: "{b}"
                }
              },
              symbolSize: function(val) {
                return val[2] / 8;
              },
              itemStyle: {
                normal: {
                  color: color[i]
                },
                emphasis: {
                  areaColor: "#2B91B7"
                }
              },
              data: item[1].map(function(dataItem) {
                return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
              })
            }
          );
        });
        let option = {
          tooltip: {
            trigger: "item",
            formatter: function(params) {
              if (params.seriesType == "effectScatter") {
                return "线路：" + params.data.name + "" + params.data.value[2];
              } else if (params.seriesType == "lines") {
                return (
                  params.data.fromName +
                  ">" +
                  params.data.toName +
                  "<br />" +
                  params.data.value
                );
              } else {
                return params.name;
              }
            }
          },

          geo: {
            map: "china",
            label: {
              emphasis: {
                show: true,
                color: "#fff"
              }
            },
            roam: false,
            //   放大我们的地图
            zoom: 1,
            itemStyle: {
              normal: {
                areaColor: "rgba(43, 196, 243, 0.42)",
                borderColor: "rgba(43, 196, 243, 1)",
                borderWidth: 1
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            }
          },
          series: series
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      },


      // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
      getParametricEquation(startRatio, endRatio, isSelected, isHovered, k,height) {

        // 计算
        let midRatio = (startRatio + endRatio) / 2;

        let startRadian = startRatio * Math.PI * 2;
        let endRadian = endRatio * Math.PI * 2;
        let midRadian = midRatio * Math.PI * 2;

        // 如果只有一个扇形，则不实现选中效果。
        if (startRatio === 0 && endRatio === 1) {
          isSelected = false;
        }

        // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
        k = typeof k !== 'undefined' ? k : 1 / 3 ;

        // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
        let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
        let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

        // 计算高亮效果的放大比例（未高亮，则比例为 1）
        let hoverRate = isHovered ? 1.05 : 1;

        // 返回曲面参数方程
        return {

          u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32
          },

          v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
          },

          x: function(u, v) {
            if (u < startRadian) {
              return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian ){
              return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
          },

          y: function(u, v) {
            if (u < startRadian) {
              return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian ){
              return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
          },

          z: function(u, v) {
            if (u < - Math.PI * 0.5 ) {
              return Math.sin(u);
            }
            if (u > Math.PI * 2.5 ){
              return Math.sin(u);
            }
            return Math.sin(v) > 0 ? 1*height : -1;
          }
        };
        // console.log('getparams');
      },
      //返回一个option
      getPie3D(pieData, internalDiameterRatio) {
        let series = [];
        let sumValue = 0;
        let startValue = 0;
        let endValue = 0;
        let legendData = [];
        let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio): 1 / 3;

        // 为每一个饼图数据，生成一个 series-surface 配置
        for (let i = 0; i < pieData.length; i++) {

          sumValue += pieData[i].value;

          let seriesItem = {
            name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
            type: 'surface',
            parametric: true,
            wireframe: {
              show: false
            },
            pieData: pieData[i],
            pieStatus: {
              selected: false,
              hovered: false,
              k: k
            }
          };

          if (typeof pieData[i].itemStyle != 'undefined') {

            let itemStyle = {};

            typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
            typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

            seriesItem.itemStyle = itemStyle;
          }
          series.push(seriesItem);
          // console.log('get3d');
        }
        // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
        // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
        for (let i = 0; i < series.length; i++) {
          endValue = startValue + series[i].pieData.value;
          // console.log(series[i]);
          series[i].pieData.startRatio = startValue / sumValue;
          series[i].pieData.endRatio = endValue / sumValue;
          series[i].parametricEquation = this.getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k,series[i].pieData.value);

          startValue = endValue;

          legendData.push(series[i].name);
        }

        // 准备待返回的配置项，把准备好的 legendData、series 传入。
        let option = {
          tooltip: {
            formatter: params => {
              if (params.seriesName !== 'mouseoutSeries') {
                return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}`;
              }
            }
          },
          legend: {
            data: legendData,
            textStyle:{
              color:'#FFFFFF',
              fontSize:10
            }
          },
          xAxis3D: {
            min: -1,
            max: 1
          },
          yAxis3D: {
            min: -1,
            max: 1
          },
          zAxis3D: {
            min: -1,
            max: 1
          },
          grid3D: {
            show: false,
            boxHeight: 20,
            //top: '30%',
            bottom: '50%',
            environment: '#021041',
            viewControl:{
              distance:300,
              alpha:25,
              beta:130,
            },

          },
          series: series
        };
        return option;
      },
      // myLeftChart3() {
      //   let mychart = this.$echarts.init(this.$refs.leftCart3)
      //   // let chart = document.getElementById('chart-talent');
      //   // let mychart = this.$echarts.init(chart);
      //   let option = this.getPie3D([{
      //     name: '已消除',
      //     value: 3,
      //     itemStyle: {
      //       opacity: 0.5,
      //       color:'rgba(0,127,244,.8)',
      //     }
      //   },{
      //     name: '未消除',
      //     value: 1,
      //     itemStyle: {
      //       opacity: 0.5,
      //       color:'rgba(209,126,23,.8)',
      //     }
      //   }],2);
      //   mychart.setOption(option);
      //   window.addEventListener("resize", function() {
      //     mychart.resize();
      //   });
      // }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/index.less";
</style>
