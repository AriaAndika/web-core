// DOM
function crt(tag, content = '', classes = '', attrib = {}){
	const elem = document.createElement(tag).htm(content).cls(classes).atr(attrib)
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
	const elem = document.createElement(tag).htm(content)
	classes?.forEach( e => elem.className += e +' ')
	document.body.appendChild(elem)
	// return elem
}




// SCENE
// function scene(idx, ...elem) {
// 	elem.forEach( e => scenes[''] )
// 	scenes[idx] 
// }







// OBJECT || NODE
Object.prototype.keys = function(){
	return Object.keys(this)
}
Node.prototype.htm = function(e, add = false){
	this.innerHTML = (add ? this.innerHTML + e : e)
	return this
}
Node.prototype.txt = function(e, add = false){
	this.innerText = (add ? this.innerText + e : e)
	return this
}
Node.prototype.cls = function(className){
	this.className = className
	return this
}
Node.prototype.atr = function(atrOb){
	atrOb.keys().forEach( e => this.setAttribute( e, atrOb[e] ))
	return this
}
Node.prototype.apn = function(...nodes) {
	nodes.forEach( e => this.appendChild(e))
	return this
}
Node.prototype.cln = function(deep = true) {
	return this.cloneNode(deep)
}
Node.prototype.del = function() {
	const holder = this
	this.outerHTML = ''
	return holder
}


// FILE SYSTEM
function read(path, callback){
  fetch(path)
  .then(x => x.text())
  .then(e => callback?.(e))
}
function call(js) {
	document.body.appendChild( document.createElement('script').htm(e) )
}
function execute(path, callback) {
	fetch(path)
  .then(x => x.text())
  .then(e => {
		document.body.appendChild( document.createElement('script').htm(e) )
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
		out += _stash[ran(_stash.length)]
	}
	return out
}
function time() {
	return new Date().getSeconds() + 1
}
function ranf(max, mul = 1){
	return (time() * mul * Math.random()) % (max + 1)
}
function ran(max, include = false) {
	return Math.floor(Math.random() * time() % (max + include))
}
function re(t, call) {
	for (let i = 0; i < t; i++) {
		call(i)
	}
}