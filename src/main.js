import './style.scss'

class Carousel {
	constructor(images, id) {
		this.images = images
		this.container = document.getElementById(id)
		
		this._posX1 = 0
		this._posX2 = 0
		
		
		this.startMove = this.startMove.bind(this)
		this.move = this.move.bind(this)
		this.finishMove = this.finishMove.bind(this)
	}
	
	init() {
		this.images.forEach((image) => {
			const div = document.createElement('DIV')
			div.innerHTML = `<div class="carousel-item"><img src="${image.path}" alt=""></div>`
			this.container.appendChild(div.firstChild)
		})
		this.container.style.left = `0px`
		// this.container.style.left = `-${this.container.clientWidth / 2}px`
	}
	
	startMove(event) {
		event.preventDefault()
		if (event.type === 'touchmove') {
			this._posX1 = event.touches[0].clientX
		} else {
			this._posX1 = event.clientX;
		}
		document.addEventListener('mousemove', this.move)
		document.addEventListener('mouseup', this.finishMove)
	}
	
	finishMove() {
		document.removeEventListener('mousemove', this.move)
		document.removeEventListener('mouseup', this.finishMove)
	}
	
	move(event) {
		event.preventDefault()
		if (event.type === 'touchmove') {
			this._posX2 = this._posX1 - event.touches[0].clientX
			this._posX1 = event.touches[0].clientX
		} else {
			this._posX2 = this._posX1 - event.clientX
			this._posX1 = event.clientX
		}
		const params = this.container.getBoundingClientRect()
		if (parseInt(this.container.style.left) - this._posX2 < 0 && params.right - this._posX2 > (this.container.parentElement.clientWidth + this.container.parentElement.offsetLeft)) {
			this.container.style.left = `${(parseInt(this.container.style.left) - this._posX2)}px`;
		}
		if (params.width > this.container.parentElement.clientWidth + this.container.firstElementChild.clientWidth
			&& params.width > this.container.parentElement.clientWidth + this.container.lastElementChild.clientWidth) {
			if (params.left - this.container.parentElement.offsetLeft > -5) {
				this.container.insertBefore(this.container.lastElementChild, this.container.firstElementChild)
				this.container.style.left = `${parseInt(this.container.style.left) - this.container.lastElementChild.clientWidth}px`
			}
			if (params.right - 5 < this.container.parentElement.clientWidth + this.container.parentElement.offsetLeft) {
				this.container.appendChild(this.container.firstElementChild)
				this.container.style.left = `${parseInt(this.container.style.left) + this.container.firstElementChild.clientWidth}px`
			}
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
	}], 'carousel-container')

const socialCarousel = new Carousel([
	{
		path: '../assets/facebook.png'
	},
	{
		path: '../assets/instagram.png'
	},
	{
		path: '../assets/skype.png'
	},
	{
		path: '../assets/spotify.png'
	},
	{
		path: '../assets/twitter.png'
	},
	{
		path: '../assets/whatsapp.png'
	},
	{
		path: '../assets/youtube.png'
	}
	], 'carousel-social')
carousel.init()
socialCarousel.init()
carousel.container.addEventListener('mousedown', carousel.startMove)
socialCarousel.container.addEventListener('mousedown', socialCarousel.startMove)
