
export const getEnvVariables = () => {
    
    // import.meta.env;

    return {
        VITE_EMAIL_PUBLIC_KEY: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        VITE_SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
        VITE_TEMPLATE_ID:import.meta.env.VITE_TEMPLATE_ID,
    }
}