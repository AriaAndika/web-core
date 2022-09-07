const styles = {}
const dependencies = []
const scene = []

const _keyevent = []




// TEMPLATE
// DOM CONST
class Input{
	static textField(evOb){
		const elem = document.createElement('input').setAttrib({type : 'text'})
		evOb?.keys().forEach( e => elem.setAttribute(e, `${evOb[e]}(this)` ))
		return elem
	}
	static btn(evOb){
		const elem = document.createElement('input').setAttrib({type : 'button'})
		evOb?.keys().forEach( e => elem.setAttribute(e, `${evOb[e]}(this)` ))
		return elem
	}
}




console.log('database init');