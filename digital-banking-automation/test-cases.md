# Sample Test Cases

1. **Login - valid credentials**
   - Steps: Open /login, enter valid username/password, submit
   - Expected: Redirect to /dashboard and 'Account Summary' visible.

2. **Login - invalid credentials**
   - Steps: Wrong username/password
   - Expected: Show 'Invalid credentials' error.

3. **Fund Transfer - success**
   - Steps: Login -> Transfer -> fill valid account and amount -> submit
   - Expected: 'Transfer completed' toast.

4. **Fund Transfer - insufficient funds**
   - Steps: Attempt large amount
   - Expected: 'Insufficient funds' error

5. **Transactions listing**
   - Steps: Login -> Transactions
   - Expected: Recent transactions visible
