/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blanc: "var(--blanc)",
        "blau-fosc": "var(--blau-fosc)",
        "button-hover": "var(--button-hover)",
        buttons: "var(--buttons)",
        "gora-blau": "var(--gora-blau)",
        "gris-clar": "var(--gris-clar)",
        "gris-fosc": "var(--gris-fosc)",
        "gris-mitj": "var(--gris-mitj)",
        "gris-suau": "var(--gris-suau)",
        groc: "var(--groc)",
        "turquesa-clar": "var(--turquesa-clar)",
        vermell: "var(--vermell)",
      },
      fontFamily: {
        body: "var(--body-font-family)",
        "django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-raleway-regular":
          "var(--django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-raleway-regular-font-family)",
        "django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-raleway-regular-underline":
          "var(--django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-raleway-regular-underline-font-family)",
        "django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-raleway-regular-upper":
          "var(--django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-raleway-regular-upper-font-family)",
        "django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-semantic-heading-3":
          "var(--django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-semantic-heading-3-font-family)",
        "django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-semantic-input":
          "var(--django-balancer-155e0d6-5f21088c888f2038-elb-eu-west-1-amazonaws-com-semantic-input-font-family)",
        "header-1": "var(--header-1-font-family)",
        "header-2": "var(--header-2-font-family)",
        "header-3": "var(--header-3-font-family)",
        "header-4": "var(--header-4-font-family)",
        "preview-scribe-and-ink-flow-lovable-app-inter-regular":
          "var(--preview-scribe-and-ink-flow-lovable-app-inter-regular-font-family)",
        "preview-scribe-and-ink-flow-lovable-app-semantic-button":
          "var(--preview-scribe-and-ink-flow-lovable-app-semantic-button-font-family)",
        "preview-scribe-and-ink-flow-lovable-app-semantic-heading-1":
          "var(--preview-scribe-and-ink-flow-lovable-app-semantic-heading-1-font-family)",
        "preview-scribe-and-ink-flow-lovable-app-semantic-heading-3":
          "var(--preview-scribe-and-ink-flow-lovable-app-semantic-heading-3-font-family)",
        "preview-scribe-and-ink-flow-lovable-app-semantic-link":
          "var(--preview-scribe-and-ink-flow-lovable-app-semantic-link-font-family)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
