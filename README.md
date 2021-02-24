- 子应用dom节点的全部放入，从DOCTYPE开始。可以看到，用qiankun作为基架实现微前端的应用中，qiankun是把子应用的html结构完全放在自己的dom节点中。
- 通过fetch去拿文件。qiankun通过fetch去获取子应用的js文件。同时，对于子应用中需要动态加载的文件，也是当点击或者需要处理这个页面的时候，再用fetch的方式去加载该页面的文件。
- 子应用需要解决跨域问题。因为parent也就是主应用是通过fetch去拿子应用js文件的，所以存在跨域问题，需要在各自的子应用中去解决跨域。
- 主应用/基座/parent要给子应用传递props，或者是子应用之间如何进行状态共享？