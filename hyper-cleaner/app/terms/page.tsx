import LegalPage from "@/app/_modules/LegalPage";
import TermsPage from "@/app/_components/Legal/TermsPage";


export default async function Terms( searchParams: {username: string}) {

    return (
        <LegalPage>
          <TermsPage />
        </LegalPage>
    );
}