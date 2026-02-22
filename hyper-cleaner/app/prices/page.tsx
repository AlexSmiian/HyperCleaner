import Page from "../_modules/Page";
import Prices from "@/app/_modules/Prices";

export const dynamic = 'force-static';

type Props = {
    searchParams: Promise<{ username?: string }>
}

export default async function Progress({ searchParams }: Props) {
    const params = await searchParams;

    return (
        <Page isMenu={false}>
            <Prices searchParams={params} />
        </Page>
    );
}