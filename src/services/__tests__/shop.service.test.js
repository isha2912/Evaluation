const { Shop } = require('../../models');
const fileOps = require('../shop.service');
const fileUtils = require('../../utils/shop.utils');



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

describe('get query service:', () => {
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

    const data = await fileOps.getQueryService(body);

    expect(data).toEqual(items);
  });
});