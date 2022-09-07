



//* VAR
const logger = crt('div', '', 'mar-2 rad-1 bg-1 pad-2 col-5').apn( Input.btn({onclick : 'this.parentNode.del()'},false).atr({value : 'X'}).cls('fl-rg') )
const submit = Input.btn({onclick : 'add'}).atr({value : 'Submit'})
const navbar = crt('h1', 'Title', 'mar-0 bg-2 col-7 pad-2')
const inp = Input.textField().cls('mar-2').htm('hihi')

const bug = crt('div', 'bugger', 'bg-3')

//* FUNC
function add() {
  if (inp.value == '') return;
  inp.value == '' ? null : $('.grid-other').apn(logger.cln().htm(inp.value,true))//place(logger.cln().htm(inp.value,true) )
  inp.value = ''
}

//* MAIN
// TODO make better scene management

scenes.menu = {
  classes : 'grid-main ib',
  elem : ret(5,e =>  Input.btn().atr({value : `${e}. Other`}).cls('btn-classic tr-1') )
  // tag : 'span'
}
scenes.holder = {
  autoRender : true,
  classes : 'grid-other rad-2 pad-2 di',
  elem : [inp, submit, bug]
}




pallete.push(
  '#2e86de',
  '#54a0ff',
  '#0abde3',
  '#48dbfb',
  '#0000',
  '#ffff'
)

styles['grid-other'] = 'width: 400px;resize: both;overflow: auto;'
styles['grid-main'] = 'width: 200px;height: 100vh;resize: horizontal;overflow: auto;border: 2px solid black'

document.body.style.backgroundColor = '#fafa'
place( navbar, inp, submit, bug )