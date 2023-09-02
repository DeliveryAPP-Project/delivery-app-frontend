import { AxiosResponse } from 'axios';

export default class APIError extends Error {
  response;
  status;

  constructor(response: AxiosResponse) {
    super();

    this.message = `${response.status} - ${response.data.message}`;

    this.name = 'APIError';
    this.response = response;
    this.status = response.status;
  }
}
