import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("./AuthLayout.tsx",[
        route("/login","./routes/login.tsx"),
        route("/register","./routes/register.tsx"),
    ]),
    route("/checkout", "./routes/checkout.tsx"),
    route("/orders", "./routes/orders.tsx"),
] satisfies RouteConfig;
