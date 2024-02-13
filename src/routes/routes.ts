import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: () => JSXComponent | LazyExoticComponent<() => JSXComponent>;
  name: string;
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

// const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
// const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
      path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy Layout - Dash",
  },
  {
    path: "/no-lazy",
    to: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
