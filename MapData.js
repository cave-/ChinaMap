var Map = {path: {}, textAttr: {"fill": "#333", "font-size": "10px", "cursor": "pointer"}};

Map.render = function (R) {

    Map.path.aomen = {
        name: "澳门",
        path: R.path("M384.7,387.3C384.7,387.3,380.5,393.5,381.7,394.7C382.9,395.9,387.1,397.6,387.1,397.6L390.5,392.5L388.3,387.3L384.7,387.3Z").attr({'fill':'#9dceb6','stroke':'none'})
    };
    Map.path.hk = {
        name: "香港",
        path: R.path("M404,380L404,384.9C404,384.9,410.1,389.1,411.1,388.8C412.1,388.6,417.2,380.5,416.5,380C415.7,379.5,405.2,378.8,405.2,378.8L404,380Z").attr({'fill':'#97cbab','stroke':'none'})
    };
    Map.path.taiwan = {
        name: "台湾",
        path: R.path("M478.4,329.4C477.9,330.1,464.7,339.1,463.9,339.9C463.2,340.6,457.3,361.7,457.3,361.7L462.5,373.6L469.5,377.8L473,375.6L479.6,331.6L478.4,329.4Z").attr({"fill":"#91c8ad","stroke":"none"})
    };
    Map.path.guangdong = {
        name: "广东",
        path: R.path("M407.7,341.1L389.8,339.9L361.7,354.8L346.2,390.8L389.8,380.2L444.4,354.8L407.7,341.1").attr({"fill":"#86c2aa","stroke":"none"})
    };
    Map.path.gx = {
        name: "广西",
        path: R.path("M294.9,347.7C294.9,347.7,331.8,389.1,333.3,390.8C334.7,392.5,346.2,390.8,346.2,390.8L361.7,354.8L375,347.7L345.3,333.3L294.9,347.7Z").attr({"fill":"#7dbe8a","stroke":"none"})
    };
    Map.path.hainan = {
        name: "海南",
        path: R.path("M345.9,406.5L336.1,419.7L336.1,438.3L345.9,444.2C345.9,444.2,360.8,420.7,360.1,420C359.4,419.2,351.9,388.8,351.9,388.8L345.9,406.5Z").attr({"fill":"#8fc69c","stroke":"none"})
    };
    Map.path.yunnan = {
        name: "云南",
        path: R.path("M231.5,308.3L224,347.1L239.7,365.3L243.7,377.8L265.8,387.3L265.8,375.8L310.6,365.3L294.9,347.7L296.6,306.6L286.6,303.3L268.7,333.3L235.4,301.3L231.5,308.3").attr({"fill":"#8dc6ab","stroke":"none"})
    };
    Map.path.fujian = {
        name: "福建",
        path: R.path("M460.6,314.4L444.4,354.8L407.7,341.1L440.9,292L460.6,314.4").attr({"fill":"#a1d0ba","stroke":"none"})
    };
    Map.path.jiangxi = {
        name: "江西",
        path: R.path("M391.3,293.1L416.2,281.4L434.8,285.1L440.9,292L407.7,341.1L391.3,293.1").attr({"fill":"#8fc69c","stroke":"none"})
    };
    Map.path.hunan = {
        name: "湖南",
        path: R.path("M341.8,297.1L365.3,281.4L391.3,293.1L407.7,341.1L389.8,339.9L375,347.7L345.3,333.3L341.8,297.1").attr({"fill":"#8dc6ab","stroke":"none"})
    };
    Map.path.guizhou = {
        name: "贵州",
        path: R.path("M296.6,306.6L294.9,347.7L345.3,333.3L341.8,297.1L308.3,298L301.3,308.2L296.6,306.6").attr({"fill":"#8fc69c","stroke":"none"})
    };
    Map.path.zhejiang = {
        name: "浙江",
        path: R.path("M455.3,265.9L473,278.7L460.6,314.4L434.8,285.1L441.9,271.4L455.3,265.9").attr({"fill":"#8dc6ab","stroke":"none"})
    };
    Map.path.anhui = {
        name: "安徽",
        path: R.path("M410.9,283.9L401.5,265.9L412.7,223L419.1,231.5L441.9,271.4L434.8,285.1L416.2,281.4L410.9,283.9").attr({"fill":"#a0ceac","stroke":"none"})
    };
    Map.path.shanghai = {
        name: "上海",
        path: R.path("M463.1,260.8L474.2,258.4L478.4,262.1L470,268.9L460.6,263.7L463.9,262.3L463.1,260.8").attr({"fill":"#82c090","stroke":"none"})
    };
    Map.path.jiangsu = {
        name: "江苏",
        path: R.path("M432.1,228.8L448.8,235.2L463.9,262.3L441.9,271.4L419.1,231.5L407.7,216.6L432.1,228.8").attr({"fill":"#91c8ad","stroke":"none"})
    };
    Map.path.hubei = {
        name: "湖北",
        path: R.path("M343.1,265.9L349.3,292L365.3,281.4L391.3,293.1L410.9,283.9L401.5,265.9L365.1,256.3L354,233.9L343.1,265.9L343.1,265.9").attr({"fill":"#bbddc3","stroke":"none"})
    };
    Map.path.xizang = {
        name: "西藏",
        path: R.path("M74.4,206.8L60.2,238.3L112,308.3L231.5,308.3L235.4,301.3L239.7,276.8L153.1,203L74.4,206.8").attr({"fill":"#bcdcbb","stroke":"none"})
    };
    Map.path.qinghai = {
        name: "青海",
        path: R.path("M153.1,203L185.8,166.8L271.6,196.9L273.9,246.5L239.7,276.8L153.1,203").attr({"fill":"#9eca9d","stroke":"none"})
    };
    Map.path.gansu = {
        name: "甘肃",
        path: R.path("M185.8,166.8L224,134.9L270.6,181.9L291.8,197.9L310.8,224L316.3,203.8L330,217.5L308.3,255.4L273.9,246.5L271.6,196.9L185.8,166.8").attr({"fill":"#acd2ad","stroke":"none"})
    };
    Map.path.xinjiang = {
        name: "新疆",
        path: R.path("M224,134.9L209,110.3L181.6,102.4L178.2,77L160.1,48.1L82.3,78.9L70,102.4L15.2,119.1L0.1,157.7L74.4,206.8L153.1,203L185.5,167.2L224,134.9").attr({"fill":"#b9d8ad","stroke":"none"})
    };
    Map.path.shanxi = {
        name: "陕西",
        path: R.path("M316.3,203.8L321.2,180.6L339.1,194.8L348.9,185.9L354,233.9L343.1,265.9L333.3,261.8L308.3,255.4L330,217.5L316.3,203.8L316.3,203.8").attr({"fill":"#8fc69c","stroke":"none"})
    };
    Map.path.henan = {
        name: "河南",
        path: R.path("M400.3,212.9L384.9,206.3L354,233.9L365.1,256.3L401.5,265.9L412.7,223L407.6,216.6L400.3,212.9").attr({"fill":"#8fc69c","stroke":"none"})
    };
    Map.path.shanxis = {
        name: "山西",
        path: R.path("M348.9,185.9L354,233.9L384.9,206.3L376.7,160.4L348.9,185.9").attr({"fill":"#a4d0ac","stroke":"none"})
    };
    Map.path.shandong = {
        name: "山东",
        path: R.path("M415,180.6L462.9,189.7L466.1,194.8L432.1,228.8L400.3,212.9L415,180.6").attr({"fill":"#bbddc3","stroke":"none"})
    };
    Map.path.hebei = {
        name: "河北",
        path: R.path("M440.9,156.9L432.1,166.6L416.7,161.7L411.2,152.2L403.5,156.9L406.2,170.1L415,180.6L400.3,212.9L384.9,206.3L376.7,160.4L383.8,145.4L412.5,131.7L429.8,135.9L440.9,156.9").attr({"fill":"#97cbab","stroke":"none"})
    };
    Map.path.tianjin = {
        name: "天津",
        path: R.path("M415,180.6L432.1,166.6L416.7,161.7L406.2,170.1L415,180.6").attr({"fill":"#86c2aa","stroke":"none"})
    };
    Map.path.beijing = {
        name: "北京",
        path: R.path("M406.2,170.1L403.5,156.9L411.2,152.2L416.7,161.7L406.2,170.1").attr({"fill":"#7dbe8a","stroke":"none"})
    };
    Map.path.ningxia = {
        name: "宁夏",
        path: R.path("M310.8,224L316.3,203.8L321.2,180.6L291.8,197.9L310.8,224").attr({"fill":"#7eba8d","stroke":"none"})
    };
    Map.path.neimeng = {
        name: "内蒙古",
        path: R.path("M291.8,197.9L321.2,180.6L339.1,194.8L376.7,160.4L383.8,145.4L412.5,131.7L429.8,135.9L459.5,116.7L440.9,89.3L451.2,81.1L441.2,61.9L448.1,18.2L413.5,5.8L393.9,61.2L416.8,82.1L360.7,119L337.8,141.5L273.9,144.1L224,134.9L270.6,181.9L291.8,197.9").attr({"fill":"#bddec5","stroke":"none"})
    };
    Map.path.liaoning = {
        name: "辽宁",
        path: R.path("M483.5,138.3L469.1,161.5C469.1,161.5,457.6,170.1,456.6,170.1C455.6,170.1,451.9,159.3,451.9,159.3L440.9,156.9L429.8,135.9L459.5,116.7L483.5,138.3Z").attr({"fill":"#a0ceac","stroke":"none"})
    };
    Map.path.jilin = {
        name: "吉林",
        path: R.path("M504.9,89.6L501.1,118.7L483.5,138.3L459.5,116.7L440.9,89.3L451.2,81.1L489.5,93.8L504.9,89.6").attr({"fill":"#8fc69c","stroke":"none"})
    };
    Map.path.heilongjiang = {
        name: "黑龙江",
        path: R.path("M413.5,5.8L438.6,0.9L469.6,30.6L493.8,38.4L517.6,41L517.6,60.9L504.9,89.6L489.5,93.8L451.2,81.1L441.2,61.9L448.1,18.2L413.5,5.8").attr({"fill":"#a0ceac","stroke":"none"})
    };
    Map.path.chongqing = {
        name: "重庆",
        path: R.path("M333.3,261.8L343.1,265.9L349.3,292L341.8,297.1L308.3,298L333.3,261.8").attr({"fill":"#afd3ad","stroke":"none"})
    };
    Map.path.sichuan = {
        name: "四川",
        path: R.path("M239.7,276.8L235.4,301.3L268.7,333.3L286.6,303.3L301.3,308.2L333.3,261.8L273.9,246.5L239.7,276.8").attr({"fill":"#a0ceac","stroke":"none"})
    };

    Map.locateIcon = R.path('M17.715,9.095c0,1.852-0.58,3.567-1.572,4.976c-1.564,2.225-7.08,8.925-7.08,8.925s-5.516-6.7-7.081-8.925c-0.99-1.408-1.571-3.124-1.571-4.976c0-4.778,3.873-8.652,8.652-8.652C13.84,0.442,17.715,4.316,17.715,9.095z M9.046,5.608c-1.853,0-3.354,1.502-3.354,3.354c0,1.853,1.502,3.354,3.354,3.354c1.851,0,3.354-1.501,3.354-3.354C12.4,7.11,10.896,5.608,9.046,5.608z').attr({fill: "#f00", stroke: "none"});
    Map.locateIcon.width = Map.locateIcon.getBBox().width, Map.locateIcon.height = Map.locateIcon.getBBox().height; 
};

