import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import reactHook from 'alova/react'

declare module 'alova' {
  export interface AlovaCustomTypes {
    meta: {
      /** 是否过滤data */
      filterData?: false
      /** blob */
      blob?: boolean
    }
  }
}

const alovaInstance = createAlova({
  id: 'default-request',
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  requestAdapter: adapterFetch(),
  statesHook: reactHook,
  cacheFor: {
    Get: 60 * 1000, // 1min
    Post: 60 * 1000, // 1min
  },
  // beforeRequest: (config) => {
  //   console.log('beforeRequest', config)
  //   // const token = localStorage.getItem('token')
  //   // if (token)
  //   // config.config.headers.Authorization = `Bearer ${token}`
  // },
  responded: async (response, instance) => {
    const contentType = response.headers.get('content-type')
    if (response.status === 200 && response.ok) {
      if (contentType?.includes('application/json')) {
        const res = await response.json()
        if (res.code === 200) {
          return instance.meta?.filterData !== false ? res.data : res
        }
        else {
          // 根据实际情况变更
          // alert(res.msg || '请求失败')
          return Promise.reject(res.msg)
        }
      }
      // if (instance.meta?.blob) {
      //   // 根据实际情况变更
      //   return {
      //     data: await response.blob(),
      //     filename: response.headers.get('Content-Disposition'),
      //   }
      // }
    }
    else {
      // 根据实际情况变更
      // alert(response.statusText)
      return Promise.reject(response.statusText)
    }
  },
})

export default alovaInstance
