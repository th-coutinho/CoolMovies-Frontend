const defaultAlertConfig = {
  shape: 'pill',
  duration: 40000,
  speed: 1000,
  positionX: 'end',
  positionY: 'top',
}

const successAlertConfig = {
  ...defaultAlertConfig,
  color: 'bg-green-400',
};

const errorAlertConfig = {
  ...defaultAlertConfig,
  color: 'bg-red-400',
};

export {
  successAlertConfig,
  errorAlertConfig
};
