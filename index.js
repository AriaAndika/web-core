

const navbar = create('h1', 'Title', 'mar-0 bg-3 col-7 pad-2')
const inp = Input.textField().setClass('mar-2').setHTML('hihi')
const logger = create('div', 'helo', 'mar-2 round-1 bg-2 pad-2 col-7').apn( Input.btn().setAttrib({value : 'X'}).setClass('fl-rg') )
let ting = 4


const pallete = [
  '#1a1c2c',
  '#29366f',
  '#3b5dc9',
  '#41a6f6',
  '#73eff7',
  '#f4f4f4',
  '#0000',
  '#ffff'
]


try {
  
  
  
} catch (er) {
  console.log(er);
}


place( navbar, inp, logger )



styles.navbar = 'background-color:#46acff; width:100%; '
styles.common = 'color:red; background-color : blue;'
styles.beeg = 'font-size: 50px;'



re(5, e => {
  styles[`mar-${e}`] = `margin: ${e*8}px`
  styles[`pad-${e}`] = `padding: ${e*8}px`
  styles[`round-${e}`] = `border-radius: ${e*8}px`
})
re(pallete.length, e => {
  styles[`bg-${e}`] = `background-color:${pallete[e]}`
  styles[`col-${e}`] = `color : ${pallete[e]}`
  
})


styles['fl-lf'] = 'float:left;'
styles['fl-rg'] = 'float:right;'