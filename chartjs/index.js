import quadratic from './modules/quadratic.js'
import cubic from './modules/cubic.js'
import quartic from './modules/quartic.js'
import logarit from './modules/logarit.js'
import { sinFunction, cosFunction, tanFunction } from './modules/trigonometric.js'

let coeffDics = {
	bacHai: ['a-coeff', 'b-coeff', 'c-coeff'],
	bacBa: ['a-coeff', 'b-coeff', 'c-coeff', 'd-coeff'],
	bacBon: ['a-coeff', 'b-coeff', 'c-coeff'],
	logarit: ['a-coeff'],
	sin: [],
	cos: [],
	tan: []
}


let step = 0.1
let pointRadius = 1.5
let Linecolor = '#ff479c'
let graphSelected = 'bacHai'

let a = 2
let b = 0
let c = 0
let d = 0


const hashURL = window.location.hash.substring(1)
if (hashURL !== '') {
	const coeffs = hashURL.split(',')
	a = parseFloat(coeffs[0])
	b = parseFloat(coeffs[1])
	c = parseFloat(coeffs[2])
}


/* ================= =================  chạy 1 lần khi load web ================= ================= =================  */


/* nạp hệ số vào input khi load web */
for (const input of document.querySelectorAll('input')) {
	switch (input.parentElement.id) {
		case 'a-coeff':
			input.value = String(a)
			break
		case 'b-coeff':
			input.value = String(b)
			break
		case 'c-coeff':
			input.value = String(c)
			break
		case 'd-coeff':
			input.value = String(d)
			break
		case 'step':
			input.value = String(step)
			break
		case 'pointRadius':
			input.value = String(pointRadius)
			break
	}
}

/*      tạo chart    */
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
	type: 'scatter',
	data: [],
	options: {
		maintainAspectRatio: false,
		responsive: true,
	},
})

/* hàm cập nhật chart   */
const drawChart = () => {

	// disable input các hệ số không dùng
	for (const coeff of document.querySelector('.coeff-form').querySelectorAll('input')) {
		coeff.disabled = !coeffDics[graphSelected].includes(coeff.parentElement.id)
	}

	if (step === 0) return

	switch (graphSelected) {
		case 'bacHai':
			quadratic(a, b, c, step, chart, Linecolor)
			break
		case 'bacBa':
			cubic(a, b, c, d, step, chart, Linecolor)
			break
		case 'bacBon':
			quartic(a, b, c, step, chart, Linecolor)
			break
		case 'logarit':
			logarit(a, step, chart, Linecolor)
			break
		case 'sin':
			sinFunction(a, step, chart, Linecolor)
			break
		case 'cos':
			cosFunction(a, step, chart, Linecolor)
			break
		case 'tan':
			tanFunction(a, step, chart, Linecolor)
	}

	chart.options.elements.point.radius = pointRadius

	chart.update()
}

/*   vẽ chart lần đầu  */
drawChart()








/* ================= =================  DOM event ================= ================= =================  */







// khi user xóa trống input mà không điền gì, sẽ tự động thêm số 0
window.addEventListener("focusout", event => {
	if (event.target.value === '') {
		event.target.value = '0'
		switch (event.target.parentElement.id) {
			case 'a-coeff':
				a = 0;
				break;
			case 'b-coeff':
				b = 0;
				break;
			case 'c-coeff':
				c = 0;
				break;
			case 'd-coeff':
				d = 0;
				break;
			case 'step':
				event.target.value = step;
				break;
			case 'pointRadius':
				pointRadius = 0;
				break;
		}
		drawChart()
	}
})

// sự kiện thay đổi input value
window.addEventListener("input", event => {

	// regex xóa ký tự không phải chữ số
	event.target.value = event.target.value.replace(/[^-0-9.]/g, '')
	if (event.target.value === '') return


	switch (event.target.parentElement.id) {

		case 'pointRadius':
			pointRadius = parseFloat(event.target.value)
			break
		case 'step':
			step = parseFloat(event.target.value)
			break
		case 'a-coeff':
			a = parseFloat(event.target.value)
			break
		case 'b-coeff':
			b = parseFloat(event.target.value)
			break
		case 'c-coeff':
			c = parseFloat(event.target.value)
			break
		case 'd-coeff':
			d = parseFloat(event.target.value)
			break
	}
	drawChart()
})


// sự kiện click button
for (let button of document.querySelectorAll('button')) button.addEventListener('click', event => {
	switch (event.target.parentElement.id) {
		case 'step':
			step += event.target.id === 'increase' ? 0.1 : (step >= 0.18 ? -0.1 : 0)
			event.target.parentElement.querySelector('input').value = step.toFixed(1)
			break
		case 'pointRadius':
			pointRadius += event.target.id === 'point-increase' ? 0.5 : (pointRadius >= 0.5 ? -0.5 : 0)
			event.target.parentElement.querySelector('input').value = pointRadius.toFixed(1)
			break
	}
	drawChart()
})


// sự kiện click chọn màu
for (let color of document.querySelectorAll('.colorpicker')) color.addEventListener('click', event => {
	Linecolor = '#' + event.target.id
	drawChart()
})

// sự kiện click chọn loại đồ thị
for (let graphSelect of document.querySelectorAll('.graphSelect')) graphSelect.addEventListener('click', event => {

	for (let graphSelect of document.querySelectorAll('.graphSelect')) {
		graphSelect.setAttribute('class', 'graphSelect nav-link')
	}
	event.target.setAttribute('class', 'graphSelect nav-link active')

	graphSelected = event.target.id

	drawChart()
})