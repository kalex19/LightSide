import React from 'react';
import {
    shallow
} from 'enzyme';
import ScrollText from './ScrollText.jsx';

describe('ScrollText', () => {
    let wrapper;
    let mockFilm;


    beforeEach(() => {
        wrapper = shallow( < ScrollText / > );
        mockFilm = {
            name: 'movie 1',
            release_date: '12-12-12',
            opening_crawl: 'Star wars is the best'
        }
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockFilm)
            })
        })
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call fetch with correct params', () => {
        const expected = (`https://swapi.co/api/films/12`);
        ScrollText(mockFilm)
        expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a parsed response if status is ok', async () => {
        const result = await ScrollText(mockFilm);

        expect(result).toEqual(mockFilm);
    });

    it('should return an error if status is not ok', async () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({
                ok: false
            })
        });

        await expect(ScrollText()).rejects.toEqual(Error('Error fetching data'));
    });
})