export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Mengalihkan semua permintaan ke server asli Gemini
    url.hostname = 'generativelanguage.googleapis.com';
    return fetch(new Request(url, request));
  }
}
