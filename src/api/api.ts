/*
 * @Author: Edison ✈️ Telegram: @h_kiss
 * @LastEditors: Edison ✈️ Telegram: @h_kiss
 * @Date: 2025-03-03 21:32:15
 * @LastEditTime: 2025-03-03 21:49:46
 * @FilePath: /tov-template/src/api/api.ts
 * Copyright (c) 2025 by Edison, All Rights Reserved.
 * @Remark: 原世界再无战争与Bug...
 */
import { useApi } from '../composables/useApi'

// 获取用户列表
export const useUserList = (params?: object, options = {}) =>
	useApi<any[]>('/users', 'GET', params, options)

// 获取单个用户
export const useUserDetail = (id: number, options = {}) =>
	useApi<any>(`/users/${id}`, 'GET', {}, options)

// 创建用户
export const useCreateUser = (params = {}, options = {}) =>
	useApi<any>('/users', 'POST', params, { manual: true, ...options })

// 更新用户
export const useUpdateUser = (id: number, options = {}) =>
	useApi<any>(`/users/${id}`, 'PUT', {}, { manual: true, ...options })

// 删除用户
export const useDeleteUser = (id: number, options = {}) =>
	useApi<null>(`/users/${id}`, 'DELETE', {}, { manual: true, ...options })
