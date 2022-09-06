import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {
    useThemeConfig,
    useColorMode,
} from '@docusaurus/theme-common';

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    const {colorMode} = useColorMode();
    const FeatureList = [
        {
            title: 'Inversion of State',
            Svg: require(colorMode === 'dark' ? '../../static/img/state_dark.svg' : '../../static/img/state.svg').default,
            description: (
                <>
                    Eigr Spawn embraces the Erlang <a
                    href="/docs/concepts/inversion-of-state/">'Process Model'</a>.
                </>
            ),
        },
        {
            title: 'Protocol',
            Svg: require(colorMode === 'dark' ? '../../static/img/protocol_dark.svg' : '../../static/img/protocol.svg').default,
            description: (
                <>
                    Eigr Spawn is based on the <a
                    href="/protodocs/eigr/functions/protocol/actors/protocol.proto/">Spawn
                    Protocol</a>.
                </>
            ),
        },
        {
            title: 'Polyglot Programming Model',
            Svg: require(colorMode === 'dark' ? '../../static/img/polyglot_dark.svg' : '../../static/img/polyglot.svg').default,
            description: (
                <>
                    While Eigr Functions is implemented in <a
                    href="https://elixir-lang.org">Elixir</a> and running on
                    the <a href="https://erlang.org">BEAM</a>, functions can be
                    implemented
                    in <a href="/docs/concepts/polyglot-programming/">many well
                    known Languages</a>.
                </>
            ),
        },
    ];
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
