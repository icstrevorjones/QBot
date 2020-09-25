export const environment = {
    production: false,
    apiBaseUrl: "https://qbottji-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "de7d03af-68e4-4eea-bae7-960fb2640a20",
        clientId: "4410ecfe-b090-4273-9244-3fe8f66774ac",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
