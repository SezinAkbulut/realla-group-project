import '../css/app.css';
import 'boxicons/css/boxicons.min.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Header from './Layouts/Partials/Header.jsx';
import Footer from './Layouts/Partials/Footer.jsx';
import Navigation from './Components/Navigation.jsx';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <Navigation />
                <main className={"main"}>
                <Header  />
                <App {...props} />
                <Footer />
                </main>
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});