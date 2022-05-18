import type {NextPage} from "next";
import {
    //provider
    SSGModuleProvider,
    //renderers
    PanelRenderer,
    Slider,
    //Panels
    InjuryReportPanel,
    MatchupPanel,
    MoneylinePanel,
    SpreadPanel,
    TotalPanel,
    VerdictPanel,
    //theme
    defaultLightTheme,
    //utils
    FetchModuleData
} from "@ssg-b2b/basketball-preplay";
import type {ModuleConfig, ModuleData} from "@ssg-b2b/basketball-preplay";

const SSG_MODULE_CONFIG: ModuleConfig = {
    clientId: "pickswise" //Replace with your unique client id,
};

const Home: NextPage<{
    data: ModuleData;
}> = ({data}) => {
    return (
        <main>
            <h1>SSG-Modules SSR Example</h1>

            <h2>Single Panel</h2>
            <SSGModuleProvider theme={defaultLightTheme} data={data} config={SSG_MODULE_CONFIG}>
                <PanelRenderer Panel={MatchupPanel} />
            </SSGModuleProvider>

            <h2>Slider</h2>
            <SSGModuleProvider theme={defaultLightTheme} data={data} config={SSG_MODULE_CONFIG}>
                <Slider
                    panels={[
                        MatchupPanel,
                        SpreadPanel,
                        MoneylinePanel,
                        TotalPanel,
                        VerdictPanel,
                        InjuryReportPanel
                    ]}
                />
            </SSGModuleProvider>
        </main>
    );
};

export async function getServerSideProps() {
    const rpEventId = "debug01"; //Apply your logic to pass the event id or use different fetching strategy
    const data = await new FetchModuleData().fetchByRpEventId(rpEventId); //There are different fetch strategies available to use

    return {
        props: {
            data
        }
    };
}

export default Home;
