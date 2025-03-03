<!--
 * @Author: Edison ✈️ Telegram: @h_kiss
 * @LastEditors: Edison ✈️ Telegram: @h_kiss
 * @Date: 2024-12-08 11:35:48
 * @LastEditTime: 2025-03-03 21:34:11
 * @FilePath: /tov-template/src/layouts/default.vue
 * Copyright (c) 2025 by Edison, All Rights Reserved.
 * @Remark: 原世界再无战争与Bug...
-->
<template>
	<!-- <Navigation /> -->
	<div class="w-screen flex flex-col items-center justify-center">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
