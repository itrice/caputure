import {Guid} from 'guid-typescript'

export class AQIStationHourLive {
    constructor() {
        this.ID = Guid.EMPTY;
        this.UpdateTime = this.formatDate(Date.now());
    }

    public ID:string;

    //自动采集则为自动站代码，手动导入则为关联表ID
    public DataSource = '';

    //采样时间
    public TimePoint = '';

    //站点名称
    public PositionName = '';

    //站点编码
    public StationCode = '';

    public CO = '';

    public CO24H: string = '';

    /// <summary>
    /// 
    /// </summary>
    public NO2: string = '';

    /// <summary>
    /// 
    /// </summary>
    public NO224H: string = '';

    /// <summary>
    /// 
    /// </summary>
    public O3: string = '';

    /// <summary>
    /// 
    /// </summary>
    public O324H: string = '';

    /// <summary>
    /// 
    /// </summary>
    public O38H: string = '';

    /// <summary>
    /// 
    /// </summary>
    public O38_24H: string = '';

    /// <summary>
    /// 
    /// </summary>
    public PM10: string = '';

    /// <summary>
    /// 
    /// </summary>
    public PM1024H: string = '';

    /// <summary>
    /// 
    /// </summary>
    public PM25: string = '';

    /// <summary>
    /// 
    /// </summary>
    public PM2524H: string = '';

    /// <summary>
    /// 
    /// </summary>
    public SO2: string = '';

    /// <summary>
    /// 
    /// </summary>
    public SO224H: string = '';

    /// <summary>
    /// AQI
    /// </summary>
    public AQI: string = '';

    /// <summary>
    /// 主要污染物
    /// </summary>
    public PrimaryPollutant: string = '';

    /// <summary>
    /// 质量
    /// </summary>
    public Quality: string = '';

    /// <summary>
    /// 建议措施
    /// </summary>
    public Measure: string = '';

    /// <summary>
    /// 健康影响
    /// </summary>
    public UnHeathFul: string = '';

    /// <summary>
    /// 温度
    /// </summary>
    public TP: string = '';

    /// <summary>
    /// 湿度
    /// </summary>
    public TD: string = '';

    /// <summary>
    /// 大气压
    /// </summary>
    public WP: string = '';

    /// <summary>
    /// 风向
    /// </summary>
    public WD: string = '';

    /// <summary>
    /// 风速
    /// </summary>
    public WS: string = '';

    /// <summary>
    /// 0自动采集 1手动导入
    /// </summary>
    public DataSourceType = 0;

    /// <summary>
    /// 
    /// </summary>
    public Ext1 = 0;

    /// <summary>
    /// 
    /// </summary>
    public Ext2: string = '';

    /// <summary>
    /// 
    /// </summary>
    public Ext3: string = '';

    /// <summary>
    /// 
    /// </summary>
    public UpdateTime: string;
    private formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }
}