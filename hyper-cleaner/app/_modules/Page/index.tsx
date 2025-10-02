
import ErrorBoundary from '../../_components/ErrorBoundary';
import Header from "@/app/_components/Header";

export default async function Page({children,isHeader = true,isMenu}: {children:React.ReactNode,isHeader?:boolean;isMenu?:boolean}) {

    return (
        <>
            { isHeader &&
                <Header isMenu={isMenu} />
            }
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </>
    );
}

