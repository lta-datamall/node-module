import LtaDatamallCall from 'lta-datamall-caller';

(async _ => {
    let apiCall = await new LtaDatamallCall('AccountKey', 'Dataset', 'ResponseFormat', {});
    let apiResponse = apiCall.response;
    console.log(apiResponse);
});
