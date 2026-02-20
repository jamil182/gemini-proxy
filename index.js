export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.hostname = 'generativelanguage.googleapis.com';
    return fetch(new Request(url, request));
  }
}
