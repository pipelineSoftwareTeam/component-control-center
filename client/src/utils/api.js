export default class Api {
  constructor(endpoint) {
    this.baseUrl = '';
    this.endpoint = endpoint;
    this.url = `${this.baseUrl}${this.endpoint}`;
    this.GET = 'GET';
    this.POST = 'POST';
    this.PUT = 'PUT';
    this.PATCH = 'PATCH';
    this.DELETE = 'DELETE';
    this.headers = { 
      'Content-Type': 'application/json',
    }
  }

  async getData(setData, setIsLoading, setFetchError) {
    try {
      const res = await fetch(this.url)
      if (!res.ok) throw new Error('Something went wrong.')
      const data = await res.json()
      setData(data);
    } catch (error) {
      console.log(error.message);
      setFetchError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
}

