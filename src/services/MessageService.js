import http from "./HttpService";
const apiEndpoint = "http://localhost:3500";

/*
function mesUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getMessage(id) {
  return http.get(mesUrl(id));
}*/

export function getMessages() {
  return http.get(apiEndpoint);
}

export function addMessage(message) {
  return http.post(apiEndpoint, message);
  //return http.post(apiEndpoint, message);
}

export function deleteMessage(message) {
  return http.delete(apiEndpoint+`/MessageBoard/Message/${message._id}`, message);
  //return http.post(apiEndpoint, message);
}

export function updateMessage(message) {
  if (message._id) {
    const body = { ...message};
    delete body._id;
    console.log(apiEndpoint+`/${message._id}`);
    return http.put(apiEndpoint+`/MessageBoard/Message/${message._id}`, body);
  }
  return http.post(apiEndpoint+`/MessageBoard/Message/${message._id}`, message);
}

/*
export function postMessage(message) {
  if (message._id) {
    const body = { ...message };
    delete body._id;
    return http.put(movieUrl(message._id), body);
  }
  return http.post(apiEndpoint, message);
}*/
