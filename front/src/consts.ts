

export const sizes = {
	xSmall: 2,
	small: 3,
	default: 4,
	medium: 6,
	xLg: 8,
	lg: 9,
	full: 12,
	auto: 0,
}

export const imgHeight = 350

export const wappNumber = '79189547728'

export const wappLink = `https://wa.me/${wappNumber}?text=`

export const getWappLink = (text: string) => {
	return `https://wa.me/${wappNumber}?text=${text}`
}