import * as rp from 'request-promise-native';
import { URL } from 'url';

/**
 * Class representing an LTA Datamall2 API call.
 */
class APICall {
    /** LTA Datamall2 API base URL. */
    private readonly _apiBaseURL = new URL('http://datamall2.mytransport.sg/ltaodataservice/').href;

    /** LTA Datamall2 API dataset URL */
    private readonly _apiDatasetURL: string;

    /** LTA Datamall2 API response. */
    private _response: rp.RequestPromise;

    get response(): rp.RequestPromise {
        return this._response;
    }

    /**
     * @param apiAccountKey LTA Datamall2 API account key.
     * @param apiDataset    LTA Datamall2 API dataset name.
    */
    constructor({apiAccountKey, apiDataset, apiResponseFormat = 'json', apiParams}: APIConstructorArgs) {
        this._apiDatasetURL = new URL(apiDataset, this._apiBaseURL).href;

        /* Initialize fullApiResponseFormat */
        let fullApiResponseFormat: string;

        /* Check if apiResponseFormat is normal shorthand */
        if (['json','atom+xml', 'xml'].indexOf(apiResponseFormat) > -1) {
            /* Initialize the basic form of fullApiResponseFormat */
             fullApiResponseFormat = 'application/';

            /* Check if apiResponseFormat is missing 'atom+' prefix */
            if (apiResponseFormat == 'xml') {
                fullApiResponseFormat += 'atom+'
            }

            /* Add the shorthand apiResponseFormat to fullApiResponseFormat */
            fullApiResponseFormat += apiResponseFormat;
        }
        /* Otherwise, if apiResponseFormat is complete, simply pass it to fullAPIResponseFormat */
        else {
            fullApiResponseFormat = apiResponseFormat;
        }

        let rpOptions = {
            url: this._apiDatasetURL,
            headers: {
                AccountKey: apiAccountKey,
                accept: fullApiResponseFormat
            },
            qs: apiParams,
            json: (fullApiResponseFormat ? true : false)
        }

        rp(rpOptions)
            .then((body) => {
                this._response = body;
            })
            .catch((err) => {
                throw new Error(err);
            })

        this._response = rp(rpOptions);
    }
}

export default APICall;