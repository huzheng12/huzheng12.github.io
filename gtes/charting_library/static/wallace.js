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
      description: "瓦莱士心理基准点",
      // 该描述将显示在图表上
      shortDescription: "瓦莱士心理基准点",

      is_hidden_study: false,
      is_price_study: true,
      isCustomIndicator: true,

      defaults: {
        palettes: {
          palette_4: {
            // 调色板颜色
            // 将其更改为您喜欢的默认颜色，
            // 但请注意，用户可以在“样式”选项卡中更改它们
            // 指标属性
            colors: [
              {
                color: "#378658"
              },
              { color: "#FF0000" },
              { color: "#FF0000" },
              { color: "#FFFF52" },
              { color: "#00FF00" }
            ]
          }
        },
        styles: {
          plot_0: {
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#FFFFFB"
          },
          plot_1: {
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#FFFF09"
          },
          plot_2: {
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#FF00FF"
          },
          plot_3: {
            linestyle: 0,
            linewidth: 1,
            plottype: 0,
            trackPrice: !1,
            transparency: 0,
            visible: !0,
            color: "#FFCC66"
          },
          plot_5: {
            text: "B",
            visible: true,
            location: "BelowBar",
            transparency: 0,
            color: "#00FF00",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_circle",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: "B",
            isHidden: false
          },
          plot_6: {
            text: "S",
            visible: true,
            location: "AboveBar",
            transparency: 0,
            color: "#FF0000",
            linestyle: 0,
            linewidth: 2,
            plottype: "shape_square",
            histogramBase: 0,
            trackPrice: false,
            joinPoints: false,
            title: "S",
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
          type: "line"
        },
        {
          id: "plot_3",
          type: "line"
        },
        {
          id: "plot_4",

          // plot类型应设置为 'bar_colorer'
          type: "bar_colorer",

          // 这是定义的调色板的名称
          // 在 'palettes' 和 'defaults.palettes' 部分
          palette: "palette_4"
        },
        {
          id: "plot_5",
          type: "shapes"
        },
        {
          id: "plot_6",
          type: "shapes"
        }
      ],
      palettes: {
        palette_4: {
          colors: [
            { name: "Color 0" },
            { name: "Color 1" },
            { name: "Color 2" },
            { name: "Color 3" },
            { name: "Color 4" }
          ],

          /*
          0: 上涨k线颜色
          1: 下跌k线颜色
          2: kline1颜色
          3: kline2颜色,
          4: FF1满足时的颜色
          */
          valToIndex: {
            10: 0,
            20: 1,
            30: 2,
            40: 3,
            50: 4
          }
        }
      },
      styles: {
        plot_0: {
          title: "ema13",
          isHidden: false
        },
        plot_1: {
          title: "ema21",
          isHidden: false
        },
        plot_2: {
          title: "ema34",
          isHidden: false
        },
        plot_3: {
          title: "ema60",
          isHidden: false
        },
        plot_5: {
          title: "B",
          isHidden: false
        },
        plot_6: {
          title: "S",
          isHidden: false
        }
      },
      inputs: [],
      id: "Study Custom Convergence Custom/Divergence@tv-basicstudies-1",
      scriptIdPart: "",
      name: "STUDYCUSTOM"
    },

    constructor: function() {
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
        var high = PineJS.Std.high(this._context);
        var open = PineJS.Std.open(this._context);

        // EMA13: EMA(C, 13), COLORWHITE;
        // EMA21: EMA(C, 21), COLORYELLOW;
        // EMA34: EMA(C, 34), COLORFF00FF;
        // EMA60: MA(C, 60), COLORFFCC66;
        var EMA13 = PineJS.Std.ema(closeVar, 13, this._context);
        var EMA21 = PineJS.Std.ema(closeVar, 21, this._context);
        var EMA34 = PineJS.Std.ema(closeVar, 34, this._context);
        var EMA60 = PineJS.Std.ema(closeVar, 60, this._context);

        // X1赋值: (收盘价 + 最低价 + 最高价) / 3;
        var X1 = (close + low + high) / 3;
        if (X1) {
          this.sys.saveData(this.CNST.X1List, X1);
        }
        // X2赋值: X1的6日指数移动平均;
        var X2 = this.sys.sma(window[this.CNST.X1List], 6);
        if (X2) {
          this.sys.saveData(this.CNST.X2List, X2);
        }
        // X3赋值: X2的5日指数移动平均;
        var X3 = this.sys.sma(window[this.CNST.X2List], 5);

        var kline = close >= open ? 10 : 20;
        // 当满足条件X2>X3ANDC>EMA13时,在最低价和最高价位置之间画柱状线,宽度为0.1,1不为0则画空心柱.,画红色
        if (X2 > X3 && close > EMA13) {
          kline = 30;
        } else {
          kline = 40;
        }

        /*
        // 当满足条件X2>X3ANDC>EMA13时,在收盘价和开盘价位置之间画柱状线,宽度为3,1不为0则画空心柱.,画红色
        if (X2 > X3 && close > EMA13) {
          kline = 30;
        }

        // 当满足条件X2<X3ANDC<EMA13时,在最低价和最高价位置之间画柱状线,宽度为0.1,1不为0则画空心柱.,COLORFFFF52
        if (X2 < X3 && close > EMA13) {
          kline = 40;
        }
        // 当满足条件X2<X3ANDC<EMA13时,在收盘价和开盘价位置之间画柱状线,宽度为3,0不为0则画空心柱.,COLORFFFF52
        if (X2 < X3 && close > EMA13) {
          kline = 40;
        }*/

        // GR1赋值:上次"乖离率的BIAS2"(6,13,24)位于0和5之间距今天数
        /*var bios6 = this.tds.bias(this._context, 6);
        var bios13 = this.tds.bias(this._context, 13);
        var bios24 = this.tds.bias(this._context, 24);
        var GR1;
        if (
          this.cus.between(bios6, 0, 5) &&
          this.cus.between(bios13, 0, 5) &&
          this.cus.between(bios24, 0, 5)
        ) {
          // console.log(bios6, bios13, bios24);
        }*/

        // GR2赋值:EMA13>EMA21 AND EMA21>EMA34 AND EMA13>1日前的EMA13
        // GR3赋值:统计GR1日中满足"乖离率的BIAS2"(6,13,24)>10 AND H=GR1日内最高价的最高值的天数
        // GR4赋值:最高价=GR1日内最高价的最高值
        // GR5赋值:"平滑异同平均的MACD"(9,17,8)<1日前的"平滑异同平均的MACD"(9,17,8)
        // GR6赋值:GR2 AND GR3 AND GR4
        // GR7赋值:GR2 AND GR3 AND GR4 AND GR5
        // GR8赋值:GR6 AND GR7

        if (close) {
          this.sys.saveData(this.CNST.CloseList, close);
        }
        // LC := REF(CLOSE,1);
        var LC = this.tds.ref(this.CNST.CloseList, 1);

        // RSI6:=SMA(MAX(CLOSE-LC,0),6,1)/SMA(ABS(CLOSE-LC),6,1)*100;
        // BIAS5:=(CLOSE-MA(CLOSE,13))/MA(CLOSE,13)*100;
        // 换手:=100*V/CAPITAL;

        // BB13:=ATAN(EMA13-REF(EMA13,1))*3.1416*10;
        // MA8:=EMA(C,8);
        // AA1:=AMOUNT/VOL;
        var volume = PineJS.Std.volume(this._context);
        if (volume) {
          this.sys.saveData(this.CNST.VolumeList, close);
        }
        // TODO???
        var amount = 0;
        var AA1 = volume;
        // BB1:=L<AA1*0.9;
        var BB1 = low < AA1 * 0.9;
        // CC1:=(C-REF(C,1))/REF(C,1)*100>1.2;
        var CC1 = ((close - LC) / LC) * 100 > 1.2;
        // DD1:=L<MA(C,6)*0.921;
        var ma6 = this.sys.sma(window[this.CNST.CloseList], 6);
        var DD1 = low < ma6 * 0.921;
        // EE1:=VOL<MA(V,5)*1.5;
        var volMa5 = this.sys.sma(window[this.CNST.VolumeList], 5);
        var EE1 = volume < volMa5 * 1.5;
        // FF1:=BB1 AND CC1 AND DD1 AND EE1;
        var FF1 = BB1 && CC1 && DD1 && EE1;
        // DRAWTEXT(FF1,L*0.99,'B'),COLOR00FF00;
        // 当满足条件FF1时,在最低价*0.99位置书写文字B,COLOR00FF00
        if (FF1) {
          // STICKLINE(FF1,H,L,0.3,0),COLOR00FF00;
          // STICKLINE(FF1,O,C,3,1),LINETHICK2,COLOR00FF00;
          // FF1 = true;
          kline = 50;
        }
        // A2:=(C-REF(C,1))/REF(C,1)*100<1.02;
        var A2 = ((close - LC) / LC) * 100 < 1.02;
        // A3:=H>MA(C,5)*1.12;
        var ma5 = this.sys.sma(window[this.CNST.CloseList], 5);
        var A3 = high < ma5 * 1.12;
        // AA:= A2 AND A3;
        var AA = A2 && A3;
        // DRAWTEXT(AA,H*1.05,'S'),COLORFF0000;
        // 当满足条件AA时,在最高价*1.05位置书写文字S,COLORFF0000
        if (AA) {
          // STICKLINE(AA,H,L,3,0),COLORFF0000;
          // 当满足条件AA时,在最高价和最低价位置之间画柱状线,宽度为3,0不为0则画空心柱.,COLORFF0000
          // AA = true;
        }

        // MID:=(3*CLOSE+LOW+OPEN+HIGH)/6;
        var MID = (3 * close + low + open + high) / 6;
        if (MID) {
          this.sys.saveData(this.CNST.MIDList, MID);
        }
        // DKX:(20*MID+19*REF(MID,1)+18*REF(MID,2)+17*REF(MID,3)+
        var DKX0 =
          20 * MID +
          19 * this.tds.ref(this.CNST.MIDList, 1) +
          18 * this.tds.ref(this.CNST.MIDList, 2) +
          17 * this.tds.ref(this.CNST.MIDList, 3);
        // 16*REF(MID,4)+15*REF(MID,5)+14*REF(MID,6)+
        var DKX1 =
          16 * this.tds.ref(this.CNST.MIDList, 4) +
          15 * this.tds.ref(this.CNST.MIDList, 5) +
          14 * this.tds.ref(this.CNST.MIDList, 6);
        // 13*REF(MID,7)+12*REF(MID,8)+11*REF(MID,9)+
        var DKX2 =
          13 * this.tds.ref(this.CNST.MIDList, 7) +
          12 * this.tds.ref(this.CNST.MIDList, 8) +
          11 * this.tds.ref(this.CNST.MIDList, 9);
        // 10*REF(MID,10)+9*REF(MID,11)+8*REF(MID,12)+
        var DKX3 =
          10 * this.tds.ref(this.CNST.MIDList, 10) +
          9 * this.tds.ref(this.CNST.MIDList, 11) +
          8 * this.tds.ref(this.CNST.MIDList, 12);
        // 7*REF(MID,13)+6*REF(MID,14)+5*REF(MID,15)+
        var DKX4 =
          7 * this.tds.ref(this.CNST.MIDList, 13) +
          6 * this.tds.ref(this.CNST.MIDList, 14) +
          5 * this.tds.ref(this.CNST.MIDList, 15);
        // 4*REF(MID,16)+3*REF(MID,17)+2*REF(MID,18)+REF(MID,20))/210;
        var DKX5 =
          4 * this.tds.ref(this.CNST.MIDList, 16) +
          3 * this.tds.ref(this.CNST.MIDList, 17) +
          2 * this.tds.ref(this.CNST.MIDList, 18) +
          this.tds.ref(this.CNST.MIDList, 20);
        var DKX = (DKX0 + DKX1 + DKX2 + DKX3 + DKX4 + DKX5) / 210;
        // MADKX:MA(DKX,10);
        if (DKX) {
          this.sys.saveData(this.CNST.DKXList, DKX);
        }
        var MADKX = this.sys.sma(window[this.CNST.DKXList], 10);

        // 同时满足股价在13天线上当DKX上穿MADKX又是红色的就显示B
        if (
          close > EMA13 &&
          PineJS.Std.cross(DKX, MADKX, this._context) &&
          DKX > MADKX
        ) {
          FF1 = true;
        }

        var FF2;
        // 同时满足股价在13天线下当DKX下穿MADKX又是红色的就显示S
        /*
          close < EMA13 &&
          PineJS.Std.cross(DKX, MADKX, this._context) &&
          DKX < MADKX
          */
        if (close < EMA13 && PineJS.Std.cross(close, EMA13, this._context)) {
          FF2 = true;
        }

        return [EMA13, EMA21, EMA34, EMA60, kline, FF1, FF2];
      };

      this.initData = () => {
        const keys = Object.keys(this.CNST);
        for (const key of keys) {
          this.sys.clearData(this.CNST[key]);
        }
      };

      this.CNST = {
        X1List: "X1List",
        X2List: "X2List",
        CloseList: "CloseList",
        VolumeList: "VolumeList",
        MIDList: "MIDList",
        DKXList: "DKXList"
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
        },
        between: (num, from, to) => (num >= from && num <= to ? true : false)
      }),
        (this.tds = {
          /**
           * 乖离率=[(当日收盘价-N日平均价)/N日平均价]*100%
           * @context 上下文对象
           * @num 要计算的平均日数
           */
          bias: (context, num) => {
            var close = PineJS.Std.close(this._context);
            var closeVar = this._context.new_var(close);
            var sma = PineJS.Std.ema(closeVar, num, context);
            var res = ((close - sma) / sma) * 100;
            // debugger;

            return res;
          },
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
    name: "Bar Colorer Demo",
    metainfo: {
      _metainfoVersion: 42,

      id: "BarColoring@tv-basicstudies-1",

      name: "BarColoring",
      description: "Bar Colorer Demo",
      shortDescription: "BarColoring",
      scriptIdPart: "",
      is_price_study: true,
      is_hidden_study: false,
      isCustomIndicator: true,

      isTVScript: false,
      isTVScriptStub: false,
      defaults: {
        precision: 4,
        palettes: {
          palette_0: {
            // 调色板颜色
            // 将其更改为您喜欢的默认颜色，
            // 但请注意，用户可以在“样式”选项卡中更改它们
            // 指标属性
            colors: [{ color: "#FFFF00" }, { color: "#0000FF" }]
          }
        }
      },
      inputs: [],
      plots: [
        {
          id: "plot_0",

          // plot类型应设置为 'bar_colorer'
          type: "bar_colorer",

          // 这是定义的调色板的名称
          // 在 'palettes' 和 'defaults.palettes' 部分
          palette: "palette_0"
        }
      ],
      palettes: {
        palette_0: {
          colors: [{ name: "Color 0" }, { name: "Color 1" }],

          // 值之间的映射
          // 返回脚本和调色板颜色
          valToIndex: {
            100: 0,
            200: 1
          }
        }
      }
    },
    constructor: function() {
      this.main = function(context, input) {
        this._context = context;
        this._input = input;

        var valueForColor0 = 100;
        var valueForColor1 = 200;

        // 在这里执行计算并返回其中一个常量
        // 在'valToIndex'映射中指定为键
        var result =
          (Math.random() * 100) % 2 > 1 // 我们随机选择一个颜色值
            ? valueForColor0
            : valueForColor1;

        return [result];
      };
    }
  }
];
