var posts=["2025/02/28/个人博客建立日志/","2025/02/28/分类测试以及md模版/","2025/02/28/第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };