import { useRequest } from 'vue-request'
import type { AxiosResponse } from 'axios'
import { axiosInstance } from './http'

/**
 * 统一封装 Vue-request，并结合 Axios 发送请求
 * @param url 请求地址
 * @param method 请求方法 (默认 'GET')
 * @param params 请求参数 (可选)
 * @param options Vue-request 配置 (可选)
 */
export function useApi<T>(
	url: string,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
	params?: object,
	options?: Parameters<typeof useRequest<T>>[1], // 修正类型
) {
	// 定义请求函数
	const fetchData = async (newParams?: object): Promise<T> => {
		const finalParams = newParams || params
		const config =
			method === 'GET' ? { params: finalParams } : { data: finalParams }
		const response: AxiosResponse<T> = await axiosInstance.request<T>({
			url,
			method,
			...config,
		})
		return response.data // 只返回 data，避免额外的 AxiosResponse 解析
	}

	// 调用 useRequest
	return useRequest<T>(fetchData, {
		manual: options?.manual ?? true, // 修正：默认 manual 为 true，除非明确传了 false
		cacheTime: 1000 * 60 * 5, // 5 分钟缓存
		...options,
	})
}
