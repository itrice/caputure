"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guid_typescript_1 = require("guid-typescript");
class AQIStationHourLive {
    constructor() {
        //自动采集则为自动站代码，手动导入则为关联表ID
        this.DataSource = '';
        //采样时间
        this.TimePoint = '';
        //站点名称
        this.PositionName = '';
        //站点编码
        this.StationCode = '';
        this.CO = '';
        this.CO24H = '';
        /// <summary>
        /// 
        /// </summary>
        this.NO2 = '';
        /// <summary>
        /// 
        /// </summary>
        this.NO224H = '';
        /// <summary>
        /// 
        /// </summary>
        this.O3 = '';
        /// <summary>
        /// 
        /// </summary>
        this.O324H = '';
        /// <summary>
        /// 
        /// </summary>
        this.O38H = '';
        /// <summary>
        /// 
        /// </summary>
        this.O38_24H = '';
        /// <summary>
        /// 
        /// </summary>
        this.PM10 = '';
        /// <summary>
        /// 
        /// </summary>
        this.PM1024H = '';
        /// <summary>
        /// 
        /// </summary>
        this.PM25 = '';
        /// <summary>
        /// 
        /// </summary>
        this.PM2524H = '';
        /// <summary>
        /// 
        /// </summary>
        this.SO2 = '';
        /// <summary>
        /// 
        /// </summary>
        this.SO224H = '';
        /// <summary>
        /// AQI
        /// </summary>
        this.AQI = '';
        /// <summary>
        /// 主要污染物
        /// </summary>
        this.PrimaryPollutant = '';
        /// <summary>
        /// 质量
        /// </summary>
        this.Quality = '';
        /// <summary>
        /// 建议措施
        /// </summary>
        this.Measure = '';
        /// <summary>
        /// 健康影响
        /// </summary>
        this.UnHeathFul = '';
        /// <summary>
        /// 温度
        /// </summary>
        this.TP = '';
        /// <summary>
        /// 湿度
        /// </summary>
        this.TD = '';
        /// <summary>
        /// 大气压
        /// </summary>
        this.WP = '';
        /// <summary>
        /// 风向
        /// </summary>
        this.WD = '';
        /// <summary>
        /// 风速
        /// </summary>
        this.WS = '';
        /// <summary>
        /// 0自动采集 1手动导入
        /// </summary>
        this.DataSourceType = 0;
        /// <summary>
        /// 
        /// </summary>
        this.Ext1 = 0;
        /// <summary>
        /// 
        /// </summary>
        this.Ext2 = '';
        /// <summary>
        /// 
        /// </summary>
        this.Ext3 = '';
        this.ID = guid_typescript_1.Guid.EMPTY;
        this.UpdateTime = this.formatDate(Date.now());
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
}
exports.AQIStationHourLive = AQIStationHourLive;
//# sourceMappingURL=hourvalue.js.map