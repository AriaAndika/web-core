// DOM
function create(tag, content, ...classes){
	const elem = document.createElement(tag).setHTML(content)
	classes?.forEach( e => elem.className += e +' ')
	return elem
}
// place at the end of body
function place(...elem) { 
	try {
		elem.forEach(e => document.body.appendChild(e) )
		
	} catch (error) {
		console.log(error);
	}
}
// create and place it immediately
function deploy(tag, content, ...classes){
	const elem = document.createElement(tag).setHTML(content)
	classes?.forEach( e => elem.className += e +' ')
	document.body.appendChild(elem)
	// return elem
}











// DOM CONST
class Input{
	static textField(evOb){
		const elem = document.createElement('input').setAttrib({type : 'text'})
		evOb?.keys().forEach( e => elem.setAttribute(e, `${evOb[e]}(this)` ))
		return elem
	}
}






// OBJECT || NODE
Object.prototype.keys = function(){
	return Object.keys(this)
}
Node.prototype.setHTML = function(e){
	this.innerHTML = e
	return this
}
Node.prototype.setClass = function(...className){
	className.forEach( e => this.className += e)
	return this
}
Node.prototype.setAttrib = function(atr){
	atr.keys().forEach( e => this.setAttribute( e, atr[e] ))
	return this
}




// FILE SYSTEM
function read(path, callback){
  fetch(path)
  .then(x => x.text())
  .then(e => callback?.(e))
}
function call(js) {
	document.body.appendChild( document.createElement('script').setHTML(e) )
}
function execute(path, callback) {
	fetch(path)
  .then(x => x.text())
  .then(e => {
		document.body.appendChild( document.createElement('script').setHTML(e) )
		callback?.()
	})
}







function $(sel) {
	return document.querySelector(sel)
}









// RANDOM
const _stash = 'abccdefghiklmnopqrstuvwxyz'
function hash() {
	let out = ''
	for (let i = 0; i < 6; i++) {
		out += _stash[rand(_stash.length)]
	}
	return out
}
function time() {
	return new Date().getSeconds()
}
function rand(max, mul = 1, include = false){
	return (time() * mul * Math.random()) % (max + include)
}
function re(t, call) {
	for (let i = 0; i < t; i++) {
		call(i)
	}
}