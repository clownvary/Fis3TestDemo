###Fis3小测试
 fis3是百度前端性能化的一个解决方案，具体介绍，看这里[fis3](http://fis.baidu.com/)
 我的理解就是把gulp或者grunt里各种自动化构建的模块又做了一次封装，当然fis3远不止这些。
 由于官网给的demo有些太过简单，我就找个了纯静态的html网站，试试看相关的构建能否顺利运行。
### 构建过程
1.安装fis3,[安装教程](http://fis.baidu.com/fis3/docs/beginning/install.html)

2.在项目根目录配置fis-conf.js配置文件，注意必须为此名称
 相关的配置项我已经写好了，除了雪碧图合并那个没用上，因为按照官方文档说明，要合并的雪碧必须在相关的图片引用资源后加参数`？__sprite`，这个有兴趣的同学      可以加上试试
 配置项都在fis-conf.js文件中了，里面我也都有写说明，Api配置接口非常简单

3.cd 到项目根目录，输入命令 `fis3 release`
   再输入命令 `fis3 server start` 就可以在浏览器里看到我们构建后的页面了

