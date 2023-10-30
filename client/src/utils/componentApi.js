import Api from "./api";

class ComponentApi extends Api {
  constructor() {
    super('/api/components')
  }
}

const componentApi = new ComponentApi();

export default componentApi;