import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "diagnostic",
        loadComponent: () =>
            import("../diagnostic/diagnostic-container/diagnostic-container").then((m) => m.DiagnosticContainer)
    }
];
