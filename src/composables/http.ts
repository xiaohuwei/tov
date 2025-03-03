/*
 * @Author: Edison ✈️ Telegram: @h_kiss
 * @LastEditors: Edison ✈️ Telegram: @h_kiss
 * @Date: 2024-12-08 11:35:48
 * @LastEditTime: 2025-03-03 21:29:14
 * @FilePath: /tov-template/src/composables/http.ts
 * Copyright (c) 2025 by Edison, All Rights Reserved.
 * @Remark: 原世界再无战争与Bug...
 */
import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		return config
	},
	function (error) {
		toast.warning(error.message ?? '未知请求错误')
		// 对请求错误做些什么
		return Promise.reject(error)
	},
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
	function (response) {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据进行格式化
		if (response.data) {
			return response.data
		}
		return response
	},
	function (error) {
		const status = error.response?.status
		let { msg, message } = error.response?.data ?? {}

		if (!msg && message) {
			msg = message
		}

		if (!msg) {
			switch (status) {
				case 400:
					msg = '参数错误'
					break
				case 500:
					msg = '服务端错误'
					break
				case 404:
					msg = '路由未找到'
					break
				default:
					msg = error.message ?? '未知响应错误'
					break
			}
		}

		toast.warning(msg)
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		return Promise.reject(error)
	},
)
