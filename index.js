// CONST
const inputAt = 'mar-2 input db pad-1 rad-1'
const btnAt = 'db btn pad-1 rad-3'
const col = 'rgb(32, 151, 255)';


// ELEMENTS
const wrapper = crt('div','','wrapper rad-2')
function editor() {
  return crt('div','','wrapper rad-2').apn(
  
    inp('text',{placeholder : 'judul..'}).cls(inputAt),
    inp('number',{placeholder : 'deadline..'}).cls(inputAt),
    crt('textarea','',inputAt,{cols : '25', rows : '10', placeholder : 'detail'}),
    inp('button',{value : 'done'}).cls(btnAt).on('click', OnSubmit),
    
  )
}
const addItem = inp('button', {value : '+'})
  .cls(btnAt)
  .on('click', e => place( editor() ))


place( editor() ,addItem)

// MAIN










// POST

styles['wrapper'] = 'border:1px solid black; padding: 20px;margin:20px'
styles['input'] = 'border: 1px solid black'
styles['btn'] = `border: 1px solid ${col};background-color: ${col};color: white`


// done editing
function OnSubmit(e) {
  const prt = e.target.parentElement
  const info = [
    prt.children[0].value,
    prt.children[1].value,
    prt.children[2].value
  ]
  prt.innerHTML = ''
  re(3, e => prt.apn( crt('div', info[e]) ) )
  prt.apn( inp('button', { value : 'Edit' }).cls(btnAt).on('click',OnEdit) )
  
}
function OnEdit(e) {
  const prt = e.target.parentElement
  const info = [
    prt.children[0].innerText,
    prt.children[1].innerText,
    prt.children[2].innerText
  ]
  prt.innerHTML = ''
  prt.apn(
  
    inp('text',{placeholder : 'judul..',value : info[0]}).cls(inputAt),
    inp('number',{placeholder : 'deadline..',value : info[1]}).cls(inputAt),
    crt('textarea',info[2],inputAt,{cols : '25', rows : '10', placeholder : 'detail'}),
    inp('button',{value : 'done'}).cls(btnAt).on('click', OnSubmit),
    
  )
}





