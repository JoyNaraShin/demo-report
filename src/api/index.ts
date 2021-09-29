import axios, { AxiosResponse } from 'axios';

interface Payment {
    Revenue: number
}

interface PostType {
    Payment: Payment,
    Result: boolean,
    Istest: boolean,
    ResultCode: number,
    ResultMsg:string
}

interface Param {
    search_year: number,
    search_monrth?: number
}

const instance = axios.create({
	baseURL: 'https://coding-test.adpopcorn.com/ap/v1/partners/demoreport/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
};

export const fetchDemoData =  async (param: Param): Promise<PostType> =>  await requests.post('GetDemoData', param)
