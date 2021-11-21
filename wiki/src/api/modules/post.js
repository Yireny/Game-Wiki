import request from '@/utils/request'

export function getPost() {
	return request({
		url: '/post'
	});
}