const e=require('express'),p=process.env.PORT||3000,a=e(),t=new Date(),start=t.toLocaleString();l=(t)=>console.log(t);m=process.env.TITLE||'Hello World';a.all('*',(_r,r_)=>{l(`${m.split(' ').shift()} User @ ${ new Date().toLocaleString() } `);r_.json({Hello:`${m.split(' ').pop()}`, app :{start, uptime:((new Date().getTime()-t.getTime())/1000+'s')} } )});a.listen(p,()=>l(`One-Line ${m} App Running!\nServer started ${start}\nApp @ http://127.0.0.1:${p}`));