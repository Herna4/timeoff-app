import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';

export const fetchEmployeesService = (request) => {
  let id = request.data.id;
  let access = request.data.access;
  let order = request.data.order;
  let sortBy = request.data.sortBy;

  const FETCH_EMPLOYEES = baseurl(`admin/list?id=${id}&access=${access}&order=${order}&sortBy=${sortBy}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('timeoff-token')
    }
  };

  return fetch(FETCH_EMPLOYEES, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    }).catch(error => {
      return error;
    });
};