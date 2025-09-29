
import ErrorBoundary from '../../_components/ErrorBoundary';
import Header from "@/app/_components/Header";

export default async function Page({children}: {children:React.ReactNode}) {

    return (
        <>
            <Header />
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </>
    );
}

