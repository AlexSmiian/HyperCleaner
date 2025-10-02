import Page from "../_modules/Page";
import ProgressPage from "@/app/_modules/Progress";
import EmailPage from "@/app/_modules/Email";

export default async function Email( searchParams: {username: string}) {

    return (
        <Page isMenu={false}>
           <EmailPage searchParams={searchParams}/>
        </Page>
    );
}