import { AQIStationHourLive } from './hourvalue';
import { Guid } from "guid-typescript";
import { pathToFileURL } from 'url';
import { basename } from 'path';
import { threadId } from 'worker_threads';
var http = require('http');
var url = require('url');
var querystring = require('querystring');

/**
 * capture
 */
class capture {
    constructor() {
        this.getInfo();
    }

    isExit = false;

    /**
     * start
     */
    public start() {
        console.log('开始执行自动站数据获取');
        //while(!this.isExit){
        console.log(Date.now());
        this.getInfo();
    }

    /**
     * 获取自动站数据信息
     */
    private getInfo(){
        var _this = this;
        var items = [];
        var cityCode = '5107';
        var st = Date.parse('2017-01-01');
        for(var i =0; i<365*2;i++){
            var dt= new Date(st+i*1000*60*60*24);
            var dtStr = this.formatDate(dt);
            var path = `/dataShare/getStationDataFromGW/?cityCode=${cityCode}&dataType=hour&startTime=${dtStr}&endTime=${dtStr}&isSrc=no`;
            var options = {
                hostname: url.parse('http://www.scnewair.cn').hostname,
                port: 3389,
                path: path,
                method: 'GET'
            };
            var req = http.request(options, function (res: any) {
                res.setEncoding('utf8');
                var body = '';
                res.on('data', function (chunk: string) {
                    body += chunk;
                });
                res.on('end', function () {
                    console.log(`${dtStr}原始返回数据：${body}`);
                    var rst = JSON.parse(body);
                    for (var i in rst.data) {
                        var item = new AQIStationHourLive();
                        var t = rst.data[i][0];
                        if(!t){
                            console.error(`${_this.formatDate(Date.now())}站点${i}远程接口${dtStr}返回数据错误`);
                            continue;
                        }
                        item.ID = Guid.create().toString();
                        item.AQI = t.AQI;
                        item.CO = t.CO;
                        item.Ext1 = t.ID;
                        item.NO2 = t.NO2;
                        item.O3 = t.O3;
                        item.PM10 = t.PM10;
                        item.PM1024H = t.PM10_24;
                        item.PM2524H = t.PM25_24;
                        item.PM25 = t.PM25;
                        item.SO2 = t.SO2;
                        item.StationCode = t.STATIONCODE;
                        item.PositionName = t.STATIONNAME;
                        item.Ext2 = t.BSC;
                        item.TimePoint = t.DATETIME;
                        item.DataSource = 'node自动采集器';
                        item.CO24H = "";
                        item.NO224H = "";
                        item.O38H = "";
                        item.O38_24H = "";
                        item.O324H = "";
                        item.SO224H = "";
                        item.PrimaryPollutant = "";
                        item.Quality = "";
                        item.Measure = "";
                        item.UnHeathFul = "";
                        item.TP = "";
                        item.TD = "";
                        item.WP = "";
                        item.WS = "";
                        item.WD = "";
                        //console.log(rst.data[i]);
                        _this.uploadInfo(item);
                    }
                });
            });
            req.on('error', function (e: any) {
                console.log('error:' + e.message);
            });
            req.end();
            this.delay(10000);
        }
    }

    /**
     * 上传信息
     */
    private uploadInfo(info: AQIStationHourLive) {
        var postData = querystring.stringify({
            'token': '{C813C6ED-CBCF-41E1-B699-5AFA556A24D9}',
            'data': JSON.stringify(info)
        });
        var options = {
            hostname: url.parse('http://192.168.1.242').hostname,
            port: 8090,
            path: '/AutoDeviceData/AddData',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        var req = http.request(options, function (res: any) {
            res.on('data', (chunk: string) => {
                console.log(`BODY: ${chunk}`);
            });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        //console.log(info);
        req.write(postData);
        req.end();
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log(""));
    }
    
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

let cap = new capture();
cap.isExit = false;
//cap.start();
