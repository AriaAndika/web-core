styles.common = 'color:red; background-color : blue;'



re(5, e => {
  styles[`mar-${e}`] = `margin: ${e*8}px`
  styles[`pad-${e}`] = `padding: ${e*8}px`
  styles[`round-${e}`] = `border-radius: ${e*8}px`
})
re(pallete.length, e => {
  styles[`bg-${e}`] = `background-color:${pallete[e]}`
  styles[`col-${e}`] = `color : ${pallete[e]}`
  
})
re(8, e => {
  styles[`w-${e}`] = `width: ${e*8}px`
})


styles['fl-lf'] = 'float:left;'
styles['fl-rg'] = 'float:right;'