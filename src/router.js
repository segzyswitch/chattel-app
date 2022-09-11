import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
        import(/* webpackChunkName: "Home" */ "../src/pages/home.vue"),
        meta: {auth: false}
    },
    {
        path: "/company-login",
        name: "companyLogin",
        component: () =>
        import(/* webpackChunkName: "companyLogin" */ "../src/company/login.vue"),
        meta: {auth: false}
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
        import(/* webpackChunkName: "Login" */ "../src/pages/login.vue"),
        meta: {auth: false}
    },
    {
        path: "/sign-in",
        name: "signIn",
        component: () =>
        import(/* webpackChunkName: "signIn" */ "../src/pages/sign-in.vue"),
        meta: {auth: false}
    },
    {
        path: "/sign-up",
        name: "signUp",
        component: () =>
        import(/* webpackChunkName: "signUp" */ "../src/pages/sign-up.vue"),
        meta: {auth: false}
    },
    {
        path: "/register-company",
        name: "registerCompany",
        component: () =>
        import(/* webpackChunkName: "registerCompany" */ "../src/company/sign-up.vue"),
        meta: {auth: false}
    },
    {
        path: "/logistics/:company_id",
        name: "Logistics",
        component: () =>
        import(/* webpackChunkName: "Logistics" */ "../src/pages/logistics.vue"),
        meta: {auth: true}
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
        import(/* webpackChunkName: "Dashboard" */ "../src/pages/dashboard.vue"),
        meta: {auth: true}
    },
    {
        path: "/wallet",
        name: "Wallet",
        component: () =>
        import(/* webpackChunkName: "Wallet" */ "../src/pages/wallet.vue"),
        meta: {auth: true}
    },
    {
        path: "/orders",
        name: "Orders",
        component: () =>
        import(/* webpackChunkName: "Orders" */ "../src/pages/orders.vue"),
        meta: {auth: true}
    },
    {
        path: "/notification",
        name: "Notification",
        component: () =>
        import(/* webpackChunkName: "Notification" */ "../src/pages/notification.vue"),
        meta: {auth: true}
    },
    {
        path: "/withdrawal",
        name: "Withdrawal",
        component: () =>
        import(/* webpackChunkName: "Withdrawal" */ "../src/pages/withdrawal.vue"),
        meta: {auth: true}
    },
    {
        path: "/message/:logistic_profile_code",
        name: "Message",
        component: () =>
        import(/* webpackChunkName: "Message" */ "../src/pages/message.vue"),
        meta: {auth: true}
    },
    {
        path: "/agreement/:logistic_profile_code",
        name: "Agreement",
        component: () =>
        import(/* webpackChunkName: "Agreement" */ "../src/pages/agreement.vue"),
        meta: {auth: true}
    },
    {
        path: "/payment-method/:logistic_profile_code",
        name: "paymentMethod",
        component: () =>
        import(/* webpackChunkName: "paymentMethod" */ "../src/pages/payment-method.vue"),
        meta: {auth: true}
    },
    {
        path: "/paywithcard/:logistic_profile_code",
        name: "payWithCard",
        component: () =>
        import(/* webpackChunkName: "payWithCard" */ "../src/pages/paywithcard.vue"),
        meta: {auth: true}
    },
    {
        path: "/paywithwallet/:logistic_profile_code",
        name: "payWithWallet",
        component: () =>
        import(/* webpackChunkName: "payWithWallet" */ "../src/pages/paywithwallet.vue"),
        meta: {auth: true}
    },
    {
        path: "/track-delivery/:logistic_profile_code",
        name: "trackDelivery",
        component: () =>
        import(/* webpackChunkName: "trackDelivery" */ "../src/pages/track-delivery.vue"),
        meta: {auth: true}
    },
    {
        path: "/company",
        name: "Company",
        component: () =>
        import(/* webpackChunkName: "Company" */ "../src/company/company.vue"),
        meta: {auth: true}
    },
    {
        path: "/my-notification",
        name: "companyNotification",
        component: () =>
        import(/* webpackChunkName: "companyNotification" */ "../src/company/notification.vue"),
        meta: {auth: true}
    },
    {
        path: "/company-message",
        name: "companyMessage",
        component: () =>
        import(/* webpackChunkName: "companyMessage" */ "../src/company/message.vue"),
        meta: {auth: true}
    },
    {
        path: "/company-agreement",
        name: "companyAgreement",
        component: () =>
        import(/* webpackChunkName: "companyAgreement" */ "../src/company/agreement.vue"),
        meta: {auth: true}
    },
    {
        path: "/company-wallet",
        name: "companyWallet",
        component: () =>
        import(/* webpackChunkName: "companyWallet" */ "../src/company/wallet.vue"),
        meta: {auth: true}
    },
    {
        path: "/show-agreement",
        name: "showAgreement",
        component: () =>
        import(/* webpackChunkName: "showAgreement" */ "../src/company/show-agreement.vue"),
        meta: {auth: true}
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
});


router.beforeEach((to, from, next) => {
    if ( to.meta.auth && !sessionStorage.getItem("Token") ) {
        next("/sign-in");   
    }else if ( !to.meta && sessionStorage.getItem("Token") ) {
        next();
    }else {
        next();
    }
});

export default router;