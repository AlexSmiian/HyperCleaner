import Page from "../_modules/Page";
import EmailPage from "@/app/_modules/Email";

export const dynamic = 'force-static';

type Props = {
    searchParams: Promise<{ username?: string }>
}

export default async function Email({ searchParams }: Props) {
    const params = await searchParams;

    return (
        <Page isMenu={false}>
           <EmailPage searchParams={params}/>
        </Page>
    );
}