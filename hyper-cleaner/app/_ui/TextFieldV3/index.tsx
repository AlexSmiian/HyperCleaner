import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

interface TextFieldV3Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
    classModifier?: string;
    error?: string;
    value?: string;
    children?: ReactNode;
}

const TextFieldV3 = forwardRef<HTMLInputElement, TextFieldV3Props>(function TextFieldV3(
    { classModifier, error, children, ...rest },
    ref
) {
    return (
        <label>
            {children}
            <input className={classModifier} ref={ref} {...rest} />
        </label>
    );
});

export default TextFieldV3;
