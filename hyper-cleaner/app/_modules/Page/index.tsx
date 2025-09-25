
import ErrorBoundary from '../../_components/ErrorBoundary';
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default async function Page({children}: {children:React.ReactNode}) {

    return (
        <>
            <Header />
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
            <Footer />
        </>

    );
}

