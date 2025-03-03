<!--
 * @Author: Edison ✈️ Telegram: @h_kiss
 * @LastEditors: Edison ✈️ Telegram: @h_kiss
 * @Date: 2024-12-08 11:35:48
 * @LastEditTime: 2025-03-03 22:17:32
 * @FilePath: /tov-template/src/pages/index.vue
 * Copyright (c) 2025 by Edison, All Rights Reserved.
 * @Remark: 原世界再无战争与Bug...
-->
<script setup lang="ts">
import { useCreateUser } from '@/api/api'

const text =
	'Naive UI 是一个 Vue3 的组件库，它比较完整，主题可调，用 TypeScript 写的，快。'
const patterns = ['Naive UI', 'Vue3', 'TypeScript', '快']

const initialParams = {
	page: 1,
	pageSize: 10,
}
// 使用API
const { data, loading, error, run } = useCreateUser(initialParams)

// 当前页码
const currentPage = ref(1)

// 在调用run时传递新参数
const refetch = (page = currentPage.value) => {
	// 更新当前页码
	currentPage.value = page

	// 调用run并传递新参数
	run({
		page,
		pageSize: 10,
	})
}

// 切换到下一页
const nextPage = () => {
	refetch(currentPage.value + 1)
}

// 切换到上一页
const prevPage = () => {
	if (currentPage.value > 1) {
		refetch(currentPage.value - 1)
	}
}

// 测试不同的参数
const testDifferentParams = () => {
	const testPage = Math.floor(Math.random() * 10) + 1 // 随机页码1-10
	console.log(`测试随机页码: ${testPage}`)
	run({
		page: testPage,
		pageSize: 10,
		testParam: '测试参数' + new Date().toISOString(),
	})
}
</script>
<template>
	<div class="bg-gray-500">
		<h1>Hello World</h1>
		<div class="flex gap-2">
			<n-button type="success" @click="refetch()">刷新当前页</n-button>
			<n-button :disabled="currentPage <= 1" @click="prevPage">上一页</n-button>
			<span>当前页: {{ currentPage }}</span>
			<n-button @click="nextPage">下一页</n-button>
			<n-button type="warning" @click="testDifferentParams"
				>测试随机参数</n-button
			>
		</div>
		<div text="white" bg="red-500">我是红色背景的白色文本</div>
		<div v-if="loading">加载中...</div>
		<div v-else-if="error">请求失败: {{ error.message }}</div>
		<div v-else>
			<code>{{ data }}</code>
		</div>
		<n-highlight :text="text" :patterns="patterns" />

		<n-marquee auto-fill>
			<n-image
				width="80"
				height="80"
				src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
				style="margin-right: 24px"
			/>
		</n-marquee>
	</div>
</template>

<style></style>
