import HttpStatusCode from '../lib/httpstatus';

const statusHandler = (response) => {
	return response.status === HttpStatusCode.OK ?
		Promise.resolve(response)
		:
		Promise.reject(response);
};

const jsonHandler = (response) => {
	return response.json();
};

const ApiUtils = {
	statusHandler: statusHandler,
	jsonHandler: jsonHandler
};

export default ApiUtils;