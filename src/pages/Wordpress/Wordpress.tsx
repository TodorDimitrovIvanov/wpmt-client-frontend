import LayoutWPMT from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { fetchPlugins, fetchTheme, selectPlugins, selectThemes } from "../../slices/wordpressSlice";
import { useMemo } from "react";
import './wordpress.scss';
import wordPressSVG from '../../assets/WordPressLogo.svg';
import pluginSVG from '../../assets/Plugins.svg'
import themeSVG from '../../assets/Themes.svg'
import adsSVG from '../../assets/Ads.svg'
import troubleshootSVG from '../../assets/Troubleshoot.svg'
import actionsSVG from '../../assets/Actions.svg'
import MenuItem from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


const Wordpress = () => {

    const dispatch = useAppDispatch();

    const requestStatus: any = useAppSelector(state => state.wordpress.status);
    const plugins = useAppSelector(selectPlugins);
    const themes = useAppSelector(selectThemes)
    {/*{plugins.map((plugin: any) => <li key={plugin.textdomain} >{plugin.name}</li>)}*/
    }

    useMemo(() => {
        if (requestStatus === 'idle') {
            dispatch(fetchPlugins());
            dispatch(fetchTheme())
        }
    }, [ requestStatus, dispatch ]);

    const activePlugins = plugins.reduce((sum: number, plugin: any) => {
        if(plugin.status === 'active') {
            sum++
        }
        return sum
    }, 0)

    const activeTheme = themes.filter((theme: { status: string; }) => theme.status === 'active')[0]?.stylesheet || 'Loading!'
    console.log(activeTheme);

    return (
        <LayoutWPMT>
            <div className="wpmt-menu wpmt-wordpress-core__container">
                <MenuItem name="Core" iconAlt="WordPress Logo"  type="title" icon={wordPressSVG}/>
                <MenuItem type="item" name="Current Version" value="6.0"/>
                <MenuItem type="item" name="Latest Version" value="6.5"/>
                <MenuItem type="item" name="Website Size" value="352 MB"/>
                <MenuItem type="item" name="File Count" value="32102 files"/>
                <button className="wpmt-menu wpmt-wordpress__core-button">Update</button>

                <MenuItem name="Plugins" iconAlt="Puzzle piece" type="title" icon={pluginSVG}/>
                <MenuItem type="item" name="Installed Plugins" value={plugins.length}/>
                <MenuItem type="item" name="Enabled Plugins" value={activePlugins}/>

                <MenuItem name="Themes" iconAlt="Brush" type="title" icon={themeSVG}/>
                <MenuItem type="item" name="Installed themes" value={themes.length}/>
                <MenuItem type="item" name="Active theme" value={activeTheme}/>

                <MenuItem name="Ads" iconAlt="Cone-shaped Loudspeaker" type="title" icon={adsSVG}/>

                <MenuItem name="Performance" iconAlt="WordPress logo" type="title" icon={wordPressSVG}/>
                <MenuItem type="item" name="Google PageSpeed Score" value="29"/>
                <MenuItem type="item" name="GTMetrix Score" value="21"/>

                <MenuItem name="Troubleshooting" iconAlt="WordPress logo" type="title" icon={troubleshootSVG}/>

                <MenuItem name="Actions" iconAlt="WordPress logo" type="title" icon={actionsSVG}/>

            </div>
        </LayoutWPMT>
    );
};

export default Wordpress;
