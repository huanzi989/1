var rule = {
    title:'豆瓣',
    host:'https://frodo.douban.com',
    apidoc:'https://www.doubanapi.com',
    homeUrl:'',
    searchUrl:'',
    searchable:1,
    quickSearch:1,
    filterable:1,
    // 分类链接fypage参数支持1个()表达式
    url:'/?pg=fypage&class=fyclass&douban=$douban',
    filter_url:'fl={{fl}}',
    图片来源:'@Referer=https://api.douban.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
    headers:{
            "Host": "frodo.douban.com",
            // "Host": "api.douban.com",
            "Connection": "Keep-Alive",
            "Referer": "https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html",
            // "content-type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat"
    },
    timeout:5000,  //我的豆瓣&热门电影&热播剧集&热播综艺&电影筛选&电视筛选&电影榜单&电视榜单', 'interests&hot_gaia&tv_hot&show_hot&movie&tv&rank_list_movie&rank_list_tv',
    class_name:'电视剧（熟悉遥控器OK键和◀返回键操作）',
    class_url:'tv',
    filter:{
       
    
'tv': [{'key': '剧集', 'name': '剧集', 'value': [{'n': '不限', 'v': ''}, {'n': '古装', 'v': '古装'},{'n': '战争', 'v': '战争'},{'n': '动画', 'v': '动画'}]}, {'key': '地区', 'name': '地区', 'value': [{'n': '地区', 'v': ''},{'n': '中国大陆', 'v': '中国大陆'},{'n': '日本', 'v': '日本'}]}, {'key': '年代', 'name': '年代', 'value': [{'n': '全部', 'v': ''}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2010年代', 'v': '2010年代'}, {'n': '2000年代', 'v': '2000年代'}, {'n': '90年代', 'v': '90年代'}, {'n': '80年代', 'v': '80年代'}, {'n': '70年代', 'v': '70年代'}, {'n': '60年代', 'v': '60年代'}, {'n': '更早', 'v': '更早'}]}]


    
    
},


    limit:20,
    play_parse: true,  //false和true
    推荐:'',
    推荐:'js:let d=[];let douban_api_host="http://api.douban.com/api/v2";let miniapp_apikey="0ac44ae016490db2204ce0a042db2916";const count=30;function miniapp_request(path,query){try{let url=douban_api_host+path;query.apikey=miniapp_apikey;fetch_params.headers=oheaders;url=buildUrl(url,query);let html=fetch(url,fetch_params);return JSON.parse(html)}catch(e){print("发生了错误:"+e.message);return{}}}function subject_real_time_hotest(){try{let res=miniapp_request("/subject_collection/subject_real_time_hotest/items",{});let lists=[];let arr=res.subject_collection_items||[];arr.forEach(function(item){if(item.type==="movie"||item.type==="tv"){let rating=item.rating?item.rating.value:"暂无评分";let honnor=(item.honor_infos||[]).map(function(it){return it.title}).join("|");lists.append({vod_id:"msearch:"+TYPE,vod_name:item.title||"",vod_pic:item.pic.normal,vod_remarks:rating+" "+honnor})}});return lists}catch(e){print("发生了错误:"+e.message);return[]}}VODS=subject_real_time_hotest();print(VODS);',
    // 手动调用解析请求json的url,此lazy不方便
    lazy:'',
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级:'',
    一级:'js:let d=[];let douban=input.split("douban=")[1].split("&")[0];let douban_api_host="http://api.douban.com/api/v2";let miniapp_apikey="0ac44ae016490db2204ce0a042db2916";const count=30;function miniapp_request(path,query){try{let url=douban_api_host+path;query.apikey=miniapp_apikey;fetch_params.headers=oheaders;url=buildUrl(url,query);let html=fetch(url,fetch_params);if(/request_error/.test(html)){print(html)}return JSON.parse(html)}catch(e){print("发生了错误:"+e.message);return{}}}function cate_filter(d,douban){douban=douban||"";try{let res={};if(MY_CATE==="interests"){if(douban){let status=MY_FL.status||"mark";let subtype_tag=MY_FL.subtype_tag||"";let year_tag=MY_FL.year_tag||"全部";let path="/user/"+douban+"/interests";res=miniapp_request(path,{type:"movie",status:status,subtype_tag:subtype_tag,year_tag:year_tag,start:(MY_PAGE-1)*count,count:count})}else{return{}}}else if(MY_CATE==="hot_gaia"){let sort=MY_FL.sort||"recommend";let area=MY_FL.area||"全部";let path="/movie/"+MY_CATE;res=miniapp_request(path,{area:area,sort:sort,start:(MY_PAGE-1)*count,count:count})}else if(MY_CATE==="tv_hot"||MY_CATE==="show_hot"){let stype=MY_FL.type||MY_CATE;let path="/subject_collection/"+stype+"/items";res=miniapp_request(path,{start:(MY_PAGE-1)*count,count:count})}else if(MY_CATE.startsWith("rank_list")){let id=MY_CATE==="rank_list_movie"?"movie_real_time_hotest":"tv_real_time_hotest";id=MY_FL.榜单||id;let path="/subject_collection/"+id+"/items";res=miniapp_request(path,{start:(MY_PAGE-1)*count,count:count})}else{let path="/"+MY_CATE+"/recommend";let selected_categories;let tags;let sort;if(Object.keys(MY_FL).length>0){sort=MY_FL.sort||"T";tags=Object.values(MY_FL).join(",");if(MY_CATE==="movie"){selected_categories={"类型":MY_FL.类型||"","地区":MY_FL.地区||""}}else{selected_categories={"类型":MY_FL.类型||"","形式":MY_FL.类型?MY_FL.类型+"地区":"","地区":MY_FL.地区||""}}}else{sort="T";tags="";if(MY_CATE==="movie"){selected_categories={"类型":"","地区":""}}else{selected_categories={"类型":"","形式":"","地区":""}}}let params={tags:tags,sort:sort,refresh:0,selected_categories:stringify(selected_categories),start:(MY_PAGE-1)*count,count:count};res=miniapp_request(path,params)}let result={page:MY_PAGE,pagecount:Math.ceil(res.total/count),limit:count,total:res.total};let items=[];if(/^rank_list|tv_hot|show_hot/.test(MY_CATE)){items=res["subject_collection_items"]}else if(MY_CATE==="interests"){res["interests"].forEach(function(it){items.push(it.subject)})}else{items=res.items}let lists=[];items.forEach(function(item){if(item.type==="movie"||item.type==="tv"){let rating=item.rating?item.rating.value:"";let rat_str=rating||"暂无评分";let title=item.title;let honor=item.honor_infos||[];let honor_str=honor.map(function(it){return it.title}).join("|");let vod_obj={vod_name:title!=="未知电影"?title:"暂不支持展示",vod_pic:item.pic.normal,vod_remarks:rat_str+" "+honor_str};let vod_obj_d={url:item.type+"$"+item.id,title:title!=="未知电影"?title:"暂不支持展示",pic_url:item.pic.normal,desc:rat_str+" "+honor_str};lists.push(vod_obj);d.push(vod_obj_d)}});result.list=lists;return result}catch(e){print(e.message)}return{}}let res=cate_filter(d,douban);setResult2(res);',
    二级:'',
    搜索:'',
}