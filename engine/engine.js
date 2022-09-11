
// DATABASE
const styles = {}
// const scenes = {}
/*{
	main : {
		autoRender : true,
		elem : []
	}
}*/
// const templates = []






execute('index.js', function(){
  execute('template/css-common.js',OnMainFetched)
})

function OnMainFetched(){
  
  
  
  // write css
  Applier()
  
}

function Applier() {
  // render scenes
  // scenes.keys().forEach( e => {
  //   const isRender = scenes[e].autoRender || true
    
  //   if (isRender){
  //     const wrap = crt(scenes[e].tag ||'div').cls( scenes[e].classes || 'grid-main').atr( scenes[e].attr || null );
            
  //     scenes[e].elem.forEach( e => {
  //       wrap.apn(e)
  //     }) 
  //     place(wrap)
  //   }
  // })
  
  
  
  
  // apply css
  // let styleElem = document.head.getElementsByTagName('style')[0]
  let styleElem =  document.head.appendChild( crt('style') )
  styles.keys().forEach( e => styleElem.innerText += `.${e}{${styles[e]}}`)
  // styleElem = styleElem == null ? document.head.appendChild( document.createElement('style') ) : styleElem
  
  // apply key dynamic
  // document.body.addEventListener('input', function() {
	  
  //   _keyevent.forEach( e => e())
		
	// })
}





