<script setup lang="ts">
import { computed } from 'vue'
import { colorMode, store } from '../../utilities/theme'

const themeMode = computed({
	get() {
		return store.value === 'auto'
	},
	set(newValue) {
		store.value = newValue ? 'auto' : colorMode.value
	}
})

const computedThemeIcon = computed(() =>
	colorMode.value === 'light' ? 'mdi-lightbulb-on-outline' : 'mdi-weather-night'
)

const hasDisabledToggle = computed(() => store.value === 'auto')

function toggleColorMode() {
	colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
	<VCol cols="auto">
		<VTooltip text="Тема как в системе" location="bottom">
			<template #activator="{ props }">
				<VSwitch :="props" v-model:model-value="themeMode" density="compact" hide-details inset />
			</template>
		</VTooltip>
	</VCol>

	<VCol cols="auto">
		<VTooltip text="Переключить тему" location="bottom">
			<template #activator="{ props }">
				<VBtn
					:="props"
					:disabled="hasDisabledToggle"
					:icon="computedThemeIcon"
					@click="toggleColorMode"
					class="ml-2"
					elevation="0"
				/>
			</template>
		</VTooltip>
	</VCol>
</template>

<style scoped></style>
