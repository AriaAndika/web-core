
execute('engine/database.js', function() {
  execute('index.js', OnMainFetched)
})

function OnMainFetched(){
  dependencies.forEach(e => {
    execute(e)
  })
  
  
  
  execute('engine/engine.js')
  
  
}


// console.log(Input.textField())