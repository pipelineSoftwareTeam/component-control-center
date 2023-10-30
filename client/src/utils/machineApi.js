import Api from "./api";

class MachinesApi extends Api {
  constructor() {
    super('/api/machines')
  }
}

const machinesApi = new MachinesApi();

export default machinesApi;