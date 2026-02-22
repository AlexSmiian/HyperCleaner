import Page from "../_modules/Page";
import ProgressPage from "@/app/_modules/Progress";

export const dynamic = 'force-static';

type Props = {
    searchParams: Promise<{ username?: string }>
}

export default async function Progress({ searchParams }: Props) {
    const params = await searchParams;

    return (
        <Page isHeader={false}>
           <ProgressPage searchParams={params} />
        </Page>
    );
}