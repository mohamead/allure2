allure.api.addTab("packages", {
    title: "tab.packages.name", icon: "fa fa-align-left",
    route: "packages(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)",
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: "tab.packages.name",
            baseUrl: "packages",
            url: "data/packages.json"
        });
    })
});
