<script setup lang="ts">
import { colorMode } from './utilities/theme'
import TheHeader from './components/header/TheHeader.vue'
</script>

<template>
	<VThemeProvider :theme="colorMode" with-background>
		<TheHeader />
<!--		<RouterView #component="{ Component, route }">-->
<!--			<VScaleTransition>-->
<!--				<Component :is="Component" :key="route.name" />-->
<!--			</VScaleTransition>-->
<!--		</RouterView>-->
		<RouterView />
	</VThemeProvider>
</template>

<style scoped></style>
