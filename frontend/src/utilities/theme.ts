import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

enum LightTheme {
	primary = '#5E35B1',
	error = '#FDD835',
	background = '#F8FAFC'
}

enum DarkTheme {
	primary = '#7E57C2',
	error = '#FFEE58',
	background = '#181818'
}

const theme = {
	themes: {
		light: {
			colors: {
				primary: LightTheme.primary,
				error: LightTheme.error,
				background: LightTheme.background
			}
		},
		dark: {
			colors: {
				primary: DarkTheme.primary,
				error: DarkTheme.error,
				background: DarkTheme.background
			}
		}
	}
}

const { system, store } = useColorMode()

const colorMode = computed({
	get() {
		return store.value === 'auto' ? system.value : store.value
	},
	set(newValue) {
		store.value = newValue
	}
})

export { store, colorMode, theme, LightTheme, DarkTheme }
