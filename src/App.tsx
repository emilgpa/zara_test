import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RouteNavigateProvider } from "./contexts/RouteNavigateContext";
import LayoutPodcast from "./layouts/Podcast/LayoutPodcast";

const Home = lazy(() => import("./pages/Home/Home"));
const Podcast = lazy(() => import("./pages/Podcast/Podcast"));
const PodcastEpisode = lazy(
  () => import("./pages/PodcastEpisode/PodcastEpisode")
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<span>cargando...</span>}>
        <BrowserRouter>
          <RouteNavigateProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/podcast/:id/*" element={<LayoutPodcast />}>
                <Route path="" element={<Podcast />} />
                <Route path="episode/:episodeId" element={<PodcastEpisode />} />
              </Route>
            </Routes>
          </RouteNavigateProvider>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
