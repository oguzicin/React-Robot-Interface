import { ReactElement } from "react";

type HeadingsProps = { title: string };

export const Headings = ({ title }: HeadingsProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Headings;
