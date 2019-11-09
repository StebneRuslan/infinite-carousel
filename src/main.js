import './style.scss'

class Carousel {
	constructor(images) {
		this.images = images
		this.container = document.getElementById('carousel-container')
		
		
		this._startX = 0
		this._posInitial = 0
		this._posX1 = 0
		this._posX2 = 0
		
		
		this.startMove = this.startMove.bind(this)
		this.move = this.move.bind(this)
		this.finishMove = this.finishMove.bind(this)
	}
	
	init() {
		this.images.forEach((image) => {
			const div = document.createElement('DIV')
			div.innerHTML = `<li class="carousel-item"><img src="${image.path}" alt=""></li>`
			this.container.appendChild(div.firstChild)
		})
		// this.container.appendChild(this.container.children[0].cloneNode(true));
		// this.container.insertBefore(this.container.firstElementChild.cloneNode(true), this.container.lastElementChild);
	}
	
	startMove(event) {
		event.preventDefault()
		this._posX1 = event.clientX;
		this._posInitial = this.container.offsetLeft
		document.addEventListener('mousemove', this.move)
		document.addEventListener('mouseup', this.finishMove)
	}
	
	finishMove(event) {
		document.removeEventListener('mousemove', this.move)
		document.removeEventListener('mouseup', this.finishMove)
	}
	
	move(event) {
		event.preventDefault()
		this._posX2 = this._posX1 - event.clientX;
		this._posX1 = event.clientX;
		this.container.style.left = (this.container.offsetLeft - this._posX2) + "px";
		const params = this.container.getBoundingClientRect()
		if (params.left > -20) {
			this.container.insertBefore(this.container.lastElementChild, this.container.firstElementChild)
			this.container.style.left = `${parseInt(this.container.style.left) - this.container.lastElementChild.clientWidth}px`
		}
		console.log(params.left * -1 + params.right)
		if (this._posX2 < this._posX1 && (params.left * - 1 + this.container.lastElementChild.clientWidth) > params.width + 20) {
			this.container.appendChild(this.container.firstElementChild)
			this.container.style.left = `${parseInt(this.container.style.left) + this.container.firstElementChild.clientWidth}px`
		}
	}
}

const carousel = new Carousel([
	{
		path: '../assets/1.jpeg'
	},
	{
		path: '../assets/2.jpeg'
	},
	{
		path: '../assets/3.jpeg'
	},
	{
		path: '../assets/4.jpeg'
	},
	{
		path: '../assets/5.jpeg'
	}
])
carousel.init()
carousel.container.addEventListener('mousedown', carousel.startMove)
