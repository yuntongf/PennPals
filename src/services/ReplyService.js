import http from "./HttpService";
const apiEndpoint = "http://localhost:3500";

/*
function mesUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getMessage(id) {
  return http.get(mesUrl(id));
}*/

export function getReplies() {
  return http.get(apiEndpoint+`/MessageBoard/Replies`);
}

export function addReply(message) {
  return http.post(apiEndpoint+`/MessageBoard/Replies`, message);
  //return http.post(apiEndpoint, message);
}

export function deleteMessage(message) {
  return http.delete(apiEndpoint+`/MessageBoard/${message._id}`, message);
  //return http.post(apiEndpoint, message);
}

export function updateMessage(message) {
  if (message._id) {
    const body = { ...message};
    delete body._id;
    console.log(apiEndpoint+`/${message._id}`);
    return http.put(apiEndpoint+`/MessageBoard/${message._id}`, body);
  }
  return http.post(apiEndpoint+`/MessageBoard/${message._id}`, message);
}