const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'eigr.io',
    tagline: 'A Serverless Runtime on the BEAM',
    // url: 'https://eigr.io',
    url: 'https://eigr.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'eigr', // Usually your GitHub org/user name.
    projectName: 'eigr',
    trailingSlash: true,
    themeConfig: {
        navbar: {
            title: '',
            logo: {
                alt: 'eigr',
                src: 'img/logo_001.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Documentation',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/eigr',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'eigr/serverless',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        // {
                        //   label: 'Stack Overflow',
                        //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        // },
                        {
                            label: 'Discord',
                            href: 'https://discord.com/channels/825360651782193194',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/eigr_io',
                        },
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
            copyright: `Copyright © ${new Date().getFullYear()} – eigr.io`,
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
                        'https://github.com/eigr/eigr.github.io/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/eigr/eigr.github.io/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
