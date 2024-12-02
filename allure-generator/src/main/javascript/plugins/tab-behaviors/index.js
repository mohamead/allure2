allure.api.addTab("behaviors", {
    title: "tab.behaviors.name", icon: "fa fa-list",
    route: "behaviors(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)",
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: "tab.behaviors.name",
            baseUrl: "behaviors",
            url: "data/behaviors.json",
            csvUrl: "data/behaviors.csv"
        });
    })
});
