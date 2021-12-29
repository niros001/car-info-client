import $ from "jquery";

const baseUrl = 'https://data.gov.il/api/3/action/datastore_search';

export const api = (request) => $.ajax({
  url: baseUrl,
  data: request,
  dataType: 'json',
  success: (data) => data,
  error: (xhr, status, error) => error,
});
