import { DetailedHTMLProps } from "react";

export interface Props {
    title: string;
}
function Button({
    title,
    ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props}>{title}</button>;
}

export default Button;
