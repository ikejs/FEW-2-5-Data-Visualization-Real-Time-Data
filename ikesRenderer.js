function render(frequencyArray, ctx, width, height) {
	ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
	ctx.fillRect(0, 0, width, height)
	ctx.fill()

	const bars = frequencyArray.length 
	const step = width / bars
	const colorStep = 360 / bars

	ctx.lineWidth = 30

	frequencyArray.forEach((f, i) => {
		const barLength = f / 255 * height
		const x1 = step * i
		const y1 = height
		const x2 = x1 * 2
		const y2 = height - barLength

    ctx.beginPath()
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 1.0)`
		ctx.stroke()
	})
}

export default render