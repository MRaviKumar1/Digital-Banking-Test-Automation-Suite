const axios = require('axios');

const BASE = process.env.BASE_URL || 'https://demo-bank.example.com/api';

async function run() {
  console.log('Running API smoke tests against', BASE);
  try {
    // Accounts list
    let r = await axios.get(`${BASE}/accounts`);
    console.log('/accounts', r.status);
    // Transactions
    r = await axios.get(`${BASE}/accounts/12345/transactions`);
    console.log('/transactions', r.status);
    // Transfer (negative test example)
    try {
      await axios.post(`${BASE}/transfer`, { from: '12345', to: '67890', amount: -100 });
    } catch (err) {
      console.log('negative transfer test - expected error', err.response ? err.response.status : err.message);
    }
    console.log('API smoke tests finished');
    process.exit(0);
  } catch (err) {
    console.error('API test failed', err.message);
    process.exit(2);
  }
}

run();
