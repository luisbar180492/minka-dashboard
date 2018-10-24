/**
 * It returns the standar action object
 * @param  {string} type    type of action
 * @param  {any}    payload result of the action
 * @param  {bool}   error   flag error
 * @param  {any}    meta    useful data
 * @return {object}         action object
 */
export default (type, payload, error, meta) => ({
  type: type,
  payload: payload,
  error: error,
  meta: meta,
});
