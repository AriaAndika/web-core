


// MAIN
const styles = {}
const scenes = {}
/*
{
	main : {
		autoRender : true,
		elem : []
	}
}
 */


const templates = []
const dependencies = []
const pallete = []

// const _keyevent = []





// TEMPLATE
// DOM CONST
class Input{
	static textField(evOb){
		const elem = document.createElement('input').atr({type : 'text'})
		evOb?.keys().forEach( e => elem.setAttribute(e, `${evOb[e]}(this)` ))
		return elem
	}
	static btn(evOb, addThis = true){
		const elem = document.createElement('input').atr({type : 'button'})
		evOb?.keys().forEach( e => elem.setAttribute(e, evOb[e] + (addThis ? '(this)' : '') ))
		return elem
	}
	static dateField(){
		const elem = document.createElement('input').atr({type : 'date'})
		return elem
	}
}


