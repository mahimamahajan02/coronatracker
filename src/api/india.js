import axios from 'axios';
const url = 'https://covid-india-cases.herokuapp.com';

export const fetchDataa = async (state) => {
    let changeableUrl = url;
    if (state) {
        changeableUrl = `${url}/states`
    }

    try {

        const { data: { noOfCases, cured, deaths} } = await axios.get(changeableUrl);


        return {
            noOfCases,
            cured,
            deaths
          
        };

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/statetimeline`);
        //return data.map(({ confirmed, deaths,recovered, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
        const modifiedData = data.map((dailyData) => ({
            noOfCases: dailyData.noOfCases.total,
            deaths: dailyData.deaths.total,
            cured: dailyData.cured.total,
            

        }))

        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}


export const fetchStates = async () => {
    try {
        const { data: { states } } = await axios.get(`${url}/states`);
        return states.map((state) => state);
    }
    catch (error) {
        console.log(error);
    }

}