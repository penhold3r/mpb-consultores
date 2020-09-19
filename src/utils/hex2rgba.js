/**
 *    @param {string} hex - Hexadecimal value
 *    @param {Number} [alpha=1] - Alpha value
 *    @returns {string} - RGBA value
 */

const hex2rgba = (hex, alpha = 1) => {
	const [r, g, b] = hex
		.match(hex.length <= 4 ? /\w/g : /\w\w/g)
		.map(x => parseInt(x.length < 2 ? `${x}${x}` : x, 16))
	return `rgba(${r},${g},${b},${alpha})`
}

export default hex2rgba
