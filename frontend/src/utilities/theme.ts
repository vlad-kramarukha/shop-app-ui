import { useColorMode } from '@vueuse/core'

const theme = {
	themes: {
		light: {
			colors: {
				primary: '#5E35B1',
				error: '#FDD835',
				background: '#F8FAFC'
			}
		},
		dark: {
			colors: {
				primary: '#7E57C2',
				error: '#FFEE58',
				background: '#181818'
			}
		}
	}
}
const { system } = useColorMode()

export { system, theme }
