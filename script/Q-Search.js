#!name=Q-Search
#!desc=Safari Search Add-ons by Neurogram
# 注：先进入设置更改 Safari 默认搜索为 DuckDuckGO
# bd：百度搜索
# gh：GitHub 搜索
# gm：Google 图片搜索
# yd：有道词典搜索
# 无指令则转 Google 搜索

[URL Rewrite]
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ https://www.baidu.com/s?wd=$1 302
^https:\/\/duckduckgo.com\/\?q=db\+([^&]+).+ https://m.douban.com/search/?query=$1 302
^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ https://github.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=gm\+([^&]+).+ https://www.google.com/search?&tbm=isch&q=$1 302
^https:\/\/duckduckgo.com\/\?q=yd\+([^&]+).+ http://dict.youdao.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=ddg\+([^&]+).+ http://duckduckgo.com/?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ https://www.google.com/search?q=$1 302

[MITM]
hostname = %APPEND% duckduckgo.com
