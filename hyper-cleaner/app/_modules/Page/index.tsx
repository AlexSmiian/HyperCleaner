
import ErrorBoundary from '../../_components/ErrorBoundary';
import { getCountryCode } from '../../actions';

export default async function Page({children}: {children:React.ReactNode}) {
    const countryCode = await getCountryCode();
    console.log(countryCode)
    return (

            <ErrorBoundary>
                {children}
            </ErrorBoundary>
    );
}

