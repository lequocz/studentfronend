import { createWebHistory, createRouter } from "vue-router";
import student from "@/components/student";
import Create from "@/components/Create";


const routes = [
    {
        path: "/student",
        component: student
    },
    {
        path: "/create",
        component: Create
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;