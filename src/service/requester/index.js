import { ACTION_URI, WALLET_URI } from 'common/config';
import { mapActions, mapAccounts } from './mapper';

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

  async fetchActions() {
    let actions = await this.makeRequest(ACTION_URI);
    actions = mapActions(actions);

    return { actions };
  }

  async fetchAccounts() {
    let accounts = await this.makeRequest(WALLET_URI);
    accounts = mapAccounts(accounts);

    return { accounts };
  }
}
