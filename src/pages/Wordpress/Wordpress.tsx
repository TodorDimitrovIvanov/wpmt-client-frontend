import LayoutWPMT from "../../components/Layout/Layout";
import {
    fetchPlugins,
    fetchTheme,
    fetchVersion,
    selectPlugins,
    selectThemes,
    selectVersion
} from "../../slices/wordpressSlice";
import { useMemo } from "react";
import './Wordpress.scss';
import wordPressSVG from '../../assets/WordPressLogo.svg';
import pluginSVG from '../../assets/Plugins.svg';
import themeSVG from '../../assets/Themes.svg';
import adsSVG from '../../assets/Ads.svg';
import troubleshootSVG from '../../assets/Troubleshoot.svg';
import actionsSVG from '../../assets/Actions.svg';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import MenuCard from "../../components/MenuCard/MenuCard";
import MenuList from "../../components/MenuList/MenuList";
import { core, Performance, plugin, themes } from './mockData';


const Wordpress = () => {

    const dispatch = useAppDispatch();
    const plugins = useAppSelector(selectPlugins);
    const version = useAppSelector(selectVersion);
    const themes = useAppSelector(selectThemes);
    const selectedSite = useAppSelector(state => state.website.selectedWebsite);
    const isLogged = useAppSelector(state => state.user.current.isLogged);
    const requestStatus: any = useAppSelector(state => state.wordpress.status);

    useMemo(() => {
        if (requestStatus === 'idle' && isLogged && selectedSite) {
            dispatch(fetchPlugins());
            dispatch(fetchTheme());
            dispatch(fetchVersion());
        }
    }, [ dispatch, isLogged, selectedSite ]);


    const activePlugins = plugins.reduce((sum: number, plugin: any) => {
        if (plugin.status === 'active') {
            sum++;
        }
        return sum;
    }, 0);

    const test = [
        {
            name: 'Installed Plugins',
            value: plugins.length
        },
        {
            name: "Enabled Plugins",
            value: activePlugins
        },
    ];

    const activeTheme = themes.filter((theme: { status: string; }) => theme.status === 'active');

    return (
        <LayoutWPMT>
            <MenuList items={core} title="Core" icon={wordPressSVG}>
                <button className="wpmt-menu wpmt-wordpress__core-button">Refresh</button>
            </MenuList>
            <MenuList items={test} title="Plugins" icon={pluginSVG}/>
            <MenuList flex items={activeTheme} title="Themes" icon={themeSVG}>
                <MenuCard title="Dev title"/>
                <MenuCard title="Dev title"/>
                <MenuCard title="Dev title"/>
                <MenuCard title="Dev title"/>
            </MenuList>
            <MenuList flex title="Ads" icon={adsSVG}>
                <MenuCard title="Dev title"/>
                <MenuCard title="Dev title"/>
            </MenuList>
            <MenuList title="Performance" icon={wordPressSVG} items={Performance}/>

            {/*    <MenuItem name="Troubleshooting" iconAlt="WordPress logo" type="title" icon={troubleshootSVG}/>*/}
            {/*    <div className="wpmt-menu-card-container">*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*        <MenuCard title="Dev title"/>*/}
            {/*    </div>*/}

            {/*    <MenuItem name="Actions" iconAlt="WordPress logo" type="title" icon={actionsSVG}/>*/}

            {/*</div>*/}
        </LayoutWPMT>
    );
};

export default Wordpress;
