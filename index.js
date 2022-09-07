




const logger = crt('div', '', 'mar-2 round-1 bg-1 pad-2 col-5').apn( Input.btn({onclick : 'this.parentNode.del()'},false).atr({value : 'X'}).cls('fl-rg') )
const submit = Input.btn({onclick : 'add'}).atr({value : 'Submit'})
const navbar = crt('h1', 'Title', 'mar-0 bg-2 col-7 pad-2')
const inp = Input.textField().cls('mar-2').htm('hihi')

function add() {
  if (inp.value == '') return;
  inp.value == '' ? null : place(logger.cln().htm(inp.value,true) )
  inp.value = ''
}

const bug = crt('div', 'bugger', 'bg-3')


pallete.push(
  '#2e86de',
  '#54a0ff',
  '#0abde3',
  '#48dbfb',
  '#0000',
  '#ffff'
)

scenes.holder = {
  autoRender : true,
  elem : [inp, submit, bug]
}



console.log(scenes['holder'].fer || 'hii');

place( navbar, inp, submit, bug )