import LayoutWPMT from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlugins, populate, selectPlugins } from "../../slices/wordpressSlice";
import { useEffect } from "react";
import './wordpress.scss';
import wplogo from '../../assets/iconWordPress.svg';


const Wordpress = () => {

    const dispatch = useDispatch();

// @ts-ignore
    const requestStatus: any = useSelector(state => state.wordpress.status);
    const plugins = useSelector(selectPlugins);
    {/*{plugins.map((plugin: any) => <li key={plugin.textdomain} >{plugin.name}</li>)}*/
    }

    useEffect(() => {
        if (requestStatus === 'idle') {
            // @ts-ignore
            dispatch(fetchPlugins());
        }
    }, [ requestStatus, dispatch ]);

    return (
        <LayoutWPMT>
            <div className="wpmt-menu wpmt-wordpress-core__container">
                <div className="wpmt-menu wpmt-wordpress_core__title">
                    <img alt="WordPress icon" src={wplogo}/>
                    <p className="wpmt-wordpress_core__text">Core</p>
                </div>
                <div className="wpmt-menu-item wpmt-wordpress_core__current-version">
                    <div className="wpmt-wordpress_core__menu-item-text">
                        <p>Current Version</p>
                    </div>
                    <div className="wpmt-wordpress_core__menu-item-information">
                        <p>6.0</p>
                    </div>
                </div>
                <div className="wpmt-menu-item wpmt-wordpress_core__latest-version">
                    <div className="wpmt-wordpress_core__menu-item-text">
                        <p>Latest Version</p>
                    </div>
                    <div className="wpmt-wordpress_core__menu-item-information">
                        <p>6.0</p>
                    </div>
                </div>
                <div className="wpmt-menu-item wpmt-wordpress_core__size">
                    <div className="wpmt-wordpress_core__menu-item-text">
                        <p>Website Size</p>
                    </div>
                    <div className="wpmt-wordpress_core__menu-item-information">
                        <p>352 MB</p>
                    </div>
                </div>
                <div className="wpmt-menu-item wpmt-wordpress_core__file-size">
                    <div className="wpmt-wordpress_core__menu-item-text">
                        <p>File Count</p>
                    </div>
                    <div className="wpmt-wordpress_core__menu-item-information">
                        <p>32102 files</p>
                    </div>
                </div>
                <button className="wpmt-menu wpmt-wordpress__core-button">Update</button>
            </div>

        </LayoutWPMT>
    );
};

export default Wordpress;
