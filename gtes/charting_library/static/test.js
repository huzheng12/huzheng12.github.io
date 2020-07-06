__customIndicators = [

  {
    // 将<study name>替换为您的指标名称
    // 它将由图表库内部使用
    name: "Study Custom",
    metainfo: {
      _metainfoVersion: 40,
      id: "study-custom@tv-basicstudies-1",
      scriptIdPart: "",
      name: "study-custom",
      // 此说明将显示在指标窗口中
      // 当调用createStudy方法时，它也被用作“name”参数
      description: localStorage.getItem('lang') === "zh" ? "安德烈斯高低点指标(Andreas High&Low Index)" : "Andreas High&Low Index",
      // 该描述将显示在图表上
      shortDescription: localStorage.getItem('lang') === "zh" ? "多空高低通道" : "Andreas High&Low Index",
      is_hidden_study: false,
      is_price_study: true,
      isCustomIndicator: true,

      defaults: {
        styles: {
          // /*"plot_0": {
          //         "linestyle": 0,
          //         "visible": true,

          //         // 绘图线宽度
          //         "linewidth": 2,

          //         // 绘制类型:
          //         //    1 - 直方图
          //         //    2 - 线形图
          //         //    3 - 十字指针
          //         //    4 - 山形图
          //         //    5 - 柱状图
          //         //    6 - 圆圈图
          //         //    7 - 中断线
          //         //    8 - 中断区块
          //         "plottype": 2,

          //         // 显示价格线?
          //         "trackPrice": false,

          //         // 绘制透明度，百分比。
          //         "transparency": 40,

          //         // 以#RRGGBB格式绘制颜色
          //         "color": "#965FC4"
          //     }*/
          plot_0: {
            linestyle: 0,
            linewidth: 2,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#ff0000"
          },
          plot_1: {
            linestyle: 0,
            linewidth: 2,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#32CD32"
          },
          plot_2: {
            text: localStorage.getItem('lang') === "zh" ? "底部结构" : "substructure",
            visible: true,
            location: "BelowBar",
            transparency: 0,
            color: "#ff00ff",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_circle",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: localStorage.getItem('lang') === "zh" ? "底部结构" : "substructure",
            isHidden: false
          },
          plot_3: {
            text: localStorage.getItem('lang') === "zh" ? "顶部结构" : "overhead structure",
            visible: true,
            location: "AboveBar",
            transparency: 0,
            color: "#7FFF00",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_square",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: localStorage.getItem('lang') === "zh" ? "顶部结构" : "overhead structure",
            isHidden: false
          },
          plot_4: {
            text: localStorage.getItem('lang') === "zh" ? "高点" : "high spot",
            visible: true,
            location: "AboveBar",
            transparency: 0,
            color: "#7FFF00",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_triangle_up",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: localStorage.getItem('lang') === "zh" ? "高点" : "high spot",
            isHidden: false
          },
          plot_5: {
            text: localStorage.getItem('lang') === "zh" ? "顶" : "peak",
            visible: true,
            location: "AboveBar",
            transparency: 0,
            color: "#ff0000",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_square",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: localStorage.getItem('lang') === "zh" ? "顶" : "peak",
            isHidden: false
          },
          plot_6: {
            text: localStorage.getItem('lang') === "zh" ? "低点" : "low spot",
            visible: true,
            location: "BelowBar",
            transparency: 0,
            color: "#ff0000",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_triangle_up",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: localStorage.getItem('lang') === "zh" ? "低点" : "low spot",
            isHidden: false
          },
          plot_7: {
            text: localStorage.getItem('lang') === "zh" ? "底" : "Trough",
            visible: true,
            location: "BelowBar",
            transparency: 0,
            color: "#32CD32",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_square",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: localStorage.getItem('lang') === "zh" ? "底" : "Trough",
            isHidden: false
          }
        },
        // 指标输出值的精度
        // (小数点后的位数)。
        precision: 2,
        inputs: {}
      },
      plots: [
        {
          id: "plot_0",
          type: "line"
        },
        {
          id: "plot_1",
          type: "line"
        },
        {
          id: "plot_2",
          type: "shapes"
        },
        {
          id: "plot_3",
          type: "shapes"
        },
        {
          id: "plot_4",
          type: "shapes"
        },
        {
          id: "plot_5",
          type: "shapes"
        },
        {
          id: "plot_6",
          type: "shapes"
        },
        {
          id: "plot_7",
          type: "shapes"
        }
      ],
      styles: {
        plot_0: {
          title: "上升通道",
          isHidden: false
        },
        plot_1: {
          title: "翻转通道",
          isHidden: false
        },
        plot_2: {
          title: "底部结构",
          isHidden: false
        },
        plot_3: {
          title: "顶部结构",
          isHidden: false
        },
        plot_4: {
          title: "高点",
          isHidden: false
        },
        plot_5: {
          title: "顶",
          isHidden: false
        },
        plot_6: {
          title: "低点",
          isHidden: false
        },
        plot_7: {
          title: "底",
          isHidden: false
        }
        /*plot_0: {
          // 输出的名字将在样式窗口显示
          title: "-- output name --",
          histogramBase: 0
        }*/
      },
      inputs: [],
      id: "Study Custom Convergence Custom/Divergence@tv-basicstudies-1",
      scriptIdPart: "",
      name: "STUDYCUSTOM"
    },

    constructor: function () {
      this.init = (context, inputCallback) => {
        this._context = context;
        this._input = inputCallback;

        // 定义要绘制的商品。
        // 商品应该是一个字符串。
        // 您可以使用PineJS.Std.ticker（this._context）获取所选商品的代码。
        // 例,
        //    var symbol = "AAPL";
        //    var symbol = "#EQUITY";
        //    var symbol = PineJS.Std.ticker(this._context) + "#TEST";
        var symbol = context.symbol.ticker;
        this._context.new_sym(
          symbol,
          PineJS.Std.period(this._context),
          PineJS.Std.period(this._context)
        );

        this.initData();
      };
      this.isLoggingEnabled = true;
      this.log = (...args) => {
        if (this.isLoggingEnabled) {
          console.log(...args);
        }
      };

      this.main = (context, inputCallback) => {
        this._context = context;
        this._input = inputCallback;

        this._context.select_sym(1);

        var close = PineJS.Std.close(this._context);
        var closeVar = this._context.new_var(close);

        var low = PineJS.Std.low(this._context);
        if (low) {
          this.sys.saveData(this.CNST.LowList, low);
        }

        // var lowVar = this._context.new_var(low);
        // console.log('time: ', this._context.symbol.time)
        // debugger
        var diff =
          100 *
          (PineJS.Std.ema(closeVar, 12, this._context) -
            PineJS.Std.ema(closeVar, 26, this._context));
        if (diff) {
          this.sys.saveData(this.CNST.DiffList, diff);
        }
        // this.log('diff:', diff)

        var diffVar = this._context.new_var(diff);
        var dea = PineJS.Std.ema(diffVar, 9, this._context);
        // this.log('dea:', dea)

        // MACD赋值:(DIFF-DEA)*2,NODRAW
        var macd = (diff - dea) * 2;
        if (macd) {
          this.sys.saveData(this.CNST.MacdList, macd);
        }

        // 死叉赋值:DEA上穿DIFF
        var 死叉 = PineJS.Std.cross(diff, dea, this._context) && diff < dea;
        // 当前索引
        var index = context.symbol.index;

        var xVarName = this.CNST.死叉List;
        // N1赋值:上次死叉距今天数
        var n1 = this.tds.barslast(xVarName, index);
        // N2赋值:N1+1日前的上次死叉距今天数
        var n2 = this.tds.barslast(xVarName, index, 1);
        // N3赋值:N2+N1+2日前的上次死叉距今天数
        var n3 = this.tds.barslast(xVarName, index, 2);
        // console.log(n1, n2, n3 );
        if (死叉) {
          this.sys.saveData(xVarName, index);
        }

        // CL1赋值:N1+1日内最低价的最低值
        var len = n1 + 1;
        var cl1 = this.cus.min(this.CNST.LowList, len);
        // cl1 = PineJS.Std.lowest(lowVar, len, this._context)
        // CL2赋值:N1+1日前的CL1
        var cl2 = this.cus.min(this.CNST.LowList, len + 1);
        // CL3赋值:N1+1日前的CL2
        var cl3 = this.cus.min(this.CNST.LowList, len + 2);

        // DIFL1赋值:N1+1日内DIFF的最低值
        var difl1 = this.cus.min(this.CNST.DiffList, len);
        // DIFL2赋值:N1+1日前的DIFL1
        var difl2 = this.cus.min(this.CNST.DiffList, len + 1);
        // DIFL3赋值:N1+1日前的DIFL2
        var difl3 = this.cus.min(this.CNST.DiffList, len + 2);

        // PDIFL2赋值:如果DIFL2>0,返回DIFL2的对数的整数部分-1,否则返回-DIFL2的对数的整数部分-1
        var pdifl2 =
          difl2 > 0
            ? Math.floor(Math.log(difl2)) - 1
            : Math.floor(Math.log(-difl2)) - 1;
        // MDIFL2赋值:DIFL2/10的PDIFL2乘幂的整数部分
        var moifl2 = Math.floor(difl2 / Math.pow(10, pdifl2));
        // PDIFL3赋值:如果DIFL3>0,返回DIFL3的对数的整数部分-1,否则返回-DIFL3的对数的整数部分-1
        var pdifl3 =
          difl3 > 0
            ? Math.floor(Math.log(difl3)) - 1
            : Math.floor(Math.log(-difl3)) - 1;
        // MDIFL3赋值:DIFL3/10的PDIFL3乘幂的整数部分
        var moifl3 = Math.floor(difl3 / Math.pow(10, pdifl3));
        // MDIFB2赋值:DIFF/10的PDIFL2乘幂的整数部分
        var mdifb2 = Math.floor(difl1 / Math.pow(10, pdifl2));
        if (mdifb2) {
          this.sys.saveData(this.CNST.MDIFB2List, mdifb2);
        }
        // MDIFB3赋值:DIFF/10的PDIFL3乘幂的整数部分
        var mdifb3 = Math.floor(difl1 / Math.pow(10, pdifl3));
        // 1日前的MACD
        var prevMacd = this.tds.ref(this.CNST.MacdList, 1);
        //TODO  MDIFB2<=0日前的MDIFB2 ???
        // 直接底部结构赋值:(CL1<CL2 ) AND (MDIFB2>MDIFL2) AND DIFF<0 AND (MACD<0 AND 1日前的MACD<0) AND MDIFB2<=0日前的MDIFB2
        var 直接底部结构 =
          cl1 < cl2 &&
          mdifb2 > mdifl2 &&
          diif < 0 &&
          (macd < 0 && prevMacd < 0);
        if (直接底部结构) {
          this.sys.saveData(this.CNST.直接底部结构List, 直接底部结构);
        }

        //TODO  MDIFB3<=REF(MDIFB3,0) ???
        // 隔峰底部结构:=(CL1<CL3 AND CL3<CL2 ) AND (MDIFB3>MDIFL3) AND (MACD<0 AND REF(MACD,1)<0) AND MDIFB3<=REF(MDIFB3,0);
        var 隔峰底部结构 =
          cl1 < cl3 &&
          cl3 < cl2 &&
          mdifb3 > mdifl3 &&
          (macd < 0 && prevMacd < 0);
        if (隔峰底部结构) {
          this.sys.saveData(this.CNST.隔峰底部结构List, 隔峰底部结构);
        }

        //TODO 计算错误？
        // BG:=((MDIFB2>REF(MDIFB2,1))*REF(直接底部结构,2)) OR ((MDIFB3>REF(MDIFB3,2))*REF(隔峰底部结构,2)),NODRAW;
        var bg =
          (mdifb2 > this.tds.ref(this.CNST.MDIFB2List, 1)) *
          this.tds.ref(this.CNST.直接底部结构List, 2) ||
          (mdifb3 > this.tds.ref(this.CNST.MDIFB3List, 2)) *
          this.tds.ref(this.CNST.隔峰底部结构List, 2) ||
          true;

        // 金叉赋值:DIFF上穿DEA
        var 金叉 = PineJS.Std.cross(diff, dea, this._context) && diff > dea;

        // DRAWTEXT(FILTER(BG AND P,MACD>0),L*0.99,'●底部结构'),COLORMAGENTA; #ff00ff
        // 当满足条件BG AND P的MACD>0日过滤时,在最低价*0.99位置书写文字,画洋红色
        var 底部结构 = 0;
        if (bg && 金叉 && macd > 0) {
          底部结构 = close;
        }

        var oVarName = this.CNST.金叉List;
        // m1赋值:上次金叉距今天数
        var m1 = this.tds.barslast(oVarName, index);
        // m2赋值:m1+1日前的上次金叉距今天数
        var m2 = this.tds.barslast(oVarName, index, 1);
        // m3赋值:m2+m1+2日前的上次金叉距今天数
        var n3 = this.tds.barslast(oVarName, index, 2);
        // console.log(m1, m2, n3 );
        if (金叉) {
          this.sys.saveData(oVarName, index);
        }

        var high = PineJS.Std.high(this._context);
        if (high) {
          this.sys.saveData(this.CNST.HighList, high);
        }

        // CH1:=HHV(HIGH,M1+1);
        // CH1赋值:M1+1日内最高价的最高值
        var mlen = m1 + 1;
        var ch1 = this.cus.max(this.CNST.HighList, mlen);
        // CH2:=REF(CH1,M1+1);
        // CH2赋值:M1+1日前的CH1
        var ch2 = this.cus.max(this.CNST.HighList, mlen + 1);
        // CH3:=REF(CH2,M1+1);
        // CH3赋值:M1+1日前的CH2
        var ch3 = this.cus.max(this.CNST.HighList, mlen + 2);

        // DIFH1:=HHV(DIFF,M1+1);
        // DIFH1赋值:M1+1日内DIFF的最高值
        var difh1 = this.cus.max(this.CNST.DiffList, mlen);
        // DIFH2:=REF(DIFH1,M1+1);
        // DIFH2赋值:M1+1日前的DIFH1
        var difh2 = this.cus.max(this.CNST.DiffList, mlen + 1);
        // DIFH3:=REF(DIFH2,M1+1);
        // DIFH3赋值:M1+1日前的DIFH2
        var difh3 = this.cus.max(this.CNST.DiffList, mlen + 2);

        // PDIFH2:=IF(DIFH2>0,INTPART(LOG(DIFH2))-1,INTPART(LOG(-DIFH2))-1);
        // PDIFH2赋值:如果DIFH2>0,返回DIFH2的对数的整数部分-1,否则返回-DIFH2的对数的整数部分-1
        var pdifh2 =
          difh2 > 0
            ? Math.floor(Math.log(difh2)) - 1
            : Math.floor(Math.log(-difh2)) - 1;

        // MDIFH2:=INTPART(DIFH2/POW(10,PDIFH2));
        // MDIFH2赋值:DIFH2/10的PDIFH2乘幂的整数部分
        var moifh2 = Math.floor(difh2 / Math.pow(10, pdifh2));
        // PDIFH3:=IF(DIFH3>0,INTPART(LOG(DIFH3))-1,INTPART(LOG(-DIFH3))-1);
        // PDIFH3赋值:如果DIFH3>0,返回DIFH3的对数的整数部分-1,否则返回-DIFH3的对数的整数部分-1
        var pdifh3 =
          difh3 > 0
            ? Math.floor(Math.log(difh3)) - 1
            : Math.floor(Math.log(-difh3)) - 1;

        // MDIFH3:=INTPART(DIFH3/POW(10,PDIFH3));
        // MDIFH3赋值:DIFH3/10的PDIFH3乘幂的整数部分
        var moifh3 = Math.floor(difh3 / Math.pow(10, pdifh3));
        // MDIFT2:=INTPART(DIFF/POW(10,PDIFH2));
        // MDIFT2赋值:DIFF/10的PDIFH2乘幂的整数部分
        var mdift2 = Math.floor(diff / Math.pow(10, pdifh2));
        if (mdift2) {
          this.sys.saveData(this.CNST.MDIFT2List, mdift2);
        }
        // MDIFT3:=INTPART(DIFF/POW(10,PDIFH3));
        // MDIFT3赋值:DIFF/10的PDIFH3乘幂的整数部分
        var mdift3 = Math.floor(diff / Math.pow(10, pdifh3));

        //TODO  MDIFT2>=REF(MDIFT2,0) ???
        // 直接顶部结构:=(CH1>CH2 ) AND (MDIFT2<MDIFH2) AND DIFF>0 AND (MACD>0 AND REF(MACD,1)>0) AND MDIFT2>=REF(MDIFT2,0);
        // 直接顶部结构赋值:(CH1>CH2 ) AND (MDIFT2<MDIFH2) AND DIFF>0 AND (MACD>0 AND 1日前的MACD>0) AND MDIFT2>=0日前的MDIFT2
        var 直接顶部结构 =
          ch1 > ch2 &&
          mdift2 < mdifh2 &&
          diif > 0 &&
          (macd > 0 && prevMacd > 0);
        if (直接顶部结构) {
          this.sys.saveData(this.CNST.直接顶部结构List, 直接顶部结构);
        }

        //TODO  MDIFT3>=REF(MDIFT3,0) ???
        // 隔峰顶部结构:=(CH1>CH3 AND CH3>CH2 ) AND (MDIFT3<MDIFH3) AND (MACD>0 AND REF(MACD,1)>0) AND MDIFT3>=REF(MDIFT3,0);
        // 隔峰顶部结构赋值:(CH1>CH3 AND CH3>CH2 ) AND (MDIFT3<MDIFH3) AND (MACD>0 AND 1日前的MACD>0) AND MDIFT3>=0日前的MDIFT3
        var 隔峰顶部结构 =
          ch1 > ch3 &&
          ch3 > ch2 &&
          mdift3 < mdifh3 &&
          (macd > 0 && prevMacd > 0);
        if (隔峰顶部结构) {
          this.sys.saveData(this.CNST.隔峰顶部结构List, 隔峰顶部结构);
        }

        //TODO 计算错误？
        // TG:=((MDIFT2<REF(MDIFT2,1))*REF(直接顶部结构,2)) OR ((MDIFT3<REF(MDIFT3,2))*REF(隔峰顶部结构,2)),NODRAW;
        // TG赋值:((MDIFT2<1日前的MDIFT2)*2日前的直接顶部结构) OR ((MDIFT3<2日前的MDIFT3)*2日前的隔峰顶部结构),NODRAW
        var tg =
          (mdift2 < this.tds.ref(this.CNST.MDIFT2List, 1)) *
          this.tds.ref(this.CNST.直接顶部结构List, 2) ||
          (mdifb3 > this.tds.ref(this.CNST.MDIFB3List, 2)) *
          this.tds.ref(this.CNST.隔峰顶部结构List, 2) ||
          true;

        // Q:=CROSS(DEA,DIFF);
        // Q赋值:DEA上穿DIFF
        var q = 死叉;
        // DRAWTEXT(FILTER(TG AND Q,MACD<0),H*1.02,'●顶部结构'),COLORGREEN;
        // 当满足条件TG AND Q的MACD<0日过滤时,在最高价*1.02位置书写文字,画绿色
        var 顶部结构 = 0;
        if (tg && q && macd < 0) {
          顶部结构 = high * 1.02;
        }

        if (close) {
          this.sys.saveData(this.CNST.CloseList, close);
        }

        // 9天为一个周期。从第五天开始，第五天要大于第一天的收盘价，第六天要大于第二天。以此类推 第九条大于第四天 则 出现高点
        // 如果中间有一天不满足，则从新开始计数。
        // 连续5天的收盘价大于前四天的收盘价就会出现高点
        // A1:=C>REF(C,4);
        // A1赋值:收盘价>4日前的收盘价
        var a1 = close > this.tds.ref(this.CNST.CloseList, 4);

        // 9天周期计数
        this.sys.saveCount(this.CNST.A1TimeCount);
        // NT:=BARSLASTCOUNT(A1);
        // NT赋值:条件连续成立次数
        if (!a1) {
          this.sys.clearData(this.CNST.A1TimeCount);
        }
        var nt = this.sys.count(this.CNST.A1TimeCount);
        this.sys.saveData(this.CNST.NTList, nt);
        // DRAWTEXT(NT=9,H*1.007,'▲高点'),COLORGREEN;
        // 当满足条件NT=9时,在最高价*1.007位置书写文字,画绿色
        var 高点 = 0;
        if (nt === 9) {
          高点 = high;
        }

        // K1:=REF(C,0)>REF(C,13);
        // K1赋值:0日前的收盘价>13日前的收盘价
        var k1 = close > this.tds.ref(this.CNST.CloseList, 13);

        // K2:=REF(NT=9,13);
        // 13日前的NT=9
        var k2 = this.tds.ref(this.CNST.NTList, 13) === 9;

        var 顶 = 0;
        // DRAWTEXT(K1 AND K2,H*1.007,'■顶'),COLORRED;
        if (k1 && k2) {
          顶 = high;
        }

        // B1:=C<REF(C,4);
        // B1赋值:收盘价<4日前的收盘价
        var b1 = close < this.tds.ref(this.CNST.CloseList, 4);
        // NT0:=BARSLASTCOUNT(B1);
        // NT0赋值:条件连续成立次数
        // TJ21:=NT0=9 ;
        // TJ23:=ISLASTBAR AND BETWEEN(NT0,5,8);
        // 9天周期计数
        this.sys.saveCount(this.CNST.B1TimeCount);
        // NT:=BARSLASTCOUNT(A1);
        // NT赋值:条件连续成立次数
        if (!b1) {
          this.sys.clearData(this.CNST.B1TimeCount);
        }
        var nt0 = this.sys.count(this.CNST.B1TimeCount);
        this.sys.saveData(this.CNST.NT0List, nt0);

        // DRAWTEXT(NT0=9,L*0.994,'▲低点'),COLORRED;
        // 当满足条件NT0=9时,在最低价*0.994位置书写文字,画红色
        var 低点 = 0;
        if (nt0 === 9) {
          低点 = low;
        }

        // T1:=REF(C,0)<REF(C,13);
        // 0日前的收盘价<13日前的收盘价
        var t1 = close < this.tds.ref(this.CNST.CloseList, 13);
        // T2:=REF(NT0=9,13);
        // 13日前的NT0=9
        var t2 = this.tds.ref(this.CNST.NT0List, 13) === 9;
        // DRAWTEXT(T1 AND T2,L*0.994,'■底'),COLORGREEN;
        var 底 = 0;
        if (t1 && t2) {
          底 = low;
        }

        // A1A:=EMA(CLOSE, 9);
        // A1A赋值:收盘价的9日指数移动平均
        var a1a = PineJS.Std.ema(closeVar, 9, this._context);
        // A1B:=((A1A - EMA(CLOSE, 5)) < 0);
        // A1B赋值:((A1A - 收盘价的5日指数移动平均) < 0)
        var a1b = a1a - PineJS.Std.ema(closeVar, 5, this._context) < 0;
        // A1C:=((A1A - EMA(CLOSE, 5)) > 0);
        var a1c = a1a - PineJS.Std.ema(closeVar, 5, this._context) > 0;
        // A1D:=BARSLAST(A1B);
        // A1D赋值:上次A1B距今天数
        var a1d = this.tds.barslast(this.CNST.A1BList, index);
        if (a1b) {
          this.sys.saveData(this.CNST.A1BList, index);
        }
        // A1E:=BARSLAST(A1C);
        // A1E赋值:上次A1C距今天数
        var a1e = this.tds.barslast(this.CNST.A1CList, index);
        if (a1c) {
          this.sys.saveData(this.CNST.A1CList, index);
        }
        // A1F:=IF((A1E > 0),(CLOSE - REF(CLOSE, 1)) / REF(CLOSE, 1) * 100,0);
        // A1F赋值:如果(A1E>0),返回(收盘价-1日前的收盘价)/1日前的收盘价*100,否则返回0
        var prevClose = this.tds.ref(this.CNST.CloseList, 1);
        var a1f = a1e > 0 ? ((close - prevClose) / prevClose) * 100 : 0;
        this.sys.saveCount(this.CNST.A1FSum, a1f);
        // A20赋值:A1F的历史累和
        // A20:=SUM(A1F,0);
        var a20 = this.sys.count(this.CNST.A1FSum);
        // A21:=IF((A1D > 0),(0 - 2),0);
        // A21赋值:如果(A1D>0),返回(0-2),否则返回0
        var a21 = a1d > 0 ? 0 - 2 : 0;
        // SUM((CLOSE - REF(CLOSE, 1)) / REF(CLOSE, 1) * 100,A1E)
        this.sys.saveCount(
          this.CNST.A22Sum,
          ((close - prevClose) / prevClose) * 100 + a1e
        );
        var a22Sum = this.sys.count(this.CNST.A22Sum);
        // A22:=IF((A1E > 0),SUM((CLOSE - REF(CLOSE, 1)) / REF(CLOSE, 1) * 100,A1E),0);
        // A22赋值:如果(A1E>0),返回(收盘价-1日前的收盘价)/1日前的收盘价*100的A1E日累和,否则返回0
        var a22 = a1e > 0 ? a22Sum : 0;
        // A23:=A22 / A1E;
        var a23 = a22 / a1e;
        // A25:=EMA(EMA(EMA(CLOSE, 3), 3), 3);
        // A25赋值:收盘价的3日指数移动平均的3日指数移动平均的3日指数移动平均
        var a25List = this.sys.emaList(
          this.sys.emaList(this.sys.emaList(window[this.CNST.CloseList], 3), 3),
          3
        );
        var a25 = a25List.length > 0 ? a25List[a25List.length - 1] : NaN;
        if (a25) {
          this.sys.saveData(this.CNST.A25List, a25);
        }
        // 上升通道:((A25 - REF(A25, 1)) + A25),COLORRED;
        // 输出上升通道:((A25 - 1日前的A25) + A25),画红色
        var 上升通道 = a25 - this.tds.ref(this.CNST.A25List, 1) + a25;
        // console.log('上升通道:', 上升通道)
        if (上升通道) {
          this.sys.saveData(this.CNST.上升通道List, 上升通道);
        }
        // 反转通道:MA(上升通道, 15),COLORGREEN;
        var 反转通道 = this.sys.sma(window[this.CNST.上升通道List], 15)
        // console.log('反转通道:', 反转通道)

        return [上升通道, 反转通道, 底部结构, 顶部结构, 高点, 顶, 低点, 底];
      };

      this.initData = () => {
        const keys = Object.keys(this.CNST);
        for (const key of keys) {
          this.sys.clearData(this.CNST[key]);
        }
      };

      this.CNST = {
        死叉List: "死叉List",
        金叉List: "金叉List",
        REF_CL1: "REF_CL1",
        REF_CL2: "REF_CL2",
        LowList: "LowList",
        HighList: "HighList",
        CloseList: "CloseList",
        DiffList: "DiffList",
        MacdList: "MacdList",
        MDIFB2List: "MDIFB2List",
        MDIFB3List: "MDIFB3List",
        直接底部结构List: "直接底部结构List",
        隔峰底部结构List: "隔峰底部结构List",
        直接顶部结构List: "直接顶部结构List",
        隔峰顶部结构List: "隔峰顶部结构List",
        MDIFT2List: "MDIFT2List",
        A1TimeCount: "A1TimeCount",
        NTList: "NTList",
        B1TimeCount: "B1TimeCount",
        NT0List: "NT0List",
        A1BList: "A1BList",
        A1CList: "A1CList",
        A1FSum: "A1FSum",
        A22Sum: "A22Sum",
        A25List: "A25List",
        上升通道List: "上升通道List"
      };

      this.sys = {
        emaList: (values, period) => {
          if (values === undefined || period === undefined) {
            return [];
          }
          var results = [];
          var exponent = 2 / (period + 1);
          var calcList = [];
          for (var value of values) {
            calcList.push(value);
            if (calcList.length === period) {
              let result;
              if (results.length === 0) {
                var sum = calcList.reduce((prev, curr) => prev + curr);
                result = sum / period;
              } else {
                var prevEma = results[results.length - 1];
                result = exponent * (value - prevEma) + prevEma;
              }
              results.push(result);
              calcList.shift();
            }
          }

          return results;
        },
        sma: (values, period) => {
          if (values === undefined || period === undefined) {
            return NaN;
          }
          var results = [];
          var calcList = [];
          for (var value of values) {
            calcList.push(value);
            if (calcList.length === period) {
              var sum = calcList.reduce((prev, curr) => prev + curr);
              var result = sum / period;
              results.push(result);
              calcList.shift();
            }
          }

          return results.length > 0 ? results[results.length - 1] : NaN;
        },
        saveCount: (varName, num) => {
          if (num === undefined) {
            num = 1;
          }
          // 未定义时
          if (!window[varName]) {
            window[varName] = num;
          } else {
            window[varName] += num;
          }
        },
        count: varName => {
          // 未定义时
          if (!window[varName]) {
            return 0;
          }
          return window[varName];
        },
        /**
         * 存储数据
         */
        saveData: (varName, value) => {
          // 未定义时
          if (!window[varName]) {
            window[varName] = [value];
          } else {
            window[varName].push(value);
          }
        },
        /**
         * 清除数据
         */
        clearData: varName => {
          window[varName] = undefined;
        }
      };

      (this.cus = {
        min: (varName, rangeNum) => {
          var list = window[varName];
          if (!list || !rangeNum) {
            return NaN;
          }
          var rangeSize = list.length >= rangeNum ? rangeNum : list.length;
          var range = list.slice(list.length - rangeSize);
          return Math.min(...range);
        },
        max: (varName, rangeNum) => {
          var list = window[varName];
          if (!list || !rangeNum) {
            return NaN;
          }
          var rangeSize = list.length >= rangeNum ? rangeNum : list.length;
          var range = list.slice(list.length - rangeSize);
          return Math.max(...range);
        }
      }),
        (this.tds = {
          /**
           * 返回上n次条件成立距今天的周期数
           * @varName windowd对象中的变量名称
           * @num 当前周期个数
           * @n 上n次条件的周期数
           */
          barslast: (varName, num, n) => {
            // 未定义时
            if (!window[varName]) {
              return NaN;
            } else {
              if (!n) {
                n = 0;
              }

              const preLen = window[varName].length - (n + 1);
              // 上n次周期个数
              const preNum = window[varName][preLen];
              // 距今天的周期数 = 当前周期个数 - 上n次周期个数
              return num - preNum;
            }
          },
          /**
           * 引用若干周期钱的数据（平滑处理）
           * 用法: REF(X,A) 引用A周期当前的X值，A可以是变量，
           * 平滑处理：当引用不到数据时进行的操作，此函数中，平滑时使用上一个周期的引用值，
           */
          ref: (varName, n) => {
            // 未定义时
            if (!window[varName]) {
              return NaN;
            }
            if (!n) {
              n = 0;
            }
            const preLen = window[varName].length - (n + 1);
            // 上n次的数值
            return window[varName][preLen];
          }
        });
    }
  },
  {
    name: "MACD Custom",
    metainfo: {
      _metainfoVersion: 40,
      id: "macd-custom",
      scriptIdPart: "",
      name: "macd-custom",
      description: "MACD Custom",
      shortDescription: "MACD",
      is_price_study: false,
      isCustomIndicator: true,
      defaults: {
        styles: {
          plot_0: {
            linestyle: 0,
            linewidth: 5,
            plottype: 1,
            trackPrice: !1,
            transparency: 35,
            visible: !0,
            color: "rgba(87, 191, 161, 0.88)"
          },
          plot_1: {
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#FFFFFF"
          },
          plot_2: {
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#FFFF00"
          },
          plot_3: {
            linestyle: 0,
            linewidth: 5,
            plottype: 1,
            trackPrice: !1,
            transparency: 35,
            visible: !0,
            color: "rgba(199, 48, 119, 0.87)"
          }
        },
        precision: 4,
        inputs: {
          in_0: 12,
          in_1: 26,
          in_3: "close",
          in_2: 9
        }
      },
      plots: [
        {
          id: "plot_0",
          type: "line"
        },
        {
          id: "plot_1",
          type: "line"
        },
        {
          id: "plot_2",
          type: "line"
        },
        {
          id: "plot_3",
          type: "line"
        }
      ],
      styles: {
        plot_0: {
          title: "Histogram",
          histogramBase: 0,
          joinPoints: !1
        },
        plot_1: {
          title: "MACD",
          histogramBase: 0,
          joinPoints: !1
        },
        plot_2: {
          title: "Signal",
          histogramBase: 0,
          joinPoints: !1
        },
        plot_3: {
          title: "Histogram",
          histogramBase: 0,
          joinPoints: !1
        }
      },
      inputs: [
        {
          id: "in_0",
          name: "fastLength",
          defval: 12,
          type: "integer",
          min: 1,
          max: 2e3
        },
        {
          id: "in_1",
          name: "slowLength",
          defval: 26,
          type: "integer",
          min: 1,
          max: 2e3
        },
        {
          id: "in_3",
          name: "Source",
          defval: "close",
          type: "source",
          options: "open high low close hl2 hlc3 ohlc4".split(" ")
        },
        {
          id: "in_2",
          name: "signalLength",
          defval: 9,
          type: "integer",
          min: 1,
          max: 50
        }
      ],
      id: "Moving Average Convergence Custom/Divergence@tv-basicstudies-1",
      scriptIdPart: "",
      name: "MACDCUSTOM"
    },
    constructor: function () {
      (this.min = function (a, b) {
        return a - b;
      }),
        (this.main = function (context, input) {
          this._context = context;
          this._input = input;
          var input0 = this._input(0);
          var input1 = this._input(1);
          var input2 = this._input(2);
          var input3 = this._input(3);
          var input2Res = PineJS.Std[input2](this._context);
          var input2ResVar = this._context.new_var(input2Res);
          var ema1 = PineJS.Std.ema(input2ResVar, input0, this._context);
          var input2ResVar2 = this._context.new_var(input2Res);
          var ema2 = PineJS.Std.ema(input2ResVar2, input1, this._context);
          var def = this.min(ema1, ema2);
          var defVar = this._context.new_var(def);
          var ema3 = PineJS.Std.sma(defVar, input3, this._context);
          var def2 = this.min(def, ema3);
          var tmp;
          if (def2 >= 0) {
            tmp = 0;
          } else {
            tmp = def2;
            def2 = 0;
          }
          return [def2, def, ema3, tmp];
        });
    }
  },
];
