<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { colorMode, store } from '../utilities/theme'

const themeMode = ref(store.value === 'auto')

const computedThemeIcon = computed(() =>
	colorMode.value === 'light' ? 'mdi-lightbulb-on-outline' : 'mdi-weather-night'
)

const hasDisabledToggle = computed(() => store.value === 'auto')

function toggleColorMode() {
	colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

watch(themeMode, (newValue) => {
	store.value = newValue ? 'auto' : colorMode.value
})
</script>

<template>
	<VLayout>
		<VAppBar density="compact" color="primary" elevation="0" class="shadow">
			<template #title> Shop </template>

			<template #append>
				<VTooltip text="Тема как в системе" location="bottom">
					<template #activator="{ props }">
						<VSwitch
							v-model:model-value="themeMode"
							:prepend-icon="computedThemeIcon"
							hide-details
							inset
							:="props"
						/>
					</template>
				</VTooltip>

				<VTooltip text="Переключить тему" location="bottom">
					<template #activator="{ props }">
						<VBtn
							:="props"
							:disabled="hasDisabledToggle"
							icon="mdi-theme-light-dark"
							@click="toggleColorMode"
							class="ml-2"
						/>
					</template>
				</VTooltip>

				<VBtn icon="mdi-dots-vertical" />

				<VAvatar color="surface-variant"></VAvatar>
			</template>
		</VAppBar>
	</VLayout>
</template>

<style scoped></style>
