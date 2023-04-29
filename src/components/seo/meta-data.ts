export const metadata = {
    title: 'Arogga',
    author: '',
    headerTitle: 'Arogga',
    description: 'Arogga Task Website',
    language: 'en-us',
    siteUrl: '',
    siteRepo: '',
    siteLogo: '/logo.png',
    favicon: '/favicon.ico',
    image: '/logo.png',
    socialBanner: '',
    email: '',
    github: '',
    twitter: '',
    facebook: '',
    youtube: '',
    linkedin: '',
    locale: 'en-US',
    analytics: {
        plausibleDataDomain: '',
        simpleAnalytics: false,
        googleAnalyticsId: '',
    },
    comment: {
        provider: 'giscus',
        giscusConfig: {
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: 'pathname',
            reactions: '1',
            metadata: '0',
            theme: 'light',
            darkTheme: 'transparent_dark',
            themeURL: '',
        },
        utterancesConfig: {
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
            issueTerm: '',
            label: '',
            theme: '',
            darkTheme: '',
        },
        disqus: {
            shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
        },
    },
}