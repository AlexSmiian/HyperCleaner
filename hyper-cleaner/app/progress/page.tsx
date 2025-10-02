import Page from "../_modules/Page";
import ProgressPage from "@/app/_modules/Progress";

export default async function Progress( searchParams: {username: string}) {

    return (
        <Page isHeader={false}>
           <ProgressPage searchParams={searchParams} />
        </Page>
    );
}