const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'eigr.io',
    tagline: 'A Serverless Runtime on the BEAM',
    url: 'https://eigr.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'icon/favicon.ico?v=2',
    organizationName: 'eigr',
    projectName: 'eigr.github.io',
    trailingSlash: true,
    themeConfig: {
        colorMode: {
            "defaultMode": "light",
            "disableSwitch": false,
            "respectPrefersColorScheme": false,
            "switchConfig": {
                "darkIcon": "🌜",
                "darkIconStyle": {},
                "lightIcon": "🌞",
                "lightIconStyle": {}
            }
        },
        navbar: {
            style: 'dark',
            title: '',
            logo: {
                alt: 'eigr',
                src: 'img/sc_logo_002_1.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'overview',
                    position: 'left',
                    label: 'Documentation',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/eigr',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    to: 'protodocs/cloudstate/entity.proto',
                    activeBasePath: './protodocs',
                    label: 'gRPC Proxy-Protocol',
                    position: 'left',
                }
            ],
        },
        footer: {
            // style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/Y55eZpyvNs',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/eigr_io',
                        },
                        // {
                        //     label: 'Github Discussions',
                        //     href: 'https://github.com/eigr/eigr-community/discussions',
                        // },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/eigr',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} – eigr.io | graphics design by <a href="https://ursulahitz.com">ursulahitz.com</a>`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/eigr/eigr.github.io/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/eigr/eigr.github.io/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
        [
            'docusaurus-protobuffet',
            {
                protobuffet: {
                    fileDescriptorsPath: './cloudstate-protocols-0.6.0/fixtures/proto_workspace.json',
                    protoDocsPath: './protodocs',
                    sidebarPath: './sidebarsProtodocs.js'
                },
                // docs: {
                //     routeBasePath: 'protodocs',
                //     sidebarPath: require.resolve('./sidebarsProtodocs.js'),
                // }
            }
        ],
    ],
};
