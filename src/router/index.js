import { createWebHistory, createRouter } from "vue-router";
import student from "@/components/student";
import Create from "@/components/Create";
import Detail from "@/components/Detail";
const routes = [
    {
        path: "/student",
        component: student
    },
    {
        path: "/create",
        component: Create
    },
    {
        path: "/detail",
        component: Detail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;