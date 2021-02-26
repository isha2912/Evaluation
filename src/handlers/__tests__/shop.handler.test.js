const handlerOps = require('../shop.handler');
const ServiceOps = require('../../services/shop.service');
describe('get Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        body : "abc"
    };
     
    const catSpy = jest.spyOn(ServiceOps, 'getService').mockResolvedValue('abc')
    it('should set status code to 200', async () => {
     const mockVal = await  handlerOps.getHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
    });
    it('should return  values stored', async () => {
      const mockVal= await  handlerOps.getHandler(mockRequest, mockResponse);
      expect(mockResponse.status().send).toHaveBeenCalledWith('abc');
    });
  });

describe('post Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        body : "abc"
    };
     
    const catSpy = jest.spyOn(ServiceOps, 'postService').mockResolvedValue('abc')
    it('should set status code to 200', async () => {
     const mockVal = await  handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
    });
    it('should return  values stored', async () => {
      const mockVal= await  handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status().send).toHaveBeenCalledWith('abc');
    });
  });
  

  

