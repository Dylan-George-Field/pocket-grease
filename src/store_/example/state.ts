export interface ExampleStateInterface {
  calculate: boolean;
}

function state(): ExampleStateInterface {
  return {
    calculate: false
  }
};

export default state;
