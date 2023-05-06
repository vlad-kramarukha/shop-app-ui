<script setup lang="ts">
import LoginForm, { FormMode } from '../components/LoginForm.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const mode = computed({
	get(): FormMode {
		return route.path === '/login' ? 'log' : 'reg'
	},
	set(name) {
		router.push({ name })
	}
})
</script>

<template>
	<div class="h-screen grid place-content-center">
		<LoginForm v-model:mode="mode" />
	</div>
</template>

<style scoped></style>
