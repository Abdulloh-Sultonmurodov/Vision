import { Switch } from "antd";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const SwitchBtn = () => <Switch defaultChecked onChange={onChange} />;
export default SwitchBtn;
