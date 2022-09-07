






execute('engine/database.js', function() {
  execute('index.js', OnMainFetched)
})

function OnMainFetched(){
  dependencies.forEach(e => {
    execute(e)
  })
  
  
  
  
  Applier()
  
}

function Applier() {
  // apply css
  document.head.appendChild(create('loool',''))
  let styleElem = document.head.getElementsByTagName('style')[0]
  styleElem = styleElem == null ? document.head.appendChild( document.createElement('style') ) : styleElem
  styles.keys().forEach( e => styleElem.innerText += `.${e}{${styles[e]}}`)
  
  // apply key dynamic
  document.body.addEventListener('input', function() {
	  
    _keyevent.forEach( e => e())
		
	})
}
