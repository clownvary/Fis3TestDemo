/**
 * Created by clownvary on 2015/9/4.
 * Email:vary_007@163.com
 */
//资源定位
fis.match('*.{js,css,jpg}', {
    useHash: true,
    release: '/static/'
});

//压缩png
fis.match('*.png', {
    useHash: true,
    release: '/static/',
    optimizer: fis.plugin('png-compressor')
});
//单页面合并
fis.match('::package', {
    postpackager: fis.plugin('loader',
        {
            allInOne: true
        })
});
fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});
fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});
//fis.match('*.css', {  // 给匹配到的文件分配属性 `useSprite`
//    useSprite: true
//});
//fis.match('::package', {
//    spriter: fis.plugin('csssprites')
//});
