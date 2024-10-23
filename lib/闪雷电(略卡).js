var rule = {
    title: '闪雷电',
    编码: 'gb2312',
    host: 'http://120.224.7.90:808',
    url: '/www/List.asp?classid=fyclass&searchword=&page=fypage',
    filterable: 0,//是否启用分类筛选,
    class_name: '电视剧&电影&综艺&动漫&音乐',
    class_url: '10&5000&8&6&12',
    searchUrl: '/www/List.asp?classid=30&searchword=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    play_parse: true,
    lazy: $js.toString(() => {
        var html = 'http://120.224.7.90:808/PlayMov.asp?ClassId=' + input.split(",")[2] + '&video=2&exe=0&down=0&movNo=' + input.split(",")[3] + '&vgver=undefined&ClientIP=120.224.7.90'
        var url = request(html).match(/push\('(.*?)'/)[1]
        input = {
            jx: 0,
            url: url,
            parse: 0
        };
    }),
    limit: 6,
    推荐: 'ul:eq(4)&&strong;img&&alt;img&&src;span:eq(1)&&Text;a&&href',
    一级: 'ul:eq(5)&&strong;img&&alt;img&&src;span:eq(1)&&Text;a&&href',
    二级: {
        title: "ul:eq(2)&&li:eq(0)&&Text",
        img: "img:eq(1)&&src",
        desc: "ul:eq(2)&&li:eq(1)&&Text;ul:eq(2)&&li:eq(2)&&Text;ul:eq(2)&&li:eq(3)&&Text",
        content: "body div.position&&div:eq(4)&&Text",
        tabs: "拒绝白嫖 🙅 1️⃣ ⌨ 🔱一键三连",
        lists: 'body&&a[onclick^="senfe"]',
        list_url: 'a&&onclick',
        list_text: 'a&&Text'
    },
    搜索: '*',
}
