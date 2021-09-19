import eventPost from './eventPost.js'
import mockAxios from "axios"

jest.mock("axios")
mockAxios.post.mockImplementation(() => Promise.resolve({
    _id: '6147974b9cb00b3e64638e0f',
    firstName: 'janusz',
    lastName: 'zwasem',
    email: 'janusz.was@wp.pl',
    date: '10-10-2021',
    __v: 0}))

describe('eventPost', () => {
    test('should return event', async () => {
        const result = await eventPost('janusz','zwasem','janusz.was@wp.pl','10-10-2021')
        console.log(result)
        expect(result).toBe({
            _id: '6147974b9cb00b3e64638e0f',
            firstName: 'janusz',
            lastName: 'zwasem',
            email: 'janusz.was@wp.pl',
            date: '10-10-2021',
            __v: 0})
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })
})