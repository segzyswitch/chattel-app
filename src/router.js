import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
        import(/* webpackChunkName: "Home" */ "../src/pages/home.vue")
    },
    {
        path: "/company-login",
        name: "companyLogin",
        component: () =>
        import(/* webpackChunkName: "companyLogin" */ "../src/company/login.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
        import(/* webpackChunkName: "Login" */ "../src/pages/login.vue")
    },
    {
        path: "/sign-in",
        name: "signIn",
        component: () =>
        import(/* webpackChunkName: "signIn" */ "../src/pages/sign-in.vue")
    },
    {
        path: "/sign-up",
        name: "signUp",
        component: () =>
        import(/* webpackChunkName: "signUp" */ "../src/pages/sign-up.vue")
    },
    {
        path: "/register-company",
        name: "registerCompany",
        component: () =>
        import(/* webpackChunkName: "registerCompany" */ "../src/company/sign-up.vue")
    },
    {
        path: "/logistics/:company_id",
        name: "Logistics",
        component: () =>
        import(/* webpackChunkName: "Logistics" */ "../src/pages/logistics.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
        import(/* webpackChunkName: "Dashboard" */ "../src/pages/dashboard.vue")
    },
    {
        path: "/wallet",
        name: "Wallet",
        component: () =>
        import(/* webpackChunkName: "Wallet" */ "../src/pages/wallet.vue")
    },
    {
        path: "/orders",
        name: "Orders",
        component: () =>
        import(/* webpackChunkName: "Orders" */ "../src/pages/orders.vue")
    },
    {
        path: "/notification",
        name: "Notification",
        component: () =>
        import(/* webpackChunkName: "Notification" */ "../src/pages/notification.vue")
    },
    {
        path: "/withdrawal",
        name: "Withdrawal",
        component: () =>
        import(/* webpackChunkName: "Withdrawal" */ "../src/pages/withdrawal.vue")
    },
    {
        path: "/message",
        name: "Message",
        component: () =>
        import(/* webpackChunkName: "Message" */ "../src/pages/message.vue")
    },
    {
        path: "/agreement",
        name: "Agreement",
        component: () =>
        import(/* webpackChunkName: "Agreement" */ "../src/pages/agreement.vue")
    },
    {
        path: "/payment-method",
        name: "paymentMethod",
        component: () =>
        import(/* webpackChunkName: "paymentMethod" */ "../src/pages/payment-method.vue")
    },
    {
        path: "/paywithcard",
        name: "payWithCard",
        component: () =>
        import(/* webpackChunkName: "payWithCard" */ "../src/pages/paywithcard.vue")
    },
    {
        path: "/track-delivery",
        name: "trackDelivery",
        component: () =>
        import(/* webpackChunkName: "trackDelivery" */ "../src/pages/track-delivery.vue")
    },
    {
        path: "/company",
        name: "Company",
        component: () =>
        import(/* webpackChunkName: "Company" */ "../src/company/company.vue")
    },
    {
        path: "/my-notification",
        name: "companyNotification",
        component: () =>
        import(/* webpackChunkName: "companyNotification" */ "../src/company/notification.vue")
    },
    {
        path: "/company-message",
        name: "companyMessage",
        component: () =>
        import(/* webpackChunkName: "companyMessage" */ "../src/company/message.vue")
    },
    {
        path: "/company-agreement",
        name: "companyAgreement",
        component: () =>
        import(/* webpackChunkName: "companyAgreement" */ "../src/company/agreement.vue")
    },
    {
        path: "/company-wallet",
        name: "companyWallet",
        component: () =>
        import(/* webpackChunkName: "companyWallet" */ "../src/company/wallet.vue")
    },
    {
        path: "/show-agreement",
        name: "showAgreement",
        component: () =>
        import(/* webpackChunkName: "showAgreement" */ "../src/company/show-agreement.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404page",
        component: () =>
        import(/* webpackChunkName: "404page"*/ "../src/pages/404.vue")
    }
]

const router = new createRouter( {
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes,
    scrollBehavior() {
        // always scroll to top
        //return { top: 0 }
    }
})

export default router;