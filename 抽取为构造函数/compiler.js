let dBrace = /\{\{(.*?)\}\}/
function compiler(el,data){
  // debugger
  let childrens = el.childNodes
  for(let i = 0;i < childrens.length;i++){
    if(childrens[i].nodeType === 3){
      childrens[i].nodeValue = childrens[i].nodeValue.replace(dBrace,(_a,_b)=>{
        return data[_b.trim()]
      })
    }
    if(childrens[i].childNodes){
      compiler(childrens[i],data)
    }
  }
}