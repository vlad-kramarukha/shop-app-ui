<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const computedActiveColor = computed(() => (name: string) => route.name === name ? 'error' : 'default')

function navigate(name: string) {
	router.push({ name })
}
</script>

<template>
	<VRow no-gutters justify="start" class="gap-2">
		<VCol cols="auto">
			<VBtn class="shadow" :color="computedActiveColor('home')" @click="navigate('home')">Главная</VBtn>
		</VCol>
		<VCol cols="auto">
			<VBtn class="shadow" :color="computedActiveColor('smartphones')" @click="navigate('smartphones')">
				Смартфоны
			</VBtn>
		</VCol>
		<VCol cols="auto">
			<VBtn class="shadow" :color="computedActiveColor('tablets')" @click="navigate('tablets')">Планшеты</VBtn>
		</VCol>
		<VCol cols="auto">
			<VBtn class="shadow" :color="computedActiveColor('accessories')" @click="navigate('accessories')">
				Аксессуары
			</VBtn>
		</VCol>
	</VRow>
</template>

<style scoped></style>
