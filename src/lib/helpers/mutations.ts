export function filterAndSpreadKeys(PageContent: { [x: string]: unknown }, sectionsToFind: string[]) {
    const sections = sectionsToFind.reduce((acc: { [key: string]: unknown }, section) => {
        acc[section] = Object.keys(PageContent).reduce((sectionAcc: { [key: string]: unknown }, key) => {
            if (key.startsWith(section)) {
                const newKey = key.replace(`${section}.`, '');
                sectionAcc[newKey] = PageContent[key];
            }
            return sectionAcc;
        }, {});
        return acc;
    }, {});

    const metaData = Object.keys(PageContent).reduce((metaAcc: { [key: string]: unknown }, key) => {
        if (!sectionsToFind.some(section => key.startsWith(section))) {
            metaAcc[key] = PageContent[key];
        }
        return metaAcc;
    }, {});

    return { sections, metaData };
}
