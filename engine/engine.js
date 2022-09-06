// APPLY CSS

// prefix
document.head.appendChild(create('loool',''))

let styleElem = document.head.getElementsByTagName('style')[0]
styleElem = styleElem == null ? document.head.appendChild( document.createElement('style') ) : styleElem
styles.keys().forEach( e => styleElem.innerText += `.${e}{${styles[e]}}`)// '.' + e + '{' + styles[e] + '}')


execute('engine/database.js', function() {
  execute('index.js', OnMainFetched)
})

function OnMainFetched(){
  dependencies.forEach(e => {
    execute(e)
  })
  
  
  
  // execute('engine/engine.js')
  Applycss()
  
}

function Applycss() {
  
}
