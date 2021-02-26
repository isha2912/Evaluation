const handlerOps = require('../shop.handler');
const fileService = require('../../services/shop.service');

describe('get Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        body : {category : "abc"}
    };
     
    const catSpy = jest.spyOn(fileService, 'getService').mockResolvedValue('abc')
    it('should set status code to 200', async () => {
     const mockVal = await  handlerOps.getHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
    });
    it('should return  values stored', async () => {
      const mockVal= await  handlerOps.getHandler(mockRequest, mockResponse);
      expect(mockResponse.status().send).toHaveBeenCalled()
      
    });
  });
  describe('get Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        body :"abc"
    };
     
    const catSpy = jest.spyOn(fileService, 'getService').mockResolvedValue('abc')
    it('should set status code to 400', async () => {
     const mockVal = await  handlerOps.getHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });
  })

describe('post Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        body : {
          category:"abc",
        }
    };
     
    const catSpy = jest.spyOn(fileService, 'postService').mockResolvedValue('abc')
    it('should set status code to 200', async () => {
     const mockVal = await  handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
    });
    it('should return  values stored', async () => {
      const mockVal= await  handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status().send).toHaveBeenCalledWith('abc');
    });
  });
  
  describe('post Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        body :"abc"
    };
     
    const catSpy = jest.spyOn(fileService, 'postService').mockResolvedValue('abc')
    it('should set status code to 400', async () => {
     const mockVal = await  handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });
  })

  describe('get Query Handler', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
  
    };
    const mockRequest = {
        params :{name : "a", value : "b", category: "c"}
    };
     
    const catSpy = jest.spyOn(fileService, 'getQueryService').mockResolvedValue('abc')
    it('should set status code to 200', async () => {
     const mockVal = await  handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
    });
    it('should return  values stored', async () => {
      const mockVal= await  handlerOps.postHandler(mockRequest, mockResponse);
      expect(mockResponse.status().send).toHaveBeenCalledWith('abc');
    });
  });
