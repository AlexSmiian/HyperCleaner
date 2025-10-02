import { forwardRef } from 'react';
import cln from 'classnames';
import styles from './emailField.module.scss';
import { usePathname } from 'next/navigation';
import TextFieldV3 from '../../../../_ui/TextFieldV3';
import { Typography } from '../../../../i18n';

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  error: string;
  onFocus: () => void;
  label: string;
  errorText: string;
  value?: string;
}

const EmailField = forwardRef<HTMLInputElement, InputFieldProps>(function EmailField(props, ref) {
  const { onFocus, label, error, errorText, ...restProps } = props;
  const pathname = usePathname();
  const isRTL = pathname.startsWith('/ar');

  const showError = Boolean(error);
  const errorMessage = showError ? errorText : '';

  return (
    <div className={styles.emailWrapper}>
      <TextFieldV3
        classModifier={cln(styles.input, isRTL ? styles.textRight : styles.textLeft)}
        type="email"
        placeholder=" "
        {...restProps}
        error={error}
        ref={ref}
        dir={isRTL ? 'rtl' : 'ltr'}
        lang={isRTL ? 'ar' : 'en'}
        style={{ textAlign: isRTL ? 'right' : 'left' }}
        onFocus={onFocus}
      >
        {label}
      </TextFieldV3>

      {showError && (
        <span className={cln(styles.error, { [styles.isError]: showError })}>
          <Typography text={errorMessage} namespace="glassa-common-react" />
        </span>
      )}
    </div>
  );
});

export default EmailField;
