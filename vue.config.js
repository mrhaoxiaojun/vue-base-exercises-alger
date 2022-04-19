module.exports = {
  devServer: {
    proxy: {
      // 代理的接口路径，就是说你访问的接口url里面如果有这个字段，就会走如下代理，如果没有就不走
      '/apiSearch': {
        // 代理到哪里就写哪里的url
        // target: 'https://www.google.com/complete/search',
        target: 'https://www.sogou.com/suggnew/ajajjson',
        // 是否选择跨域
        changeOrigin: true,
        // 路径重写功能，因为/apiSearch这一级路径是我门自定义拼接上去的，让他做代理识别的，完成代理之后，让他替换成空
        pathRewrite: {
          '^/apiSearch': ''
        }
      }
    }
  }
}

// 代理原理例举：

// http://localhost:8080/apiSearch?key=110
// 代理到
// https://www.sogou.com/suggnew/ajajjson?key=110

// 1、我们可以看到本地localhost在请求接口的url上面加上一级自定义路径/apiSearch
// 2、配置好proxy代理
// 3、在访问请求到时候请求的是http://localhost:8080/apiSearch?key=110
// 4、proxy代理劫持，为啥劫持到了，因为路径里有/apiSearch这几个单词，匹配到了
// 5、然后将域名替换为target，替换结果是https://www.sogou.com/suggnew/ajajjson/apiSearch?key=110
// 6、这时候我们代理是代理到线上了，但是多了一个我们自定义的路径，所以需要pathRewrite
// 7、pathRewrite的key是个正则匹配，value替换为空
// 8、结果就正在请求的地址变成了https://www.sogou.com/suggnew/ajajjson?key=110
// 9、代理完成，那么changeOrigin是干啥的，就是问你跨域解决不解决，当然我们需要解决，http://localhost:8080和https://www.sogou.com显然不是一个域名