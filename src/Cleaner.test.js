describe('Cleaner', () => {
    describe('cleanPlanets', () => {
        let mockData;
        let mockFunc;

        beforeEach = () => {
            mockFunc = jest.fn();
            mockData = {
                id: 1,
                name: 'Pluto',
                population: 2000,
                terrain: 'rocky',
                diameter: 3000,
                climate: 'temperate',
            }
        }

        it('should be called with the correct params', () => {
            expect(mockFunc).toBeCalledWith(mockData);
        })
    })
})