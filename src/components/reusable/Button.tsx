import { DetailedHTMLProps } from "react";

export interface Props {}
function Button({
    ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} />;
}

export default Button;
