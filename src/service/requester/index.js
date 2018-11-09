export default class Requester {

  constructor(fetch) {
    this.fetch = fetch;
  }

  async makeRequest(url, params, method = 'GET', data) {
    try {
      const response = await this.fetch({ url, params, method, data });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
