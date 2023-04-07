

// file connections

async function IncludeJavascript(filename){
  var script = await document.createElement('script');
  // <script src=""
  script.src = await filename;
  return new Promise((resolve,reject)=>{
      script.onload = ()=>{
          resolve()
      }
      document.body.appendChild(script);
  })
}

IncludeJavascript("./apps/menu.js") // import  
IncludeJavascript("./apps/items.js") // import
IncludeJavascript("./apps/payment.js") // import

