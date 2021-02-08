let dBrace = /\{\{(.*?)\}\}/
function compiler(el,data){
  // debugger
  let getValuByPath = createGetValuePath(data)
  let childrens = el.childNodes
  for(let i = 0;i < childrens.length;i++){
    if(childrens[i].nodeType === 3){
      childrens[i].nodeValue = childrens[i].nodeValue.replace(dBrace,(_a,_b)=>{
        return getValuByPath(_b.trim())
      })
    }
    if(childrens[i].childNodes){
      compiler(childrens[i],data)
    }
  }
}
// 深度获取路径的值(柯理化)
function createGetValuePath(obj){
  let res = obj
  return function getValuByPath(path){
    let paths = path.split('.')
    while(prop = paths.shift()){
      res = res[prop]
    }
    return res
  }
}