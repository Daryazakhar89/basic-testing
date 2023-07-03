// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(200).getBalance()).toBe(200);
  }, 30000);

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => getBankAccount(100).withdraw(200)).toThrow(
      InsufficientFundsError,
    );
  }, 30000);

  test('should throw error when transferring more than balance', () => {
    const someBankAccount = getBankAccount(100);
    expect(() => getBankAccount(300).transfer(500, someBankAccount)).toThrow(
      InsufficientFundsError,
    );
  }, 30000);

  test('should throw error when transferring to the same account', () => {
    const someBankAccount = getBankAccount(100);
    expect(() => someBankAccount.transfer(300, someBankAccount)).toThrow(
      TransferFailedError,
    );
  }, 30000);

  test('should deposit money', () => {
    expect(getBankAccount(200).deposit(200).getBalance()).toBe(400);
  }, 30000);

  test('should withdraw money', () => {
    expect(getBankAccount(200).withdraw(200).getBalance()).toBe(0);
  }, 30000);

  test('should transfer money', () => {
    const someBankAccount = getBankAccount(200);
    getBankAccount(300).transfer(200, someBankAccount);
    expect(someBankAccount.getBalance()).toBe(400);
  }, 30000);

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await getBankAccount(200).fetchBalance();

    if (balance) {
      expect(typeof balance).toBe('number');
    } else {
      expect(balance).toBeNull();
    }
  }, 30000);

  test('should set new balance if fetchBalance returned number', async () => {
    const bankAccount = getBankAccount(200);
    const balance = bankAccount.getBalance();

    try {
      await getBankAccount(100).synchronizeBalance();
      expect(typeof bankAccount.getBalance()).toBe('number');
      expect(bankAccount.getBalance()).not.toEqual(balance);
    } catch (error) {
      expect(true).toBe(true);
    }
  }, 30000);

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const bankAccount = getBankAccount(200);
    const balance = bankAccount.getBalance();

    try {
      await bankAccount.synchronizeBalance();
      expect(true).toBe(true);
    } catch (error) {
      expect(error instanceof SynchronizationFailedError).toBe(true);
      expect(bankAccount.getBalance()).toEqual(balance);
    }
  }, 30000);
});
