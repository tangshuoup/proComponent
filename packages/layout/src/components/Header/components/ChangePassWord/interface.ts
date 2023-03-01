import { FormComponentProps } from "@firesoon/antd/es/form";

export interface StaticProps extends FormComponentProps {
  visible: boolean;
  firstLogin: boolean;
  onCancel: () => void;
}
