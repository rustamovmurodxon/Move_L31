import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("@/pages/home"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));
const Movie =lazy(()=>import ("@/pages/movie"))
const Review = lazy(() => import("@/pages/movie-detail/review"));
const Cast = lazy(() => import("@/pages/movie-detail/cast"));
const Others = lazy(() => import("@/pages/movie-detail/others"));
const CrewDetail = lazy(() => import("@/pages/crew-detail"));
const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/movie", element: <Movie /> },
        { path: "/movie/:id", element: <MovieDetail />,
          children: [
            { index:true, element: <Review /> },
            { path: "cast", element: <Cast /> },
            { path: "others", element: <Others /> },
          ], },
          {
            path:"/crew/:id",element:<CrewDetail/>
          }
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);


