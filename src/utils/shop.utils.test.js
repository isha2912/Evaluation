const getUtils = require('./shop.utils');

describe('get Categories', () => {
  it('should return calues from the api', async () => {
    jest.spyOn(getUtils, 'httpGet')
      .mockResolvedValue('abc');
    expect(getUtils.getCategories()).resolves.toEqual('abc');
  });
});

describe('get Items', () => {
    it('should return calues from the api', async () => {
      jest.spyOn(getUtils, 'httpGet')
        .mockResolvedValue('abc');
      expect(getUtils.getItems()).resolves.toEqual('abc');
    });
  });
  