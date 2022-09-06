// execute('debug/begin.js',neee)

// document.body.appendChild( document.createElement('script').SetHTML('console.log("hihi");') )

let o = 0


const logger = create('div','gg')


const inp = Input.textField({oninput : 'get'})

place(inp, logger)

deploy('h1', 'roar', 'common')

function get(el) {
  logger.innerHTML = el.value
}