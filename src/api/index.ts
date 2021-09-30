import axios, { AxiosResponse } from 'axios';
import { DemoData } from '@/types/DemoData';

interface Param {
  search_year: number;
  search_monrth?: number;
}

console.log('test');

const instance = axios.create({
  baseURL: 'https://coding-test.adpopcorn.com/ap/v1/partners/demoreport/',
  timeout: 15000
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody)
};

export const fetchDemoData = (param: Param): Promise<DemoData> =>
  requests.post('GetDemoData', param);
