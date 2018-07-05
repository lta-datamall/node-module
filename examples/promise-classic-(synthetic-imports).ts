import LtaDatamallCall from 'lta-datamall-caller';

(async _ => {
    let apiCall = new LtaDatamallCall('AccountKey', 'Dataset', 'ResponseFormat', {});
    apiCall.response()
        .then(response => {
            console.log(response);
        });
