const { Shop } = require('../../models');
const fileOps = require('../shop.service');
const fileUtils = require('../../utils/shop.utils');

describe('post items service:', () => {
  xit('should display items ', async () => {
    const items = [{
      name: '1',
      feat: 'abc',
      val: 'Completed',
    }];

    const catSpy = jest.spyOn(fileUtils, 'getCategories').mockResolvedValue('abc');
    const itemSpy = jest.spyOn(fileUtils, 'getItems').mockResolvedValue('abc');
    const getSpy = jest.spyOn(Shop , 'findAll')
      .mockResolvedValue(items);

    const data = await fileOps.postService();

    expect(data).toEqual(items);
  });
});

describe('get items service:', () => {
  it('should display items ', async () => {
    const body = {
      category: "abc",
    }
    const items = [{
      name: '1',
      feat: 'abc',
      val: 'Completed',
    }];

  
    const getSpy = jest.spyOn(Shop , 'findAll')
      .mockResolvedValue(items);

    const data = await fileOps.getService(body);

    expect(data).toEqual(items);
  });
});