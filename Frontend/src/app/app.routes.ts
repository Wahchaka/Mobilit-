import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "diagnostic",
        loadComponent: () =>
            import("../diagnostic/diagnostic-container/diagnostic-container").then((m) => m.DiagnosticContainer)
    },
    {
        path: "stockageDiagnostic",
        loadComponent:() =>
            import("../stockageDiagno/stockage-diagno-container/stockage-diagno-container").then((m) => m.StockageDiagnoContainer)
    },
    {
        path: "",
        redirectTo: "/diagnostic",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "/diagnostic"
    }
];
