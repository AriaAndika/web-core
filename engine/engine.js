






execute('engine/database.js', function() {
  execute('index.js', function(){
    execute('template/css-common.js',OnMainFetched)
  })
})

function OnMainFetched(){
  
  
  templates.forEach( e => {
    execute(e)
  })
  
  
  
  
  Applier()
  
}

function Applier() {
  // render scenes
  scenes.keys().forEach( e => {
    const isRender = scenes[e].autoRender || true
    
    if (isRender){
      const wrap = crt('div')      
      scenes[e].elem.forEach( e => {
        wrap.apn(e)
      }) 
      place(wrap)
    }
  })
  
  
  
  
  // apply css
  let styleElem = document.head.getElementsByTagName('style')[0]
  styleElem = styleElem == null ? document.head.appendChild( document.createElement('style') ) : styleElem
  styles.keys().forEach( e => styleElem.innerText += `.${e}{${styles[e]}}`)
  
  // apply key dynamic
  document.body.addEventListener('input', function() {
	  
    _keyevent.forEach( e => e())
		
	})
}
