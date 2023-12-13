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
    favicon: 'icon/eigr_flat.ico?v=3',
    organizationName: 'eigr',
    projectName: 'eigr.github.io',
    trailingSlash: true,
    themeConfig: {
        metadata: [
            {name: 'twitter:card', content: 'summary'},
            {name: 'twitter:title', content: 'eigr.io – A Serverless Runtime on the BEAM'},
        ],
        image: 'icon/eigr_flat.svg',
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            style: 'dark',
            title: '',
            logo: {
                alt: 'eigr',
                src: 'img/eigr_one_square_no_bg_001.svg',
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
                    to: 'protodocs/eigr/functions/protocol/actors/protocol.proto',
                    activeBasePath: './protodocs',
                    label: 'Spawn Protocol',
                    position: 'left',
                },
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
            additionalLanguages: ['elixir', 'java', 'protobuf'],
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
                    fileDescriptorsPath: './spawn-protocol-0.1.0/fixtures/proto_workspace.json',
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
