import { ref, watch } from 'vue'

export default function useToken() {
	const token = ref<string>(localStorage.getItem('token') ?? '')

	watch(token, (newValue) => {
		localStorage.setItem('token', newValue)
	})

	return token
}