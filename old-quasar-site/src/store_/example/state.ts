export interface ExampleStateInterface {
  calculate: boolean;
  savingsToggle: boolean;
}

function state(): ExampleStateInterface {
  return {
    calculate: false,
    savingsToggle: true
  }
};

export default state;
