<script setup lang="ts">
import { colorMode } from './utilities/theme'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
	<VThemeProvider :theme="colorMode" with-background>
		<TheHeader />
		<RouterView #component="component">
			<VScaleTransition>
				<Component :is="component"></Component>
			</VScaleTransition>
		</RouterView>
	</VThemeProvider>
</template>

<style scoped></style>
