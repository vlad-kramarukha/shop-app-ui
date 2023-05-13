<script setup lang="ts">
import { system } from './utilities/theme'
</script>

<template>
	<VThemeProvider :theme="system as string" with-background>
		<RouterView #component="component">
			<VScaleTransition>
				<Component :is="component"></Component>
			</VScaleTransition>
		</RouterView>
	</VThemeProvider>
</template>

<style scoped></style>
