const handlerOps = require('../shop.handler');
const ServiceOps = require('../../services/shop.service');

describe('shop Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        body : "abc"
    };
     
    const catSpy = jest.spyOn(ServiceOps, 'postService').mockResolvedValue('abc')
    it('should set status code to 200', () => {
      handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
    });
    it('should return  values stored', () => {
        handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status().send).toHaveBeenCalledWith('abc');
    });
  });
  

