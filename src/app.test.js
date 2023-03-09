const axios = require('axios')
jest.mock('axios')

describe('Test Suite 1', () => {

    it('GitHub API Call Sould Work', async () => {
        const mockedResponse = { data: { login: "Jonas" } }
        axios.get.mockResolvedValue(mockedResponse)
        const app = require('./app.js')

        const response = await app.getData()

        expect(axios.get).toBeCalled()
        expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/diegoarmiliato')
        expect(response).toEqual(mockedResponse)
    });

    it('GitHub API Call Sould Fail', async () => {
        const logSpy = jest.spyOn(console, 'error')
        const err = new Error('Wrong inputs passed in')
        axios.get.mockRejectedValueOnce(err)

        const app = require('./app.js')

        const response = await app.getData()

        expect(logSpy).toHaveBeenCalledWith(err);
    });

})