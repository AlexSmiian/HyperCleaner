import Page from "./_modules/Page";
import Home from "./_modules/Home";
import meta from "./meta";
import getRobots from "./_utils/getRobots";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return {
        title: meta[lang]?.title || meta.en.title,
        description: meta[lang]?.description || meta.en.description,
        ...getRobots(),
    };
}

export default async function HomePage() {

    return (
        <Page>
            <Home />
        </Page>
    );
}