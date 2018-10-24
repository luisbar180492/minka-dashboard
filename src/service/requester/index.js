export default class Requester {

  constructor(fetch) {
    this.fetch = fetch;
  }

  get(url) {
    return this.fetch.get(url)
    .then(this.errorHandler)
    .then((data) => data)
    .catch((error) => error);
  }

  errorHandler(response) {

    switch (response.status) {

      case 200:
        return response.data;

      default:
        return response;
    }
  }
}
