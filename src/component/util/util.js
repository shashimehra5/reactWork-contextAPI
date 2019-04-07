export default {
    pushNewUrl: function (urlParams) {
        var param = {};
        for(var i in urlParams) {
            if(urlParams[i]) param[i] = urlParams[i];
        }
        var url = '';
        for(let j in param) {
            url += j+'='+encodeURIComponent(param[j])+'&';
        }
        url = url.slice(0, -1);
        var params = url;
        var pathname = window.location.pathname;
        if(window.location.pathname.indexOf('/results')===-1){
            var omitStr = pathname.substr(pathname.lastIndexOf("/"));
            pathname  = pathname.replace(omitStr,"/results");
        }
        var newurl = window.location.protocol + "//" + window.location.host + pathname + '?' + params;
        window.history.pushState({ path: newurl }, '', newurl);
    },
    urlToObj: function(url, isDecode) {
        var url_details = {};
        url_details.param = {};
        try{
            var arr = url.split("?");
            var arr1 = arr[0].split("//");
            if(arr1.length > 1){
                url_details.protocol = arr1[0].split(":")[0];
                var arr2 = arr1[1].split("/");
            }else{
                var arr2 = arr1[0].split("/");
            }
            var arr6 = arr2[0].split(":");
            url_details.domain = arr6[0];
            if(arr6.length > 1){
                url_details.port = arr6[1];
            }
            if(arr2.length > 1){
                var arr3 = arr2.slice(1);
                if(arr3.length === 1 && arr3[0] === ""){
                    url_details.resourceID = "/"
                }else{
                    url_details.resourceID = arr3.join("/");
                }
            }else{
                url_details.resourceID = "/";
            }
            if(arr.length > 1){
                var arr4 = arr[1].split("&");
                for(var i in arr4){
                    if(arr4[i]){
                        var arr5 = arr4[i].split("=");
                        var key = arr5[0];
                        if(arr5.length > 1){
                            var value = arr5[1];
                        }else{
                            var value = "";
                        }
                        if(isDecode) {
                            url_details.param[key] = decodeURIComponent(value);
                        } else {
                            url_details.param[key] = value;
                        }
                        
                    }
                }
            }
        }catch(e){}
        return url_details;
    }
}