Map.getPathCenter = function (st, state, zm) {

    //获取当前图形的中心坐标
    var xx = (st.getBBox().x + st.getBBox().x2)/2;
    var yy = (st.getBBox().y + st.getBBox().y2)/2;

    //***修改部分地图文字偏移坐标
    switch (Map.path[state]['name']) {
        case "江苏":
            xx += 7*zm;
            yy += 5*zm;
            break;
        case "安徽":
            yy += 10*zm;
            break;
        case "湖北":
            yy += 7*zm;
            break;
        case "河北":
            xx -= 10*zm;
            yy += 15*zm;
            break;
        case "上海":
            xx += 10*zm;
            break;
        case "澳门":
            yy += 10*zm;
            break;
        case "香港":
            xx += 5*zm;
            yy += 10*zm;
            break;
        case "甘肃":
            xx -= 30*zm;
            yy -= 30*zm;
            break;
        case "陕西":
            xx += 5*zm;
            yy += 10*zm;
            break;
        case "重庆":
            xx += 5*zm;
            yy += 5*zm;
            break;
        case "四川":
            xx -= 5*zm;
            yy -= 5*zm;
            break;
        case "内蒙古":
            xx -= 15*zm;
            yy += 65*zm;
            break;
        default:
    }

    return {'xx': xx, 'yy': yy}
}
