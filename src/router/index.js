import { createWebHistory, createRouter } from "vue-router";
import student from "@/components/student";


const routes = [
    {
        path: "/student",
        component: student
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;