styles.common = 'color:red; background-color : blue;'



re(5, e => {
  styles[`mar-${e}`] = `margin: ${e*8}px`
  styles[`pad-${e}`] = `padding: ${e*8}px`
  styles[`rad-${e}`] = `border-radius: ${e*4}px`
})
re(8, e => {
  styles[`w-${e}`] = `width: ${e*8}px`
  styles[`tr-${e}`] = `transition: background-color ${e*200}ms`
})


styles['dib'] = 'display:inline-block'
styles['db'] = 'display:block'
styles['di'] = 'display:inline'
styles['fl-lf'] = 'float:left;'
styles['fl-rg'] = 'float:right;'

styles['btn-classic'] = 'background-color: transparent;border:none;transition:.1;padding:8px;margin:0;display:block;width:100%;'
styles['btn-classic:hover'] = 'background-color: gray;'
styles['btn-classic:active'] = 'background-color: black;'

const _iter = 8;
re(_iter, e => {
  const t = e / _iter;
  styles[`seg-${e}`] = `left: ${t}%`
})