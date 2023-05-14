<script setup lang="ts">
import { colorMode } from './utilities/theme'
</script>

<template>
	<VThemeProvider :theme="colorMode" with-background>
		<RouterView #component="component">
			<VScaleTransition>
				<Component :is="component"></Component>
			</VScaleTransition>
		</RouterView>
	</VThemeProvider>
</template>

<style scoped></style>
