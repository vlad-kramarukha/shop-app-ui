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
	<VLayout>
		<VAppBar density="compact" color="primary" elevation="0" class="shadow">
			<template #title> Shop</template>

			<template #append>
				<VTooltip text="Тема как в системе" location="bottom">
					<template #activator="{ props }">
						<VSwitch :="props" v-model:model-value="themeMode" density="compact" hide-details inset />
					</template>
				</VTooltip>

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

				<VTooltip text="Личный кабинет" location="bottom">
					<template #activator="{ props }">
						<VBtn :="props" icon="mdi-account-outline" />
					</template>
				</VTooltip>

				<VTooltip text="Избранное" location="bottom">
					<template #activator="{ props }">
						<VBtn :="props" icon="mdi-heart-outline" />
					</template>
				</VTooltip>

				<VTooltip text="Корзина" location="bottom">
					<template #activator="{ props }">
						<VBtn :="props" icon="mdi-cart-outline" />
					</template>
				</VTooltip>

				<VAvatar
					image="https://sun9-20.userapi.com/impg/Xyzdg3QBtgId57iZNNlInLyMPxm3VVwGB5IVcA/Qnt6V0ioDHU.jpg?size=166x226&quality=96&sign=19d57273827624238025d0da7bbe12ca&type=album"
					color="surface-variant"
				></VAvatar>
			</template>
		</VAppBar>
	</VLayout>
</template>

<style scoped></style>
