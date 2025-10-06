import Page from "../_modules/Page";
import Prices from "@/app/_modules/Prices";

export default async function Progress( searchParams: {username: string}) {

    return (
        <Page isMenu={false}>
            <Prices searchParams={searchParams} />
        </Page>
    );
}